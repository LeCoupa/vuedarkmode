<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
main.c-index
  the-header(
    v-observe-visibility=`{
      callback: onSectionVisibilityChanged,
      throttle: 250
    }`
  )
  section(
    v-for="section in sections"
    v-observe-visibility=`{
      callback: onSectionVisibilityChanged,
      throttle: 250
    }`
    :id="section.id"
    :key="section.id"
    class="c-index__section"
  )
    base-divider(
      class="c-index__divider"
    )
    common-headlines(
      @toggleDocumentation="onToggleDocumentation"
      :description="section.headlines.description"
      :has-documentation="section.headlines.hasDocumentation"
      :section="section.id"
      :source-url="section.headlines.sourceUrl"
      :title="section.headlines.title"
    )
    guide-install(
      v-if="section.id === 'installation'"
    )
    guide-package-options(
      v-if="section.id === 'packageOptions'"
    )
    guide-colors(
      v-if="section.id === 'colors'"
    )
    guide-base-alerts(
      v-if="section.id === 'baseAlert'"
      :documentation="docs.baseAlert"
    )
    guide-base-avatars(
      v-if="section.id === 'baseAvatar'"
      :documentation="docs.baseAvatar"
    )
    guide-base-badges(
      v-if="section.id === 'baseBadge'"
      :documentation="docs.baseBadge"
    )
    guide-base-buttons(
      v-if="section.id === 'baseButton'"
      :documentation="docs.baseButton"
    )
    guide-base-dividers(
      v-if="section.id === 'baseDivider'"
      :documentation="docs.baseDivider"
    )
    guide-base-headings(
      v-if="section.id === 'baseHeading'"
      :documentation="docs.baseHeading"
    )
    guide-base-icons(
      v-if="section.id === 'baseIcon'"
      :documentation="docs.baseIcon"
    )
    guide-base-list-items(
      v-if="section.id === 'baseListItem'"
      :documentation="docs.baseListItem"
    )
    guide-base-progress-bars(
      v-if="section.id === 'baseProgressBar'"
      :documentation="docs.baseProgressBar"
    )
    guide-base-social-logins(
      v-if="section.id === 'baseSocialLogin'"
      :documentation="docs.baseSocialLogin"
    )
    guide-base-spinners(
      v-if="section.id === 'baseSpinner'"
      :documentation="docs.baseSpinner"
    )
    guide-base-toasts(
      v-if="section.id === 'baseToast'"
      :documentation="docs.baseToast"
    )
    guide-field-checkboxes(
      v-if="section.id === 'fieldCheckbox'"
      :documentation="docs.fieldCheckbox"
    )
    guide-field-files(
      v-if="section.id === 'fieldFile'"
      :documentation="docs.fieldFile"
    )
    guide-field-inputs(
      v-if="section.id === 'fieldInput'"
      :documentation="docs.fieldInput"
    )
    guide-field-radios(
      v-if="section.id === 'fieldRadio'"
      :documentation="docs.fieldRadio"
    )
    guide-field-selects(
      v-if="section.id === 'fieldSelect'"
      :documentation="docs.fieldSelect"
    )
    guide-field-tabs(
      v-if="section.id === 'fieldTabs'"
      :documentation="docs.fieldTabs"
    )
    guide-field-textareas(
      v-if="section.id === 'fieldTextarea'"
      :documentation="docs.fieldTextarea"
    )
    guide-field-toggles(
      v-if="section.id === 'fieldToggle'"
      :documentation="docs.fieldToggle"
    )

  base-divider(
    class="c-index__divider"
  )

  the-footer
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import { ObserveVisibility } from "vue-observe-visibility";

// VUE DARK MODE
import BaseDivider from "@/../lib/components/base/BaseDivider";

// PROJECT: COMPONENTS
import CommonHeadlines from "@/components/common/CommonHeadlines";
import GuideBaseAlerts from "@/components/guide/GuideBaseAlerts";
import GuideBaseAvatars from "@/components/guide/GuideBaseAvatars";
import GuideBaseBadges from "@/components/guide/GuideBaseBadges";
import GuideBaseButtons from "@/components/guide/GuideBaseButtons";
import GuideBaseDividers from "@/components/guide/GuideBaseDividers";
import GuideBaseHeadings from "@/components/guide/GuideBaseHeadings";
import GuideBaseIcons from "@/components/guide/GuideBaseIcons";
import GuideBaseListItems from "@/components/guide/GuideBaseListItems";
import GuideBaseProgressBars from "@/components/guide/GuideBaseProgressBars";
import GuideBaseSocialLogins from "@/components/guide/GuideBaseSocialLogins";
import GuideBaseSpinners from "@/components/guide/GuideBaseSpinners";
import GuideBaseToasts from "@/components/guide/GuideBaseToasts";
import GuideColors from "@/components/guide/GuideColors";
import GuideFieldCheckboxes from "@/components/guide/GuideFieldCheckboxes";
import GuideFieldFiles from "@/components/guide/GuideFieldFiles";
import GuideFieldInputs from "@/components/guide/GuideFieldInputs";
import GuideFieldRadios from "@/components/guide/GuideFieldRadios";
import GuideFieldSelects from "@/components/guide/GuideFieldSelects";
import GuideFieldTabs from "@/components/guide/GuideFieldTabs";
import GuideFieldTextareas from "@/components/guide/GuideFieldTextareas";
import GuideFieldToggles from "@/components/guide/GuideFieldToggles";
import GuideInstall from "@/components/guide/GuideInstall";
import GuidePackageOptions from "@/components/guide/GuidePackageOptions";
import TheFooter from "@/components/layouts/TheFooter";
import TheGithubButtons from "@/components/layouts/TheGithubButtons";
import TheHeader from "@/components/layouts/TheHeader";
import TheLogo from "@/components/layouts/TheLogo";
import TheSubscriptionBox from "@/components/layouts/TheSubscriptionBox";

