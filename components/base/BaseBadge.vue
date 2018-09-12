<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
span(
  :class=`[
    "c-base-badge",
    "c-base-badge--" + color,
    "c-base-badge--" + size
  ]`
): slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue"
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
$c: ".c-base-badge";
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  border-radius: 100px;
  user-select: none;
  color: $white;

  // --> COLORS <--

  &--black {
    border-color: #313d4f;
  }

  &--blue {
    border-color: #0093ee;
  }

  &--green {
    border-color: #81c926;
  }

  &--red {
    border-color: #e0102b;
  }

  &--orange {
    border-color: #faca00;
  }

  &--white {
    border-color: $white;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: 0 (10px + 1px * $i);
      font-size: 12 + (1px * $i);
      line-height: 20px + (2px * $i);
    }
  }
}
</style>
