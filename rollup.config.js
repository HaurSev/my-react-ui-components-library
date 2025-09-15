import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

export default defineConfig([
  {
    input: 'src/library.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        extensions: ['.mjs', '.js', '.jsx', '.json', '.node', '.ts', '.tsx'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        include: ['src/**/*.{ts,tsx}'],
      }),
      commonjs(),
      postcss({
        modules: {
          generateScopedName: '[hash:base64:8]'
        },
        extract: false,
        inject: true,
        minimize: true,
        sourceMap: false,
        extensions: ['.css'],
      }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  {
    input: 'src/library.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './src',
        },
        exclude: ['**/*.module.css'],
      }),
    ],
    external: [/\.css$/],
  },
]);
