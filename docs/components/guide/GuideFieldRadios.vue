<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-radios
  div(
    v-if="!documentation"
    class="c-guide-field-radios__showroom o-elements o-elements--form"
  )
    div(
      v-for="(status, i) in radios.statuses"
      :key="'radios ' + i"
      class="o-elements__category"
    )
      .o-elements__item
        field-radios(
          :name="'input_' + status"
          :radios=`[
            { label: 'Vue Dark Mode 1', id: 'vuedarkmode1' + i, value: 'vuedarkmode1' + i },
            { label: 'Vue Dark Mode 2', id: 'vuedarkmode2' + i, value: 'vuedarkmode2' + i },
            { label: 'Vue Dark Mode 3', id: 'vuedarkmode3' + i, value: 'vuedarkmode3' + i },
            { label: 'Vue Dark Mode 4', id: 'vuedarkmode4' + i, value: 'vuedarkmode4' + i }
          ]`
          :status="status"
          :size="i === 0 ? 'default' : 'large'"
          description="This is a customizable description for radios."
        )

  div(
    v-else
    class="c-guide-field-radios__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-radios v-model="synchronizedValue"&gt;&lt;/dm-radios&gt;

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
import FieldRadios from "@/../lib/components/form/FieldRadios";

// PROJECT: COMPONENTS
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
    CommonTable,
    FieldRadios
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      radios: {
        statuses: ["normal", "success"]
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
                "Display an helping description below the radio element."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the radio element."
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
                "Specify an error message to display below the radio element."
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
                "When set to true, the radio element will take all the width available."
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
                "Specify an info message to display below the radio element."
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the radio element."
            }
          },
          {
            name: "radios",
            type: {
              type: "Array",
              additional: "Required: true"
            },
            details: {
              description: "Define all radio elements to display.",
              values:
                '[{ label: "My Label", id: "myUniqueId", value: "My Value" }]'
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
                "Specify the validation rules for the radio element (check <a href='https://logaretm.github.io/vee-validate/api/rules.html' target='_blank'>VeeValidate documentation</a>)."
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
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the radio element.",
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
              description: "Specify the status for the radio element.",
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
                "Specify a success message to display below the radio element."
            }
          },
          {
            name: "value",
            type: {
              type: "[Number, String]",
              additional: "Default: null"
            },
            details: {
              description: "Specify the current active radio."
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
                "Specify a warning message to display below the radio element."
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
            parameters: "value, id, name, event",
            details: {
              description:
                "Fires the moment when the value of the radios is changed"
            }
          }
        ]
      }
    };
  }
};
</script>
