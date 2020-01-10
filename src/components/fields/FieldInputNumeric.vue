<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.gb-field-input-numeric
  field-input(
    v-bind="$attrs"
    v-on="$listeners"
    @prependClick="onDecrement"
    @appendClick="onIncrement"
    @input="onInput"
    v-model="innerValue"
    append="+"
    prepend="-"
    type="number"
  )
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

    onDecrement() {
      this.innerValue -= 1
    },

    onIncrement() {
      this.innerValue += 1
    },

    onInput(value, name, event) {
      console.log(value, event)

      if (event.data !== "e") {
        console.log("not e")
        this.innerValue = value || 0
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

#{$c} {
  input {
    text-align: center;

    // Disable the spin-button for webkit browsers
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
}
</style>
