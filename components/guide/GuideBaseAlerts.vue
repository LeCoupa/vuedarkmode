<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-alert
  div(
    v-if="!documentation"
    class="c-guide-base-alert__showroom"
  )
    div(
      v-for="(color, i) in alert.colors"
      :key="'button' + color + i"
      class="o-elements__category"
    )
      base-alert(
        active
        :color="color"
        class="o-elements__button"
      ) {{ color }}
  div(
    v-else
    class="c-guide-base-alert__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-alert :active="active"&gt;My alert&lt;/dm-alert&gt;

    no-ssr
      common-table(
        :data="props.data"
        :fields="props.fields"
        class="u-mb40"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import BaseAlert from "@/components/darkmode/base/BaseAlert";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
    CommonTable,
    BaseAlert
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      alert: {
        colors: ["blue", "green", "red", "orange", "black", "white"]
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
            name: "active",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "If true then the component is visible."
            }
          },
          {
            name: "title",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Set the alert title."
            }
          },
          {
            name: "closable",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "If true then the user can close the alert left clicking the \"X\" icon."
            }
          },
          {
            name: "color",
            type: {
              type: "String",
              additional: "Default: blue"
            },
            details: {
              description: "Set the alert color.",
              values: '"black" | "blue" | "green" | "orange" | "red" | "white"'
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
