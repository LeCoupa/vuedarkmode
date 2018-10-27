<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-inputs
  div(
    v-if="!documentation"
    class="c-guide-field-inputs__showroom o-elements o-elements--form"
  )
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

  div(
    v-else
    class="c-guide-field-inputs__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-input&gt;&lt;/dm-input&gt;

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
import FieldInput from "@/components/darkmode/form/FieldInput";

export default {
  components: {
    CommonTable,
    FieldInput
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      inputs: {
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
