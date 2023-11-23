import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  server: {
    port: import.meta.env.PORT || 4321,
    host: import.meta.env.HOST || 'localhost'
  }
});