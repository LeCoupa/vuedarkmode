<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
label(
  :class=`[
    "c-field-label",
    "c-field-label--" + size,
    {
      "c-field-label--uppercase": uppercase
    }
  ]`
  :for="forField"
): slot
</template>


<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->


<script>
export default {
  props: {
    forField: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    uppercase: {
      type: Boolean,
      default: true
    }
  }
};
</script>


<!-- *************************************************************************
     STYLE
     ************************************************************************* -->


<style lang="scss">
$c: ".c-field-label";
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  margin-bottom: 8px;
  color: $regent-st-blue;
  font-family: "Heebo Medium";
  user-select: none;
  cursor: pointer;

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      font-size: 12px + (1px * $i);
    }
  }

  // --> BOOLEANS <--

  &--uppercase {
    text-transform: uppercase;
  }
}
</style>
