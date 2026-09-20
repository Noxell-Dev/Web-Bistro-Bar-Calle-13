# AGENTS.md — Web Bistro Bar Calle 13

Convenciones del proyecto para quien (o lo que) lo toque en el futuro.

## Stack

- Astro 7 + TypeScript estricto + Tailwind CSS v4 (plugin de Vite). Sitio estático, sin backend.
  Sin `overrides` de Vite en `package.json`: Astro 7 usa Vite 8 y el pin a Vite 6
  (necesario en la época de Astro 5) rompe el build.
- Fuentes autoalojadas con `@fontsource-variable/fraunces` e `@fontsource-variable/inter`
  (importadas en `src/styles/global.css`). No añadir Google Fonts por `<link>`.
- Sitemap: **nunca** crear `sitemap.xml` a mano; lo genera `@astrojs/sitemap` en cada build.
  `site` en `astro.config.mjs` es obligatorio y hoy es un dominio **provisional**
  (`https://bistrobarcalle13.es`): al confirmarlo, actualizar también `public/robots.txt`
  y `src/i18n/es.ts` (`site.url`).

## Estructura

- `src/components/` — un componente por sección: `Header`, `Hero`, `Stats`, `Services`,
  `Carta`, `Faq`, `Contact`, `Footer`. Composición en `src/pages/index.astro`.
- `src/layouts/BaseLayout.astro` — `<head>` completo (SEO, OG/Twitter, canonical),
  JSON-LD (`Restaurant` + `FAQPage`) y slots de header/main/footer.
- `src/data/menu.ts` — la carta (categorías, platos, precios). Es la única fuente de verdad
  de la carta; `Carta.astro` la renderiza entera.
- `src/i18n/es.ts` — **todos** los textos visibles de la interfaz. Nada hardcodeado en
  componentes. Proyecto monolingüe ES (ver README para añadir idiomas).
- `src/scripts/site.ts` — solo el menú móvil. La FAQ usa `<details>`/`<summary>` nativos:
  no añadir JS para el acordeón.
- `src/styles/global.css` — tokens en `@theme` (`brand` azul `#1e3a66`, `accent` rojo
  `#b3271e`, `cream`, `ink`; `font-display`, `font-sans`) + estilos base
  (foco visible, punteado de carta `.leader`, `scroll-margin` para anchors).
- `public/` — favicons + `site.webmanifest` + `robots.txt` en raíz;
  imágenes en `public/images/` (`logo-calle13.webp` para la web, `og-calle13.png` para OG,
  `salon-calle13.webp` como fondo del hero).

## Idiomas y textos

- `es.ts` exporta el objeto `es` con la misma forma que usaría `en.ts`.
- Teléfono del negocio: `site.phone` / `site.phoneHref` en `es.ts` (+ JSON-LD en el layout).

## Diseño

- Identidad: blanco + azul de marca + negro/rojo del logo (estilo grabado vintage).
  Titulares Fraunces, cuerpo Inter. Iconos SVG de trazo minimalistas; **prohibidos los
  emojis como iconos**.
- La carta imita la carta impresa: nombre … punteado … precio (clase `.leader`).
- Micro-interacciones mínimas (hover en CTAs, rotación del `+` del FAQ). Respetar
  `prefers-reduced-motion` (ya contemplado en el CSS).
- Animaciones (punto 11 del prompt): una sola variante de entrada (fade + translateY 12px)
  con `IntersectionObserver` en `src/scripts/reveal.ts` (clase `.reveal` en `global.css`,
  stagger con `--reveal-delay`, count-up en `[data-countup]`, fade de imágenes con
  `[data-fade]`). Sin JS el contenido es visible (gate `html.js`); el header gana sombra
  al hacer scroll (`#site-header.is-scrolled`, gestionado en `src/scripts/site.ts`).

## Verificación

Antes de dar un cambio por terminado:

```bash
npm run check   # sin errores
npm run build   # dist/ generado, sitemap incluido
```

## GitHub

- `.github/dependabot.yml` — updates npm semanales (lunes 09:00 Europe/Madrid), agrupa
  minor+patch. `.github/workflows/dependabot-auto-merge.yml` — auto-merge squash de esos PRs.
- No fusionar PRs del negocio a mano sin revisión: el flujo es PR → revisión → merge.
