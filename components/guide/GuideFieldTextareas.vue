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

  div(
    v-else
    class="c-guide-field-textareas__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-textarea&gt;&lt;/dm-textarea&gt;

    no-ssr
      common-table(
        :data="table.data"
        :fields="table.fields"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
const CommonTable = () => import("@/components/common/CommonTable");
import FieldTextarea from "@/components/darkmode/form/FieldTextarea";

export default {
  components: {
    CommonTable,
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
      },
      table: {
        fields: [
          {
            name: "name",
            title: "Prop Name",
            dataClass: "u-bold",
            width: "150px"
          },
          {
            name: "type",
            title: "Type",
            width: "150px"
          },
          {
            name: "details",
            title: "Details"
          }
        ],
        data: [
          {
            name: "",
            type: {
              type: "",
              additional: ""
            },
            details: {
              description: "",
              values: ""
            }
          }
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
