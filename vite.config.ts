// vite.config.ts
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  assetsInclude: ['/sb-preview/runtime.js'],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: '@februaar/design-system',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '**/*.stories.tsx'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
        banner: '"use client";',
        interop: 'auto',
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
