// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio público en producción. Obligatorio para el sitemap y las canonical.
  site: 'https://calle13losbarrios.es',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
