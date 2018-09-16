<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
p(
  :class=`[
    "c-base-description",
    "c-base-description--" + size
  ]`
) {{ description }}
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
      default: "default"
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-description";
$sizes: mini, small, default, medium, large;

#{$c} {
  margin: 10px 0 0;
  color: $nepal;

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      font-size: 12px + (1px * $i);
      line-height: 14px + (2px * $i);
    }
  }
}
</style>
