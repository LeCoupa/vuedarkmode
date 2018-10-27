<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-textareas
  div(
    v-if="!documentation"
    class="c-guide-field-textareas__showroom o-elements o-elements--form"
  )
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

  div(v-else)
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-textarea&gt;&lt;/dm-textarea&gt;
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

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
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
