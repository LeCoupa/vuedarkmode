<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
label(
  @click="onClick"
  :class=`[
    "gb-field-label",
    "gb-field-label--" + size,
    "gb-field-label--" + computedTheme,
    {
      "gb-field-label--clickable": $listeners.click || forField,
      "gb-field-label--uppercase": uppercase
    }
  ]`
  :for="forField"
)
  slot

  span(
    v-if="required"
    class="gb-field-label__required"
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
$c: ".gb-field-label";
$sizes: "mini", "small", "default", "medium", "large";

#{$c} {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      color: mdg($theme, "fonts", "default", "secondary");

      #{$c}__required {
        color: mdg($theme, "colors", "red");
      }
    }
  }
}
</style>
