/* ================================================================
 * Calculus I — A Concise Companion
 * Pure static SPA runtime. No frameworks, no build step.
 * Navigation channels (hard rule): sidebar links + footer Prev/Next ONLY.
 * ================================================================ */
'use strict';

var SITE_TITLE = 'Calculus I — A Concise Companion';

var DATA = null;          // content.json
var NODE_INDEX = null;    // id -> { kind: 'section'|'qr', chapter, section? }
var expandedChapters = {}; // chapter id -> bool (user + auto expand state, in-memory only)

/* ----------------------------------------------------------------
 * Markdown pipeline: protect $-math from marked, parse, restore,
 * then hand the element to KaTeX auto-render.
 * ---------------------------------------------------------------- */
var mathStore = [];

function protectMath(src) {
  mathStore = [];
  // Display math first ($$...$$, may span lines), then inline ($...$, single line).
  var out = src.replace(/\$\$([\s\S]+?)\$\$/g, function (m) {
    mathStore.push(m);
    return '\uE000' + (mathStore.length - 1) + '\uE001';
  });
  out = out.replace(/\$([^$\n]+?)\$/g, function (m) {
    mathStore.push(m);
    return '\uE000' + (mathStore.length - 1) + '\uE001';
  });
  return out;
}

function restoreMath(html) {
  return html.replace(/\uE000(\d+)\uE001/g, function (_, i) {
    return escapeHtml(mathStore[Number(i)]);
  });
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function mdToHtml(md) {
  if (!md) return '';
  var protectedSrc = protectMath(md);
  var html = marked.parse(protectedSrc, { gfm: true, breaks: false });
  return restoreMath(html);
}

function renderMathIn(el) {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}

/* ----------------------------------------------------------------
 * DOM helpers
 * ---------------------------------------------------------------- */
function h(tag, attrs, children) {
  var el = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (k) {
      if (k === 'class') el.className = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else if (k === 'text') el.textContent = attrs[k];
      else el.setAttribute(k, attrs[k]);
    });
  }
  (children || []).forEach(function (c) { if (c) el.appendChild(c); });
  return el;
}

var CHEV_SVG = '<svg class="chev" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* Generic collapsible wiring: <button aria-expanded> controls a body element. */
function wireToggle(btn, bodyEl, startOpen) {
  btn.setAttribute('aria-expanded', startOpen ? 'true' : 'false');
  if (!startOpen) bodyEl.hidden = true;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    bodyEl.hidden = open;
  });
}

/* ----------------------------------------------------------------
 * Node index / titles / order
 * ---------------------------------------------------------------- */
function buildIndex() {
  NODE_INDEX = {};
  DATA.chapters.forEach(function (ch) {
    ch.sections.forEach(function (s) {
      NODE_INDEX[s.id] = { kind: 'section', chapter: ch, section: s };
    });
    NODE_INDEX[ch.id + '-qr'] = { kind: 'qr', chapter: ch };
  });
}

function nodeTitle(id) {
  var n = NODE_INDEX[id];
  if (!n) return '';
  if (n.kind === 'qr') return 'Chapter ' + n.chapter.id + ' Quick Reference';
  return n.section.num + ' ' + n.section.title;
}

function chapterOf(id) {
  var n = NODE_INDEX[id];
  return n ? n.chapter.id : null;
}

/* ----------------------------------------------------------------
 * Sidebar
 * ---------------------------------------------------------------- */
