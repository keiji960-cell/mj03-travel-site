import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mj03-travel-site.vercel.app',
  integrations: [mdx()],
});
