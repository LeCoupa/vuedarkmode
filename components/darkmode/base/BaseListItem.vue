<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-base-list-item",
    "dm-base-list-item--" + color
  ]`
)
  .dm-base-list-item__container
    span(
      :style=`{
        backgroundImage: "url(" + image + ")"
      }`
      class="dm-base-list-item__circle"
    )
      base-icon(
        v-if="icon"
        :color="iconColor"
        :name="icon"
        :size="iconSize"
        class="dm-base-list-item__icon"
      )
      span(
        v-if="number"
        class="dm-base-list-item__number"
      ) {{ number }}

    base-heading(
      v-if="$slots.default && $slots.default[0].text.trim()"
      class="dm-base-list-item__content"
      tag="p"
    ): slot

  div(
    v-if="source"
    class="dm-base-list-item__source"
  )
    base-icon(
      class="dm-base-list-item__icon"
      name="link"
      size="20px"
    )
    a(
      :href="source.link"
      class="dm-base-list-item__label"
      target="_blank"
    ) {{ source.label }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseHeading from "./BaseHeading.vue";
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseHeading,
    BaseIcon
  },

  props: {
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return (
          ["black", "blue", "green", "orange", "red", "white"].indexOf(x) !== -1
        );
      }
    },
    icon: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: "white"
    },
    iconSize: {
      type: String,
      default: "22px"
    },
    image: {
      type: String,
      default: null
    },
    number: {
      type: Number,
      default: null
    },
    source: {
      type: Object,
      default: null
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
$c: ".dm-base-list-item";
$colors: black, blue, green, red, orange, white;

#{$c} {
  text-align: left;

  #{$c}__container {
    display: flex;
    align-items: center;

    #{$c}__circle {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      justify-content: center;
      box-sizing: border-box;
      margin-right: 20px;
      width: 40px;
      height: 40px;
      border-width: 3px;
      border-style: solid;
      border-radius: 100%;
      background-size: cover;
      box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
      font-size: 16px;
      user-select: none;

      #{$c}__number {
        font-weight: 800;
      }
    }

    #{$c}__content {
      flex: 1;
      margin-bottom: 0;
      color: $white;
    }
  }

  #{$c}__source {
    display: flex;
    align-items: center;
    margin-top: 6px;
    padding-left: 60px;

    #{$c}__icon {
      flex: 0 0 auto;
      margin-right: 6px;
    }

    #{$c}__label {
      flex: 1;
      color: $regent-st-blue;
      text-decoration: underline;
      font-weight: 400;
      line-height: 24px;
      transition: all 250ms ease-in-out;

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: none;
        color: $white;
      }
    }
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      #{$c}__container {
        #{$c}__circle {
          border-color: map-get($mainColors, $color);
        }
      }
    }
  }
}
</style>
