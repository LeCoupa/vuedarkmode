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
          value="Vue Dark Mode"
        )

  div(
    v-else
    class="c-guide-field-inputs__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-input v-model="synchronizedValue"&gt;&lt;/dm-input&gt;

    no-ssr
      common-table(
        :data="props.data"
        :fields="props.fields"
        class="u-mb40"
      )

    base-divider(
      class="u-mb40"
      color="white"
      size="small"
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
// VUE DARK MODE
import BaseDivider from "@/../lib/components/base/BaseDivider";
import FieldInput from "@/../lib/components/form/FieldInput";

// PROJECT: COMPONENTS
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
            name: "append",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Append an information block after the field input."
            }
          },
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
            name: "autofocus",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "Automatically focus the element when the component renders."
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
            name: "clearable",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "Display a cross on the right side of the input to clear the current value."
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
            name: "error",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify an error message to display below the input element."
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
            name: "info",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify an info message to display below the input element."
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
            name: "prepend",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Prepend an information block before the field input."
            }
          },
          {
            name: "readonly",
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
            name: "rules",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify the validation rules for the input (check <a href='https://logaretm.github.io/vee-validate/api/rules.html' target='_blank'>VeeValidate documentation</a>)."
            }
          },
          {
            name: "rules-name",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify the field name used as the field label in the error message."
            }
          },
          {
            name: "show-errors",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description:
                "Specify if we should display the message for errors below the field."
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
            name: "spellcheck",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "Specifies whether the element is to have its spelling and grammar checked or not."
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
            name: "success",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify a success message to display below the input element."
            }
          },
          {
            name: "theme",
            type: {
              type: "String",
              additional: 'Default: "dark"'
            },
            details: {
              description: "Specify the theme to use for the input element.",
              values: '"dark" | "light"'
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
          },
          {
            name: "warning",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify a warning message to display below the input element."
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
            name: "appendClick",
            parameters: "value, name, event",
            details: {
              description: "Fires on a mouse click on the append block."
            }
          },
          {
            name: "blur",
            parameters: "value, name, event",
            details: {
              description: "Fires the moment when the element loses focus."
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
          },
          {
            name: "keydown",
            parameters: "value, name, event",
            details: {
              description: "Fires the moment when the user is pressing a key."
            }
          },
          {
            name: "keyup",
            parameters: "value, name, event",
            details: {
              description: "Fires the moment when the user releases a key."
            }
          },
          {
            name: "prependClick",
            parameters: "value, name, event",
            details: {
              description: "Fires on a mouse click on the prepend block."
            }
          },
          {
            name: "submit",
            parameters: "value, name, event",
            details: {
              description: "Fires when the user presses enter."
            }
          }
        ]
      }
    };
  }
};
</script>
