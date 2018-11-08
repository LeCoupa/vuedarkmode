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
      v-if="section.id === 'install'"
    )
    guide-options(
      v-if="section.id === 'options'"
    )
    guide-colors(
      v-if="section.id === 'colors'"
    )
    guide-base-headings(
      v-if="section.id === 'baseHeading'"
      :documentation="docs.baseHeading"
    )
    guide-base-buttons(
      v-if="section.id === 'baseButton'"
      :documentation="docs.baseButton"
    )
    guide-base-badges(
      v-if="section.id === 'baseBadge'"
      :documentation="docs.baseBadge"
    )
    guide-base-social-logins(
      v-if="section.id === 'baseSocialLogin'"
      :documentation="docs.baseSocialLogin"
    )
    guide-field-inputs(
      v-if="section.id === 'fieldInput'"
      :documentation="docs.fieldInput"
    )
    guide-field-selects(
      v-if="section.id === 'fieldSelect'"
      :documentation="docs.fieldSelect"
    )
    guide-field-textareas(
      v-if="section.id === 'fieldTextarea'"
      :documentation="docs.fieldTextarea"
    )
    guide-field-checkboxes(
      v-if="section.id === 'fieldCheckbox'"
      :documentation="docs.fieldCheckbox"
    )
    guide-field-radios(
      v-if="section.id === 'fieldRadio'"
      :documentation="docs.fieldRadio"
    )
    guide-field-toggles(
      v-if="section.id === 'fieldToggle'"
      :documentation="docs.fieldToggle"
    )
    guide-field-files(
      v-if="section.id === 'fieldFile'"
      :documentation="docs.fieldFile"
    )
    guide-field-tabs(
      v-if="section.id === 'fieldTabs'"
      :documentation="docs.fieldTabs"
    )
    guide-base-dividers(
      v-if="section.id === 'baseDivider'"
      :documentation="docs.baseDivider"
    )
    guide-base-progress-bars(
      v-if="section.id === 'baseProgressBar'"
      :documentation="docs.baseProgressBar"
    )
    guide-base-avatars(
      v-if="section.id === 'baseAvatar'"
      :documentation="docs.baseAvatar"
    )
    guide-base-alerts(
      v-if="section.id === 'baseAlert'"
      :documentation="docs.baseAlert"
    )
    guide-base-icons(
      v-if="section.id === 'baseIcon'"
      :documentation="docs.baseIcon"
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
import GuideBaseAvatars from "@/components/guide/GuideBaseAvatars";
import GuideBaseBadges from "@/components/guide/GuideBaseBadges";
import GuideBaseButtons from "@/components/guide/GuideBaseButtons";
import GuideBaseDividers from "@/components/guide/GuideBaseDividers";
import GuideBaseHeadings from "@/components/guide/GuideBaseHeadings";
import GuideBaseIcons from "@/components/guide/GuideBaseIcons";
import GuideBaseProgressBars from "@/components/guide/GuideBaseProgressBars";
import GuideBaseSocialLogins from "@/components/guide/GuideBaseSocialLogins";
import GuideBaseAlerts from "@/components/guide/GuideBaseAlerts";
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
import GuideOptions from "@/components/guide/GuideOptions";
import TheFooter from "@/components/layouts/TheFooter";
import TheGithubButtons from "@/components/layouts/TheGithubButtons";
import TheHeader from "@/components/layouts/TheHeader";
import TheLogo from "@/components/layouts/TheLogo";
import TheSubscriptionBox from "@/components/layouts/TheSubscriptionBox";

export default {
  components: {
    BaseDivider,
    CommonHeadlines,
    GuideBaseAvatars,
    GuideBaseBadges,
    GuideBaseButtons,
    GuideBaseDividers,
    GuideBaseHeadings,
    GuideBaseIcons,
    GuideBaseProgressBars,
    GuideBaseSocialLogins,
    GuideBaseAlerts,
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
    GuideOptions,
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
        baseAvatar: false,
        baseBadge: false,
        baseButton: false,
        baseDivider: false,
        baseHeading: false,
        baseIcon: false,
        baseProgressBar: false,
        baseSocialLogin: false,
        baseAlert: false,
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
          id: "install",
          headlines: {
            title: "INSTALLATION",
            description: "The dark side is calling you... Come and join us! 👻",
            hasDocumentation: false
          }
        },
        {
          id: "options",
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
          id: "baseHeading",
          headlines: {
            title: "HEADINGS",
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
          id: "baseBadge",
          headlines: {
            title: "BADGES",
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
          id: "baseAlert",
          headlines: {
            title: "ALERTS",
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
          id: "fieldSelect",
          headlines: {
            title: "SELECTS",
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
          id: "fieldCheckbox",
          headlines: {
            title: "CHECKBOXES",
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
          id: "fieldToggle",
          headlines: {
            title: "TOGGLES",
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
          id: "fieldTabs",
          headlines: {
            title: "TABS",
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
          id: "baseProgressBar",
          headlines: {
            title: "PROGRESS BARS",
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
          id: "baseIcon",
          headlines: {
            title: "ICONS FROM MATERIAL DESIGN",
            hasDocumentation: true
          }
        }
      ]
    };
  },

  mounted() {
    let hash = this.$route.hash;

    if (hash) {
      this.scrollToSection(hash.substr(1));
    }
  },

  methods: {
    // --> HELPERS <--

    scrollToSection(id) {
      const section = this.$el.querySelector(`#${id}`);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    },

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
