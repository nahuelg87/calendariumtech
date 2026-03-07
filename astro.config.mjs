// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://calendarium.tech',
  // Borramos output: 'hybrid' -> Ahora es el comportamiento base
  
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()],
  adapter: node({
    mode: 'standalone'
  })
});