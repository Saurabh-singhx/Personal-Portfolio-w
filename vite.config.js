// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Personal-Portfolio-w/', // Match your GitHub repository name
  plugins: [react()],
});
