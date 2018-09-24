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
    guide-colors(
      v-if="section.id === 'colors'"
      :colors="section.colors"
    )
    guide-base-headings(
      v-if="section.id === 'headings' && !docs.headings"
    )
    guide-base-buttons(
      v-if="section.id === 'buttons' && !docs.buttons"
      :buttons="section.buttons"
    )
    guide-base-badges(
      v-if="section.id === 'badges' && !docs.badges"
      :badges="section.badges"
    )
    guide-base-social-logins(
      v-if="section.id === 'socialLogins' && !docs.socialLogins"
      :socialLogins="section.socialLogins"
    )
    guide-field-inputs(
      v-if="section.id === 'inputs' && !docs.inputs"
      :inputs="section.inputs"
      class="c-index__form"
    )
    guide-field-selects(
      v-if="section.id === 'selects' && !docs.selects"
      :selects="section.selects"
      class="c-index__form"
    )
    guide-field-textareas(
      v-if="section.id === 'textareas' && !docs.textareas"
      :textareas="section.textareas"
      class="c-index__form"
    )
    guide-field-checkboxes(
      v-if="section.id === 'checkboxes' && !docs.checkboxes"
      :checkboxes="section.checkboxes"
      class="c-index__form"
    )
    guide-field-radios(
      v-if="section.id === 'radios' && !docs.radios"
      :radios="section.radios"
      class="c-index__form"
    )
    guide-field-toggles(
      v-if="section.id === 'toggles' && !docs.toggles"
      :toggles="section.toggles"
      class="c-index__form"
    )
    guide-field-files(
      v-if="section.id === 'files' && !docs.files"
      :files="section.files"
      class="c-index__form"
    )
    guide-field-tabs(
      v-if="section.id === 'tabs' && !docs.tabs"
      :tabs="section.tabs"
      class="c-index__form"
    )
    guide-base-dividers(
      v-if="section.id === 'dividers' && !docs.dividers"
      :dividers="section.dividers"
    )
    guide-base-loaders(
      v-if="section.id === 'loaders' && !docs.loaders"
      :loaders="section.loaders"
    )
    guide-base-avatars(
      v-if="section.id === 'avatars' && !docs.avatars"
      :avatars="section.avatars"
    )
    guide-base-icons(
      v-if="section.id === 'icons' && !docs.icons"
      :icons="section.icons"
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
import GuideBaseLoaders from "@/components/guide/GuideBaseLoaders";
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
import TheFooter from "@/components/layouts/TheFooter";
import TheGithubButtons from "@/components/layouts/TheGithubButtons";
import TheHeader from "@/components/layouts/TheHeader";
import TheLogo from "@/components/layouts/TheLogo";
import TheSubscriptionBox from "@/components/layouts/TheSubscriptionBox";

import colors from "@/schemas/colors";
import icons from "@/schemas/icons";

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
    GuideBaseLoaders,
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
        loaders: false,
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
            description: "Here is how you can join us in the dark side 👻",
            hasDocumentation: false
          }
        },
        {
          id: "colors",
          headlines: {
            title: "COLORS",
            description:
              "All our components are made using only these colors. No sugar added. 🤞",
            hasDocumentation: false
          },
          colors: colors
        },
        {
          id: "headings",
          headlines: {
            title: "HEADINGS",
            description: "npm install --save @darkmode/base-heading",
            hasDocumentation: true
          },
          headings: []
        },
        {
          id: "buttons",
          headlines: {
            title: "BUTTONS",
            description: "npm install --save @darkmode/base-button",
            hasDocumentation: true
          },
          buttons: {
            colors: ["blue", "green", "red", "orange", "black", "white"],
            icons: [
              "add_circle",
              "check_circle",
              "favorite_border",
              "star",
              "get_app",
              "camera_alt"
            ],
            sizes: ["large", "medium", "default", "small", "mini"]
          }
        },
        {
          id: "badges",
          headlines: {
            title: "BADGES",
            description: "npm install --save @darkmode/base-badge",
            hasDocumentation: true
          },
          badges: {
            colors: [
              "blue",
              "green",
              "red",
              "orange",
              "turquoise",
              "purple",
              "black",
              "white"
            ],
            sizes: ["large", "medium", "default", "small", "mini"]
          }
        },
        {
          id: "socialLogins",
          headlines: {
            title: "SOCIAL LOGINS",
            description: "npm install --save @darkmode/base-social-login",
            hasDocumentation: true
          },
          socialLogins: {
            networks: ["facebook", "messenger", "twitter", "google"],
            sizes: ["large", "small", "mini"]
          }
        },
        {
          id: "inputs",
          headlines: {
            title: "INPUTS",
            description: "npm install --save @darkmode/field-input",
            hasDocumentation: true
          },
          inputs: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "selects",
          headlines: {
            title: "SELECTS",
            description: "npm install --save @darkmode/field-select",
            hasDocumentation: true
          },
          selects: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "textareas",
          headlines: {
            title: "TEXTAREAS",
            description: "npm install --save @darkmode/field-textarea",
            hasDocumentation: true
          },
          textareas: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "checkboxes",
          headlines: {
            title: "CHECKBOXES",
            description: "npm install --save @darkmode/field-checkbox",
            hasDocumentation: true
          },
          checkboxes: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["normal", "success", "error", "warning"]
            ]
          }
        },
        {
          id: "radios",
          headlines: {
            title: "RADIOS",
            description: "npm install --save @darkmode/field-radio",
            hasDocumentation: true
          },
          radios: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["normal", "success", "error", "warning"]
            ]
          }
        },
        {
          id: "toggles",
          headlines: {
            title: "TOGGLES",
            description: "npm install --save @darkmode/field-toggle",
            hasDocumentation: true
          },
          toggles: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["normal", "success", "error", "warning"]
            ]
          }
        },
        {
          id: "files",
          headlines: {
            title: "FILE UPLOAD",
            description: "npm install --save @darkmode/field-file",
            hasDocumentation: true
          },
          files: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "tabs",
          headlines: {
            title: "TABS",
            description: "npm install --save @darkmode/field-tabs",
            hasDocumentation: true
          },
          tabs: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "dividers",
          headlines: {
            title: "DIVIDERS",
            description: "npm install --save @darkmode/base-divider",
            hasDocumentation: true
          },
          dividers: {
            colors: [
              "blue",
              "green",
              "red",
              "orange",
              "turquoise",
              "purple",
              "black",
              "white"
            ],
            sizes: ["large", "small"]
          }
        },
        {
          id: "loaders",
          headlines: {
            title: "LOADERS",
            description: "npm install --save @darkmode/base-loader",
            hasDocumentation: true
          },
          loaders: [
            {
              color: "blue",
              labelMain: "Loading",
              labelSecondary: "10%"
            },
            {
              color: "green",
              labelMain: "Progression",
              labelSecondary: "20%"
            },
            {
              color: "red",
              labelMain: "Experience",
              labelSecondary: "30%"
            },
            {
              color: "orange",
              labelMain: "XPs until next level",
              labelSecondary: "2/5"
            },
            {
              color: "turquoise",
              labelMain: "XPs until next level",
              labelSecondary: "5/10"
            },
            {
              color: "purple",
              labelMain: "XPs until next level",
              labelSecondary: "6/10"
            },
            {
              color: "black",
              labelMain: "Remaining Steps",
              labelSecondary: "7/10"
            },
            {
              color: "white",
              labelMain: "Completed Steps",
              labelSecondary: "8/10"
            }
          ]
        },
        {
          id: "avatars",
          headlines: {
            title: "AVATARS",
            description: "npm install --save @darkmode/base-avatar",
            hasDocumentation: true
          },
          avatars: {
            sizes: ["huge", "large", "medium", "default", "small", "mini"],
            complementaries: {
              huge: [
                {
                  src: "/images/medley/mastercard.jpg"
                },
                {
                  src: "/images/medley/visa.jpg"
                }
              ],
              large: [
                {
                  src: "/images/medley/paypal.jpg"
                }
              ]
            }
          }
        },
        {
          id: "icons",
          headlines: {
            title: "ICONS",
            description: "npm install --save @darkmode/base-icon",
            hasDocumentation: true
          },
          icons: icons
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
    grid-template-columns: repeat(auto-fill, 360px);
    text-align: left;

    input::placeholder,
    textarea::placeholder {
      text-transform: capitalize;
    }
  }
}
</style>
