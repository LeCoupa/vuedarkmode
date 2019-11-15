<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  @click="onClick"
  :class=`[
    "dm-base-spinner",
    "dm-base-spinner--" + color,
    "dm-base-spinner--" + size,
    "dm-base-spinner--" + theme
  ]`
)
  .dm-base-spinner__wave.dm-base-spinner__wave--first

  .dm-base-spinner__wave.dm-base-spinner__wave--second
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import CommonMixin from "../../mixins/CommonMixin.js";

export default {
  mixins: [CommonMixin],

  props: {
    color: {
      type: String,
      default: "blue",
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
          "white"
        ].includes(x);
      }
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return [
          "nano",
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

    onClick(event) {
      this.$emit("click", event);
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

// VARIABLES
$c: ".dm-base-spinner";
$colors: "black", "blue", "green", "grey", "orange", "purple", "red",
  "turquoise", "white";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large";

#{$c} {
  position: relative;
  display: inline-block;
  cursor: wait;

  #{$c}__wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    animation: bounce 2s infinite linear;

    &--second {
      animation-delay: -1s;
    }
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      #{$c}__wave {
        background-color: mdg($dark, "colors", $color);
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      @if ($size == "nano") {
        width: 14px;
        height: 14px;
      } @else if ($size == "micro") {
        width: 16px;
        height: 16px;
      } @else {
        width: (20px + 10px * ($i - 2));
        height: (20px + 10px * ($i - 2));
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
    }
  }
}

// --> ANIMATIONS <--

@keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
