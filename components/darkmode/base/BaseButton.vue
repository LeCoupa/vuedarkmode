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
      :size="computedIconSize"
      class="dm-base-button__left-icon"
    )
    span(
      v-if="$slots.default && $slots.default[0].text.trim() && !circular"
      class="dm-base-button__label"
    ): slot

    base-icon(
      v-if="computedRightIcon"
      :color="rightIconColor"
      :name="computedRightIcon"
      :size="computedIconSize"
      class="dm-base-button__right-icon"
    )

  transition(
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  )
    span(
      v-if="list && listOpened"
      class="dm-base-button__list"
    )
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
    list: {
      type: Array,
      default: null,
      validator(x) {
        return x.length > 0;
      }
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

  data() {
    return {
      // --> STATE <--

      listOpened: false
    };
  },

  computed: {
    computedIconSize() {
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
    },

    computedRightIcon() {
      if (this.list && !this.circular) {
        return this.listOpened ? "arrow_drop_up" : "arrow_drop_down";
      }

      return this.rightIcon;
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

// VARIABLES
$c: ".dm-base-button";
$colors: black, blue, green, red, orange, white;
$sizes: mini, small, default, medium, large;

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
  transition: all 250ms ease-in-out;
  user-select: none;
  cursor: pointer;

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
      transition: all 250ms ease-in-out;

      &:first-of-type {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px 4px 0 0;
      }

      &:last-of-type {
        border-radius: 0 0 4px 4px;
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

        &:active {
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

      #{$c}__list {
        border-radius: 4px + (1px * $i);
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
            color: $oxford-blue;
          } @else {
            color: map-get($mainColors, $color);
          }
        }
      }
    }

    &:hover {
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

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
}

// --> ANIMATIONS <--

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 200ms;
  animation-fill-mode: both;
}

.fadeOut {
  animation-name: fadeOut;
  animation-duration: 200ms;
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
