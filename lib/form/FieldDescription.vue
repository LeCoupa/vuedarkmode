<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
p(
  :class=`[
    "dm-field-description",
    "dm-field-description--" + size
  ]`
  v-html="description"
)
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
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
$c: ".dm-field-description";
$sizes: mini, small, default, medium, large;

#{$c} {
  margin: 10px 0 0;
  color: $nepal;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      font-size: 12px + (1px * $i);
      line-height: 16px + (2px * $i);
    }
  }
}
</style>
