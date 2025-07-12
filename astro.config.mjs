// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'http://novativeai.com',
  build: {
    assets: 'assets',
  },
  output: 'static'
});
