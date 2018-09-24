<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-tabs.o-elements
  div(
    v-for="(statuses, i) in tabs.statuses"
    :key="'tabs ' + i"
    class="o-elements__category"
  )
    div(
      v-if="statuses[j]"
      v-for="(size, j) in tabs.sizes"
      :key="'tabs ' + i + ' ' + j"
      class="o-elements__item"
    )
      field-tabs(
        :label="size.charAt(0).toUpperCase() + size.slice(1) + ' tabs (' + statuses[j] + ')'"
        :size="size"
        :status="statuses[j]"
        :tabs=`[
          { id: "auto", name: 'Auto', active: true },
          { id: "none", name: 'None', active: false },
          { id: "k", name: 'K', active: false },
          { id: "M", name: 'M', active: false },
          { id: "B", name: 'B', active: false }
        ]`
        description="This is a customizable description for tabs."
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldTabs from "@/components/darkmode/form/FieldTabs";

export default {
  components: {
    FieldTabs
  },

  props: {
    tabs: {
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
