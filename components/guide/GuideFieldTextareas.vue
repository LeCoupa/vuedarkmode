<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-textareas.o-elements
  div(
    v-for="(statuses, i) in textareas.statuses"
    :key="'textareas ' + i"
    class="o-elements__category"
  )
    div(
      v-if="statuses[j]"
      v-for="(size, j) in textareas.sizes"
      :key="'textareas ' + i + ' ' + j"
      class="o-elements__item"
    )
      field-textarea(
        :label="size + ' textarea (' + statuses[j] + ')'"
        :name="'textarea_' + size + '_'  + statuses[j] + i + j"
        :placeholder="statuses[j] + ' ' + size + ' textarea'"
        :size="size"
        :status="statuses[j]"
        description="This is a customizable description for textareas."
        value="Dark Mode FTW"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldTextarea from "@/components/darkmode/form/FieldTextarea";

export default {
  components: {
    FieldTextarea
  },

  data() {
    return {
      textareas: {
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
