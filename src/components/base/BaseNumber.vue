<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  :class=`[
    "gb-base-number",
    "gb-base-number--" + color,
    "gb-base-number--" + size,
    "gb-base-number--" + computedTheme
  ]`
  :style=`{
    backgroundImage: image ? "url(" + image + ")" : null,
    borderColor: colorHex
  }`
)
  base-icon(
    v-if="icon"
    :color="iconColor"
    :name="icon"
    :size="iconSize"
    class="gb-base-number__icon"
  )

  span(
    v-else-if="number"
    class="gb-base-number__number"
  ) {{ number }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseIcon from "./BaseIcon.vue"

// PROJECT: MIXINS
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  components: {
    BaseIcon
  },

  mixins: [ThemeMixin],

  props: {
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["black", "blue", "green", "orange", "purple", "red", "turquoise", "white"].includes(x)
      }
    },
    colorHex: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: null
    },
    iconSize: {
      type: String,
      default: "22px"
    },
    image: {
      type: String,
      default: null
    },
    number: {
      type: Number,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["small", "default"].includes(x)
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
$c: ".gb-base-number";
$colors: "black", "blue", "green", "orange", "purple", "red", "turquoise", "white";

#{$c} {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-width: 3px;
  border-style: solid;
  border-radius: 100%;
  background-size: cover;
  user-select: none;

  #{$c}__number {
    font-weight: 800;
  }

  // --> SIZES <--

  &--small {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  &--default {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      box-shadow: 0 1px 5px 0 mdg($theme, "box-shadows", "default", "primary");
      color: mdg($theme, "fonts", "default", "primary");

      // --> COLORS <--

      @each $color in $colors {
        &#{$c}--#{$color} {
          border-color: mdg($theme, "colors", $color);
        }
      }
    }
  }
}
</style>
