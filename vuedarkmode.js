/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// BASE COMPONENTS
import BaseAvatar from "./components/darkmode/base/BaseAvatar.vue";
import BaseBadge from "./components/darkmode/base/BaseBadge.vue";
import BaseButton from "./components/darkmode/base/BaseButton.vue";
import BaseDivider from "./components/darkmode/base/BaseDivider.vue";
import BaseHeading from "./components/darkmode/base/BaseHeading.vue";
import BaseIcon from "./components/darkmode/base/BaseIcon.vue";
import BaseProgressBar from "./components/darkmode/base/BaseProgressBar.vue";
import BaseSocialLogin from "./components/darkmode/base/BaseSocialLogin.vue";

// FORM COMPONENTS
import FieldCheckbox from "./components/darkmode/form/FieldCheckbox.vue";
import FieldFile from "./components/darkmode/form/FieldFile.vue";
import FieldInput from "./components/darkmode/form/FieldInput.vue";
import FieldRadio from "./components/darkmode/form/FieldRadio.vue";
import FieldSelect from "./components/darkmode/form/FieldSelect.vue";
import FieldTabs from "./components/darkmode/form/FieldTabs.vue";
import FieldTextarea from "./components/darkmode/form/FieldTextarea.vue";
import FieldToggle from "./components/darkmode/form/FieldToggle.vue";

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.component("dm-avatar", BaseAvatar);
  Vue.component("dm-badge", BaseBadge);
  Vue.component("dm-button", BaseButton);
  Vue.component("dm-divider", BaseDivider);
  Vue.component("dm-heading", BaseHeading);
  Vue.component("dm-icon", BaseIcon);
  Vue.component("dm-progress-bar", BaseProgressBar);
  Vue.component("dm-social-login", BaseSocialLogin);
  Vue.component("dm-checkbox", FieldCheckbox);
  Vue.component("dm-file", FieldFile);
  Vue.component("dm-input", FieldInput);
  Vue.component("dm-radio", FieldRadio);
  Vue.component("dm-select", FieldSelect);
  Vue.component("dm-tabs", FieldTabs);
  Vue.component("dm-textarea", FieldTextarea);
  Vue.component("dm-toggle", FieldToggle);
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export components
export default plugin;
