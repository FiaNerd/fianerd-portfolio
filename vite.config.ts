// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // Ensures relative paths are used
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
