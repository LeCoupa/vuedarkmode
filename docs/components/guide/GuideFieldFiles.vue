<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-files
  div(
    v-if="!documentation"
    class="c-guide-field-files__showroom o-elements o-elements--form"
  )
    div(
      v-for="(statuses, i) in files.statuses"
      :key="'files ' + i"
      class="o-elements__category"
    )
      div(
        v-if="statuses[j]"
        v-for="(size, j) in files.sizes"
        :key="'files ' + i + ' ' + j"
        class="o-elements__item"
      )
        field-file(
          :fullWidth="false"
          :label="size.charAt(0).toUpperCase() + size.slice(1) + ' file upload (' + statuses[j] + ')'"
          :name="'file_' + size + '_'  + statuses[j] + i + j"
          :size="size"
          :status="statuses[j]"
          description="JPG, max. 500KB"
        )

  div(
    v-else
    class="c-guide-field-files__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-file v-model="synchronizedValue"&gt;&lt;/dm-file&gt;

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
import FieldFile from "@/../lib/components/form/FieldFile";

// PROJECT: COMPONENTS
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
    CommonTable,
    FieldFile
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      files: {
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
            name: "description",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Display an helping description below the file element."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the file element."
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
                "Specify an error message to display below the file element."
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
                "When set to true, the file element will take all the width available."
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
                "Specify an info message to display below the file element."
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a label above the file element."
            }
          },
          {
            name: "multiple",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "When set to true, the file element will accept multiple files."
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the file element."
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the file element.",
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
              description: "Specify the status for the file element.",
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
                "Specify a success message to display below the file element."
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
                "Specify the validation rules for the file element (check <a href='https://baianat.github.io/vee-validate/guide/rules.html' target='_blank'>VeeValidate documentation</a>)."
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
            name: "warning",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify a warning message to display below the file element."
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
            name: "change",
            parameters: "name, event",
            details: {
              description:
                "Fires the moment when the value of the element is changed."
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
// VARIABLES
$c: ".c-guide-field-files";

#{$c} {
  .dm-field-file__information {
    min-width: 235px;
  }
}
</style>
