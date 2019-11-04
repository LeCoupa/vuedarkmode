/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import buble from "rollup-plugin-buble"; // Transpile/polyfill with reasonable browser support
import commonjs from "rollup-plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files

/**************************************************************************
 * ROLLUP CONFIGURATION
 ***************************************************************************/

export default [
  // ESM build to be used with webpack/rollup.

  {
    input: "build/index.js",
    output: {
      format: "esm",
      file: "dist/vuedarkmode.esm.js"
    },
    plugins: [
      commonjs(),
      vue({
        css: true
      }),
      buble()
    ]
  },

  // SSR build.

  {
    input: "build/index.js",
    output: {
      format: "cjs",
      file: "dist/vuedarkmode.ssr.js"
    },
    plugins: [
      commonjs(),
      vue({
        css: true,
        template: {
          optimizeSSR: true
        }
      }),
      buble()
    ]
  },

  // Browser build.

  {
    input: "build/index.js",
    output: {
      format: "iife",
      file: "dist/vuedarkmode.js",
      name: "vuedarkmode"
    },
    plugins: [
      commonjs(),
      vue({
        css: true
      }),
      buble()
    ]
  }
];