function buildSidebar() {
  var brand = document.getElementById('siteBrand');
  var parts = SITE_TITLE.split(' — ');
  brand.textContent = parts[0];
  if (parts[1]) brand.appendChild(h('span', { class: 'brand-sub', text: parts[1] }));

  var list = document.getElementById('chapterList');
  list.textContent = '';

  DATA.chapters.forEach(function (ch) {
    var listId = 'chsec-' + ch.id;

    var btn = h('button', {
      class: 'chapter-toggle',
      type: 'button',
      'aria-controls': listId
    });
    btn.appendChild(h('span', { text: 'Chapter ' + ch.id + ': ' + ch.title }));
    btn.insertAdjacentHTML('beforeend', CHEV_SVG);

    var ul = h('ul', { class: 'section-list', id: listId });
    ch.sections.forEach(function (s) {
      var a = h('a', { href: '#/' + s.id, text: s.num + ' ' + s.title, 'data-node': s.id });
      ul.appendChild(h('li', null, [a]));
    });
    var qrId = ch.id + '-qr';
    var qrA = h('a', { href: '#/' + qrId, text: 'Quick Reference', 'data-node': qrId });
    ul.appendChild(h('li', { class: 'qr-link' }, [qrA]));

    // Chapter title click = expand/collapse ONLY (never navigates)
    btn.setAttribute('aria-expanded', 'false');
    ul.hidden = true;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      expandedChapters[ch.id] = !open;
      syncSidebarExpansion();
    });

    list.appendChild(h('div', { class: 'chapter-group', 'data-chapter': ch.id }, [btn, ul]));
  });

  // Node click closes the mobile drawer
  list.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-node]');
    if (a) closeDrawer();
  });
}

function syncSidebarExpansion() {
  document.querySelectorAll('.chapter-group').forEach(function (group) {
    var id = group.getAttribute('data-chapter');
    var open = !!expandedChapters[id];
    group.querySelector('.chapter-toggle').setAttribute('aria-expanded', open ? 'true' : 'false');
    group.querySelector('.section-list').hidden = !open;
  });
}

