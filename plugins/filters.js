/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import Vue from "vue";

/**************************************************************************
 * GLOBAL FILTERS
 * https://vuejs.org/v2/guide/filters.html
 ***************************************************************************/

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
