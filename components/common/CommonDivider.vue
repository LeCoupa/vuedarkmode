<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
hr(
  :class=`[
    "c-common-divider",
    "c-common-divider--" + size,
    "c-common-divider--" + color
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
$c: ".c-common-divider";
$colors: black, blue, green, orange, purple, red, turquoise, white;

#{$c} {
  display: block;
  border: 0;
  border-top-style: solid;

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      border-top-color: map-get($mainColors, $color);
    }
  }

  // --> SIZES <--

  &--small {
    margin: 15px auto;
    max-width: 60px;
    height: 4px;
    border-top-width: 4px;
  }

  &--large {
    margin: 40px auto;
    max-width: 800px;
    height: 1px;
    border-top-width: 1px;
  }
}
</style>
