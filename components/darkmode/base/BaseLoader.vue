<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-base-loader",
    "dm-base-loader--" + color
  ]`
)
  span(
    v-if="labelMain || labelSecondary"
    class="dm-base-loader__content"
  )
    span(
      v-if="labelMain"
      class="dm-base-loader__label-main"
    ) {{ labelMain }}

    span(
      v-if="labelSecondary"
      class="dm-base-loader__label-secondary"
    ) {{ labelSecondary }}

  div.dm-base-loader__bar

  div(
    :style=`{
      width: progress + "%"
    }`
    class="dm-base-loader__progress"
  )
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
    labelSecondary: {
      type: String,
      default: null
    },
    labelMain: {
      type: String,
      default: null
    },
    progress: {
      type: Number,
      default: 0
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".dm-base-loader";
$colors: black, blue, green, orange, purple, red, turquoise, white;

#{$c} {
  text-align: left;
  font-size: 14px;
  user-select: none;

  #{$c}__content {
    display: flex;
    margin-bottom: 10px;

    #{$c}__label-main,
    #{$c}__label-secondary {
      flex: 1;
    }

    #{$c}__label-main {
      text-transform: uppercase;
      font-weight: bold;
    }

    #{$c}__label-secondary {
      text-align: right;
    }
  }

  #{$c}__bar,
  #{$c}__progress {
    height: 6px;
    border-radius: 10px;
  }

  #{$c}__bar {
    margin-bottom: -5px;
    opacity: 0.2;
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      #{$c}__bar,
      #{$c}__progress {
        background-color: map-get($mainColors, $color);
      }
    }
  }
}
</style>
