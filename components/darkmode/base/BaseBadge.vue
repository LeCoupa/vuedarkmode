<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  @click="onClick(id, $event)"
  :class=`[
    "dm-base-badge",
    "dm-base-badge--" + color,
    "dm-base-badge--" + size
  ]`
  :id="id"
): slot
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
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(id, event) {
      this.$emit("click", id, event);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";

$c: ".dm-base-badge";
$colors: black, blue, green, orange, purple, red, turquoise, white;
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;
  color: $white;
  text-transform: uppercase;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  user-select: none;

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      border-color: map-get($mainColors, $color);
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: 0 (10px + 1px * $i);
      font-size: 12 + (1px * $i);
      line-height: 20px + (2px * $i);
    }
  }
}
</style>
