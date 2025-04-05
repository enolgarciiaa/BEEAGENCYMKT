import { defineConfig } from 'vite'; // Asegúrate de importar esto
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
});