<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
hr(
  :class=`[
    "c-base-divider",
    "c-base-divider--" + size,
    "c-base-divider--" + color
  ]`
)
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue"
    },
    size: {
      type: String,
      default: "small"
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-divider";

#{$c} {
  display: block;
  border: 0;
  border-top-style: solid;

  // --> COLORS <--

  &--black {
    border-top-color: #313d4f;
  }

  &--blue {
    border-top-color: #1991eb;
  }

  &--green {
    border-top-color: #81c926;
  }

  &--red {
    border-top-color: #ff4b64;
  }

  &--white {
    border-top-color: $white;
  }

  &--yellow {
    border-top-color: #faca00;
  }

  // --> SIZES <--

  &--small {
    margin: 15px auto;
    width: 60px;
    height: 4px;
    border-top-width: 4px;
  }

  &--big {
    margin: 40px auto;
    width: 800px;
    height: 1px;
    border-top-width: 1px;
  }
}
</style>
