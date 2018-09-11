<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  :class=`[
    'c-base-button',
    'c-base-button--' + color,
    'c-base-button--' + size
  ]`
)
  span.c-base-button__label: slot
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
$c: ".c-base-button";

#{$c} {
  outline: 0;
  border-radius: 4px;
  font-family: "Heebo Medium";
  user-select: none;
  cursor: pointer;
  background-color: transparent; // Chrome displays white borders sometimes

  // --> COLORS <--

  &--black {
    border: 1px solid #313d4f;
    background-color: #222c3c;
    color: $white;
  }

  &--blue {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(-1deg, #1991eb 2%, #2da1f8 98%);
    color: $white;
  }

  &--green {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #4ece3d;
    color: $white;
  }

  &--orange {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(-1deg, #fdc018 2%, #ffc82e 98%);
    color: $white;
  }

  &--red {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(0deg, #c8270c 0%, #e44023 100%);
    color: $white;
  }

  &--white {
    border: 1px solid #e6eaee;
    background-image: linear-gradient(0deg, #f4f7fa 0%, #ffffff 100%);
    color: #2c405a;
  }

  // --> SIZES <--

  &--mini {
    padding: 8px 12px;
    font-size: 12px;
    line-height: 14px;
  }

  &--small {
    padding: 10px 16px;
    font-size: 14px;
    line-height: 16px;
  }

  &--default {
    padding: 12px 20px;
    font-size: 16px;
    line-height: 18px;
  }

  &--medium {
    padding: 14px 24px;
    font-size: 18px;
    line-height: 20px;
  }

  &--large {
    padding: 16px 28px;
    font-size: 20px;
    line-height: 22px;
  }
}
</style>
