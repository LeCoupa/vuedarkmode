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
    overflow: hidden;
    border-radius: 4px;

    #{$c}__highlight {
      height: 100px;
    }

    #{$c}__hex {
      padding: 10px 0;
      border: 1px solid #313d4f;
      border-top: none;
      background: #273142;
      color: #ffffff;
      font-size: 14px;
      font-family: "Heebo-Bold";
    }
  }

  #{$c}__name {
    margin-top: 10px;
    color: #8dabc4;
    font-size: 14px;
  }
}
</style>
