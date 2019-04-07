/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import Vue from "vue";
import vClickOutside from "v-click-outside";
import VeeValidate from "vee-validate";
import VueClipboard from "vue-clipboard2";
import VueHighlightJS from "vue-highlightjs";
import VueHotkey from "v-hotkey";

/**************************************************************************
 * USE PLUGIN
 * https://vuejs.org/v2/guide/plugins.html
 ***************************************************************************/

Vue.use(vClickOutside);
Vue.use(VueClipboard);
Vue.use(VueHighlightJS);
Vue.use(VueHotkey);

Vue.use(VeeValidate, {
  errorBagName: "$errors",
  fieldsBagName: "$fields"
});
