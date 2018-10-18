/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// BASE COMPONENTS
import BaseAvatar from "@/components/darkmode/base/BaseAvatar";
import BaseBadge from "@/components/darkmode/base/BaseBadge";
import BaseButton from "@/components/darkmode/base/BaseButton";
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import BaseHeading from "@/components/darkmode/base/BaseHeading";
import BaseIcon from "@/components/darkmode/base/BaseIcon";
import BaseLoader from "@/components/darkmode/base/BaseLoader";
import BaseSocialLogin from "@/components/darkmode/base/BaseSocialLogin";

// FORM COMPONENTS
import FieldCheckbox from "@/components/darkmode/form/FieldCheckbox";
import FieldFile from "@/components/darkmode/form/FieldFile";
import FieldInput from "@/components/darkmode/form/FieldInput";
import FieldRadio from "@/components/darkmode/form/FieldRadio";
import FieldSelect from "@/components/darkmode/form/FieldSelect";
import FieldTabs from "@/components/darkmode/form/FieldTabs";
import FieldTextarea from "@/components/darkmode/form/FieldTextarea";
import FieldToggle from "@/components/darkmode/form/FieldToggle";

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

const darkmode = {
  install(Vue) {
    Vue.component("dm-avatar", BaseAvatar);
    Vue.component("dm-badge", BaseBadge);
    Vue.component("dm-button", BaseButton);
    Vue.component("dm-divider", BaseDivider);
    Vue.component("dm-heading", BaseHeading);
    Vue.component("dm-icon", BaseIcon);
    Vue.component("dm-loader", BaseLoader);
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
};

export default darkmode;
