<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
hr(
  :class=`[
    "gb-base-divider",
    "gb-base-divider--" + color,
    "gb-base-divider--" + size,
    "gb-base-divider--" + theme
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
// PROJECT: MIXINS
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [ThemeMixin],

  props: {
    color: {
      type: String,
      default: "black",
      validator(x) {
        return [
          "black",
          "blue",
          "green",
          "grey",
          "orange",
          "purple",
          "red",
          "turquoise",
          "white",
          "yellow"
        ].includes(x)
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
        return ["small", "large"].includes(x)
      }
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";

// VARIABLES
$c: ".gb-base-divider";
$colors: "black", "blue", "green", "grey", "orange", "purple", "red", "turquoise", "white", "yellow";

#{$c} {
  display: block;
  border: 0;
  border-top-style: solid;

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

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      // --> COLORS <--

      @each $color in $colors {
        &#{$c}--#{$color} {
          border-top-color: mdg($theme, "colors", $color);
        }
      }
    }
  }
}
</style>
