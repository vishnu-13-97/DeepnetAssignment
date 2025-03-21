import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct base path for Vercel
  build: {
    outDir: 'dist', // Vercel expects 'dist' as the output directory
  },
});