function highlightSidebar(nodeId) {
  document.querySelectorAll('.section-list a').forEach(function (a) {
    var active = a.getAttribute('data-node') === nodeId;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  // Auto-expand the current chapter; leave user-opened chapters alone.
  var chId = chapterOf(nodeId);
  if (chId) expandedChapters[chId] = true;
  syncSidebarExpansion();
}

/* ----------------------------------------------------------------
 * Renderers
 * ---------------------------------------------------------------- */
function mdBlock(cls, md) {
  return h('div', { class: cls + ' md-content', html: mdToHtml(md) });
}

function renderPager(nodeId) {
  var i = DATA.order.indexOf(nodeId);
  var pager = h('nav', { class: 'pager', 'aria-label': 'Adjacent pages' });

  if (i > 0) {
    var prevId = DATA.order[i - 1];
    var prev = h('a', { class: 'pager-prev', href: '#/' + prevId });
    prev.appendChild(h('span', { class: 'pager-dir', text: '← Previous' }));
    prev.appendChild(document.createTextNode(nodeTitle(prevId)));
    pager.appendChild(prev);
  } else {
    pager.appendChild(h('span', { class: 'pager-spacer' }));
  }

  if (i < DATA.order.length - 1) {
    var nextId = DATA.order[i + 1];
    var next = h('a', { class: 'pager-next', href: '#/' + nextId });
    next.appendChild(h('span', { class: 'pager-dir', text: 'Next →' }));
    next.appendChild(document.createTextNode(nodeTitle(nextId)));
    pager.appendChild(next);
  }
  return pager;
}

function collapsiblePanel(titleText, bodyMd, startOpen) {
  var bodyId = 'panel-' + Math.random().toString(36).slice(2, 9);
  var btn = h('button', { class: 'panel-toggle', type: 'button', 'aria-controls': bodyId });
  btn.appendChild(h('span', { text: titleText }));
  btn.insertAdjacentHTML('beforeend', CHEV_SVG);
  var body = h('div', { class: 'panel-body md-content', id: bodyId, html: mdToHtml(bodyMd) });
  wireToggle(btn, body, !!startOpen);
  return h('section', { class: 'panel' }, [btn, body]);
}

function badgeClass(type) {
  var t = String(type || '').toLowerCase();
  if (t === 'definition') return 'badge-definition';
  if (t === 'theorem') return 'badge-theorem';
  if (t === 'formula') return 'badge-formula';
  return 'badge-other';
}

function renderCard(card) {
  var bodyId = 'card-' + Math.random().toString(36).slice(2, 9);
  var head = h('button', { class: 'card-head', type: 'button', 'aria-controls': bodyId });
  head.appendChild(h('span', { class: 'card-name', text: card.name }));
  head.appendChild(h('span', { class: 'badge ' + badgeClass(card.type), text: card.type }));
  head.insertAdjacentHTML('beforeend', CHEV_SVG);
  var body = h('div', { class: 'card-body md-content', id: bodyId, html: mdToHtml(card.body) });
  wireToggle(head, body, true); // cards default expanded
  return h('article', { class: 'card' }, [head, body]);
}

function postProcessPitfalls(container) {
  container.querySelectorAll('li, p').forEach(function (el) {
    var t = el.textContent;
    if (t.indexOf('\u274C') !== -1) el.classList.add('pitfall-wrong');      // ❌
    else if (t.indexOf('\u2705') !== -1) el.classList.add('pitfall-right'); // ✅
  });
}

function renderQuiz(quiz) {
  var wrap = h('div', { class: 'quiz' });
  quiz.forEach(function (item, i) {
    var q = h('div', { class: 'quiz-q md-content' });
    q.appendChild(h('span', { class: 'q-label', text: 'Q' + (i + 1) + '.' }));
    q.insertAdjacentHTML('beforeend', mdToHtml(item.q));

    var ansId = 'ans-' + Math.random().toString(36).slice(2, 9);
    var btn = h('button', {
      class: 'show-answer',
      type: 'button',
      'aria-controls': ansId,
      text: 'Show Answer'
    });
    var ans = h('div', { class: 'quiz-answer', id: ansId });
    var aPart = h('div', { class: 'ans-part' });
    aPart.appendChild(h('span', { class: 'ans-label', text: 'Answer' }));
    aPart.appendChild(h('div', { class: 'md-content', html: mdToHtml(item.a) }));
    ans.appendChild(aPart);
    if (item.why) {
      var wPart = h('div', { class: 'ans-part' });
      wPart.appendChild(h('span', { class: 'ans-label', text: 'Explanation' }));
      wPart.appendChild(h('div', { class: 'md-content', html: mdToHtml(item.why) }));
      ans.appendChild(wPart);
    }

    btn.setAttribute('aria-expanded', 'false');
    ans.hidden = true;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      btn.textContent = open ? 'Show Answer' : 'Hide Answer';
      ans.hidden = open;
    });

    wrap.appendChild(h('div', { class: 'quiz-item' }, [q, btn, ans]));
  });
  return wrap;
}

function renderSectionPage(node) {
  var s = node.section;
  var page = document.getElementById('page');
  page.textContent = '';

  page.appendChild(h('h1', { text: s.num + ' ' + s.title }));
  page.appendChild(h('hr', { class: 'page-rule' }));

  // Lead: Why This Section Matters (no heading)
  page.appendChild(h('div', { class: 'lead md-content', html: mdToHtml(s.why) }));

  // Key Terms — collapsed panel with count
  page.appendChild(collapsiblePanel('Key Terms (' + s.terms.count + ')', s.terms.table, false));

  // Core Cards
  var cards = h('div', { class: 'cards' });
  s.cards.forEach(function (c) { cards.appendChild(renderCard(c)); });
  page.appendChild(cards);

  // Methods
  page.appendChild(h('h2', { class: 'block-title', text: 'Methods' }));
  page.appendChild(mdBlock('methods-md', s.methods));

  // Common Pitfalls (with ❌/✅ post-processing)
  page.appendChild(h('h2', { class: 'block-title', text: 'Common Pitfalls' }));
  var pit = mdBlock('pitfalls-md', s.pitfalls);
  postProcessPitfalls(pit);
  page.appendChild(pit);

  // Intuition callout
  var callout = h('aside', { class: 'intuition-callout' });
  callout.appendChild(h('p', { class: 'callout-label', text: '\uD83D\uDCA1 Intuition' }));
  callout.appendChild(h('div', { class: 'md-content', html: mdToHtml(s.intuition) }));
  page.appendChild(callout);

  // Visualization placeholder (only when a spec exists; spec itself never rendered)
  if (s.vizSpec && s.vizSpec.md) {
    page.appendChild(h('div', { class: 'viz-placeholder', text: 'Interactive visualization coming soon' }));
  }

  // Self-check
  page.appendChild(h('h2', { class: 'block-title', text: 'Concept Self-Check' }));
  page.appendChild(renderQuiz(s.quiz));

  page.appendChild(renderPager(s.id));
  renderMathIn(page);
}

