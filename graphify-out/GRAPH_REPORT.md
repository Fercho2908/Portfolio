# Graph Report - Portafolio  (2026-09-04)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 55 nodes · 56 edges · 8 communities (5 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0da17b6c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- package.json
- index.astro
- Layout.astro
- tsconfig.json
- theme.ts
- graphify.js

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `updateDOM()` - 3 edges
3. `applyTheme()` - 3 edges
4. `initTheme()` - 3 edges
5. `include` - 3 edges
6. `initI18n()` - 2 edges
7. `toggleLanguage()` - 2 edges
8. `getTheme()` - 2 edges
9. `updateToggleIcon()` - 2 edges
10. `astro` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (8 total, 2 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.18
Nodes (11): astro, i18next, i18next-browser-languagedetector, dependencies, astro, i18next, i18next-browser-languagedetector, tailwindcss (+3 more)

### Community 1 - "package.json"
Cohesion: 0.22
Nodes (8): name, scripts, astro, build, dev, preview, type, version

### Community 3 - "Layout.astro"
Cohesion: 0.28
Nodes (4): base, initI18n(), toggleLanguage(), updateDOM()

### Community 4 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 5 - "theme.ts"
Cohesion: 0.70
Nodes (4): applyTheme(), getTheme(), initTheme(), updateToggleIcon()

## Knowledge Gaps
- **19 isolated node(s):** `astro`, `i18next`, `i18next-browser-languagedetector`, `tailwindcss`, `@tailwindcss/vite` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 29 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `astro`, `i18next`, `i18next-browser-languagedetector` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._