/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// BASE COMPONENTS
import BaseAlert from "./components/darkmode/base/BaseAlert.vue";
import BaseAvatar from "./components/darkmode/base/BaseAvatar.vue";
import BaseBadge from "./components/darkmode/base/BaseBadge.vue";
import BaseButton from "./components/darkmode/base/BaseButton.vue";
import BaseDivider from "./components/darkmode/base/BaseDivider.vue";
import BaseHeading from "./components/darkmode/base/BaseHeading.vue";
import BaseIcon from "./components/darkmode/base/BaseIcon.vue";
import BaseListItem from "./components/darkmode/base/BaseListItem.vue";
import BaseProgressBar from "./components/darkmode/base/BaseProgressBar.vue";
import BaseSocialLogin from "./components/darkmode/base/BaseSocialLogin.vue";
import BaseSpinner from "./components/darkmode/base/BaseSpinner.vue";
import BaseToast from "./components/darkmode/base/BaseToast.vue";

// FORM COMPONENTS
import FieldCheckbox from "./components/darkmode/form/FieldCheckbox.vue";
import FieldDescription from "./components/darkmode/form/FieldDescription.vue";
import FieldFile from "./components/darkmode/form/FieldFile.vue";
import FieldInput from "./components/darkmode/form/FieldInput.vue";
import FieldLabel from "./components/darkmode/form/FieldLabel.vue";
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
    description: FileDescription,
    file: FieldFile,
    input: FieldInput,
    label: FileLabel,
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
