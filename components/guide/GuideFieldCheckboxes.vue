<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-checkboxes
  div(
    v-if="!documentation"
    class="c-guide-field-checkboxes__showroom o-elements o-elements--form"
  )
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

  div(
    v-else
    class="c-guide-field-checkboxes__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-checkbox&gt;&lt;/dm-checkbox&gt;
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
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      checkboxes: {
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
