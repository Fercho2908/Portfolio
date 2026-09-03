// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  site: 'https://Fercho2908.github.io',
  base: '/Portfolio',
});
