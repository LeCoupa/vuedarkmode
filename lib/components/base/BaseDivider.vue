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
    margin: computedMargin
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
  },

  computed: {
    computedMargin() {
      if (this.margin) {
        return this.margin;
      }

      if (this.size === "small") {
        return "20px auto";
      } else if (this.size === "large") {
        return "40px auto";
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
    width: 60px;
    height: 4px;
    border-top-width: 4px;
  }

  &--large {
    width: 100%;
    height: 1px;
    border-top-width: 1px;
  }
}
</style>
