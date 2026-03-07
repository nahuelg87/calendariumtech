// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify'; // <--- CAMBIO: Importamos el adaptador correcto

export default defineConfig({
  site: 'https://calendarium.tech',
  
  // CLAVE: Definimos que el sitio es dinámico (SSR)
  output: 'server', 
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [react(), sitemap()],
  
  // CAMBIO: Usamos el adaptador de Netlify
  adapter: netlify({
    // Esto optimiza las imágenes y las rutas automáticamente
    edgeMiddleware: true 
  })
});