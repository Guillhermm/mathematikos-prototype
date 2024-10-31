import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import stringPlugin from 'vite-plugin-string';

export default defineConfig({
  plugins: [
    react(),
    stringPlugin({
      include: ['**/*.frag', '**/*.glsl'],
    }),
  ],
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
