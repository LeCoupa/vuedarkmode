<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  :class=`[
    "dm-base-number",
    "dm-base-number--" + color,
    "dm-base-number--" + size
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
    class="dm-base-number__icon"
  )

  span(
    v-else-if="number"
    class="dm-base-number__number"
  ) {{ number }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon
  },

  props: {
    color: {
      type: String,
      default: "blue",
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
      default: "white"
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
        return ["small", "default"].includes(x);
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
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "src/assets/stylesheets/settings/_datasets.scss";

// VARIABLES
$c: ".dm-base-number";
$colors: "black", "blue", "green", "orange", "purple", "red", "turquoise",
  "white";

#{$c} {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-width: 3px;
  border-style: solid;
  border-radius: 100%;
  background-size: cover;
  box-shadow: 0 1px 5px 0
    rgba(mdg($darkTheme, "box-shadows", "default", "primary"), 0.6);
  color: mdg($darkTheme, "colors", "white");
  user-select: none;

  #{$c}__number {
    font-weight: 800;
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      border-color: mdg($darkTheme, "colors", $color);
    }
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
}
</style>
