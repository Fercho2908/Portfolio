# Design System — Fernando Figuera Portfolio

## Color

Estrategia: **Committed** — un acento azul real carga la voz, el resto son neutros tintados al hue 260.

### Tokens (OKLCH)
| Token | Dark | Light |
|---|---|---|
| `--color-surface` | `oklch(12% 0.01 260)` | `oklch(97% 0.005 260)` |
| `--color-surface-elevated` | `oklch(18% 0.01 260)` | `oklch(100% 0 0)` |
| `--color-accent` | `oklch(70% 0.15 255)` | `oklch(55% 0.17 255)` |
| `--color-accent-hover` | `oklch(65% 0.16 255)` | `oklch(50% 0.18 255)` |
| `--color-accent-muted` | `oklch(25% 0.08 255)` | `oklch(92% 0.04 255)` |
| `--color-text-primary` | `oklch(92% 0.005 260)` | `oklch(15% 0.01 260)` |
| `--color-text-secondary` | `oklch(65% 0.01 260)` | `oklch(45% 0.01 260)` |
| `--color-text-muted` | `oklch(45% 0.01 260)` | `oklch(60% 0.01 260)` |
| `--color-border` | `oklch(25% 0.01 260)` | `oklch(88% 0.01 260)` |

Dark mode activo vía clase `.dark` en `<html>`. `color-scheme` sincronizado.

## Typography

- **Display/Body:** Space Grotesk (400–700). Cabeceras con `-0.03em` tracking, bold.
- **Mono/Labels:** JetBrains Mono (400–500). Para etiquetas de sección (`section-title`), stats, tech pills, fechas.
- Escala fluida con `clamp()`:
  - `text-display-xl`: `clamp(2.5rem, 5vw, 4.5rem)` — Hero
  - `text-display-lg`: `clamp(2rem, 4vw, 3.5rem)` — Títulos de sección
  - `text-display-md`: `clamp(1.5rem, 3vw, 2.5rem)` — Subtítulos hero
- Body line-length cap a ~65ch (`max-w-xl` en párrafos).

## Components

### Section Title (mono label)
`font-mono 0.75rem uppercase tracking-[0.2em] text-text-muted` + `margin-bottom 2rem`

### Tech Pill
`px-3 py-1.5 rounded-full border bg-surface-elevated font-mono text-sm` → hover: `border-accent color: accent`

### Project Card
`rounded-xl border bg-surface-elevated`, header con imagen (aspect-video object-cover), cuerpo con título + descripción + tags + link. Hover: `border-accent`, `box-shadow` suave (`.card-hover`).

### Contact Card
`rounded-xl border bg-surface-elevated`, label mono uppercase + valor en accent al hover.

### Timeline (Experience)
Línea vertical centrada (desktop) / izquierda (mobile), punto `bg-accent` en cada entry. Alterna lado par/impar.

## Spacing
- Secciones: `py-section` = `clamp(4rem, 8vw, 7rem)`
- Grid máx-width: `max-w-6xl mx-auto px-6`
- Respiración variable: agrupaciones compactas (gap-2) vs separaciones generosas (mb-12).

## Motion
- Reveal on scroll: `opacity 0 → 1`, `translateY(24px) → 0`, `0.6s cubic-bezier(0.16,1,0.3,1)` (ease-out-quart/quint feel).
- Stagger delays: `.stagger-1` … `.stagger-8` (50ms–400ms).
- Toggle theme: `background-color 0.2s ease-out`.
- Hero: fade-in-up al cargar.
- Imagen card hover: `scale(1.05)` 500ms.
- No se animan propiedades de layout; solo opacidad/transform/color.

## Rules / Bans
- No `#000`/`#fff` puros; todo tintado al hue 260.
- No side-stripe borders, no gradient text, no glassmorphism decorativo.
- No cards idénticas repetidas; cada sección tiene su propio layout.
