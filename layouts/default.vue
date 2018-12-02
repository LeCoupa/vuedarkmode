<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.l-default
  .l-default__container
    the-navigation(
      @titleClick="onNavigationClick"
      @itemClick="onNavigationClick"
      :categories="navigation.categories"
      class="l-default__navigation"
    )
    .l-default__page-wrapper
      the-github-corner(
        link="https://github.com/LeCoupa/vuedarkmode"
        class="l-default__github-corner"
      )
      .l-default__page-inner
        nuxt
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import TheGithubCorner from "@/components/layouts/TheGithubCorner";
import TheNavigation from "@/components/layouts/TheNavigation";

export default {
  components: {
    TheGithubCorner,
    TheNavigation
  },

  data() {
    return {
      // --> COMPONENTS <--

      navigation: {
        categories: [
          {
            id: "installation",
            title: "💻 Installation"
          },
          {
            id: "packageOptions",
            title: "📦 Package Options"
          },
          {
            id: "colors",
            title: "🎨 Colors"
          },
          {
            id: "base",
            title: "🤖 Base Components",
            items: [
              {
                label: "Alerts",
                id: "baseAlert",
                active: false
              },
              {
                label: "Avatars",
                id: "baseAvatar",
                active: false
              },
              {
                label: "Badges",
                id: "baseBadge",
                active: false
              },
              {
                label: "Buttons",
                id: "baseButton",
                active: false
              },
              {
                label: "Dividers",
                id: "baseDivider",
                active: false
              },
              {
                label: "Headings",
                id: "baseHeading",
                active: false
              },
              {
                label: "Icons",
                id: "baseIcon",
                active: false
              },
              {
                label: "List Items",
                id: "baseListItem",
                active: false
              },
              {
                label: "Progress Bars",
                id: "baseProgressBar",
                active: false
              },
              {
                label: "Social Logins",
                id: "baseSocialLogin",
                active: false
              },
              {
                label: "Spinners",
                id: "baseSpinner",
                active: false
              },
              {
                label: "Toasts",
                id: "baseToast",
                active: false
              }
            ]
          },
          {
            id: "form",
            title: "📃 Form Components",
            items: [
              {
                label: "Checkboxes",
                id: "fieldCheckbox",
                active: false
              },
              {
                label: "Files",
                id: "fieldFile",
                active: false
              },
              {
                label: "Inputs",
                id: "fieldInput",
                active: false
              },
              {
                label: "Radios",
                id: "fieldRadio",
                active: false
              },
              {
                label: "Selects",
                id: "fieldSelect",
                active: false
              },
              {
                label: "Tabs",
                id: "fieldTabs",
                active: false
              },
              {
                label: "Textareas",
                id: "fieldTextarea",
                active: false
              },
              {
                label: "Toggles",
                id: "fieldToggle",
                active: false
              }
            ]
          }
        ]
      }
    };
  },

  mounted() {
    let hash = this.$route.hash;

    if (hash) {
      this.scrollToSection(hash.substr(1));
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onNavigationClick(id) {
      this.scrollToSection(id);
    },

    // --> HELPERS <--

    scrollToSection(id) {
      const section = this.$el.querySelector(`#${id}`);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });

        // Update active navigation item and hash url
        this.navigation.categories.map(el => {
          if (el.items) {
            el.items.map(el => (el.active = id === el.id));
          }
        });
        this.$router.replace(`/#${id}`);
      }
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// Imported stylesheets for Javascript libraries (e.g. nprogress)
@import "assets/libraries/libraries.animate";
@import "assets/libraries/libraries.highlightjs";

// Unclassed HTML elements (e.g. a {}, blockquote {}, address {})
@import "./assets/elements/elements.inline";

// Objects, abstractions, and design patterns (e.g. .o-flexbox-column {})
@import "./assets/objects/objects.layouts";

// High-specificity, very explicit selectors
@import "./assets/utilities/utilities.alignments";
@import "./assets/utilities/utilities.inline";

// VARIABLES
$c: ".l-default";

html {
  background-color: $mirage;
  color: $white;
  text-align: center;
  word-spacing: 1px;
  font-size: 16px;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;

  a {
    outline: 0;
    text-decoration: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 2px 0 $azure-radiance;
      transition: box-shadow ease-in-out 0s;
    }
  }

  #{$c} {
    #{$c}__container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      overflow: hidden;

      #{$c}__navigation {
        flex: 0 0 auto;
      }

      #{$c}__page-wrapper {
        position: relative;
        overflow-y: scroll;
        flex: 1;
        padding: 60px 40px;

        #{$c}__github-corner {
          position: absolute;
          top: 0;
          right: 0;
          border: 0;
        }

        #{$c}__page-inner {
          margin: 0 auto;
          max-width: 900px;
        }
      }
    }
  }
}
</style>
