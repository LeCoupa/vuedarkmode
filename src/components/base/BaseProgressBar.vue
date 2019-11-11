<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-base-progress-bar",
    "dm-base-progress-bar--" + color,
    {
      "dm-base-progress-bar--with-details-hover": detailsHover
    }
  ]`
)
  span(
    v-if="title || details"
    class="dm-base-progress-bar__content"
  )
    span(
      v-if="title"
      class="dm-base-progress-bar__title"
    ) {{ title }}

    span(
      v-if="details"
      class="dm-base-progress-bar__details"
    ) {{ details }}

    span(
      v-if="detailsHover"
      class="dm-base-progress-bar__details-hover"
    ) {{ detailsHover }}

  .dm-base-progress-bar__bar
    div(
      :style=`{
        width: progress + "%"
      }`
      class="dm-base-progress-bar__progress"
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
    details: {
      type: String,
      default: null
    },
    detailsHover: {
      type: String,
      default: null
    },
    title: {
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
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "src/assets/stylesheets/settings/_datasets.scss";

// VARIABLES
$c: ".dm-base-progress-bar";
$colors: "black", "blue", "green", "orange", "purple", "red", "turquoise",
  "white";

#{$c} {
  text-align: left;
  font-size: 14px;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  user-select: none;

  #{$c}__content {
    display: flex;
    margin-bottom: 10px;
    color: $white;

    #{$c}__title,
    #{$c}__details,
    #{$c}__details-hover {
      flex: 1;
      line-height: 22px;
    }

    #{$c}__title {
      text-transform: uppercase;
      font-weight: 700;
    }

    #{$c}__details,
    #{$c}__details-hover {
      text-align: right;
    }
  }

  #{$c}__bar {
    overflow: hidden;
    height: 6px;
    border-radius: 10px;

    #{$c}__progress {
      width: 0;
      height: 100%;
      border-radius: 10px;
      transition: width 0.5s linear;
      animation: fillUp 0.5s linear 0s 1;
    }
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      #{$c}__bar {
        #{$c}__progress {
          background-color: map-get($mainColors, $color);
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--with-details-hover {
    #{$c}__content {
      #{$c}__details-hover {
        display: none;
      }
    }

    &:hover {
      #{$c}__content {
        #{$c}__details {
          display: none;
        }

        #{$c}__details-hover {
          display: block;
        }
      }
    }
  }
}

@keyframes fillUp {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
