<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick(id, $event)"
  @dblclick="onDoubleClick(id, $event)"
  @mousedown="onMouseDown(id, $event)"
  @mouseenter="onMouseEnter(id, $event)"
  @mouseleave="onMouseLeave(id, $event)"
  @mousemove="onMouseMove(id, $event)"
  @mouseout="onMouseOut(id, $event)"
  @mouseover="onMouseOver(id, $event)"
  @mouseup="onMouseUp(id, $event)"
  :class=`[
    "dm-base-button",
    "dm-base-button--" + color,
    "dm-base-button--" + size,
    {
      "dm-base-button--capitalize": capitalize,
      "dm-base-button--circular": circular,
      "dm-base-button--disabled": disabled,
      "dm-base-button--full-width": fullWidth,
      "dm-base-button--reverse": reverse,
      "dm-base-button--rounded": rounded
    }
  ]`
  :disabled="disabled"
  :id="id"
  :type="type"
)
  span.dm-base-button__inner
    base-icon(
      v-if="leftIcon"
      :color="leftIconColor"
      :name="leftIcon"
      :size="iconSize"
      class="dm-base-button__left-icon"
    )
    span(
      v-if="$slots.default && $slots.default[0].text.trim()"
      class="dm-base-button__label"
    ): slot

    base-icon(
      v-if="rightIcon"
      :color="rightIconColor"
      :name="rightIcon"
      :size="iconSize"
      class="dm-base-button__right-icon"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon
  },

  props: {
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
      default: "blue",
      validator(x) {
        return (
          ["black", "blue", "green", "orange", "red", "white"].indexOf(x) !== -1
        );
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
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
    leftIconColor: {
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
    rightIconColor: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    type: {
      type: String,
      default: "button",
      validator(x) {
        return ["button", "reset", "submit"].indexOf(x) !== -1;
      }
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

    onClick(id, event) {
      this.$emit("click", id, event);
    },

    onDoubleClick(id, event) {
      this.$emit("dblclick", id, event);
    },

    onMouseDown(id, event) {
      this.$emit("mousedown", id, event);
    },

    onMouseEnter(id, event) {
      this.$emit("mouseenter", id, event);
    },

    onMouseLeave(id, event) {
      this.$emit("mouseleave", id, event);
    },

    onMouseMove(id, event) {
      this.$emit("mousemove", id, event);
    },

    onMouseOut(id, event) {
      this.$emit("mouseout", id, event);
    },

    onMouseOver(id, event) {
      this.$emit("mouseover", id, event);
    },

    onMouseUp(id, event) {
      this.$emit("mouseup", id, event);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";

$c: ".dm-base-button";
$colors: black, blue, green, red, orange, white;
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent; // Chrome displays white borders sometimes
  color: $white;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  transition: all ease-in-out 200ms;
  user-select: none;
  cursor: pointer;

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
    background-image: linear-gradient(0deg, $sun 0%, $sunglow 100%);
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

  &--disabled {
    opacity: 0.7;
    cursor: not-allowed;

    #{$c}__inner {
      pointer-events: none;
    }
  }

  &--full-width {
    width: 100%;
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
      border-color: $white;
      transform: initial;
    }

    &:active {
      background: $white;
      transform: initial;
    }
  }

  &--rounded {
    border-radius: 60px;
    color: $white;
  }

  // --> INTERACTIONS <--

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
