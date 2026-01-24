import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: true,
    host: '0.0.0.0',
    port: 10000
  },
  server: {
    host: '0.0.0.0'
  }
});