// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        sqlite: resolve(__dirname, "sqlite.html"),
        crsqlite: resolve(__dirname, "crsqlite.html"),
      },
    },
  },
});
