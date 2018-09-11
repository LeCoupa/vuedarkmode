<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "c-base-heading",
    "c-base-heading--" + tag
  ]`
): slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-heading";

#{$c} {
  // --> TAGS <--

  &--h1 {
    color: $white;
    font-size: 32px;
    font-family: "Heebo Bold";
    line-height: 44px;
  }

  &--h2 {
    color: #fafbfc;
    font-size: 22px;
    font-family: "Heebo Medium";
    line-height: 32px;
  }

  &--h3 {
    color: #ecf5fd;
    font-size: 20px;
    font-family: "Heebo Regular";
    line-height: 28px;
  }

  &--p {
    color: #ffffff;
    font-size: 16px;
    font-family: "Heebo Regular";
    line-height: 24px;
  }
}
</style>
