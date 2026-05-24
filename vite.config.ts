import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Vivian-System-Atlas/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 300000, // 允許 base64 圖片內嵌
  },
});
