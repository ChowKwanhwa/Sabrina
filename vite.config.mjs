import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
  resolve: {
    alias: {
      'slick-carousel/slick/fonts': path.resolve(__dirname, 'node_modules/slick-carousel/slick/fonts'),
    },
  },
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root directory
        '/mnt/c/Users/HUA/Desktop/Sabrina/Sabrina',
        // Allow serving files from the entire node_modules directory
        '/mnt/c/Users/HUA/Desktop/Sabrina/Sabrina/node_modules',
      ],
    },
  },
});
