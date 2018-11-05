<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
hr(
  :class=`[
    "dm-base-divider",
    "dm-base-divider--" + size,
    "dm-base-divider--" + color
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
      default: "blue",
      validator(x) {
        return (
          [
            "black",
            "blue",
            "green",
            "orange",
            "purple",
            "red",
            "turquoise",
            "white"
          ].indexOf(x) !== -1
        );
      }
    },
    size: {
      type: String,
      default: "small",
      validator(x) {
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-base-divider";
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
    margin: 50px auto;
    max-width: 800px;
    height: 1px;
    border-top-width: 1px;
  }
}
</style>
