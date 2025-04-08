import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import history from 'connect-history-api-fallback';

export default defineConfig({
  base: '/',
  server: {
    fs: {
      strict: false,
    },
  },
  // Lägg till fallback för SPA-routes
  plugins: [
    react(),
    {
      name: 'configure-middleware',
      configureServer(server) {
        server.middlewares.use(
          history({
            disableDotRule: true,
            htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
          })
        );
      },
    },
  ],

  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
