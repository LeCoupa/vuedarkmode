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
          :clickable="true"
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
        class="u-mb40"
      )

    base-divider(
      color="white"
      class="u-mb40"
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
import BaseBadge from "@/components/darkmode/base/BaseBadge";
import BaseDivider from "@/components/darkmode/base/BaseDivider";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseBadge,
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
            name: "clickable",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Whether the badge is clickable or not."
            }
          },
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
            name: "id",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Set the id property (will be emitted during events)."
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
            name: "click",
            parameters: "id, event",
            details: {
              description: "Fires on a mouse click on the element."
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
$c: ".c-guide-base-badges";

@include mq($from: desktop) {
  #{$c} {
    #{$c}__showroom {
      grid-template-columns: repeat(auto-fill, 400px);
    }
  }
}
</style>
