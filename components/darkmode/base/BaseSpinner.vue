<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  @click="onClick"
  :class=`[
    "dm-base-spinner",
    "dm-base-spinner--" + color,
    "dm-base-spinner--" + size
  ]`
)
  .dm-base-spinner__wave.dm-base-spinner__wave--first
  .dm-base-spinner__wave.dm-base-spinner__wave--second
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    color: {
      type: String,
      default: "white",
      validator(x) {
        return ["blue", "green", "orange", "red", "white"].indexOf(x) !== -1;
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
// VARIABLES
$c: ".dm-base-spinner";
$colors: blue, green, red, orange, white;
$sizes: mini, small, default, medium, large;

#{$c} {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;

  #{$c}__wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    animation: sk-bounce 2s infinite ease-in-out;

    &--second {
      animation-delay: -1s;
    }
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      #{$c}__wave {
        background-color: map-get($mainColors, $color);
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      width: (20px + 10px * $i);
      height: (20px + 10px * $i);
    }
  }
}

// --> ANIMATIONS <--

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
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
