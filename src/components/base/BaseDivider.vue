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
  :style=`{
    margin: margin
  }`
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
      default: "black",
      validator(x) {
        return [
          "black",
          "blue",
          "green",
          "orange",
          "purple",
          "red",
          "turquoise",
          "white"
        ].includes(x);
      }
    },
    margin: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "large",
      validator(x) {
        return ["small", "large"].includes(x);
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
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "src/assets/stylesheets/settings/_datasets.scss";

// VARIABLES
$c: ".dm-base-divider";
$colors: "black", "blue", "green", "orange", "purple", "red", "turquoise",
  "white";

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
    margin: 20px auto;
    width: 60px;
    height: 4px;
    border-top-width: 4px;
  }

  &--large {
    margin: 40px auto;
    width: 100%;
    height: 1px;
    border-top-width: 1px;
  }
}
</style>
