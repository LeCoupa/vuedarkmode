<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "c-base-loader",
    "c-base-loader--" + color
  ]`
)
  span(
    v-if="labelMain || labelSecondary"
    class="c-base-loader__content"
  )
    span(
      v-if="labelMain"
      class="c-base-loader__label-main"
    ) {{ labelMain }}

    span(
      v-if="labelSecondary"
      class="c-base-loader__label-secondary"
    ) {{ labelSecondary }}

  div.c-base-loader__bar

  div(
    :style=`{
      width: progress + "%"
    }`
    class="c-base-loader__progress"
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
      default: "blue"
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
$c: ".c-base-loader";

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

  &--black {
    #{$c}__bar,
    #{$c}__progress {
      background-color: #313d4f;
    }
  }

  &--blue {
    #{$c}__bar,
    #{$c}__progress {
      background-color: #0093ee;
    }
  }

  &--green {
    #{$c}__bar,
    #{$c}__progress {
      background-color: #1bb934;
    }
  }

  &--red {
    #{$c}__bar,
    #{$c}__progress {
      background-color: #e0102b;
    }
  }

  &--orange {
    #{$c}__bar,
    #{$c}__progress {
      background-color: #faca00;
    }
  }

  &--white {
    #{$c}__bar,
    #{$c}__progress {
      background-color: $white;
    }
  }
}
</style>
