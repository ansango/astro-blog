import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://ansango.com",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  integrations: [
    mdx({}),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    prefetch(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
