import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import common from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import bundleScss from 'rollup-plugin-bundle-scss';
// import postcss from 'rollup-plugin-postcss';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import {Plugin} from 'rollup';
import litcss from 'rollup-plugin-lit-css';
import  postcssPresetEnv from 'postcss-preset-env';
import  atImport from "postcss-import";
import styles from "rollup-plugin-styles";

import scss from "rollup-plugin-scss";

// const asdf : Plugin

// import litcss from 'rollup-plugin-lit-css';
const production = !process.env.ROLLUP_WATCH;
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.m.js'];
const babelRc = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, /**ie support */
        // targets: {
          // esmodules: true
          // "chrome": 71
          // ie: 11 /**ie support */
        // },
        // useBuiltIns: 'usage', /**ie support */
        useBuiltIns: false,
        // corejs: 3, /**ie support */
        // debug: true
      }
    ],
    // [
    //   '@babel/preset-env',
    //   {
    //     modules: false,
    //     targets: {
    //       "esmodules": true,
    //       // chrome: 73
    //     },
    //     useBuiltIns: 'entry',
    //     corejs: 3
    //   }
    // ],
    '@babel/preset-typescript'
  ],
  plugins: [
    // ["@babel/plugin-transform-template-literals", {
    //   "loose": true
    // }],
    ['@babel/plugin-syntax-dynamic-import'],
    [
      '@babel/plugin-proposal-decorators',
      { decoratorsBeforeExport: true }
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    // ['@babel/plugin-transform-arrow-functions', { spec: true }]
    [
      "@babel/plugin-transform-runtime", /** not needed for current browserlist */
      {
        regenerator: true
      }
    ]
  ]
};

const babelConf = {
  extensions,
  babelrc: false,
  ...babelRc,
  // exclude: ['node_modules/**']
  exclude: [
    // /@babel(?:\/|\\{1,2})runtime|core-js/,
    // /@webcomponents/,
    /core-js/,
    /regenerator-runtime/,
    // /core-js\/stable/,
    /@webcomponents\/webcomponentsjs/,
    /whatwg-fetch/
    // /(?!(lit-element|lit-html)\/).*/
    // /node_modules\/(?!(lit-element|lit-html)\/).*/
  ],
  // include: [
    // '/src',
    // /(lit-element|lit-html)\/.*/
  // ],
  // babelHelpers: "runtime",
  babelHelpers: "runtime",
};

export default {
  // external:[
    // /core-js\/stable/,
    // /@babel(?:\/|\\{1,2})runtime|core-js/,
    // /@webcomponents\/webcomponentsjs/,
    // /whatwg-fetch/,
    // /@webcomponents/,
    // /node_modules\/(?!(lit-element|lit-html)\/).*/
  // ],
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    // format: 'esm',
    name: 'app',
    format: 'iife',
    sourcemap: false
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
    // postcssLit(),
    // litcss({include:['**/*.css','**/*.scss'],uglify:true}),
    resolve({ extensions, browser: true }),
    common(),
    babel(babelConf),



// //POSTCSS START
    // postcss({
    //   inject: false, // By default postcss also injects the
    //   plugins:[
    //     // atImport({
    //     //   path: [
    //     //     './theme',
    //     //     './node_modules',
    //     //     './src/theme',
    //     //     path.resolve(__dirname, "..", "node_modules"),
    //     //     path.resolve(__dirname,"node_modules")
    //     //   ]
    //     // }),
    //     postcssPresetEnv({
    //       autoprefixer: { /** ie but not a good idea */
    //         grid: true 
    //       },
    //       // "production": [
    //       //   ">0.2%",
    //       //   "not dead",
    //       //   "not op_mini all"
    //       // ],
    //       // "development": [
    //       //   "last 1 chrome version",
    //       //   "last 1 firefox version",
    //       //   "last 1 safari version",
    //       //   "last 1 ie version"
    //       // ],
    //       // browsers: 'IE 11'
    //       // browsers: 'Chrome >= 61 or Safari >= 10.1 or Edge >= 16 or iOS >= 10.3 or Firefox >= 60 or Opera >= 48 or Android >= 61 or ChromeAndroid >= 61 or FirefoxAndroid >= 60 or OperaMobile >= 45 or Samsung >= 8'
    //     })
    //   ],
    //   parser: 'postcss-sass',
    //   extensions:[".sass",".scss",".css"],
    //   extract: false,
    //   minimize: true,
    //   use: [
    //     ['sass', {
    //       includePaths: [
    //         // './theme',
    //         'node_modules',
    //         // './src/theme',
    //         // path.resolve(__dirname, "..", "node_modules"),
    //         // path.resolve(__dirname,"node_modules")
    //       ],
    //     }]
    //   ],
    //   // exclude: ["./node_modules/bootstrap"]
    //   // extensions:[],
    //   // plugins: [],
    //   // modules: true,
    //   // extract: true
    // }),
// POSTCSS END
    // styles(),
    // styles({
    //   // parser: require('sass').renderSync,
    //   // config:{
    //   //   ctx:{
    //   //     extract: false
    //   //   }

    //   // },
    //   dts: true,
    //   extensions: ['.sass',".scss",".css"],
    //   // modules: false,
    //   // import: {
    //   //   resolve: path.resolve(__dirname,"./node_modules")
    //   // },
    //   mode: "extract",
    //   // sass: {
    //   //   impl: 'sass',
    //   //   fiber: require('fibers'),
    //   //   includePaths: [
    //   //     'node_modules'
    //   //   ]
    //   // },
    //   use: ['sass']
    // }),
      //bundleScss(),
    scss({
        // extensions: ['.sass',".scss",".css"],
        // output: "./scc/css/style.css",
        output: false,
      failOnError: true,
      sass: require("sass"),
      includePaths:[
                  // './theme',
            './node_modules',
            './src',
              // path.resolve(__dirname, "..", "node_modules"),
              // path.resolve(__dirname,"node_modules")  
      ]
    }),
    // litcss({
    //   include: ['**/*.scss'] 
    // }),
    // postcssLit(),
    production && terser({output: {comments: false,source_map:false}}),
    // litcss({ uglify: true })
  ],
  watch: {
    clearScreen: false
  }
};
