<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
label(
  :class=`[
    "c-field-label",
    "c-field-label--" + size,
    {
      "c-field-label--for-field": forField,
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
      default: null
    },
    size: {
      type: String,
      default: "default"
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
  display: block;
  margin-bottom: 10px;
  color: $regent-st-blue;
  font-family: "Heebo Medium";

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      font-size: 12px + (1px * $i);
      line-height: 14px + (2px * $i);
    }
  }

  // --> BOOLEANS <--

  &--for-field {
    cursor: pointer;
  }

  &--uppercase {
    text-transform: uppercase;
  }
}
</style>
