import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://techveda.netlify.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: netlify()
});