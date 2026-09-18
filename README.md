# Bistro Bar Calle 13 — Web

Landing page de **Bistro Bar Calle 13**, bistro & bar del **Grupo Hostelero Samuel Manzanares**.
Su objetivo es informar: la carta completa con precios, los servicios del local, respuestas a
dudas habituales y contacto telefónico directo para reservar.

- **Producción (provisional):** https://bistrobarcalle13.es *(pendiente confirmar el dominio definitivo)*
- **Repo:** `Noxell-Dev/Web-Bistro-Bar-Calle-13`

## Tecnologías y versiones

- [Astro](https://astro.build) 5 — contenido estático, sin backend
- TypeScript 5 (modo estricto, `astro/tsconfigs/strict`)
- Tailwind CSS 4 (vía `@tailwindcss/vite`)
- `@astrojs/sitemap` 6 — sitemap generado en cada build
- Fuentes autoalojadas: Fraunces Variable (titulares) e Inter Variable (cuerpo), vía `@fontsource-variable/*`
- Idioma único: español

## Requisitos

- Node.js 20+ y npm 10+

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:4321.

## Scripts

| Script          | Qué hace                                              |
| --------------- | ----------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con recarga en caliente        |
| `npm run build` | Compila el sitio estático en `dist/` (+ sitemap)      |
| `npm run preview` | Sirve `dist/` en local para revisar el build        |
| `npm run check` | Verificación de tipos y de componentes Astro (sin errores antes de dar un cambio por terminado) |

## Despliegue

Sitio 100 % estático. Se despliega publicando el contenido de `dist/` tras `npm run build`
(en Vercel basta con importar el repo: framework preset *Astro*, sin variables de entorno).

> **Dominio:** `astro.config.mjs` usa `https://bistrobarcalle13.es` como `site` (sitemap y
> canonical). Es **provisional**: al confirmar el dominio definitivo hay que actualizarlo
> también en `public/robots.txt` y `src/i18n/es.ts` (`site.url`).

## Estructura de carpetas

```
public/
  favicon.svg, favicon.ico, favicon-96x96.png, apple-touch-icon.png
  site.webmanifest, robots.txt
  web-app-manifest-192x192.png, web-app-manifest-512x512.png
  images/                  # logo-calle13.webp (web), og-calle13.png (Open Graph)
src/
  components/              # Header, Hero, Stats, Services, Carta, Faq, Contact, Footer
  layouts/                 # BaseLayout (head, SEO, JSON-LD, header/footer)
  pages/                   # index.astro
  data/                    # menu.ts — la carta completa (categorías, platos, precios)
  i18n/                    # es.ts — todos los textos de la interfaz
  scripts/                 # site.ts — menú móvil (la FAQ usa <details> nativo)
  styles/                  # global.css — tokens Tailwind v4 (@theme) y estilos base
.github/
  dependabot.yml           # updates npm semanales (lunes 09:00 Europe/Madrid)
  workflows/dependabot-auto-merge.yml
```

## Cómo añadir o modificar contenido

- **Carta:** edita `src/data/menu.ts` (`MenuCategory` → `items`). Cada plato admite `price`
  (único) o `halfPrice`/`fullPrice` (1/2 ración y ración). La sección *Carta* se genera sola.
- **Textos:** edita `src/i18n/es.ts`. Ningún texto visible está hardcodeado en los componentes.
- **Secciones:** componentes en `src/components/`, composición en `src/pages/index.astro`.
- **Colores/tipos:** tokens en `src/styles/global.css` (`@theme`): `brand` (azul),
  `accent` (rojo), `cream`, `ink`; `font-display` (Fraunces), `font-sans` (Inter).
- **Idiomas:** hoy es monolingüe ES. Para añadir inglés: crear `src/i18n/en.ts` con la misma
  forma, páginas en `src/pages/en/` y activar el bloque `i18n` de `astro.config.mjs`
  (`prefixDefaultLocale: false`).

## Notas del negocio

- Teléfono de contacto/WhatsApp: **673 895 151** (`tel:+34673895151`).
  La carta impresa indica 647 614 663 (teléfono del grupo); en la web se usa el facilitado
  por el negocio. Si cambia, actualizar `src/i18n/es.ts` (`site.phone`, `site.phoneHref`)
  y el JSON-LD de `src/layouts/BaseLayout.astro`.
- La carta de `src/data/menu.ts` transcribe la carta impresa (septiembre 2026).
  Precios con IVA incluido.
