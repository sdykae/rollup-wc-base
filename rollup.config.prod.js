import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import common from '@rollup/plugin-commonjs';
// import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const babelRc = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          "esmodules": true,
          // chrome: 73
        },
        useBuiltIns: 'entry',
        corejs: 3
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
    format: 'esm'
  },
  plugins: [
    babel(babelConf),
    resolve({ extensions }),
    common(),
    terser({
      output: {
        comments: false
      }
    })
  ]
};
