<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-base-toast",
    "dm-base-toast--" + color
  ]`
)
  span(
    v-if="$slots.default && $slots.default[0].text.trim()"
    class="dm-base-toast__slot"
  ): slot

  base-icon(
    v-if="closable"
    @click="onClose"
    @keypress="onTabKeypress"
    :clickable="true"
    class="dm-base-toast__icon"
    name="close"
    size="20px"
    tabindex="0"
  )
  </style>
  
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
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClose(event) {
      this.$emit("close", event);
    },

    onTabKeypress(id, event) {
      event.preventDefault();

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
$c: ".dm-base-toast";
$colors: black, blue, green, red, orange, white;

#{$c} {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-radius: 3px;
  color: $white;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  transition: all 200ms ease-in-out;

  #{$c}__icon {
    flex: 0 0 auto;
    margin-left: 20px;
  }

  #{$c}__slot {
    flex: 1;
    font-size: 16px;
    line-height: 22px;
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      background-color: map-get($mainColors, $color);

      @if ($color == white) {
        color: $oxford-blue;
      }

      #{$c}__icon {
        outline: 0;
        border-radius: 100%;
        transition: all 200ms ease-in-out;

        &:focus {
          transition: box-shadow ease-in-out 0s;
        }

        @if ($color == red) {
          &:hover {
            color: $oxford-blue !important;
          }

          &:focus {
            box-shadow: 0 0 0 2px map-get($mainColors, $color),
              0 0 0 3px $oxford-blue;
            color: $oxford-blue !important;
          }
        } @else {
          &:hover {
            color: $crimson !important;
          }

          &:focus {
            box-shadow: 0 0 0 2px map-get($mainColors, $color),
              0 0 0 3px crimson;
            color: $crimson !important;
          }
        }
      }
    }
  }
}
</style>