function renderQuickRefPage(node) {
  var ch = node.chapter;
  var page = document.getElementById('page');
  page.textContent = '';

  page.appendChild(h('h1', { text: 'Chapter ' + ch.id + ' Quick Reference' }));
  page.appendChild(h('hr', { class: 'page-rule' }));

  page.appendChild(collapsiblePanel('How this chapter connects', ch.deps.join('\n'), false));

  ch.quickRef.forEach(function (group) {
    var g = h('section', { class: 'qr-group' });
    // Strip the group's own "### N.N Title" heading line; we render our own h2.
    var lines = group.md.split('\n');
    var heading = null;
    if (/^###\s+/.test(lines[0])) heading = lines.shift().replace(/^###\s+/, '');
    var label = heading || (group.section === 'all' ? 'Chapter ' + ch.id : group.section);
    g.appendChild(h('h2', { text: label }));
    g.appendChild(h('div', { class: 'qr-md md-content', html: mdToHtml(lines.join('\n')) }));
    page.appendChild(g);
  });

  page.appendChild(renderPager(ch.id + '-qr'));
  renderMathIn(page);
}

/* ----------------------------------------------------------------
 * Router (hash: #/1-1, #/1-qr)
 * ---------------------------------------------------------------- */
function currentNodeId() {
  var m = /^#\/([0-9]+-(?:[0-9]+|qr))$/.exec(location.hash);
  return m ? m[1] : null;
}

function route() {
  var id = currentNodeId();
  if (!id || !NODE_INDEX[id]) {
    // Invalid or missing hash: land on the first node.
    if (location.hash !== '#/1-1') {
      location.replace('#/1-1');
      return; // hashchange re-enters route()
    }
    id = '1-1';
  }

  var node = NODE_INDEX[id];
  if (node.kind === 'qr') renderQuickRefPage(node);
  else renderSectionPage(node);

  document.title = nodeTitle(id) + ' · ' + SITE_TITLE;
  highlightSidebar(id);
  window.scrollTo(0, 0);
  document.getElementById('content').scrollTop = 0;
}

/* ----------------------------------------------------------------
 * Mobile drawer
 * ---------------------------------------------------------------- */
function openDrawer() {
  document.body.classList.add('drawer-open');
  document.getElementById('drawerScrim').hidden = false;
  document.getElementById('hamburger').setAttribute('aria-expanded', 'true');
}
function closeDrawer() {
  document.body.classList.remove('drawer-open');
  document.getElementById('drawerScrim').hidden = true;
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
}
function wireDrawer() {
  var burger = document.getElementById('hamburger');
  burger.addEventListener('click', function () {
    if (document.body.classList.contains('drawer-open')) closeDrawer();
    else openDrawer();
  });
  document.getElementById('drawerScrim').addEventListener('click', closeDrawer);
}

/* ----------------------------------------------------------------
 * Boot
 * ---------------------------------------------------------------- */
fetch('data/content.json')
  .then(function (r) {
    if (!r.ok) throw new Error('content.json HTTP ' + r.status);
    return r.json();
  })
  .then(function (json) {
    DATA = json;
    buildIndex();
    buildSidebar();
    wireDrawer();
    window.addEventListener('hashchange', route);
    route();
  })
  .catch(function (e) {
    document.getElementById('page').innerHTML =
      '<p class="loading-msg">Failed to load content: ' + escapeHtml(String(e.message || e)) + '</p>';
  });
