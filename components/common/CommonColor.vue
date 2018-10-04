<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-common-color
  .c-common-color__block
    div(
      :style=`{
        backgroundColor: hex
      }`
      class="c-common-color__highlight",
    )
    .c-common-color__hex {{ hex }}

  .c-common-color__name {{ name }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    hex: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-common-color";

#{$c} {
  width: 100px;
  text-align: center;

  #{$c}__block {
    #{$c}__highlight {
      box-sizing: border-box;
      height: 100px;
      border: 1px solid $oxford-blue;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    #{$c}__hex {
      padding: 10px 0;
      border: 1px solid $oxford-blue;
      border-top: none;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      background: $ebony-clay-2;
      color: $white;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
    }
  }

  #{$c}__name {
    margin-top: 10px;
    color: $nepal;
    font-size: 14px;
  }
}
</style>
