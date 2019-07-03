<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  @dblclick="onDoubleClick"
  @mousedown="onMouseDown"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave"
  @mousemove="onMouseMove"
  @mouseout="onMouseOut"
  @mouseover="onMouseOver"
  @mouseup="onMouseUp"
  :class=`[
    "dm-base-button",
    "dm-base-button--" + color,
    "dm-base-button--" + size,
    {
      "dm-base-button--circular": circular || loading,
      "dm-base-button--disabled": disabled || loading,
      "dm-base-button--full-width": fullWidth,
      "dm-base-button--link": link,
      "dm-base-button--loading": loading,
      "dm-base-button--reverse": reverse,
      "dm-base-button--rounded": rounded
    }
  ]`
  :disabled="disabled || loading"
  :id="id"
  :type="type"
)
  span.dm-base-button__inner
    base-icon(
      v-if="leftIcon"
      :color="leftIconColor"
      :name="leftIcon"
      :size="computedIconSize"
      :theme="leftIconTheme"
      class="dm-base-button__left-icon"
    )

    span(
      v-if="$slots.default && $slots.default[0].text.trim() && !circular"
      class="dm-base-button__label"
    )
      slot

    base-icon(
      v-if="computedRightIcon"
      :color="rightIconColor"
      :name="computedRightIcon"
      :size="computedIconSize"
      :theme="rightIconTheme"
      class="dm-base-button__right-icon"
    )

  base-spinner(
    v-if="loading"
    :color="computedSpinnerColor"
    class="dm-base-button__spinner"
    size="mini"
  )

  transition(
    v-if="list && listOpened && !loading"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  )
    .dm-base-button__list
      span(
        v-for="item in list"
        @click="onItemClick(item.id, $event)"
        :key="item.id"
        class="dm-base-button__item"
      ) {{ item.label }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseIcon from "./BaseIcon.vue";
import BaseSpinner from "./BaseSpinner.vue";

export default {
  components: {
    BaseIcon,
    BaseSpinner
  },

  props: {
    circular: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["black", "blue", "green", "orange", "red", "white"].includes(x);
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
    leftIconTheme: {
      type: String,
      default: "filled",
      validator(x) {
        return ["filled", "outlined"].includes(x);
      }
    },
    link: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: null,
      validator(x) {
        return x.length > 0;
      }
    },
    loading: {
      type: Boolean,
      default: false
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
    rightIconTheme: {
      type: String,
      default: "filled",
      validator(x) {
        return ["filled", "outlined"].includes(x);
      }
    },
    rounded: {
      type: Boolean,
      default: false
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
          "large"
        ].includes(x);
      }
    },
    type: {
      type: String,
      default: "button",
      validator(x) {
        return ["button", "reset", "submit"].includes(x);
      }
    }
  },

  data() {
    return {
      // --> STATE <--

      listOpened: false
    };
  },

  computed: {
    computedIconSize() {
      if (this.size === "nano") {
        return "10px";
      } else if (this.size === "micro") {
        return "12px";
      } else if (this.size === "mini") {
        return "14px";
      } else if (this.size === "small") {
        return "16px";
      } else if (this.size === "default") {
        return "18px";
      } else if (this.size === "medium") {
        return "20px";
      } else if (this.size === "large") {
        return "22px";
      }
    },

    computedRightIcon() {
      if (this.list && !this.circular) {
        return this.listOpened ? "arrow_drop_up" : "arrow_drop_down";
      }

      return this.rightIcon;
    },

    computedSpinnerColor() {
      return this.color === "white" ? "black" : "white";
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      if (this.list) {
        this.listOpened = !this.listOpened;
      }

      this.$emit("click", this.id, event);
    },

    onDoubleClick(event) {
      this.$emit("dblclick", this.id, event);
    },

    onItemClick(itemId, event) {
      this.$emit("itemclick", this.id, itemId, event);
    },

    onMouseDown(event) {
      this.$emit("mousedown", this.id, event);
    },

    onMouseEnter(event) {
      this.$emit("mouseenter", this.id, event);
    },

    onMouseLeave(event) {
      this.$emit("mouseleave", this.id, event);
    },

    onMouseMove(event) {
      this.$emit("mousemove", this.id, event);
    },

    onMouseOut(event) {
      this.$emit("mouseout", this.id, event);
    },

    onMouseOver(event) {
      this.$emit("mouseover", this.id, event);
    },

    onMouseUp(event) {
      this.$emit("mouseup", this.id, event);
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
$c: ".dm-base-button";
$colors: black, blue, green, red, orange, white;
$sizes: nano, micro, mini, small, default, medium, large;

#{$c} {
  position: relative;
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-position: center;
  color: $white;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  transition: all 250ms linear;
  user-select: none;
  cursor: pointer;

  @include no-tap-highlight-color;

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #{$c}__list {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 100;
    display: block;
    padding-top: 10px;
    min-width: 100%;
    transform: translate(-50%, 100%);

    #{$c}__item {
      display: block;
      padding: 10px 14px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-top: none;
      background: $white;
      color: $oxford-blue;
      white-space: nowrap;
      transition: all 250ms linear;

      &:first-of-type {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-of-type {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:hover {
        background-color: darken($white, 5%);
      }
    }
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      &:focus {
        box-shadow: 0 0 0 2px $mirage,
          0 0 0 3px lighten(map-get($mainColors, $color), 10%);
      }

      // Reverse buttons have their own defined style (see below)
      &:not(#{$c}--reverse) {
        background: map-get($mainColors, $color)
          radial-gradient(
            circle,
            transparent 1%,
            map-get($mainColors, $color) 1%
          )
          center/15000%;

        @if ($color == black) {
          border: 1px solid $oxford-blue;
          background: $ebony-clay
            radial-gradient(circle, transparent 1%, $ebony-clay 1%)
            center/15000%;
        } @else if ($color == white) {
          color: $oxford-blue;
        }

        &:hover {
          &:not(#{$c}--disabled) {
            @if ($color == black) {
              background-color: map-get($mainColors, $color);
            } @else if ($color == white) {
              background-color: darken(map-get($mainColors, $color), 10%);
            } @else if ($color == green) {
              background-color: lighten(map-get($mainColors, $color), 5%);
            } @else {
              background-color: lighten(map-get($mainColors, $color), 10%);
            }
          }
        }

        &:active {
          &:not(#{$c}--disabled) {
            @if ($color == black) {
              background-color: map-get($mainColors, $color);
            } @else if ($color == white) {
              background-color: darken(map-get($mainColors, $color), 15%);
            } @else if ($color == green) {
              background-color: lighten(map-get($mainColors, $color), 5%);
            } @else {
              background-color: lighten(map-get($mainColors, $color), 15%);
            }
          }
        }
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: (4px + 2px * $i) (6px + 2px * $i);
      border-radius: 2px + (1px * $i);
      font-size: 10px + (1px * $i);
      line-height: 8px + (2px * $i);

      #{$c}__inner {
        #{$c}__left-icon {
          margin-right: 2px + (1px * $i);
        }

        #{$c}__right-icon {
          margin-left: 2px + (1px * $i);
        }
      }

      #{$c}__list {
        border-radius: 2px + (1px * $i);
      }
    }
  }

  // --> BOOLEANS <--

  &--circular {
    border-radius: 100px;

    #{$c}__inner {
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
        padding: 6px + (1px * $i);
      }
    }
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;

    #{$c}__inner {
      pointer-events: none;
    }
  }

  &--full-width {
    width: 100%;
  }

  &--link {
    // Override previous values
    border-color: transparent !important;
    background: transparent !important;
    text-decoration: underline;

    &:focus {
      text-decoration: none;
    }

    @each $color in $colors {
      &#{$c}--#{$color} {
        color: map-get($mainColors, $color);
      }
    }
  }

  &--loading {
    position: relative;
    opacity: 1;
    cursor: wait;

    #{$c}__inner {
      opacity: 0;
    }

    #{$c}__spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &--reverse {
    background-color: transparent;
    color: $white;

    @each $color in $colors {
      &#{$c}--#{$color} {
        border-color: map-get($mainColors, $color);

        &:hover {
          @if ($color == white) {
            border-color: $azure-radiance;
          } @else {
            border-color: $white;
          }
        }

        &:active {
          @if ($color == white) {
            background-color: $white;
            color: $oxford-blue;
          } @else {
            background-color: map-get($mainColors, $color);
          }
        }

        &:focus {
          @if ($color == white) {
            border-color: $white;
          } @else {
            border-color: map-get($mainColors, $color);
          }
        }
      }
    }

    &:hover,
    &:active {
      transform: initial;
    }
  }

  &--rounded {
    border-radius: 60px;
    color: $white;
  }

  // --> INTERACTIONS <--

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
}

// --> ANIMATIONS <--

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 250ms;
  animation-fill-mode: both;
}

.fadeOut {
  animation-name: fadeOut;
  animation-duration: 250ms;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
