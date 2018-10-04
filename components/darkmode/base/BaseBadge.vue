<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  :class=`[
    "dm-base-badge",
    "dm-base-badge--" + color,
    "dm-base-badge--" + size
  ]`
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
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".dm-base-badge";
$colors: black, blue, green, orange, purple, red, turquoise, white;
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  border-radius: 100px;
  user-select: none;
  color: $white;

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
