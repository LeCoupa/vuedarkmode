<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @blur="onBlur"
  @click="onClick"
  @focus="onFocus"
  :class=`[
    "c-common-button",
    "c-common-button--" + color,
    "c-common-button--" + size,
    {
      'c-common-button--block': block,
      "c-common-button--capitalize": capitalize,
      "c-common-button--circular": circular,
      'c-common-button--reverse': reverse,
      'c-common-button--rounded': rounded
    }
  ]`
  :disabled="disabled"
  :id="id"
  :type="type"
)
  span.c-common-button__inner
    common-icon(
      v-if="leftIcon"
      :name="leftIcon"
      :size="iconSize"
      class="c-common-button__left-icon"
    )
    span(
      v-if="$slots.default && $slots.default[0].text.trim()"
      class="c-common-button__label"
    ): slot

    common-icon(
      v-if="rightIcon"
      :name="rightIcon"
      :size="iconSize"
      class="c-common-button__right-icon"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import CommonIcon from "@/components/common/CommonIcon";

export default {
  components: {
    CommonIcon
  },

  props: {
    block: {
      type: Boolean,
      default: false
    },
    capitalize: {
      type: Boolean,
      default: true
    },
    circular: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    leftIcon: {
      type: String,
      default: null
    },
    reverse: {
      type: Boolean,
      default: false
    },
    rightIcon: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "button"
    }
  },

  computed: {
    iconSize() {
      switch (this.size) {
        case "mini":
          return "12px";
        case "small":
          return "14px";
        case "default":
          return "16px";
        case "medium":
          return "18px";
        case "large":
          return "20px";
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onBlur() {
      this.$emit("blur", this.id);
    },

    onClick() {
      this.$emit("click", this.id);
    },

    onFocus() {
      this.$emit("focus", this.id);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-common-button";
$colors: black, blue, green, red, orange, white;
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent; // Chrome displays white borders sometimes
  color: $white;
  font-family: "Heebo Medium";
  transition: all ease-in-out 200ms;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
  }

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // --> COLORS <--

  &--black {
    border: 1px solid $oxford-blue;
    background-color: $ebony-clay;
  }

  &--blue {
    background-image: linear-gradient(
      0deg,
      $azure-radiance 0%,
      $dodger-blue 100%
    );
  }

  &--green {
    background-image: linear-gradient(0deg, $malachite 0%, $apple 100%);
  }

  &--orange {
    background-image: linear-gradient(0deg, $supernova 0%, $sunglow 100%);
  }

  &--red {
    background-image: linear-gradient(0deg, $crimson 0%, $cinnabar 100%);
  }

  &--white {
    background-image: linear-gradient(0deg, $athens-gray 0%, $white 100%);
    color: $oxford-blue;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: (10px + 2px * $i) (12px + 2px * $i);
      border-radius: 4px + (1px * $i);
      font-size: 12px + (1px * $i);
      line-height: 12px + (2px * $i);

      #{$c}__inner {
        #{$c}__left-icon {
          margin-right: 3px + (1px * $i);
        }

        #{$c}__right-icon {
          margin-left: 3px + (1px * $i);
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--block {
    width: 100%;
  }

  &--capitalize {
    text-transform: capitalize;
  }

  &--circular {
    border-radius: 100%;

    #{$c}__inner {
      #{$c}__label {
        display: none;
      }

      #{$c}__left-icon {
        margin-right: 0;
      }

      #{$c}__right-icon {
        margin-left: 0;
      }
    }

    @each $size in $sizes {
      $i: index($sizes, $size) - 1;

      &#{$c}--#{$size} {
        padding: 8px + (1px * $i);
      }
    }
  }

  &--reverse {
    background: transparent;
    color: $white;

    @each $color in $colors {
      &#{$c}--#{$color} {
        border-color: map-get($mainColors, $color);

        &:active {
          color: map-get($mainColors, $color);
        }
      }
    }

    &:hover {
      transform: initial;
      border-color: $white;
    }

    &:active {
      transform: initial;
      background: $white;
    }
  }

  &--rounded {
    border-radius: 60px;
    color: $white;
  }
}
</style>
