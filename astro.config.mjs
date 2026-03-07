// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://calendariumtech.netlify.app',
  
  // Mantenemos el modo servidor para que las funciones SSR se generen
  output: 'server', 
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [react(), sitemap()],
  
  // Configuración optimizada para Astro 5 en Netlify
  adapter: netlify({
    edgeMiddleware: true,
    // Forzamos el nombre de la función para que coincida con el redireccionamiento
    functionName: 'entry'
  })
});