<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-dividers
  div(
    v-if="!documentation"
    class="c-guide-base-dividers__showroom o-elements"
  )
    div(
      v-for="(color, i) in dividers.colors"
      :key="'divider' + color + i"
      class="o-elements__category"
    )
      div(
        v-for="(size, j) in dividers.sizes"
        :key="'divider' + color + j + size"
        class="o-elements__item"
      )
        base-divider(
          :color="color"
          :size="size"
          class="c-guide-base-dividers__divider"
        )

  div(
    v-else
    class="c-guide-base-dividers__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-divider&gt;&lt;/dm-divider&gt;

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
import BaseDivider from "@/components/darkmode/base/BaseDivider";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
    CommonTable
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dividers: {
        colors: [
          "blue",
          "green",
          "red",
          "orange",
          "turquoise",
          "purple",
          "black",
          "white"
        ],
        sizes: ["large", "small"]
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
            name: "color",
            type: {
              type: "String",
              additional: 'Default: "blue"'
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
              additional: 'Default: "small"'
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
$c: ".c-guide-base-dividers";

#{$c} {
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;

    #{$c}__divider {
      margin: 0 auto;
    }
  }
}
</style>
