// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 1. Agregamos la URL base (obligatorio para SEO y Sitemaps)
  site: 'https://calendarium.tech',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(), 
    // 2. La integración del sitemap ya estaba, pero ahora tiene la URL arriba para funcionar
    sitemap()
  ]
});