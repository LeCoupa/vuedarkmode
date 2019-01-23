<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
header.c-the-header#welcomeToTheDarkMode
  the-logo

  base-divider(
    class="c-the-header__divider"
    color="blue"
    size="small"
  )
  base-heading(
    :uppercase="true"
    tag="h1"
  ) A Minimalist Dark Design System for Vue.js 🎨

  base-heading(
    color="grey"
    tag="h2"
    weight="regular"
  ) Based components designed for the insomniacs who enjoy dark interfaces as much as we do.

  the-github-buttons(
    class="c-the-header__github-buttons"
    repo="vuedarkmode"
    user="lecoupa"
  )
  the-subscription-box
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// VUE DARK MODE
import BaseDivider from "@/../lib/components/base/BaseDivider";
import BaseHeading from "@/../lib/components/base/BaseHeading";

// PROJECT
import TheGithubButtons from "@/components/layouts/TheGithubButtons";
import TheLogo from "@/components/layouts/TheLogo";
import TheSubscriptionBox from "@/components/layouts/TheSubscriptionBox";

export default {
  components: {
    BaseDivider,
    BaseHeading,
    TheGithubButtons,
    TheLogo,
    TheSubscriptionBox
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".c-the-header";

#{$c} {
  margin-right: auto;
  margin-left: auto;
  max-width: 800px;

  #{$c}__divider {
    margin: 20px auto 15px;
  }

  #{$c}__github-buttons {
    margin-top: 20px;
  }
}
</style>
