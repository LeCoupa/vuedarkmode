<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
header.c-the-header
  the-logo

  base-divider(
    class="c-the-header__divider"
  )

  base-heading(
    type="h1"
  ) A MINIMALIST DARK DESIGN SYSTEM FOR VUE.JS 🎨

  base-heading(
    color="grey"
    fontWeight="regular"
    type="h2"
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
// PROJECT
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import BaseHeading from "@/components/darkmode/base/BaseHeading";
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
