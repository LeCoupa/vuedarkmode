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
            name: "",
            type: {
              type: "",
              additional: ""
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
$c: ".c-guide-field-files";

#{$c} {
  .dm-field-file__information {
    min-width: 235px;
  }
}
</style>
