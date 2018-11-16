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
      "dm-base-avatar--complementaries": complementaries
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
      v-if="complementaries"
      class="dm-base-avatar__complementaries"
    )
      span(
        v-for="complementary in complementaries"
        :key="complementary.src"
        :style=`{
          backgroundImage: "url(" + complementary.src + ")",
        }`
        class="dm-base-avatar__image dm-base-avatar__complementary"
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
    complementaries: {
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
        return (
          ["mini", "small", "default", "medium", "large", "huge"].indexOf(x) !==
          -1
        );
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
$c: ".dm-base-avatar";
$sizes: mini, small, default, medium, large, huge;

#{$c} {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__image {
    display: inline-block;
    box-sizing: border-box;
    outline: 0;
    background-size: cover;
    box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
    user-select: none;

    #{$c}__complementaries {
      display: flex;
      justify-content: flex-end;

      #{$c}__complementary {
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

        @if ($size == mini) {
          width: 30px;
          height: 30px;
        } @else {
          width: 20px + (20px * $i);
          height: 20px + (20px * $i);
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
      }
    }
  }

  &--complementaries {
    > #{$c}__image {
      position: relative;

      #{$c}__complementaries {
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
    }
  }
}
</style>
