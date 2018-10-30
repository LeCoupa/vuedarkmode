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
      v-if="section.id === 'headings'"
      :documentation="docs.headings"
    )
    guide-base-buttons(
      v-if="section.id === 'buttons'"
      :documentation="docs.buttons"
    )
    guide-base-badges(
      v-if="section.id === 'badges'"
      :documentation="docs.badges"
    )
    guide-base-social-logins(
      v-if="section.id === 'socialLogins'"
      :documentation="docs.socialLogins"
    )
    guide-field-inputs(
      v-if="section.id === 'inputs'"
      :documentation="docs.inputs"
    )
    guide-field-selects(
      v-if="section.id === 'selects'"
      :documentation="docs.selects"
    )
    guide-field-textareas(
      v-if="section.id === 'textareas'"
      :documentation="docs.textareas"
    )
    guide-field-checkboxes(
      v-if="section.id === 'checkboxes'"
      :documentation="docs.checkboxes"
    )
    guide-field-radios(
      v-if="section.id === 'radios'"
      :documentation="docs.radios"
    )
    guide-field-toggles(
      v-if="section.id === 'toggles'"
      :documentation="docs.toggles"
    )
    guide-field-files(
      v-if="section.id === 'files'"
      :documentation="docs.files"
    )
    guide-field-tabs(
      v-if="section.id === 'tabs'"
      :documentation="docs.tabs"
    )
    guide-base-dividers(
      v-if="section.id === 'dividers'"
      :documentation="docs.dividers"
    )
    guide-base-progress-bars(
      v-if="section.id === 'progressBars'"
      :documentation="docs.progressBars"
    )
    guide-base-avatars(
      v-if="section.id === 'avatars'"
      :documentation="docs.avatars"
    )
    guide-base-icons(
      v-if="section.id === 'icons'"
      :documentation="docs.icons"
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
        avatars: false,
        badges: false,
        buttons: false,
        checkboxes: false,
        colors: false,
        dividers: false,
        files: false,
        headings: false,
        icons: false,
        inputs: false,
        progressBars: false,
        radios: false,
        selects: false,
        socialLogins: false,
        tabs: false,
        textareas: false,
        toggles: false
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
          id: "headings",
          headlines: {
            title: "HEADINGS",
            hasDocumentation: true
          }
        },
        {
          id: "buttons",
          headlines: {
            title: "BUTTONS",
            hasDocumentation: true
          }
        },
        {
          id: "badges",
          headlines: {
            title: "BADGES",
            hasDocumentation: true
          }
        },
        {
          id: "socialLogins",
          headlines: {
            title: "SOCIAL LOGINS",
            hasDocumentation: true
          }
        },
        {
          id: "inputs",
          headlines: {
            title: "INPUTS",
            hasDocumentation: true
          }
        },
        {
          id: "selects",
          headlines: {
            title: "SELECTS",
            hasDocumentation: true
          }
        },
        {
          id: "textareas",
          headlines: {
            title: "TEXTAREAS",
            hasDocumentation: true
          }
        },
        {
          id: "checkboxes",
          headlines: {
            title: "CHECKBOXES",
            hasDocumentation: true
          }
        },
        {
          id: "radios",
          headlines: {
            title: "RADIOS",
            hasDocumentation: true
          }
        },
        {
          id: "toggles",
          headlines: {
            title: "TOGGLES",
            hasDocumentation: true
          }
        },
        {
          id: "files",
          headlines: {
            title: "FILE UPLOAD",
            hasDocumentation: true
          }
        },
        {
          id: "tabs",
          headlines: {
            title: "TABS",
            hasDocumentation: true
          }
        },
        {
          id: "dividers",
          headlines: {
            title: "DIVIDERS",
            hasDocumentation: true
          }
        },
        {
          id: "progressBars",
          headlines: {
            title: "PROGRESS BARS",
            hasDocumentation: true
          }
        },
        {
          id: "avatars",
          headlines: {
            title: "AVATARS",
            hasDocumentation: true
          }
        },
        {
          id: "icons",
          headlines: {
            title: "ICONS FROM MATERIAL DESIGN",
            hasDocumentation: true
          }
        }
      ]
    };
  },

  methods: {
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
