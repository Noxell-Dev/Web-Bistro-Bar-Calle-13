# AGENTS.md — Web Bistro Bar Calle 13

Convenciones del proyecto para quien (o lo que) lo toque en el futuro.

## Stack

- Astro 7 + TypeScript estricto + Tailwind CSS v4 (plugin de Vite). Sitio estático, sin backend.
  Sin `overrides` de Vite en `package.json`: Astro 7 usa Vite 8 y el pin a Vite 6
  (necesario en la época de Astro 5) rompe el build.
- Fuentes autoalojadas con `@fontsource-variable/fraunces`, `@fontsource-variable/inter` y
  `@fontsource-variable/caveat` (importadas en `src/styles/global.css`). No añadir Google
  Fonts por `<link>`.
- Sitemap: **nunca** crear `sitemap.xml` a mano; lo genera `@astrojs/sitemap` en cada build.
  `site` en `astro.config.mjs` es obligatorio y es el dominio definitivo
  (`https://calle13losbarrios.es`): si cambia, actualizar también `src/data/site.ts`
  (`site.url`). El `robots.txt` no vive en el repo: se gestiona a nivel de Cloudflare.

## Estructura

- `src/components/` — un componente por sección: `Header`, `Hero`, `Stats`,
  `Carta`, `Gallery`, `Reviews`, `TiktokFeed`, `Faq`, `Contact`, `Footer`
  (+ `SocialLinks` reutilizable). Composición en `src/pages/index.astro`.
- `src/layouts/BaseLayout.astro` — `<head>` completo (SEO, OG/Twitter, canonical),
  JSON-LD (`Restaurant` + `FAQPage`) y slots de header/main/footer.
- `src/data/menu.ts` — la carta (categorías, platos, precios). Es la única fuente de verdad
  de la carta; `Carta.astro` la renderiza entera.
- `src/data/site.ts` — datos del negocio (nombre, teléfonos, dirección, URLs,
  redes, valoración de Google). Única fuente de verdad; misma forma que en el resto
  de proyectos. Los componentes y el JSON-LD del layout tiran siempre de aquí.
- `src/i18n/es.ts` — **todos** los textos visibles de la interfaz. Nada hardcodeado en
  componentes. Proyecto monolingüe ES (ver README para añadir idiomas).
- `src/scripts/site.ts` — solo el menú móvil. La FAQ usa `<details>`/`<summary>` nativos:
  no añadir JS para el acordeón.
- `src/styles/global.css` — tokens en `@theme` (paleta «Agua y Dehesa»: `brand` azul agua
  `#0d6eae`, `brand-deep` `#0a4d7a`, `brand-bright` turquesa `#35b6e9`, `verde` dehesa
  `#3c9a2f`, `verde-deep`, `accent` coral `#e2492f`, `accent-deep`, `accent-soft`,
  `paper`/`cream`/`sand`/`mint`, `ink`, `muted`, `line`; `font-display`, `font-sans`,
  `font-hand`) + estilos base (foco visible, punteado de carta `.leader`,
  `scroll-margin` para anchors).
- `public/` — favicons + `site.webmanifest` en raíz;
  imágenes en `public/images/` (`logo-calle13.webp` para la web, `og-image.jpg`
  de 1200×630 para OG/Twitter, `hero-mar.webp` + `hero-dehesa.webp` con fundido
  en el hero).

## Idiomas y textos

- `es.ts` exporta el objeto `es` con la misma forma que usaría `en.ts`.
- Teléfono del negocio: `site.phones` en `src/data/site.ts` (+ JSON-LD en el layout).

## Diseño

- Identidad «Agua y Dehesa»: azules del mural submarino + verde fuerte de la dehesa +
  coral (el pulpo del mural), sobre fondos espuma/aqua/menta. El logo (rojo/negro,
  grabado vintage) no se toca. Titulares Fraunces, cuerpo Inter, y **Caveat** (`font-hand`)
  para precios y notas de la carta (tocho manuscrito, menos formal). Iconos SVG de trazo
  minimalistas; **prohibidos los emojis como iconos**.
- La carta: cada categoría es una «ficha» de papel (`bg-paper` redondeada) sobre fondo
  `sand`; el título va en Fraunces con el color de la categoría (verde/azul/coral según
  `catHues` en `Carta.astro`) y filete fino, sin chapitas ni fondos de color; precios y
  notas en Caveat. El plato se une al precio con punteado (clase `.leader`).
- Las costuras entre secciones usan **olas SVG** (mismo path repetido, `fill-*` del color
  de la sección destino): hero → banda de datos y carta → reseñas. Entre secciones
  claras/oscuras sin ola se usa `border-t-2 border-brand-bright` (contacto).
- Micro-interacciones mínimas (hover en CTAs, rotación del `+` del FAQ). Respetar
  `prefers-reduced-motion` (ya contemplado en el CSS).
- Responsive (revisado 2026-09-20 con capturas en 320/390/768/1440): la nav de
  escritorio y la hamburguesa cambian en `lg` (en tablet el CTA «Llamar» + nav no
  cabían y el botón se salía de la pantalla); las tarjetas de la carta llevan
  `min-w-0` (la rejilla hacía blowout y la página medía 399 px de ancho en móvil);
  las filas con media/ración entera apilan el precio bajo el nombre en `<sm`
  (mantienen el punteado en `sm+`); el CTA de contacto no parte el teléfono en
  dos líneas (`whitespace-nowrap`, más pequeño en móvil); el horario apila
  día/hora en móvil; los embeds de TikTok usan `min-width: min(325px, 100%)` y la
  rejilla es `sm:grid-cols-2 lg:grid-cols-3`.
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
