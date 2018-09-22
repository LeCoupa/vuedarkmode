<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.l-default
  .l-default__inner
    the-github-corner(
      class="l-default__github-corner"
      link="https://github.com/LeCoupa/awesome-cheatsheets"
    )
    the-light-switch

    nuxt
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import TheGithubCorner from "@/components/layouts/TheGithubCorner";
import TheLightSwitch from "@/components/layouts/TheLightSwitch";

export default {
  components: {
    TheGithubCorner,
    TheLightSwitch
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// Unclassed HTML elements (e.g. a {}, blockquote {}, address {})
@import "./assets/elements/inline";

$c: ".l-default";

html {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 60px 0 40px;
  min-height: 100%;
  background-color: $mirage;
  color: white;
  text-align: center;
  word-spacing: 1px;
  font-size: 16px;
  font-family: "Heebo Regular", "Helvetica Neue", Source Sans Pro, Helvetica,
    Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;

  #{$c} {
    margin: 0 40px;

    #{$c}__inner {
      margin: 0 auto;
      max-width: 1000px;
    }
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}

@font-face {
  font-family: "Heebo Thin";
  src: url("/fonts/heebo/Heebo-Thin.otf");
}

@font-face {
  font-family: "Heebo Light";
  src: url("/fonts/heebo/Heebo-Light.otf");
}

@font-face {
  font-family: "Heebo Regular";
  src: url("/fonts/heebo/Heebo-Regular.otf");
}

@font-face {
  font-family: "Heebo Medium";
  src: url("/fonts/heebo/Heebo-Medium.otf");
}

@font-face {
  font-family: "Heebo Bold";
  src: url("/fonts/heebo/Heebo-Bold.otf");
}

@font-face {
  font-family: "Heebo ExtraBold";
  src: url("/fonts/heebo/Heebo-ExtraBold.otf");
}

@font-face {
  font-family: "Heebo Black";
  src: url("/fonts/heebo/Heebo-Black.otf");
}
</style>
