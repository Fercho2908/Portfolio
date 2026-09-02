# Fernando Figuera — Portfolio

Landing page personal construida con Astro + Tailwind CSS.

## Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (dark mode class strategy)
- **i18n:** i18next + browser languagedetector (ES/EN toggle)
- **Animations:** Intersection Observer + CSS transitions

## Desarrollo

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Estructura

```
src/
├── components/     # Secciones de la landing
├── i18n/           # Traducciones es/en
├── layouts/        # Layout base
├── pages/          # index.astro
├── scripts/        # i18n, theme, animations
└── styles/         # Tailwind + custom properties
```

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build estático
- `npm run preview` — previsualizar build

## Licencia

Privado — © Fernando Figuera
