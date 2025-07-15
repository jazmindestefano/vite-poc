import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JazVitePoc',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        dir: 'dist',
      },
    },
    sourcemap: true,
    minify: 'terser',
    target: 'esnext',
  },
});