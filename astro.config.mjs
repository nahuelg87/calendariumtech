// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://calendarium.tech',
  output: 'server',
  integrations: [
    react(),
    sitemap()
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});