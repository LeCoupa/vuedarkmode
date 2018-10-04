<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
label(
  :class=`[
    "dm-field-label",
    "dm-field-label--" + size,
    {
      "dm-field-label--for-field": forField,
      "dm-field-label--uppercase": uppercase
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
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
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
$c: ".dm-field-label";
$sizes: mini, small, default, medium, large;

#{$c} {
  display: block;
  margin-bottom: 10px;
  color: $regent-st-blue;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  user-select: none;

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
