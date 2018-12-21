/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// BASE COMPONENTS
import BaseAlert from "./base/BaseAlert.vue";
import BaseAvatar from "./base/BaseAvatar.vue";
import BaseBadge from "./base/BaseBadge.vue";
import BaseButton from "./base/BaseButton.vue";
import BaseDivider from "./base/BaseDivider.vue";
import BaseHeading from "./base/BaseHeading.vue";
import BaseIcon from "./base/BaseIcon.vue";
import BaseListItem from "./base/BaseListItem.vue";
import BaseProgressBar from "./base/BaseProgressBar.vue";
import BaseSocialLogin from "./base/BaseSocialLogin.vue";
import BaseSpinner from "./base/BaseSpinner.vue";
import BaseToast from "./base/BaseToast.vue";

// FORM COMPONENTS
import FieldCheckbox from "./form/FieldCheckbox.vue";
import FieldFile from "./form/FieldFile.vue";
import FieldInput from "./form/FieldInput.vue";
import FieldRadio from "./form/FieldRadios.vue";
import FieldSelect from "./form/FieldSelect.vue";
import FieldTabs from "./form/FieldTabs.vue";
import FieldTextarea from "./form/FieldTextarea.vue";
import FieldToggle from "./form/FieldToggle.vue";

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

// install function executed by Vue.use()
function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;

  const components = {
    alert: BaseAlert,
    avatar: BaseAvatar,
    badge: BaseBadge,
    button: BaseButton,
    divider: BaseDivider,
    heading: BaseHeading,
    icon: BaseIcon,
    "list-item": BaseListItem,
    "progress-bar": BaseProgressBar,
    "social-login": BaseSocialLogin,
    spinner: BaseSpinner,
    toast: BaseToast,
    checkbox: FieldCheckbox,
    file: FieldFile,
    input: FieldInput,
    radio: FieldRadio,
    select: FieldSelect,
    tabs: FieldTabs,
    textarea: FieldTextarea,
    toggle: FieldToggle
  };

  // Declare all components when options is not set or array is empty
  // Or when the user explicitely specify it
  for (let component in components) {
    if (
      !options ||
      !options.components ||
      options.components.length === 0 ||
      options.components.indexOf(component) !== -1
    ) {
      Vue.component("dm-" + component, components[component]);
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
