<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.l-default
  the-github-corner(
    link="https://github.com/LeCoupa/vuedarkmode"
  )
  .l-default__inner
    the-navigation

    .l-default__content
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
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// Imported stylesheets for Javascript libraries (e.g. nprogress)
@import "assets/libraries/libraries.highlightjs";

// Unclassed HTML elements (e.g. a {}, blockquote {}, address {})
@import "./assets/elements/elements.inline";

// Objects, abstractions, and design patterns (e.g. .o-flexbox-column {})
@import "./assets/objects/objects.layouts";

// High-specificity, very explicit selectors
@import "./assets/utilities/utilities.alignments";
@import "./assets/utilities/utilities.inline";

$c: ".l-default";

html {
  overflow-y: scroll;
  box-sizing: border-box;
  min-height: 100%;
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

  #{$c} {
    margin: 0 40px;

    #{$c}__inner {
      #{$c}__content {
        margin: 60px auto;
        max-width: 1050px;
      }
    }
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}
</style>
