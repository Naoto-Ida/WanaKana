import { defineConfig } from 'vite';

const input = ['src/index.js'];

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'dist2',
    lib: {
      fileName: 'index',
      name: 'index',
      entry: 'src/index.ts',
      formats: ['umd', 'es', 'cjs']
    }
  }
});
