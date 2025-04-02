import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'], // Añade esta línea
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0 // Opcional: para archivos grandes
  }
});