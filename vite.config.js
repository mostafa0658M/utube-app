import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "utube-bundle.js",
        assetFileNames: "utube-styles.[ext]",
      },
    },
  },
  server: {
    mimeTypes: {
      "application/javascript": ["js"],
    },
  },
});
