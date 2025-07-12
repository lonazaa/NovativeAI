// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lonazaa.github.io/NovativeAI',
  base: '/NovativeAI',
  build: {
    assets: 'assets',
  },
  output: 'static'
});
