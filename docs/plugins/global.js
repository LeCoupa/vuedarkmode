/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import Vue from "vue";
import vClickOutside from "v-click-outside";
import VueClipboard from "vue-clipboard2";
import VueHighlightJS from "vue-highlightjs";
import VueHotkey from "v-hotkey";

import {
  ValidationObserver,
  ValidationProvider
} from "vee-validate/dist/vee-validate.full";

/**************************************************************************
 * USE PLUGIN
 * https://vuejs.org/v2/guide/plugins.html
 ***************************************************************************/

Vue.use(vClickOutside);
Vue.use(VueClipboard);
Vue.use(VueHighlightJS);
Vue.use(VueHotkey);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
