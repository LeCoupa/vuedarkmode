<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "gb-base-alert",
    "gb-base-alert--" + color,
    "gb-base-alert--" + theme
  ]`
)
  base-icon(
    v-if="icon"
    :name="icon"
    class="gb-base-alert__icon gb-base-alert__icon--left"
    size="20px"
  )

  span(
    v-if="$slots.default && $slots.default[0].text.trim()"
    class="gb-base-alert__slot"
  )
    slot

  base-icon(
    v-if="closable"
    @click="onClose"
    @keypress="onTabKeypress"
    class="gb-base-alert__icon gb-base-alert__icon--right"
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
import BaseIcon from "./BaseIcon.vue"

// PROJECT: MIXINS
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  components: {
    BaseIcon
  },

  mixins: [ThemeMixin],

  props: {
    closable: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["black", "blue", "green", "orange", "red", "white"].includes(x)
      }
    },
    icon: {
      type: String,
      default: null
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClose(event) {
      this.$emit("close", event)
    },

    onTabKeypress(id, event) {
      event.preventDefault()

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
$c: ".gb-base-alert";
$colors: "black", "blue", "green", "orange", "red", "white";

#{$c} {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
  transition: all 250ms linear;

  @include no-tap-highlight-color;

  #{$c}__icon {
    flex: 0 0 auto;

    &--left {
      margin-right: 20px;
    }

    &--right {
      margin-left: 20px;
      outline: 0;
      border-radius: 100%;
      transition: all 250ms linear;
    }
  }

  #{$c}__slot {
    flex: 1;
    font-size: 16px;
    line-height: 22px;
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      color: mdg($theme, "colors", "white");

      // --> COLORS <--

      @each $color in $colors {
        &#{$c}--#{$color} {
          background-color: mdg($theme, "colors", $color);

          @if ($color == "white") {
            color: mdg($theme, "colors", "black");
          }

          #{$c}__icon--right {
            @if ($color == "red") {
              &:hover {
                color: mdg($theme, "colors", "black") !important;
              }

              &:focus {
                box-shadow: 0 0 0 2px mdg($theme, "colors", $color),
                  0 0 0 3px mdg($theme, "colors", "black");
                color: mdg($theme, "colors", "black") !important;
              }
            } @else {
              &:hover {
                color: mdg($theme, "colors", "red") !important;
              }

              &:focus {
                box-shadow: 0 0 0 2px mdg($theme, "colors", $color),
                  0 0 0 3px mdg($theme, "colors", "red");
                color: mdg($theme, "colors", "red") !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
