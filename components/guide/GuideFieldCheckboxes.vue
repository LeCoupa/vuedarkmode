<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-checkboxes.o-elements
  div(
    v-for="(statuses, i) in checkboxes.statuses"
    :key="'checkboxes ' + i"
    class="o-elements__category"
  )
    div(
      v-if="statuses[j]"
      v-for="(size, j) in checkboxes.sizes"
      :key="'checkboxes ' + i + ' ' + j"
      class="o-elements__item"
    )
      field-checkbox(
        :checked="i === 1"
        :fullWidth="false"
        :label="size.charAt(0).toUpperCase() + size.slice(1) + ' checkbox (' + statuses[j] + ')'"
        :name="'checkbox_' + size + '_'  + statuses[j] + i + j"
        :size="size"
        :status="statuses[j]"
        description="This is a customizable description for checkboxes."
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldCheckbox from "@/components/darkmode/form/FieldCheckbox";

export default {
  components: {
    FieldCheckbox
  },

  props: {
    checkboxes: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
</style>
