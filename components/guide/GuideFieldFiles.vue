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
        | &lt;dm-file&gt;&lt;/dm-file&gt;

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
import FieldFile from "@/components/darkmode/form/FieldFile";

export default {
  components: {
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
$c: ".c-guide-field-files";

#{$c} {
  .dm-field-file__information {
    min-width: 235px;
  }
}
</style>
