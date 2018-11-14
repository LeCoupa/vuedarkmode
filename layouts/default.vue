<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.l-default
  the-github-corner(
    link="https://github.com/LeCoupa/vuedarkmode"
    class="l-default__github-corner"
  )
  .l-default__container
    the-navigation(
      @titleClick="onNavigationClick"
      @itemClick="onNavigationClick"
      :categories="navigation.categories"
      class="l-default__navigation"
    )
    .l-default__page-wrapper
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
                label: "Alert",
                id: "baseAlert"
              },
              {
                label: "Avatar",
                id: "baseAvatar"
              },
              {
                label: "Badge",
                id: "baseBadge"
              },
              {
                label: "Button",
                id: "baseButton"
              },
              {
                label: "Divider",
                id: "baseDivider"
              },
              {
                label: "Heading",
                id: "baseHeading"
              },
              {
                label: "Icon",
                id: "baseIcon"
              },
              {
                label: "Progress Bar",
                id: "baseProgressBar"
              },
              {
                label: "Social Login",
                id: "baseSocialLogin"
              }
            ]
          },
          {
            id: "form",
            title: "📃 Form Components",
            items: [
              {
                label: "Checkbox",
                id: "fieldCheckbox"
              },
              {
                label: "File",
                id: "fieldFile"
              },
              {
                label: "Input",
                id: "fieldInput"
              },
              {
                label: "Radio",
                id: "fieldRadio"
              },
              {
                label: "Select",
                id: "fieldSelect"
              },
              {
                label: "Tabs",
                id: "fieldTabs"
              },
              {
                label: "Textarea",
                id: "fieldTextarea"
              },
              {
                label: "Toggle",
                id: "fieldToggle"
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
    text-decoration: none;
    cursor: pointer;
  }

  #{$c} {
    #{$c}__github-corner {
      position: absolute;
      top: 0;
      border: 0;
      right: 0;
      z-index: 2;
    }

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
        overflow-y: scroll;
        flex: 1;
        padding: 60px 40px;

        #{$c}__page-inner {
          margin: 0 auto;
          max-width: 900px;
        }
      }
    }
  }
}
</style>
