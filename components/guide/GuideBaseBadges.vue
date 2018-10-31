<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-badges
  div(
    v-if="!documentation"
    class="c-guide-base-badges__showroom o-elements o-elements--horizontal o-elements--vertical-on-mobile"
  )
    div(
      v-for="(color, i) in badges.colors"
      :key="'badge' + color + i"
      class="o-elements__category"
    )
      div(
        v-for="(size, j) in badges.sizes"
        :key="'badge' + color + j + size"
        class="o-elements__item"
      )
        base-badge(
          :color="color"
          :size="size"
        ) {{ size }}

  div(
    v-else
    class="c-guide-base-badges__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-badge&gt;My Badge&lt;/dm-badge&gt;

    no-ssr
      common-table(
        :data="props.data"
        :fields="props.fields"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseBadge from "@/components/darkmode/base/BaseBadge";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseBadge,
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
      badges: {
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
        sizes: ["large", "medium", "default", "small", "mini"]
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
            name: "color",
            type: {
              type: "String",
              additional: "Default: blue"
            },
            details: {
              description: "Set the badge color.",
              values:
                '"black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"'
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Set the badge size.",
              values: '"mini" | "small" | "default" | "medium" | "large"'
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
$c: ".c-guide-base-badges";

#{$c} {
  #{$c}__showroom {
    grid-template-columns: repeat(auto-fill, 400px);
    margin-bottom: 0;
  }
}
</style>
