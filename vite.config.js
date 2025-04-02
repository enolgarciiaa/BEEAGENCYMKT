import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/beeagencymkt/', // 👈 ¡Esta línea es clave!
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
});