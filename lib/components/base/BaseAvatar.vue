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
      "dm-base-avatar--bordered": bordered,
      "dm-base-avatar--circular": circular,
      "dm-base-avatar--clickable": clickable,
      "dm-base-avatar--secondaries": secondaries
    }
  ]`
  :id="id"
)
  span(
    @keypress.prevent="onKeypress"
    :style=`{ backgroundImage: "url(" + src + ")" }`
    :tabindex="clickable ? '0' : null"
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
    bordered: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: false
    },
    secondaries: {
      type: Array,
      default: null
    },
    description: {
      type: String,
      default: null
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
          "large",
          "huge"
        ].includes(x);
      }
    },
    src: {
      type: String,
      required: true
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      if (this.clickable) {
        this.$emit("click", this.id, event);
      }
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
@import "assets/settings/_settings.colors.scss";
@import "assets/tools/_tools.mixins.scss";

// VARIABLES
$c: ".dm-base-avatar";
$sizes: micro, mini, small, default, medium, large, huge;

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

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__image {
        border-radius: 2px + (2px * $i);

        @if ($size == micro) {
          width: 24px;
          height: 24px;
          box-shadow: 0 1px 3px 0 rgba($woodsmoke, 0.6);
        } @else if ($size == mini) {
          width: 30px;
          height: 30px;
          box-shadow: 0 1px 4px 0 rgba($woodsmoke, 0.6);
        } @else {
          width: 20px + (20px * $i);
          height: 20px + (20px * $i);
          box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
        }
      }

      #{$c}__description {
        padding-top: 4px + (1px * $i);
        text-transform: uppercase;
        font-size: 8px + (2px * $i);
      }
    }
  }

  // --> BOOLEANS <--

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
    #{$c}__image {
      cursor: pointer;

      &:focus {
        box-shadow: 0 0 0 2px $mirage, 0 0 0 3px $azure-radiance;
        transition: box-shadow ease-in-out 0s;
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
}
</style>
