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
import FieldCheckbox from "@/components/darkmode/form/FieldCheckbox";

export default {
  components: {
    CommonTable,
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
            name: "checked",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "description",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "full-width",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "required",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "status",
            type: {
              type: "String",
              additional: 'Default: "normal"'
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
