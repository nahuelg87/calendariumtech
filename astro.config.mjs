import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // URL base de tu proyecto. 
  // Cámbiala por tu dominio .tech cuando lo tengas apuntado a Hostinger.
  site: 'https://calendariumtech.netlify.app',
  
  // IMPORTANTE: Modo servidor para que Supabase y el CRUD funcionen en tiempo real
  output: 'server',
  
  // Configuración del adaptador para Hostinger (Node.js)
  adapter: node({
    mode: 'standalone', // Esto genera el servidor listo para "node dist/server/entry.mjs"
  }),
  
  integrations: [
    react(), 
    sitemap()
  ],
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
    }
  }
});