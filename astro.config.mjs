import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import Macro from "@vue-macros/astro";
import VueJsx from "@vitejs/plugin-vue-jsx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      jsx: true,
    }),
    Macro({
      plugins: {
        vueJsx: VueJsx(), // if needed
      },
    }),
    tailwind(),
  ],
});
