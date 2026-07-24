# calculus-site
Pure static learning site now for Calculus I (Ch1–Ch5). No frameworks, no runtime
dependencies beyond vendored KaTeX + marked. Content source of truth is
`content/*.md`; everything else is generated or static.

## Repo layout

```
calculus-site/
├─ content/               # five chapter markdown finals (single source of truth)
├─ build.js               # md → site/data/content.json (Node ≥ 18, built-ins only)
└─ site/                  # GitHub Pages publish directory
   ├─ index.html
   ├─ styles.css
   ├─ app.js
   ├─ data/content.json   # generated — do not edit by hand
   └─ vendor/             # KaTeX 0.16.11 (+ auto-render + fonts), marked 12.0.2
```

## Build

```
node build.js
```

Prints a validation report (per-chapter section/card/quiz counts, 47-node order
check). Exits non-zero on any structural error; warnings are listed but pass.

## Local preview

```
cd site
python3 -m http.server 8080
# open http://localhost:8080/#/1-1
```

## Updating content

Edit `content/*.md` → `node build.js` → commit and push. The build report will
catch any structural drift in the markdown.

