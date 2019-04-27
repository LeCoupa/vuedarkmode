<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  :class=`[
    "dm-base-number",
    "dm-base-number--" + color
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
$c: ".dm-base-number";
$colors: black, blue, green, orange, purple, red, turquoise, white;

#{$c} {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-width: 3px;
  border-style: solid;
  border-radius: 100%;
  background-size: cover;
  box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
  font-size: 16px;
  user-select: none;

  #{$c}__number {
    font-weight: 800;
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      border-color: map-get($mainColors, $color);
    }
  }
}
</style>
