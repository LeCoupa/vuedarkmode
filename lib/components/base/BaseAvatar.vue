<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  @click="onClick"
  :class=`[
    "dm-base-avatar",
    "dm-base-avatar--" + size,
    {
      "dm-base-avatar--animated": animated,
      "dm-base-avatar--bordered": bordered,
      "dm-base-avatar--circular": circular,
      "dm-base-avatar--clickable": $listeners.click,
      "dm-base-avatar--secondaries": secondaries,
      "dm-base-avatar--shadow": shadow
    }
  ]`
)
  span(
    @keypress.prevent="onKeypress"
    :style=`{ backgroundImage: "url(" + src + ")" }`
    :tabindex="$listeners.click ? '0' : null"
    class="dm-base-avatar__image"
  )
    div(
      v-if="secondaries"
      class="dm-base-avatar__secondaries"
    )
      span(
        v-for="secondary in secondaries"
        :key="secondary.src"
        :style=`{
          backgroundImage: "url(" + secondary.src + ")",
        }`
        class="dm-base-avatar__image dm-base-avatar__secondary"
      )

  span(
    v-if="description"
    class="dm-base-avatar__description"
  ) {{ description }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: null
    },
    id: {
      type: [String, Number],
      default: null
    },
    secondaries: {
      type: Array,
      default: null
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
          "large",
          "huge"
        ].includes(x);
      }
    },
    shadow: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      required: true
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      this.$emit("click", this.id, event);
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
@import "assets/stylesheets/settings/_settings.colors.scss";
@import "assets/stylesheets/tools/_tools.mixins.scss";

// VARIABLES
$c: ".dm-base-avatar";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large", "huge";

#{$c} {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  @include no-tap-highlight-color;

  #{$c}__image {
    display: inline-block;
    box-sizing: border-box;
    outline: 0;
    background-size: cover;
    user-select: none;

    #{$c}__secondaries {
      display: flex;
      justify-content: flex-end;

      #{$c}__secondary {
        margin-right: 4px;
        width: 30px;
        height: 30px;
        border: 1px solid $white;
        border-radius: 4px;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  #{$c}__description {
    text-align: center;
    text-transform: uppercase;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__image {
        @if ($size == "nano") {
          width: 20px;
          height: 20px;
          border-radius: 2px;
        } @else if ($size == "micro") {
          width: 24px;
          height: 24px;
          border-radius: 2px;
        } @else if ($size == "mini") {
          width: 30px;
          height: 30px;
          border-radius: 4px;
        } @else {
          width: 20px * ($i - 1);
          height: 20px * ($i - 1);
          border-radius: 2px * ($i - 1);
        }
      }

      #{$c}__description {
        @if ($size == "nano") {
          padding-top: 3px;
          font-size: 8px;
          line-height: 12px;
        } @else if ($size == "micro") {
          padding-top: 3px;
          font-size: 10px;
          line-height: 14px;
        } @else if ($size == "mini") {
          padding-top: 3px;
          font-size: 12px;
          line-height: 16px;
        } @else {
          padding-top: 3px + (1px * $i);
          font-size: 4px + (2px * $i);
          line-height: 8px + (2px * $i);
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--animated {
    #{$c}__image {
      transition: transform 250ms linear;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &--bordered {
    #{$c}__image {
      border: 1px solid $white;
    }
  }

  &--circular {
    #{$c}__image {
      border-radius: 100%;
    }
  }

  &--clickable {
    cursor: pointer;

    #{$c}__image {
      &:focus {
        box-shadow: 0 0 0 2px $mirage, 0 0 0 3px $azure-radiance;
        transition: box-shadow linear 0s;
      }
    }
  }

  &--secondaries {
    > #{$c}__image {
      position: relative;

      #{$c}__secondaries {
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
    }
  }

  &--shadow {
    #{$c}__image {
      box-shadow: 0 1px 3px 0 rgba($woodsmoke, 0.6);
    }
  }
}
</style>
