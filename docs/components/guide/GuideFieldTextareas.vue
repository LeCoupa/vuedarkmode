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
          value="Vue Dark Mode"
        )

  div(
    v-else
    class="c-guide-field-textareas__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-textarea v-model="synchronizedValue"&gt;&lt;/dm-textarea&gt;

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
import FieldTextarea from "@/../lib/components/form/FieldTextarea";

// PROJECT
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
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
            name: "borders",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description: "Display the border on the text area element."
            }
          },
          {
            name: "cols",
            type: {
              type: "Number",
              additional: "Default: null"
            },
            details: {
              description:
                "Specifies the visible width of the text area element."
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
                "Display an helping description below the text area element."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the text area element."
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
                "When set to true, the text area element will take all the width available."
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a label above the text area element."
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
                "Specify the maximum number of characters allowed in the text area element."
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the text area element."
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
              description: "Specify that the text area element is read-only."
            }
          },
          {
            name: "rows",
            type: {
              type: "Number",
              additional: "Default: null"
            },
            details: {
              description:
                "Specifies the visible number of lines in the text area element."
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the text area element.",
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
              description: "Specify the status for the text area element.",
              values: '"error" | "normal" | "success" | "warning"'
            }
          },
          {
            name: "validation",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify the text area validation rules (check VeeValidate documentation)."
            }
          },
          {
            name: "value",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Specify the value of the text area element."
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

<style lang="scss"></style>
