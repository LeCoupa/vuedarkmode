/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import uglify from "rollup-plugin-uglify-es";
import minimist from "minimist";

/**************************************************************************
 * ROLLUP CONFIGURATION
 * https://rollupjs.org/guide/en
 ***************************************************************************/

const argv = minimist(process.argv.slice(2));

const config = {
  input: "build/entry.js",
  output: {
    name: "vuedarkmode",
    exports: "named"
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ]
};

// Only minify browser (iife) version
if (argv.format === "iife") {
  config.plugins.push(uglify());
}

export default config;
