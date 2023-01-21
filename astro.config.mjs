import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://sgennrw.xyz',
  base: '/',

  integrations: [mdx(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })]
});