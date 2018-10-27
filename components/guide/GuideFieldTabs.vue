<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-tabs
  div(
    v-if="!documentation"
    class="c-guide-field-tabs__showroom o-elements o-elements--form"
  )
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

  div(
    v-else
    class="c-guide-field-tabs__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-tabs&gt;&lt;/dm-tabs&gt;
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
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      tabs: {
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
