// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://calendariumtech.netlify.app',
  output: 'server',
  integrations: [
    react(),
    sitemap()
  ],
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
    define: {
      __DEFINES__: {}
    }
  }
});