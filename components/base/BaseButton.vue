<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  :class=`[
    "c-base-button",
    "c-base-button--" + color,
    "c-base-button--" + size,
    {
      'c-base-button--block': block,
      "c-base-button--capitalize": capitalize,
      "c-base-button--circular": circular,
      'c-base-button--reverse': reverse,
      'c-base-button--rounded': rounded
    }
  ]`
  :disabled="disabled"
  :id="id"
  :type="type"
)
  span.c-base-button__inner
    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      :size="iconSize"
      class="c-base-button__left-icon"
    )
    span(
      v-if="$slots.default && $slots.default[0].text.trim()"
      class="c-base-button__label"
    ): slot

    base-icon(
      v-if="rightIcon"
      :name="rightIcon"
      :size="iconSize"
      class="c-base-button__right-icon"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
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
          return "14px";
        case "small":
          return "16px";
        case "default":
          return "18px";
        case "medium":
          return "20px";
        case "large":
          return "22px";
      }
    }
  },

  methods: {
    onClick() {
      this.$emit("click", this.id);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-button";
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: $white;
  background-color: transparent; // Chrome displays white borders sometimes
  font-family: "Heebo Medium";
  user-select: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  #{$c}__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // --> COLORS <--

  &--black {
    border: 1px solid #313d4f;
    background-color: #222c3c;
  }

  &--blue {
    background-image: linear-gradient(-1deg, #0093ee 2%, #2da1f8 98%);
  }

  &--green {
    background-color: #4ece3d;
  }

  &--orange {
    background-image: linear-gradient(-1deg, #fdc018 2%, #ffc82e 98%);
  }

  &--red {
    background-image: linear-gradient(0deg, #e0102b 0%, #e44023 100%);
  }

  &--white {
    border: 1px solid #e6eaee;
    background-image: linear-gradient(0deg, #f4f7fa 0%, #ffffff 100%);
    color: #2c405a;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: (8px + 2px * $i) (12px + 2px * $i);
      border-radius: 4px + (1px * $i);
      font-size: 12px + (1px * $i);
      line-height: 14px + (2px * $i);

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
    display: block;
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

    &#{$c}--black {
      border-color: $black;
      color: $black;
    }

    &#{$c}--blue {
      border-color: #0093ee;
    }

    &#{$c}--green {
      border-color: #81c926;
    }

    &#{$c}--orange {
      border-color: #faca00;
    }

    &#{$c}--red {
      border-color: #e0102b;
    }
  }

  &--rounded {
    border-radius: 60px;
    color: $white;
  }
}
</style>
