<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-selects
  div(
    v-if="!documentation"
    class="c-guide-field-selects__showroom o-elements o-elements--form"
  )
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

  div(
    v-else
    class="c-guide-field-selects__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-select&gt;&lt;/dm-select&gt;

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
import FieldSelect from "@/components/darkmode/form/FieldSelect";

export default {
  components: {
    CommonTable,
    FieldSelect
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selects: {
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
            name: "borders",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description: "Display the border on the select element."
            }
          },
          {
            name: "description",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Display an helping description below the select element."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the select element."
            }
          },
          {
            name: "full-width",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description:
                "When set to true, the select element will take all the width available."
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a label above the select element."
            }
          },
          {
            name: "left-icon",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Add a left icon (see material icons)."
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the select element."
            }
          },
          {
            name: "options",
            type: {
              type: "Array",
              additional: "Required: true"
            },
            details: {
              description:
                "Define the options to display in the select element.",
              values: '{ label: "My Label", value: "My Value" }'
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the select element.",
              values: '"mini" | "small"  | "default" | "medium" | "large"'
            }
          },
          {
            name: "status",
            type: {
              type: "String",
              additional: 'Default: "normal"'
            },
            details: {
              description: "Specify the status for the select element.",
              values: '"error" | "normal" | "success" | "warning"'
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
