// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio público en producción. Obligatorio para el sitemap y las canonical.
  // PROVISIONAL: confirmar el dominio definitivo con el negocio.
  site: 'https://bistrobarcalle13.es',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
