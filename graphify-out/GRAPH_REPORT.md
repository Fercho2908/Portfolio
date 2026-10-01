# Graph Report - Portafolio  (2026-09-30)

## Corpus Check
- 33 files · ~23,828 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 153 nodes · 140 edges · 21 communities (15 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bc2dd7a9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- What You Must Do When Invoked
- index.astro
- Design System — Fernando Figuera Portfolio
- tsconfig.json
- theme.ts
- graphify.js
- /graphify
- Product: Fernando Figuera — Portfolio Landing
- graphify reference: extra exports and benchmark
- Fernando Figuera — Portfolio
- graphify reference: query, path, explain
- opencode.json
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- AGENTS.md
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `What You Must Do When Invoked` - 12 edges
2. `/graphify` - 10 edges
3. `Product: Fernando Figuera — Portfolio Landing` - 9 edges
4. `graphify reference: extra exports and benchmark` - 8 edges
5. `Design System — Fernando Figuera Portfolio` - 7 edges
6. `Fernando Figuera — Portfolio` - 7 edges
7. `Components` - 6 edges
8. `scripts` - 5 edges
9. `graphify reference: query, path, explain` - 5 edges
10. `Step 3 - Extract entities and relationships` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (21 total, 5 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.10
Nodes (19): astro, i18next, i18next-browser-languagedetector, dependencies, astro, i18next, i18next-browser-languagedetector, tailwindcss (+11 more)

### Community 1 - "What You Must Do When Invoked"
Cohesion: 0.13
Nodes (15): Part A - Structural extraction for code files, Part B - Semantic extraction (parallel subagents), Part C - Merge AST + semantic into final extraction, Step 0 - GitHub repos and multi-path merge (only if a URL or several paths), Step 1 - Ensure graphify is installed, Step 2.5 - Video and audio (only if video files detected), Step 2 - Detect files, Step 3 - Extract entities and relationships (+7 more)

### Community 2 - "index.astro"
Cohesion: 0.13
Nodes (5): certs, base, initI18n(), toggleLanguage(), updateDOM()

### Community 3 - "Design System — Fernando Figuera Portfolio"
Cohesion: 0.14
Nodes (13): Color, Components, Contact Card, Design System — Fernando Figuera Portfolio, Motion, Project Card, Rules / Bans, Section Title (mono label) (+5 more)

### Community 4 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 5 - "theme.ts"
Cohesion: 0.70
Nodes (4): applyTheme(), getTheme(), initTheme(), updateToggleIcon()

### Community 8 - "/graphify"
Cohesion: 0.20
Nodes (9): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Usage (+1 more)

### Community 9 - "Product: Fernando Figuera — Portfolio Landing"
Cohesion: 0.20
Nodes (9): Anti-References, Brand Voice Words, Design Constraints, Product: Fernando Figuera — Portfolio Landing, Product Purpose, Register, Strategic Principles, Tone (+1 more)

### Community 10 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 11 - "Fernando Figuera — Portfolio"
Cohesion: 0.25
Nodes (7): Build, Desarrollo, Estructura, Fernando Figuera — Portfolio, Licencia, Scripts, Stack

### Community 12 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 13 - "opencode.json"
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

### Community 14 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 15 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 16 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **87 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `name`, `type`, `version` (+82 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 110 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `What You Must Do When Invoked` connect `What You Must Do When Invoked` to `/graphify`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `/graphify` connect `/graphify` to `What You Must Do When Invoked`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `name` to the rest of the system?**
  _87 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `What You Must Do When Invoked` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `index.astro` be split into smaller, more focused modules?**
  _Cohesion score 0.13071895424836602 - nodes in this community are weakly interconnected._
- **Should `Design System — Fernando Figuera Portfolio` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._