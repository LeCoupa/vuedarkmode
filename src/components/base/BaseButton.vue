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
    "gb-base-button",
    "gb-base-button--" + color,
    "gb-base-button--" + size,
    "gb-base-button--" + theme,
    {
      "gb-base-button--circular": circular,
      "gb-base-button--disabled": disabled || loading,
      "gb-base-button--full-width": fullWidth,
      "gb-base-button--link": link,
      "gb-base-button--loading": loading,
      "gb-base-button--reverse": reverse,
      "gb-base-button--rounded": rounded,
      "gb-base-button--uppercase": uppercase
    }
  ]`
  :disabled="disabled || loading"
  :type="type"
)
  span.gb-base-button__inner
    base-icon(
      v-if="leftIcon"
      :color="leftIconColor"
      :name="leftIcon"
      :outlined="leftIconOutlined"
      :size="computedIconSize"
      class="gb-base-button__left-icon"
    )

    span(
      v-if="$slots.default && $slots.default[0].text.trim() && !circular"
      class="gb-base-button__label"
    )
      template(
        v-if="confirming"
      ) Click to confirm

      slot(
        v-else
      )

    base-icon(
      v-if="computedRightIcon"
      :color="rightIconColor"
      :name="computedRightIcon"
      :outlined="rightIconOutlined"
      :size="computedIconSize"
      class="gb-base-button__right-icon"
    )

  base-spinner(
    v-if="loading"
    :color="computedSpinnerColor"
    :theme="theme"
    class="gb-base-button__spinner"
    size="mini"
  )

  transition(
    v-if="list && listOpened && !loading"
    enter-active-class="animated fade-in"
    leave-active-class="animated fade-out"
  )
    .gb-base-button__list
      span(
        v-for="item in list"
        @click="onItemClick(item.id, $event)"
        :key="item.id"
        class="gb-base-button__item"
      ) {{ item.label }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseIcon from "./BaseIcon.vue"
import BaseSpinner from "./BaseSpinner.vue"

// PROJECT: MIXINS
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  components: {
    BaseIcon,
    BaseSpinner
  },

  mixins: [ThemeMixin],

  props: {
    circular: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return [
          "black",
          "blue",
          "green",
          "grey",
          "orange",
          "purple",
          "red",
          "turquoise",
          "white",
          "yellow"
        ].includes(x)
      }
    },
    confirmation: {
      type: Boolean,
      default: false
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
    leftIconOutlined: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: null,
      validator(x) {
        return x.length > 0
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
    rightIconOutlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["nano", "micro", "mini", "small", "default", "medium", "large"].includes(x)
      }
    },
    type: {
      type: String,
      default: "button",
      validator(x) {
        return ["button", "reset", "submit"].includes(x)
      }
    },
    uppercase: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // --> STATE <--

      confirming: false,
      listOpened: false
    }
  },

  computed: {
    computedIconSize() {
      if (this.size === "nano") {
        return "10px"
      } else if (this.size === "micro") {
        return "12px"
      } else if (this.size === "mini") {
        return "14px"
      } else if (this.size === "small") {
        return "16px"
      } else if (this.size === "default") {
        return "18px"
      } else if (this.size === "medium") {
        return "20px"
      } else if (this.size === "large") {
        return "22px"
      }

      return null
    },

    computedRightIcon() {
      if (this.list && !this.circular) {
        return this.listOpened ? "arrow_drop_up" : "arrow_drop_down"
      }

      return this.rightIcon
    },

    computedSpinnerColor() {
      return this.color === "white" ? "black" : "white"
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      if (this.confirmation) {
        if (this.confirming) {
          this.$emit("confirm", this.id, event)
        }

        this.confirming = !this.confirming
      }

      if (this.list) {
        this.listOpened = !this.listOpened
      }

      this.$emit("click", this.id, event)
    },

    onDoubleClick(event) {
      this.$emit("dblclick", this.id, event)
    },

    onItemClick(itemId, event) {
      this.$emit("itemclick", this.id, itemId, event)
    },

    onMouseDown(event) {
      this.$emit("mousedown", this.id, event)
    },

    onMouseEnter(event) {
      this.$emit("mouseenter", this.id, event)
    },

    onMouseLeave(event) {
      this.$emit("mouseleave", this.id, event)
    },

    onMouseMove(event) {
      this.$emit("mousemove", this.id, event)
    },

    onMouseOut(event) {
      this.$emit("mouseout", this.id, event)
    },

    onMouseOver(event) {
      this.$emit("mouseover", this.id, event)
    },

    onMouseUp(event) {
      this.$emit("mouseup", this.id, event)
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".gb-base-button";
$colors: "black", "blue", "green", "grey", "orange", "purple", "red", "turquoise", "white", "yellow";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large";

#{$c} {
  position: relative;
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-position: center;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
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
      border-width: 1px;
      border-style: solid;
      border-top: none;
      white-space: nowrap;
      transition: all 250ms linear;

      &:first-of-type {
        border-top-width: 1px;
        border-top-style: solid;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-of-type {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: (3px + 2px * $i) (6px + 2px * $i);
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

    &:hover,
    &:active {
      transform: initial;
    }
  }

  &--rounded {
    border-radius: 60px;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      color: mdg($theme, "colors", "white");
      box-shadow: 0 1px 5px 0 mdg($theme, "box-shadows", "default", "primary");

      #{$c}__list {
        #{$c}__item {
          border-color: mdg($theme, "borders", "default", "primary");
          background: mdg($theme, "backgrounds", "default", "primary");
          color: mdg($theme, "fonts", "default", "secondary");

          &:first-of-type {
            border-top-color: mdg($theme, "borders", "default", "primary");
          }

          &:hover {
            background-color: mdg($theme, "backgrounds", "default", "secondary");
            color: mdg($theme, "fonts", "default", "primary");
          }
        }
      }

      // --> COLORS <--

      @each $color in $colors {
        &#{$c}--#{$color} {
          &:focus {
            box-shadow: 0 0 0 2px mdg($theme, "backgrounds", "default", "primary"),
              0 0 0 3px mdg($theme, "colors", $color);
          }

          // Reverse buttons have their own defined style (see below)
          &:not(#{$c}--reverse) {
            background: mdg($theme, "colors", $color)
              radial-gradient(circle, transparent 1%, mdg($theme, "colors", $color) 1%)
              center/15000%;

            @if ($color == "white") {
              color: mdg($theme, "colors", "black");
            }

            &:hover {
              &:not(#{$c}--disabled) {
                @if ($color == "black") {
                  background-color: mdg($theme, "colors", $color);
                } @else if ($color == "white") {
                  background-color: darken(mdg($theme, "colors", $color), 10%);
                } @else if ($color == "green") {
                  background-color: lighten(mdg($theme, "colors", $color), 5%);
                } @else {
                  background-color: lighten(mdg($theme, "colors", $color), 10%);
                }
              }
            }

            &:active {
              &:not(#{$c}--disabled) {
                @if ($color == "black") {
                  background-color: mdg($theme, "colors", $color);
                } @else if ($color == "white") {
                  background-color: darken(mdg($theme, "colors", $color), 15%);
                } @else if ($color == "green") {
                  background-color: lighten(mdg($theme, "colors", $color), 5%);
                } @else {
                  background-color: lighten(mdg($theme, "colors", $color), 15%);
                }
              }
            }
          }
        }
      }

      // --> BOOLEANS <--

      &#{$c}--link {
        @each $color in $colors {
          &#{$c}--#{$color} {
            color: mdg($theme, "colors", $color);
          }
        }
      }

      &#{$c}--reverse {
        color: mdg($theme, "fonts", "default", "primary");

        @each $color in $colors {
          &#{$c}--#{$color} {
            border-color: mdg($theme, "colors", $color);

            &:hover {
              border-color: lighten(mdg($theme, "colors", $color), 10%);
            }

            &:active {
              // Darken instead
              border-color: darken(mdg($theme, "colors", $color), 10%);
            }
          }
        }
      }
    }
  }

  // --> INTERACTIONS <--

  &:active {
    background-size: 100%;
    transition: background 0s;
  }

  &:focus {
    transition: box-shadow linear 250ms;
  }
}

// --> ANIMATIONS <--

.fade-in {
  animation-name: fadeIn;
  animation-duration: 250ms;
  animation-fill-mode: both;
}

.fade-out {
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
