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
        :data="props.data"
        :fields="props.fields"
        class="u-mb40"
      )

    base-divider(
      color="white"
      class="u-mb40"
    )
    no-ssr
      common-table(
        :data="events.data"
        :fields="events.fields"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import FieldInput from "@/components/darkmode/form/FieldInput";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
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
      props: {
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
              description: "Display the border on the input element."
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
                "Display an helping description below the input element."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the input element."
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
                "When set to true, the input element will take all the width available."
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a label above the input element."
            }
          },
          {
            name: "left-icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a left icon (see material icons)."
            }
          },
          {
            name: "max",
            type: {
              type: "Number",
              additional: "Default: null"
            },
            details: {
              description: "Specify the maximum value for the input element."
            }
          },
          {
            name: "maxlength",
            type: {
              type: "Number",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify the maximum number of characters allowed in the input element."
            }
          },
          {
            name: "min",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify a minimum value for the input element."
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the input element."
            }
          },
          {
            name: "placeholder",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify a short hint that describes the expected value."
            }
          },
          {
            name: "read-only",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Specify that the input element is read-only."
            }
          },
          {
            name: "right-icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a right icon (see material icons)."
            }
          },
          {
            name: "rounded",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Round the border corner of the input element."
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the input element.",
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
              description: "Specify the status for the input element.",
              values: '"error" | "normal" | "success" | "warning"'
            }
          },
          {
            name: "type",
            type: {
              type: "String",
              additional: 'Default: "text"'
            },
            details: {
              description: "Specify the input type attribute.",
              values:
                '"currency" | "email" | "date" | "datetime-local" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week"'
            }
          },
          {
            name: "value",
            type: {
              type: "String or Number",
              additional: "Default: null"
            },
            details: {
              description: "Specify the value of the input element."
            }
          }
        ]
      },
      events: {
        fields: [
          {
            name: "name",
            title: "Event Name",
            dataClass: "u-bold",
            width: "150px"
          },
          {
            name: "parameters",
            title: "Parameters",
            width: "150px"
          },
          {
            name: "details",
            title: "Details"
          }
        ],
        data: [
          {
            name: "blur",
            parameters: "value, name, event",
            details: {
              description: "Fires the moment that the element loses focus."
            }
          },
          {
            name: "change",
            parameters: "value, name, event",
            details: {
              description:
                "Fires the moment when the value of the element is changed."
            }
          },
          {
            name: "click",
            parameters: "value, name, event",
            details: {
              description: "Fires on a mouse click on the element."
            }
          },
          {
            name: "focus",
            parameters: "value, name, event",
            details: {
              description: "Fires the moment when the element gets focus."
            }
          },
          {
            name: "input",
            parameters: "value, name, event",
            details: {
              description: "Fires the moment when the element gets user input."
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
