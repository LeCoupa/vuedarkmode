<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-base-toast",
    "dm-base-toast--" + color,
    "dm-base-toast--" + theme
  ]`
  :style=`{
    width: width
  }`
)
  span(
    v-if="$slots.default && $slots.default[0].text.trim()"
    class="dm-base-toast__slot"
  )
    slot

  base-icon(
    v-if="closable"
    @click="onClose"
    @keypress="onTabKeypress"
    class="dm-base-toast__icon"
    name="close"
    size="20px"
    tabindex="0"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseIcon from "./BaseIcon.vue";

// PROJECT: MIXINS
import CommonMixin from "../../mixins/CommonMixin.js";

export default {
  components: {
    BaseIcon
  },

  mixins: [CommonMixin],

  props: {
    closable: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["black", "blue", "green", "orange", "red", "white"].includes(x);
      }
    },
    width: {
      type: String,
      default: "225px"
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClose(event) {
      this.$emit("close", event);
    },

    onTabKeypress(id, event) {
      event.preventDefault();

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
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".dm-base-toast";
$colors: "black", "blue", "green", "red", "orange", "white";

#{$c} {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-radius: 3px;
  color: mdg($dark, "colors", "white");
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  transition: all 250ms linear;

  @include no-tap-highlight-color;

  #{$c}__icon {
    flex: 0 0 auto;
    margin-left: 20px;
    outline: 0;
    border-radius: 100%;
    transition: all 250ms linear;

    &:focus {
      transition: box-shadow linear 0s;
    }
  }

  #{$c}__slot {
    flex: 1;
    font-size: 16px;
    line-height: 22px;
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      background-color: mdg($dark, "colors", $color);

      @if ($color == "white") {
        color: mdg($dark, "colors", "black");
      }

      #{$c}__icon {
        @if ($color == "red") {
          &:hover {
            color: mdg($dark, "colors", "black") !important;
          }

          &:focus {
            box-shadow: 0 0 0 2px mdg($dark, "colors", $color),
              0 0 0 3px mdg($dark, "colors", "black");
            color: mdg($dark, "colors", "black") !important;
          }
        } @else {
          &:hover {
            color: mdg($dark, "colors", "red") !important;
          }

          &:focus {
            box-shadow: 0 0 0 2px mdg($dark, "colors", $color),
              0 0 0 3px mdg($dark, "colors", "red");
            color: mdg($dark, "colors", "red") !important;
          }
        }
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
    }
  }
}
</style>
