<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.dm-base-list-item
  .dm-base-list-item__container
    base-number(
      :color="color"
      :color-hex="colorHex"
      :icon="icon"
      :icon-color="iconColor"
      :icon-size="iconSize"
      :image="image"
      :number="number"
      class="dm-base-list-item__number"
    )
    base-heading(
      v-if="$slots.default && $slots.default[0].text.trim()"
      class="dm-base-list-item__content"
      tag="p"
    )
      slot

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
// PROJECT: COMPONENTS
import BaseHeading from "./BaseHeading.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseNumber from "./BaseNumber.vue";

export default {
  components: {
    BaseHeading,
    BaseIcon,
    BaseNumber
  },

  props: {
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return [
          "black",
          "blue",
          "green",
          "orange",
          "purple",
          "red",
          "turquoise",
          "white"
        ].includes(x);
      }
    },
    colorHex: {
      type: String,
      default: null
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
@import "assets/tools/_tools.mq.scss";
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-base-list-item";

#{$c} {
  text-align: left;

  #{$c}__container {
    #{$c}__number {
      float: left;
      margin: 20px 20px 20px 0;
    }

    #{$c}__content {
      margin-bottom: 0;
      color: $white;
    }
  }

  #{$c}__source {
    display: flex;
    align-items: center;
    margin-top: 4px;
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
}

// --> BREAKPOINT: TABLET <--

@include mq($from: tablet) {
  #{$c} {
    #{$c}__container {
      display: flex;
      align-items: center;

      #{$c}__number {
        flex: 0 0 auto;
        margin: 0 20px 0 0;
      }

      #{$c}__content {
        flex: 1;
      }
    }
  }
}
</style>
