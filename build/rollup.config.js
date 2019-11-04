/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";

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
    plugins: [commonjs(), vue()]
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
        template: { optimizeSSR: true }
      })
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
    plugins: [commonjs(), vue()]
  }
];
