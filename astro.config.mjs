// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify'; // <--- USAR ESTE

export default defineConfig({
  site: 'https://calendariumtech.netlify.app',
  
  // ESTO ES VITAL: Le dice a Astro que el sitio es dinámico
  output: 'server', 
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [react(), sitemap()],
  
  // Adaptador oficial para las Functions de Netlify
  adapter: netlify({
    edgeMiddleware: true 
  })
});    