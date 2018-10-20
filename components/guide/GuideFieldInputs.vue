<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-inputs.o-elements
  div(
    v-for="(statuses, i) in inputs.statuses"
    :key="'inputs ' + i"
    class="o-elements__category"
  )
    div(
      v-if="statuses[j]"
      v-for="(size, j) in inputs.sizes"
      :key="'inputs ' + i + ' ' + j"
      class="o-elements__item"
    )
      field-input(
        :label="size + ' input (' + statuses[j] + ')'"
        :name="'input_' + size + '_'  + statuses[j] + i + j"
        :placeholder="statuses[j] + ' ' + size + ' input'"
        :size="size"
        :status="statuses[j]"
        class="c-index__input"
        description="This is a customizable description for inputs."
        value="Dark Mode FTW"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldInput from "@/components/darkmode/form/FieldInput";

export default {
  components: {
    FieldInput
  },

  data() {
    return {
      inputs: {
        sizes: ["large", "medium", "default", "small", "mini"],
        statuses: [
          ["normal", "normal", "normal", "normal", "normal"],
          ["success", "error", "warning"]
        ]
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
</style>
