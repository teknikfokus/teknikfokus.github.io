import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import node from '@astrojs/node';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.teknikfokus.se/",
  output: 'server',
  integrations: [tailwind(), icon(), svelte()],
  adapter: node({
    mode: 'standalone'
  })
});