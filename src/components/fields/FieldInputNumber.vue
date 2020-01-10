<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.gb-field-input-number
  field-input-number(
    v-bind="$attrs"
    v-on="$listeners"
  )

  .gb-field-input-number__controls
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import FieldInput from "./FieldInput.vue"

export default {
  inheritAttrs: false,

  components: {
    FieldInput
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".gb-field-input-number";
</style>
