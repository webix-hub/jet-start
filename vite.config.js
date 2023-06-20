import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'sources/myapp.js',
      name: 'app',
      fileName: 'app',
      formats: ['es']
    },
    rollupOptions: {
      external: ['webix-jet'],
      output: {
        inlineDynamicImports: true,
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      }
    }
  }
});
