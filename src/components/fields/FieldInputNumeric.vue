<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.gb-field-input-numeric
  field-input(
    v-bind="$attrs"
    v-on="$listeners"
    @input="onInput"
    :value="innerValue"
  )

  .gb-field-input-numeric__controls
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import FieldInput from "./FieldInput.vue"

export default {
  inheritAttrs: false,

  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  components: {
    FieldInput
  },

  data: () => ({
    // --> STATE <--

    innerValue: 0
  }),

  watch: {
    value: {
      immediate: true,
      handler(value) {
        // Synchronize inner value with new one
        this.innerValue = this.value
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onInput(value, name, event) {
      // Only accept a numeric value
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        this.innerValue = value
      }
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".gb-field-input-numeric";
</style>
