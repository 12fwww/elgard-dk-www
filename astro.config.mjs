// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://12fwww.github.io',
  base: '/elgard-dk-www',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
