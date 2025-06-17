// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: "Space Grotesk",
        provider: fontProviders.google(),
        cssVariable: "--font-space-grotesk",
        display: "swap",
        subsets: ["latin"],
        weights: [300, 400, 500, 600, 700],
      },
    ],
  },
});
