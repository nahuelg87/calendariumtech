// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node'; // 1. Importamos el adaptador de Node

// https://astro.build/config
export default defineConfig({
  output: 'server', // 2. Cambiamos 'static' por 'server' para activar SSR
  adapter: node({
    mode: 'standalone', // 3. Configuramos el modo independiente para el VPS
  }),
  site: 'https://calendarium.tech',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()]
});