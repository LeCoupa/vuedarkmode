<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  the-logo(
    class="c-index__logo"
  )
  base-divider

  base-heading(
    type="h1"
  ) A MINIMALIST DARK DESIGN SYSTEM FOR VUE.JS 👩‍🎨👨‍🎨

  base-heading(
    type="h2"
    color="grey"
    fontWeight="regular"
  ) Based components designed for the insomniacs who enjoy dark interfaces as much as we do.

  the-github-buttons(
    class="c-index__github-buttons"
    repo="dark-mode"
    user="lecoupa"
  )
  the-subscription-box

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
    guide-colors(
      v-if="section.colors"
      :colors="section.colors"
    )
    guide-base-headings(
      v-if="section.headings && !docs.headings"
    )
    guide-base-buttons(
      v-if="section.buttons && !docs.buttons"
      :buttons="section.buttons"
    )
    guide-base-badges(
      v-if="section.badges && !docs.badges"
      :badges="section.badges"
    )
    guide-base-social-logins(
      v-if="section.socialLogins && !docs.socialLogins"
      :socialLogins="section.socialLogins"
    )
    guide-field-inputs(
      v-if="section.inputs && !docs.inputs"
      :inputs="section.inputs"
      class="c-index__form"
    )
    guide-field-selects(
      v-if="section.selects && !docs.selects"
      :selects="section.selects"
      class="c-index__form"
    )
    guide-field-textareas(
      v-if="section.textareas && !docs.textareas"
      :textareas="section.textareas"
      class="c-index__form"
    )
    guide-field-checkboxes(
      v-if="section.checkboxes && !docs.checkboxes"
      :checkboxes="section.checkboxes"
      class="c-index__form"
    )
    guide-field-radios(
      v-if="section.radios && !docs.radios"
      :radios="section.radios"
      class="c-index__form"
    )
    guide-field-toggles(
      v-if="section.toggles && !docs.toggles"
      :toggles="section.toggles"
      class="c-index__form"
    )
    guide-field-files(
      v-if="section.files && !docs.files"
      :files="section.files"
      class="c-index__form"
    )
    guide-field-tabs(
      v-if="section.tabs && !docs.tabs"
      :tabs="section.tabs"
      class="c-index__form"
    )
    guide-base-dividers(
      v-if="section.dividers && !docs.dividers"
      :dividers="section.dividers"
    )
    guide-base-loaders(
      v-if="section.loaders && !docs.loaders"
      :loaders="section.loaders"
    )
    guide-base-avatars(
      v-if="section.avatars && !docs.avatars"
      :avatars="section.avatars"
    )
    guide-base-icons(
      v-if="section.icons && !docs.icons"
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
import BaseHeading from "@/components/darkmode/base/BaseHeading";
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
import TheFooter from "@/components/layouts/TheFooter";
import TheGithubButtons from "@/components/layouts/TheGithubButtons";
import TheLogo from "@/components/layouts/TheLogo";
import TheSubscriptionBox from "@/components/layouts/TheSubscriptionBox";

import colors from "@/schemas/colors";
import icons from "@/schemas/icons";

export default {
  components: {
    BaseDivider,
    BaseHeading,
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
    TheGithubButtons,
    TheFooter,
    TheLogo,
    TheSubscriptionBox
  },

  data() {
    return {
      // --> STATE <--
      docs: {
        colors: false,
        headings: false,
        buttons: false,
        badges: false,
        socialLogins: false,
        inputs: false,
        selects: false,
        textareas: false,
        checkboxes: false,
        radios: false,
        toggles: false,
        files: false,
        tabs: false,
        dividers: false,
        loaders: false,
        avatars: false,
        icons: false
      },

      // --> COMPONENTS <--
      sections: [
        {
          id: "colors",
          headlines: {
            title: "COLORS",
            description: "With a great description",
            hasDocumentation: false
          },
          colors: colors
        },
        {
          id: "headings",
          headlines: {
            title: "HEADINGS",
            description: "With a great description",
            hasDocumentation: true
          },
          headings: []
        },
        {
          id: "buttons",
          headlines: {
            title: "BUTTONS",
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
            description: "With a great description",
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
  #{$c}__github-buttons {
    margin-top: 20px;
  }

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
