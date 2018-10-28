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
            name: "autocomplete",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Set the autocomplete attribute to 'on'."
            }
          },
          {
            name: "borders",
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
            name: "left-icon",
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
            name: "max",
            type: {
              type: "Number",
              additional: "Default: null"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "max-length",
            type: {
              type: "Number",
              additional: "Default: null"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "min",
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
            name: "min-length",
            type: {
              type: "Number",
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
            name: "placeholder",
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
            name: "read-only",
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
            name: "right-icon",
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
            name: "rounded",
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
          },
          {
            name: "type",
            type: {
              type: "String",
              additional: 'Default: "text"'
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "value",
            type: {
              type: "[String, Number]",
              additional: "Default: null"
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
