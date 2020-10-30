import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import common from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
// import litcss from 'rollup-plugin-lit-css';
const production = !process.env.ROLLUP_WATCH;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const babelRc = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          esmodules: true
          // "chrome": 71
          // ie: 11
        },
        // useBuiltIns: 'entry',
        // corejs: 3,
        // debug: true
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-syntax-dynamic-import'],
    [
      '@babel/plugin-proposal-decorators',
      { decoratorsBeforeExport: true }
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
};

const babelConf = {
  extensions,
  babelrc: false,
  ...babelRc
  // exclude: ['node_modules/**']
};

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'app',
    // format: 'iife',
    sourcemap: true
  },
  plugins: [
    serve({
      host:'0.0.0.0',
      contentBase: '',
      port: 8001
    }),
    livereload({
      watch: 'dist'
    }),
    common(),
    resolve({ extensions, browser: true }),
    babel(babelConf),
    postcss({
      extensions:[".sass",".scss","css"],
      extract: false,
      minimize: true,
      use: [
        ['sass', {
          includePaths: [
            './theme',
            './node_modules',
            './src/theme',
            path.resolve(__dirname, "..", "node_modules")
          ]
        }]
      ],
      // extensions:[],
      // plugins: [],
      // modules: true,
      // extract: true
    }),
    postcssLit(),
    production && terser({output: {comments: false,source_map:false}})
    // litcss({ uglify: true })
  ],
  watch: {
    clearScreen: false
  }
};
