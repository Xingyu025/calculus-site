#!/usr/bin/env node
/**
 * build.js — Calculus I site content pipeline
 * Parses content/chapter{1..5}-final.md into site/data/content.json.
 *
 * Rules (per spec):
 *  - Node built-ins only (fs, path). No npm dependencies.
 *  - Structural splitting only; content stays as raw Markdown strings
 *    (byte-identical to source except trimming leading/trailing blank lines).
 *  - No silent failures: every parse anomaly lands in the build report.
 *  - Counts (47 nodes, 7/9/10/8/8 sections) are assertions, never parse inputs.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'content');
const OUT_FILE = path.join(__dirname, 'data', 'content.json');

const errors = [];   // -> exit 1
const warnings = []; // -> exit 0, but printed

function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

/** Trim leading/trailing blank lines only (content must stay byte-identical otherwise). */
function trimBlock(lines) {
  let start = 0;
  let end = lines.length;
  while (start < end && lines[start].trim() === '') start++;
  while (end > start && lines[end - 1].trim() === '') end--;
  return lines.slice(start, end).join('\n');
}

/* ---------------------------------------------------------------- *
 * File-level split
 * ---------------------------------------------------------------- */

function parseChapterFile(filename, raw) {
  const lines = raw.split(/\r?\n/);
  const ctx = { file: filename };

  // 1) Chapter title — always the first line: "# Chapter N: <Title>"
  const mTitle = /^#\s+Chapter\s+(\d+):\s*(.+)$/.exec(lines[0]);
  if (!mTitle) {
    err(`${filename}: first line is not "# Chapter N: <Title>" (got: ${JSON.stringify(lines[0])})`);
    return null;
  }
  ctx.id = mTitle[1];
  ctx.title = mTitle[2].trim();

  // Index all "## " headings with their line numbers.
  const h2 = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+(?!#)/.test(lines[i])) h2.push({ line: i, text: lines[i] });
  }

  // Helper: content lines between a ## heading and the next ## heading (or EOF)
  function h2Body(idx) {
    const start = h2[idx].line + 1;
    const end = idx + 1 < h2.length ? h2[idx + 1].line : lines.length;
    return lines.slice(start, end);
  }

  // 2) Knowledge Dependencies — capture all "- " lines beneath it, verbatim
  let deps = [];
  const depIdx = h2.findIndex(h => /^##\s+Knowledge Dependencies\s*$/.test(h.text));
  if (depIdx === -1) {
    err(`${filename}: "## Knowledge Dependencies" heading not found`);
  } else {
    deps = h2Body(depIdx).filter(l => /^- /.test(l));
    if (deps.length === 0) warn(`${filename}: Knowledge Dependencies block has no "- " lines`);
  }
  ctx.deps = deps;

  // 3) Sections: every "## N.N <Title>" heading
  const sections = [];
  for (let i = 0; i < h2.length; i++) {
    const m = /^##\s+(\d+)\.(\d+)\s+(.+)$/.exec(h2[i].text);
    if (!m) continue;
    if (m[1] !== ctx.id) {
      warn(`${filename}: section heading "${h2[i].text.trim()}" has chapter number ${m[1]} but file chapter is ${ctx.id}`);
    }
    sections.push({
      num: `${m[1]}.${m[2]}`,
      id: `${m[1]}-${m[2]}`,
      title: m[3].trim(),
      body: h2Body(i),
    });
  }
  if (sections.length === 0) err(`${filename}: no "## N.N" section headings found`);

  // 4) Quick Reference: everything under "## Chapter N Quick Reference"
  let quickRef = [];
  const qrIdx = h2.findIndex(h => /^##\s+Chapter\s+\d+\s+Quick Reference\s*$/.test(h.text));
  if (qrIdx === -1) {
    err(`${filename}: "## Chapter ${ctx.id} Quick Reference" heading not found`);
  } else {
    quickRef = parseQuickRef(filename, h2Body(qrIdx));
  }
  if (quickRef.length === 0) err(`${filename}: quickRef is empty`);

  // 5) Parse each section's seven blocks
  ctx.sections = sections.map(s => parseSection(filename, s));
  ctx.quickRef = quickRef;
  return ctx;
}

/* ---------------------------------------------------------------- *
 * Quick Reference split
 * ---------------------------------------------------------------- */

function parseQuickRef(filename, body) {
  // Groups start at "### N.N <Title>" or "### Section N.N: <Title>"
  const groupRe = /^###\s+(?:Section\s+)?(\d+\.\d+)/;
  const groups = [];
  let current = null;
  const preamble = [];

  for (const line of body) {
    const m = groupRe.exec(line);
    if (m) {
      if (current) groups.push(current);
      current = { section: m[1], lines: [line] };
    } else if (current) {
      current.lines.push(line);
    } else {
      preamble.push(line);
    }
  }
  if (current) groups.push(current);

  if (groups.length === 0) {
    // No ### subheadings: the whole block is one group, section = "all"
    const md = trimBlock(body);
    return md ? [{ section: 'all', md }] : [];
  }

  const strayPre = trimBlock(preamble);
  if (strayPre && !/^-{3,}$/.test(strayPre)) {
    warn(`${filename}: quick reference has ${preamble.filter(l => l.trim()).length} content line(s) before the first ### group (kept out of output): ${JSON.stringify(strayPre.slice(0, 60))}`);
  }
  return groups.map(g => ({ section: g.section, md: trimBlock(g.lines) }));
}

/* ---------------------------------------------------------------- *
 * Section-level split: seven blocks keyed by leading number
 * ---------------------------------------------------------------- */

function parseSection(filename, s) {
  const where = `${filename} §${s.num}`;
  const blocks = {}; // number -> lines[]
  let currentNo = null;

  for (const line of s.body) {
    const m = /^###\s+(\d+)\./.exec(line);
    if (m) {
      currentNo = m[1];
      if (blocks[currentNo]) warn(`${where}: duplicate block "### ${currentNo}." — appending`);
      else blocks[currentNo] = [];
      continue; // heading line itself is not content
    }
    if (currentNo !== null) blocks[currentNo].push(line);
  }

  for (const n of ['1', '2', '3', '4', '5', '6', '7']) {
    if (!blocks[n]) err(`${where}: block "### ${n}." is missing`);
  }

  const get = n => blocks[n] || [];

  // ---- Block 1: Key Terms (md table + data-row count) ----
  const termsMd = trimBlock(get('1'));
  let termCount = 0;
  for (const line of termsMd.split('\n')) {
    const t = line.trim();
    if (!t.startsWith('|')) continue;
    if (/^\|[\s:|-]+\|$/.test(t.replace(/\s/g, ''))) continue; // separator row |---|---|
    termCount++;
  }
  if (termCount > 0) termCount -= 1; // subtract header row
  if (termsMd && termCount === 0) warn(`${where}: Key Terms table parsed with 0 data rows`);

  // ---- Block 3: Core Cards ----
  const cards = parseCards(where, get('3'));
  if (cards.length === 0) warn(`${where}: cards is empty`);

  // ---- Block 6: Intuition & Viz split ----
  const { intuition, vizMd } = parseIntuitionViz(where, get('6'));

  // ---- Block 7: Self-Check ----
  const quiz = parseQuiz(where, get('7'));
  if (quiz.length < 3) warn(`${where}: quiz has ${quiz.length} question(s) (< 3)`);

  return {
    id: s.id,
    num: s.num,
    title: s.title,
    why: trimBlock(get('2')),
    terms: { table: termsMd, count: termCount },
    cards,
    methods: trimBlock(get('4')),
    pitfalls: trimBlock(get('5')),
    intuition,
    vizSpec: { internal: true, md: vizMd },
    quiz,
  };
}

/* ---------------------------------------------------------------- *
 * Cards
 * ---------------------------------------------------------------- */

function parseCards(where, body) {
  const cardStartRe = /^\*\*Card\s+\d+/;
  const chunks = [];
  let current = null;

  for (const line of body) {
    if (cardStartRe.test(line)) {
      if (current) chunks.push(current);
      current = [line];
    } else if (current) {
      current.push(line);
    }
    // lines before the first card (usually blank) are dropped
  }
  if (current) chunks.push(current);

  return chunks.map(chunk => {
    const head = chunk[0];
    // name from "**Card N: <name>**" — tolerate trailing ** presence/absence
    const mName = /^\*\*Card\s+\d+\s*[::]\s*(.+?)\*{0,2}\s*$/.exec(head);
    let name;
    if (mName) {
      name = mName[1].replace(/\*+$/, '').trim();
    } else {
      name = head.replace(/\*/g, '').trim();
      warn(`${where}: card head not in "**Card N: name**" form, using raw text: ${JSON.stringify(head)}`);
    }

    // type: first line matching "- Type:" / "- **Type:**", value = first word before "/"
    let type = 'Other';
    let typeFound = false;
    for (const line of chunk.slice(1)) {
      const mType = /^-\s*\**Type\**:?\**\s*(.+)$/.exec(line);
      if (mType) {
        typeFound = true;
        const rawVal = mType[1].split('/')[0].trim();
        const firstWord = rawVal.replace(/\*/g, '').split(/\s+/)[0] || 'Other';
        type = firstWord;
        break;
      }
    }
    if (!typeFound) {
      warn(`${where}: card "${name}" has no Type label, type set to "Other"`);
    }

    return { name, type, body: trimBlock(chunk.slice(1)) };
  });
}

/* ---------------------------------------------------------------- *
 * Intuition / Viz split
 * ---------------------------------------------------------------- */

function parseIntuitionViz(where, body) {
  // (a) marker forms: "(a) **Intuition:**" or "**(a) Intuition:**"
  const aRe = /^\**\(a\)\**\s*\**Intuition:?\**\s*/;
  const bRe = /^\**\(b\)\**\s*/; // "(b) **Visualization suggestions:**" or "**(b) Visualization..."

  let aIdx = -1;
  let bIdx = -1;
  for (let i = 0; i < body.length; i++) {
    if (aIdx === -1 && aRe.test(body[i])) aIdx = i;
    else if (aIdx !== -1 && bIdx === -1 && bRe.test(body[i])) bIdx = i;
  }

  if (aIdx === -1 || bIdx === -1) {
    warn(`${where}: intuition/vizSpec split failed (a@${aIdx}, b@${bIdx}) — whole block stored as intuition, vizSpec empty`);
    return { intuition: trimBlock(body), vizMd: '' };
  }

  const intuitionLines = body.slice(aIdx, bIdx);
  // strip the "(a)"/"**Intuition:**" prefix from the first line
  intuitionLines[0] = intuitionLines[0].replace(aRe, '');
  const vizLines = body.slice(bIdx);

  return { intuition: trimBlock(intuitionLines), vizMd: trimBlock(vizLines) };
}

/* ---------------------------------------------------------------- *
 * Quiz
 * ---------------------------------------------------------------- */

function parseQuiz(where, body) {
  const qStartRe = /^\*\*Q\d+\./;
  const chunks = [];
  let current = null;

  for (const line of body) {
    if (qStartRe.test(line)) {
      if (current) chunks.push(current);
      current = [line];
    } else if (current) {
      current.push(line);
    }
  }
  if (current) chunks.push(current);

  const answerRe = /^-\s*\**Answer\**:?\**\s*(.*)$/;
  const explRe = /^-\s*\**Explanation\**:?\**\s*(.*)$/;

  return chunks.map((chunk, qi) => {
    const qLines = [];
    const aLines = [];
    const whyLines = [];
    let mode = 'q';

    // First line: "**QN.** question text..." — strip the Q label
    const first = chunk[0].replace(/^\*\*Q\d+\.\*\*\s*/, '').replace(/^\*\*Q\d+\.\s*/, '');
    qLines.push(first);

    for (const line of chunk.slice(1)) {
      const mA = answerRe.exec(line);
      const mE = explRe.exec(line);
      if (mA) { mode = 'a'; aLines.push(mA[1]); continue; }
      if (mE) { mode = 'why'; whyLines.push(mE[1]); continue; }
      if (mode === 'q') qLines.push(line);
      else if (mode === 'a') aLines.push(line);
      else whyLines.push(line);
    }

    const q = trimBlock(qLines);
    const a = trimBlock(aLines);
    const why = trimBlock(whyLines);
    if (!a) warn(`${where}: Q${qi + 1} has no Answer label`);
    return { q, a, why };
  });
}

/* ---------------------------------------------------------------- *
 * Main
 * ---------------------------------------------------------------- */

function main() {
  const files = [1, 2, 3, 4, 5].map(n => `chapter${n}-final.md`);
  const chapters = [];

  for (const f of files) {
    const full = path.join(CONTENT_DIR, f);
    if (!fs.existsSync(full)) { err(`${f}: file not found in content/`); continue; }
    const parsed = parseChapterFile(f, fs.readFileSync(full, 'utf8'));
    if (parsed) {
      chapters.push({
        id: parsed.id,
        title: parsed.title,
        deps: parsed.deps,
        sections: parsed.sections,
        quickRef: parsed.quickRef,
      });
    }
  }

  // order[]: linear reading order, each chapter ends with "<N>-qr"
  const order = [];
  for (const ch of chapters) {
    for (const s of ch.sections) order.push(s.id);
    order.push(`${ch.id}-qr`);
  }

  const json = {
    site: {
      generatedAt: new Date().toISOString(),
      chapterCount: chapters.length,
      nodeCount: order.length,
    },
    chapters,
    order,
  };

  // ---- Assertions (values are checks, not parse inputs) ----
  const EXPECTED_SECTIONS = { 1: 7, 2: 9, 3: 10, 4: 8, 5: 8 };
  for (const ch of chapters) {
    const want = EXPECTED_SECTIONS[ch.id];
    if (want !== undefined && ch.sections.length !== want) {
      err(`chapter ${ch.id}: expected ${want} sections, parsed ${ch.sections.length}`);
    }
  }
  if (order.length !== 47) err(`order has ${order.length} nodes, expected 47`);
  if (chapters.length !== 5) err(`parsed ${chapters.length} chapters, expected 5`);

  // ---- Report ----
  console.log('=== Build Report ===');
  if (errors.length) {
    console.log(`\nERRORS (${errors.length}):`);
    errors.forEach(e => console.log('  [E] ' + e));
  }
  if (warnings.length) {
    console.log(`\nWARNINGS (${warnings.length}):`);
    warnings.forEach(w => console.log('  [W] ' + w));
  }
  if (!errors.length && !warnings.length) console.log('No errors, no warnings.');

  console.log('\nPer-chapter stats:');
  for (const ch of chapters) {
    const cardTotal = ch.sections.reduce((n, s) => n + s.cards.length, 0);
    const quizTotal = ch.sections.reduce((n, s) => n + s.quiz.length, 0);
    console.log(`  Chapter ${ch.id} (${ch.title}): ${ch.sections.length} sections / ${cardTotal} cards / ${quizTotal} quiz questions / ${ch.quickRef.length} quick-ref groups`);
  }
  console.log(`\nTotal nodes in order[]: ${order.length}`);

  if (errors.length) {
    console.error('\nBuild FAILED.');
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(json, null, 2));
  console.log(`\nWrote ${path.relative(__dirname, OUT_FILE)} (${(fs.statSync(OUT_FILE).size / 1024).toFixed(1)} KB)`);
}

main();
