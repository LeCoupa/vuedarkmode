<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-knowledge-color
  .c-knowledge-color__block
    div(
      :style=`{
        backgroundColor: hex
      }`
      class="c-knowledge-color__highlight",
    )
    .c-knowledge-color__hex {{ hex }}

  .c-knowledge-color__name {{ name }}
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
$c: ".c-knowledge-color";

#{$c} {
  width: 100px;
  text-align: center;

  #{$c}__block {
    #{$c}__highlight {
      box-sizing: border-box;
      height: 100px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border: 1px solid $oxford-blue;
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
      font-size: 14px;
      font-family: "Heebo-Bold";
    }
  }

  #{$c}__name {
    margin-top: 10px;
    color: $nepal;
    font-size: 14px;
  }
}
</style>
