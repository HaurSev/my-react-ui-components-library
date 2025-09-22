import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('webpack').Configuration[]} */
export default [
  // CommonJS build
  {
    mode: 'production',
    entry: './src/library.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: {
        type: 'commonjs2',
      },
      clean: false,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'react/jsx-runtime': 'react/jsx-runtime',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  namedExport: false,
                  exportLocalsConvention: 'as-is',
                  localIdentName: '[hash:base64:8]',
                  exportOnlyLocals: false,
                },
                importLoaders: 1,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
          ],
        },
      ],
    },
  },
  // ESM build
  {
    mode: 'production',
    entry: './src/library.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.esm.js',
      library: {
        type: 'module',
      },
      module: true,
      environment: {
        module: true,
      },
      clean: false,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
    experiments: {
      outputModule: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'react/jsx-runtime': 'react/jsx-runtime',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  namedExport: false,
                  exportLocalsConvention: 'as-is',
                  localIdentName: '[hash:base64:8]',
                  exportOnlyLocals: false,
                },
                importLoaders: 1,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
          ],
        },
      ],
    },
  },
];
