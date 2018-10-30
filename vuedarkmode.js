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
function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;

  const components = {
    "dm-avatar": BaseAvatar,
    "dm-badge": BaseBadge,
    "dm-button": BaseButton,
    "dm-divider": BaseDivider,
    "dm-heading": BaseHeading,
    "dm-icon": BaseIcon,
    "dm-progress-bar": BaseProgressBar,
    "dm-social-login": BaseSocialLogin,
    "dm-checkbox": FieldCheckbox,
    "dm-file": FieldFile,
    "dm-input": FieldInput,
    "dm-radio": FieldRadio,
    "dm-select": FieldSelect,
    "dm-tabs": FieldTabs,
    "dm-textarea": FieldTextarea,
    "dm-toggle": FieldToggle
  };

  // Declare all components when options is not set or array is empty
  // Or when the user does want to use it
  for (let component in components) {
    if (
      !options.components ||
      options.components.length === 0 ||
      options.components[component].indexOf === 1
    ) {
      Vue.component(component, components[component]);
    }
  }
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
