<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
component(
  @click="onClick"
  :class=`[
    "gb-base-heading",
    "gb-base-heading--" + tag,
    "gb-base-heading--" + computedTheme,
    {
      ["gb-base-heading--" + color]: color,
      ["gb-base-heading--weight-" + weight]: weight,
      "gb-base-heading--uppercase": uppercase
    }
  ]`
  :is="tag"
)
  slot
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
      default: null,
      validator(x) {
        return ["black", "blue", "green", "grey", "orange", "red", "white"].includes(x)
      }
    },
    tag: {
      type: String,
      required: true,
      validator(x) {
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small"].includes(x)
      }
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    weight: {
      type: String,
      default: null,
      validator(x) {
        return ["thin", "light", "regular", "medium", "bold", "extrabold", "black"].includes(x)
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick() {
      this.$emit("click")
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
$c: ".gb-base-heading";
$colors: "black", "blue", "green", "grey", "orange", "red", "white";

#{$c} {
  margin: 0;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  // --> TAGS <--

  &--h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
  }

  &--h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
  }

  &--h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
  }

  &--h4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }

  &--h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
  }

  &--h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }

  &--p {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  &--small {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  // --> WEIGHTS <--

  &--weight-thin {
    font-weight: 100;
  }

  &--weight-light {
    font-weight: 300;
  }

  &--weight-regular {
    font-weight: 400;
  }

  &--weight-medium {
    font-weight: 500;
  }

  &--weight-bold {
    font-weight: 700;
  }

  &--weight-extrabold {
    font-weight: 800;
  }

  &--weight-black {
    font-weight: 900;
  }

  // --> BOOLEANS <--

  &--uppercase {
    text-transform: uppercase;
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      color: mdg($theme, "fonts", "default", "primary");

      // --> COLORS <--

      @each $color in $colors {
        &#{$c}--#{$color} {
          color: mdg($theme, "colors", $color);
        }
      }

      // --> TAGS <--

      &#{$c}--h1,
      &#{$c}--h2,
      &#{$c}--p,
      &#{$c}--small {
        color: mdg($theme, "fonts", "default", "primary");
      }

      &#{$c}--h3,
      &#{$c}--h4,
      &#{$c}--h5,
      &#{$c}--h6 {
        color: mdg($theme, "fonts", "default", "secondary");
      }
    }
  }
}
</style>
