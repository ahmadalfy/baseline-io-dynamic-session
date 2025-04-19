// Vite config
import { defineConfig } from "vite";

// Vite plugins
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// PostCSS
import autoprefixer from "autoprefixer";

// Baseline config
import { browserslist } from "./package.json";

export default defineConfig({
  assetsInclude: ["**/*.jpg"],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  },
  plugins: [
    legacy({
      targets: browserslist,
      modernTargets: browserslist
    }),
    react()
  ]
});