export default {
  directives: {
    observeVisibility: ObserveVisibility
  },

  components: {
    BaseDivider,
    CommonHeadlines,
    GuideBaseAlerts,
    GuideBaseAvatars,
    GuideBaseBadges,
    GuideBaseButtons,
    GuideBaseDividers,
    GuideBaseHeadings,
    GuideBaseIcons,
    GuideBaseListItems,
    GuideBaseProgressBars,
    GuideBaseSocialLogins,
    GuideBaseSpinners,
    GuideBaseToasts,
    GuideColors,
    GuideFieldCheckboxes,
    GuideFieldFiles,
    GuideFieldInputs,
    GuideFieldRadios,
    GuideFieldSelects,
    GuideFieldTabs,
    GuideFieldTextareas,
    GuideFieldToggles,
    GuideInstall,
    GuidePackageOptions,
    TheGithubButtons,
    TheFooter,
    TheHeader,
    TheLogo,
    TheSubscriptionBox
  },

  data() {
    return {
      // --> STATE <--

      docs: {
        baseAlert: false,
        baseAvatar: false,
        baseBadge: false,
        baseButton: false,
        baseDivider: false,
        baseHeading: false,
        baseIcon: false,
        baseListItem: false,
        baseProgressBar: false,
        baseSocialLogin: false,
        baseSpinner: false,
        baseToast: false,
        fieldCheckbox: false,
        fieldFile: false,
        fieldInput: false,
        fieldRadio: false,
        fieldSelect: false,
        fieldTabs: false,
        fieldTextarea: false,
        fieldToggle: false
      },

      // --> COMPONENTS <--
      sections: [
        {
          id: "installation",
          headlines: {
            title: "Installation",
            description: "The dark side is calling you... Come and join us! 👻",
            hasDocumentation: false
          }
        },
        {
          id: "packageOptions",
          headlines: {
            title: "Package Options",
            description:
              "Here are some options you can set to customize the plugin. 🍸",
            hasDocumentation: false
          }
        },
        {
          id: "colors",
          headlines: {
            title: "Colors",
            description:
              "All our components are baked using only these colors. No added sugar. 🤞",
            hasDocumentation: false
          }
        },
        {
          id: "baseAlert",
          headlines: {
            title: "Alerts",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseAlert.vue"
          }
        },
        {
          id: "baseAvatar",
          headlines: {
            title: "Avatars",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseAvatar.vue"
          }
        },
        {
          id: "baseBadge",
          headlines: {
            title: "Badges",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseBadge.vue"
          }
        },
        {
          id: "baseButton",
          headlines: {
            title: "Buttons",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseButton.vue"
          }
        },
        {
          id: "baseDivider",
          headlines: {
            title: "Dividers",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseDivider.vue"
          }
        },
        {
          id: "baseHeading",
          headlines: {
            title: "Headings",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseHeading.vue"
          }
        },
        {
          id: "baseIcon",
          headlines: {
            title: "Icons from Material Design",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseIcon.vue"
          }
        },
        {
          id: "baseListItem",
          headlines: {
            title: "List Items",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseListItem.vue"
          }
        },
        {
          id: "baseProgressBar",
          headlines: {
            title: "Progress Bars",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseProgressBar.vue"
          }
        },
        {
          id: "baseSocialLogin",
          headlines: {
            title: "Social Logins",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseSocialLogin.vue"
          }
        },
        {
          id: "baseSpinner",
          headlines: {
            title: "Spinners",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseSpinner.vue"
          }
        },
        {
          id: "baseToast",
          headlines: {
            title: "Toasts",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/base/BaseToast.vue"
          }
        },
        {
          id: "fieldCheckbox",
          headlines: {
            title: "Checkboxes",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldCheckbox.vue"
          }
        },
        {
          id: "fieldFile",
          headlines: {
            title: "File Upload",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldFile.vue"
          }
        },
        {
          id: "fieldInput",
          headlines: {
            title: "Inputs",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldInput.vue"
          }
        },
        {
          id: "fieldRadio",
          headlines: {
            title: "Radios",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldRadios.vue"
          }
        },
        {
          id: "fieldSelect",
          headlines: {
            title: "Selects",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldSelect.vue"
          }
        },
        {
          id: "fieldTabs",
          headlines: {
            title: "Tabs",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldTabs.vue"
          }
        },
        {
          id: "fieldTextarea",
          headlines: {
            title: "Textareas",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldTextarea.vue"
          }
        },
        {
          id: "fieldToggle",
          headlines: {
            title: "Toggles",
            hasDocumentation: true,
            sourceUrl:
              "https://github.com/LeCoupa/vuedarkmode/blob/master/lib/components/form/FieldToggle.vue"
          }
        }
      ]
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    onSectionVisibilityChanged(isVisible, entry) {
      if (isVisible) {
        const id = entry.target.id;

        // Update category items and hash url
        this.$store.commit("updateCategoryItems", { id });
        this.$router.replace(`/#${id}`);
      }
    },

    onToggleDocumentation(section, visibility) {
      this.docs[section] = visibility;
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".c-index";

#{$c} {
  #{$c}__divider {
    margin: 50px auto;
    max-width: 800px;
  }
}
</style>
