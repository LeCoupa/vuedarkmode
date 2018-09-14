<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
label(
  :class=`[
    "c-base-label",
    "c-base-label--" + size,
    {
      "c-base-label--uppercase": uppercase
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
$c: ".c-base-label";
$sizes: mini, small, default, medium, large;

#{$c} {
  display: inline-block;
  margin-bottom: 10px;
  color: #a8c6df;
  font-family: "Heebo Medium";
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
