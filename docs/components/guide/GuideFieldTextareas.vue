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

// PROJECT: COMPONENTS
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
              description: "Display the border on the textarea element."
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
                "Specifies the visible width of the textarea element."
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
                "Display an helping description below the textarea element."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the textarea element."
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
                "Specify an error message to display below the textarea element."
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
                "When set to true, the textarea element will take all the width available."
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
                "Specify an info message to display below the textarea element."
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a label above the textarea element."
            }
          },
          {
            name: "icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Add an icon at the bottom left corner of the textarea element (see material icons)."
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
                "Specify the maximum number of characters allowed in the textarea element."
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the textarea element."
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
            name: "readonly",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Specify that the textarea element is read-only."
            }
          },
          {
            name: "resize",
            type: {
              type: "String",
              additional: 'Default: "none"'
            },
            details: {
              description:
                "Specify is the textarea element is resizable by the user.",
              values:
                '"none" | "both" | "horizontal" | "vertical" | "initial" | "inherit"'
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
                "Specifies the visible number of lines in the textarea element."
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the textarea element.",
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
              description: "Specify the status for the textarea element.",
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
                "Specify a success message to display below the textarea element."
            }
          },
          {
            name: "theme",
            type: {
              type: "String",
              additional: 'Default: "dark"'
            },
            details: {
              description: "Specify the theme to use for the textarea element.",
              values: '"dark" | "light"'
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
                "Specify the validation rules for the textarea (check <a href='https://baianat.github.io/vee-validate/guide/rules.html' target='_blank'>VeeValidate documentation</a>)."
            }
          },
          {
            name: "validation-ref",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify the ref attribute to set on the element (used for after, before, and confirmed rules)."
            }
          },
          {
            name: "validation-vv-as",
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
            name: "value",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Specify the value of the textarea element."
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
                "Specify a warning message to display below the textarea element."
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
