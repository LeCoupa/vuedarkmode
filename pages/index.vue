<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  the-header

  section(
    v-for="section in sections"
    :id="section.id"
    :key="section.id"
    class="c-index__section"
  )
    base-divider(
      color="black"
      size="large"
    )
    common-headlines(
      @toggleDocumentation="onToggleDocumentation"
      :description="section.headlines.description"
      :hasDocumentation="section.headlines.hasDocumentation"
      :section="section.id"
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
    color="black"
    size="large"
  )
  the-footer
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import CommonHeadlines from "@/components/common/CommonHeadlines";
import GuideBaseAlerts from "@/components/guide/GuideBaseAlerts";
import GuideBaseAvatars from "@/components/guide/GuideBaseAvatars";
import GuideBaseBadges from "@/components/guide/GuideBaseBadges";
import GuideBaseButtons from "@/components/guide/GuideBaseButtons";
import GuideBaseDividers from "@/components/guide/GuideBaseDividers";
import GuideBaseHeadings from "@/components/guide/GuideBaseHeadings";
import GuideBaseIcons from "@/components/guide/GuideBaseIcons";
import GuideBaseProgressBars from "@/components/guide/GuideBaseProgressBars";
import GuideBaseSocialLogins from "@/components/guide/GuideBaseSocialLogins";
import GuideBaseSpinners from "@/components/guide/GuideBaseSpinners";
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
    GuideBaseProgressBars,
    GuideBaseSocialLogins,
    GuideBaseSpinners,
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
        baseProgressBar: false,
        baseSocialLogin: false,
        baseSpinner: false,
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
            title: "INSTALLATION",
            description: "The dark side is calling you... Come and join us! 👻",
            hasDocumentation: false
          }
        },
        {
          id: "packageOptions",
          headlines: {
            title: "PACKAGE OPTIONS",
            description:
              "Here are some options you can set to customize the plugin. 🍸",
            hasDocumentation: false
          }
        },
        {
          id: "colors",
          headlines: {
            title: "COLORS",
            description:
              "All our components are baked using only these colors. No added sugar. 🤞",
            hasDocumentation: false
          }
        },
        {
          id: "baseAlert",
          headlines: {
            title: "ALERTS",
            hasDocumentation: true
          }
        },
        {
          id: "baseAvatar",
          headlines: {
            title: "AVATARS",
            hasDocumentation: true
          }
        },
        {
          id: "baseBadge",
          headlines: {
            title: "BADGES",
            hasDocumentation: true
          }
        },
        {
          id: "baseButton",
          headlines: {
            title: "BUTTONS",
            hasDocumentation: true
          }
        },
        {
          id: "baseDivider",
          headlines: {
            title: "DIVIDERS",
            hasDocumentation: true
          }
        },
        {
          id: "baseHeading",
          headlines: {
            title: "HEADINGS",
            hasDocumentation: true
          }
        },
        {
          id: "baseIcon",
          headlines: {
            title: "ICONS FROM MATERIAL DESIGN",
            hasDocumentation: true
          }
        },
        {
          id: "baseProgressBar",
          headlines: {
            title: "PROGRESS BARS",
            hasDocumentation: true
          }
        },
        {
          id: "baseSocialLogin",
          headlines: {
            title: "SOCIAL LOGINS",
            hasDocumentation: true
          }
        },
        {
          id: "baseSpinner",
          headlines: {
            title: "SPINNERS",
            hasDocumentation: true
          }
        },
        {
          id: "fieldCheckbox",
          headlines: {
            title: "CHECKBOXES",
            hasDocumentation: true
          }
        },
        {
          id: "fieldFile",
          headlines: {
            title: "FILE UPLOAD",
            hasDocumentation: true
          }
        },
        {
          id: "fieldInput",
          headlines: {
            title: "INPUTS",
            hasDocumentation: true
          }
        },
        {
          id: "fieldRadio",
          headlines: {
            title: "RADIOS",
            hasDocumentation: true
          }
        },
        {
          id: "fieldSelect",
          headlines: {
            title: "SELECTS",
            hasDocumentation: true
          }
        },
        {
          id: "fieldTabs",
          headlines: {
            title: "TABS",
            hasDocumentation: true
          }
        },
        {
          id: "fieldTextarea",
          headlines: {
            title: "TEXTAREAS",
            hasDocumentation: true
          }
        },
        {
          id: "fieldToggle",
          headlines: {
            title: "TOGGLES",
            hasDocumentation: true
          }
        }
      ]
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

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
  #{$c}__form {
    input::placeholder,
    textarea::placeholder {
      text-transform: capitalize;
    }
  }
}
</style>
