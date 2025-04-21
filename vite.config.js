// Vite config
import { defineConfig } from "vite";

// Vite plugins
import react from "@vitejs/plugin-react";

// PostCSS
import autoprefixer from "autoprefixer";

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
    react({
      babel: {
        configFile: true
      }
    })
  ]
});
