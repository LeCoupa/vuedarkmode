<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-toggles
  div(
    v-if="!documentation"
    class="c-guide-field-toggles__showroom o-elements o-elements--form"
  )
    div(
      v-for="(statuses, i) in toggles.statuses"
      :key="'toggles ' + i"
      class="o-elements__category"
    )
      div(
        v-if="statuses[j]"
        v-for="(size, j) in toggles.sizes"
        :key="'toggles ' + i + ' ' + j"
        class="o-elements__item"
      )
        field-toggle(
          :checked="i === 1"
          :fullWidth="false"
          :label="size.charAt(0).toUpperCase() + size.slice(1) + ' toggle (' + statuses[j] + ')'"
          :name="'toggle_' + size + '_'  + statuses[j] + i + j"
          :size="size"
          :status="statuses[j]"
          description="This is a customizable description for toggles."
        )

  div(
    v-else
    class="c-guide-field-toggles__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-toggle&gt;&lt;/dm-toggle&gt;
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldToggle from "@/components/darkmode/form/FieldToggle";

export default {
  components: {
    FieldToggle
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      toggles: {
        sizes: ["large", "medium", "default", "small", "mini"],
        statuses: [
          ["normal", "normal", "normal", "normal", "normal"],
          ["normal", "success", "error", "warning"]
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
