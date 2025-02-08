import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: "/", // Use this for Vercel deployments
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
