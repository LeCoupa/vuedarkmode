<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
label(
  @click="onClick"
  :class=`[
    "dm-field-label",
    "dm-field-label--" + size,
    "dm-field-label--" + theme,
    {
      "dm-field-label--clickable": $listeners.click || forField,
      "dm-field-label--uppercase": uppercase
    }
  ]`
  :for="forField"
)
  slot

  span(
    v-if="required"
    class="dm-field-label__required"
  ) *
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
    forField: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["mini", "small", "default", "medium", "large"].includes(x)
      }
    },
    uppercase: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClick(event) {
      this.$emit("click", event)
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
$c: ".dm-field-label";
$sizes: "mini", "small", "default", "medium", "large";

#{$c} {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
  user-select: none;

  @include no-tap-highlight-color;

  #{$c}__required {
    margin-left: 5px;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      font-size: 12px + (1px * $i);
      line-height: 14px + (2px * $i);
    }
  }

  // --> BOOLEANS <--

  &--clickable {
    cursor: pointer;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      color: mdg($theme, "fonts", "default", "secondary");

      #{$c}__required {
        color: mdg($theme, "colors", "red");
      }
    }
  }
}
</style>
