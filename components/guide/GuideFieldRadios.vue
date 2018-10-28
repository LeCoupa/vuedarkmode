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
      v-for="(statuses, i) in radios.statuses"
      :key="'radios ' + i"
      class="o-elements__category"
    )
      div(
        v-if="statuses[j]"
        v-for="(size, j) in radios.sizes"
        :key="'radios ' + i + ' ' + j"
        class="o-elements__item"
      )
        field-radio(
          :checked="j === 0"
          :fullWidth="false"
          :label="size.charAt(0).toUpperCase() + size.slice(1) + ' radio (' + statuses[j] + ')'"
          :name="'radios_' + i"
          :size="size"
          :status="statuses[j]"
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
        | &lt;dm-radio&gt;&lt;/dm-radio&gt;

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
import FieldRadio from "@/components/darkmode/form/FieldRadio";

export default {
  components: {
    CommonTable,
    FieldRadio
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
              additional: 'Default: "default"'
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
