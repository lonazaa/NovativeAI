// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://[your-github-username].github.io',
  base: '/NovativeAI',
  build: {
    assets: 'assets',
  },
  output: 'static'
});
