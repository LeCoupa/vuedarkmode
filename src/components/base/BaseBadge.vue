<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  @click="onClick(id, $event)"
  @keypress.prevent="onKeypress"
  :class=`[
    "gb-base-badge",
    "gb-base-badge--" + color,
    "gb-base-badge--" + size,
    "gb-base-badge--" + computedTheme,
    {
      "gb-base-badge--clickable": $listeners.click,
      "gb-base-badge--filled": filled,
      "gb-base-badge--not-filled": !filled
    }
  ]`
  :tabindex="$listeners.click ? '0' : null"
)
  span.gb-base-badge__focuser

  slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [ThemeMixin],

  props: {
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["black", "blue", "green", "grey", "orange", "purple", "red", "turquoise", "white", "yellow"].includes(x)
      }
    },
    filled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["micro", "mini", "small", "default", "medium", "large"].includes(x)
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(id, event) {
      this.$emit("click", id, event)
    },

    onKeypress(event) {
      if (event.code === "Space") {
        event.target.click()
      }
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
$c: ".gb-base-badge";
$colors: "black", "blue", "green", "grey", "orange", "purple", "red", "turquoise", "white", "yellow";
$sizes: "micro", "mini", "small", "default", "medium", "large";

#{$c} {
  position: relative;
  display: inline-block;
  outline: 0;
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;
  text-transform: uppercase;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
  user-select: none;

  @include no-tap-highlight-color;

  #{$c}__focuser {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 100px;
    opacity: 0;
    transition: all linear 250ms;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: 0 (10px + 1px * $i);
      font-size: 10 + (1px * $i);

      @if ($size == "micro") {
        line-height: 18px;
      } @else if ($size == "mini") {
        line-height: 19px;
      } @else if ($size == "small") {
        line-height: 22px;
      } @else if ($size == "default") {
        line-height: 23px;
      } @else if ($size == "medium") {
        line-height: 25px;
      } @else if ($size == "large") {
        line-height: 30px;
      }
    }
  }

  // --> BOOLEANS <--

  &--clickable {
    cursor: pointer;
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      box-shadow: 0 1px 5px 0 mdg($theme, "box-shadows", "default", "primary");
      color: mdg($theme, "colors", "white");

      // --> COLORS <--

      @each $color in $colors {
        &#{$c}--#{$color} {
          border-color: mdg($theme, "colors", $color);

          #{$c}__focuser {
            border-color: mdg($theme, "colors", $color);
          }

          &#{$c}--filled {
            background-color: mdg($theme, "colors", $color);

            @if ($color == "white") {
              color: mdg($theme, "colors", "black");
            }
          }

          &#{$c}--not-filled {
            @if (map-get($theme, "name") == "light") {
              color: mdg($theme, "colors", $color);
            }
          }
        }
      }
    }
  }

  // --> INTERACTIONS <--

  &:focus {
    #{$c}__focuser {
      opacity: 1;
    }
  }
}
</style>
