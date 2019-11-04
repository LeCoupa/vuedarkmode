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
      "dm-base-badge--clickable": $listeners.click,
      "dm-base-badge--filled": filled
    }
  ]`
  :tabindex="$listeners.click ? '0' : null"
)
  slot
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
    filled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return [
          "micro",
          "mini",
          "small",
          "default",
          "medium",
          "large"
        ].includes(x);
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(id, event) {
      this.$emit("click", id, event);
    },

    onKeypress(event) {
      if (event.code === "Space") {
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
@import "src/assets/stylesheets/settings/_settings.colors.scss";
@import "src/assets/stylesheets/tools/_tools.mixins.scss";

// VARIABLES
$c: ".dm-base-badge";
$colors: "black", "blue", "green", "orange", "purple", "red", "turquoise",
  "white";
$sizes: "micro", "mini", "small", "default", "medium", "large";

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

  @include no-tap-highlight-color;

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      border-color: map-get($mainColors, $color);

      &#{$c}--filled {
        background-color: map-get($mainColors, $color);
      }

      &:focus {
        box-shadow: 0 0 0 2px $mirage, 0 0 0 3px map-get($mainColors, $color);
        transition: box-shadow linear 0s;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: 0 (10px + 1px * $i);
      font-size: 10 + (1px * $i);

      @if ($size == "micro") {
        line-height: 18px;
      } @else if ($size == "mini") {
        line-height: 19px;
      } @else if ($size == "small") {
        line-height: 22px;
      } @else if ($size == "default") {
        line-height: 23px;
      } @else if ($size == "medium") {
        line-height: 25px;
      } @else if ($size == "large") {
        line-height: 30px;
      }
    }
  }

  // --> BOOLEANS <--

  &--clickable {
    cursor: pointer;
  }
}
</style>
