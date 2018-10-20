<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-selects.o-elements
  div(
    v-for="(statuses, i) in selects.statuses"
    :key="'selects ' + i"
    class="o-elements__category"
  )
    div(
      v-if="statuses[j]"
      v-for="(size, j) in selects.sizes"
      :key="'selects ' + i + ' ' + j"
      class="o-elements__item"
    )
      field-select(
        :label="size + ' select (' + statuses[j] + ')'"
        :name="'select_' + size + '_'  + statuses[j] + i + j"
        :options=`[
          { label: 'Dark Mode FTW 1', value: 'Dark Mode FTW 1' },
          { label: 'Dark Mode FTW 2', value: 'Dark Mode FTW 2' },
          { label: 'Dark Mode FTW 3', value: 'Dark Mode FTW 3' },
          { label: 'Dark Mode FTW 4', value: 'Dark Mode FTW 4' }
        ]`
        :size="size"
        :status="statuses[j]"
        description="This is a customizable description for selects."
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldSelect from "@/components/darkmode/form/FieldSelect";

export default {
  components: {
    FieldSelect
  },

  data() {
    return {
      selects: {
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
