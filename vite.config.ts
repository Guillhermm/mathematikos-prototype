import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Opens browser right after starting server.
  server: {
    open: true,
  },
  // Production builds output.
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "./src/styles/main.css";',
      },
    },
  },
});
