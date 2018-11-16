<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  @click="onClick(id, $event)"
  @keypress.prevent="onKeypress"
  :class=`[
    "dm-base-badge",
    "dm-base-badge--" + color,
    "dm-base-badge--" + size,
    {
      "dm-base-badge--clickable": clickable
    }
  ]`
  :id="id"
  :tabindex="clickable ? '0' : null"
): slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
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
      if (this.clickable) {
        this.$emit("click", id, event);
      }
    },

    onKeypress(event) {
      if (event.which === 32) {
        event.target.click();
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
$c: ".dm-base-badge";
$colors: black, blue, green, orange, purple, red, turquoise, white;
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  outline: 0;
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

      &:focus {
        box-shadow: 0 0 0 2px $mirage, 0 0 0 3px map-get($mainColors, $color);
      }
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

  // --> BOOLEANS <--

  &--clickable {
    cursor: pointer;
  }
}
</style>
