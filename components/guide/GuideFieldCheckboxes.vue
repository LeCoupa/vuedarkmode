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
// PROJECT
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import FieldCheckbox from "@/components/darkmode/form/FieldCheckbox";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
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
            name: "checked",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Sets the checked state of the checkbox element."
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
                "Display an helping description below the checkbox element."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the checkbox element."
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
                "When set to true, the checkbox element will take all the width available."
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a label above the checkbox element."
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the checkbox element."
            }
          },
          {
            name: "required",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "Sets whether the checkbox element must be checked before submitting the form."
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the checkbox element.",
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
              description: "Specify the status for the checkbox element.",
              values: '"error" | "normal" | "success" | "warning"'
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
            parameters: "checked, name, event",
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
</style>
