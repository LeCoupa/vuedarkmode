<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-alert
  .c-guide-base-alert__showroom(
    v-if="!documentation"
  )
    .elements
      base-alert(
        closable
        :active.sync="orangeActive"
        color="orange"
        icon="warning"
        colorIcon="white"
      ) {{ alert.ipsum }}
    .elements
      base-alert(
        active
        closable
        title="Title, icon and closable example"
        color="black"
        icon="star"
        iconSize="24px"
        colorIcon="white"
      ) {{ alert.ipsum }}
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
      orangeActive: true,
      alert: {
        colors: [
          {
            name:"blue",
            active: true
          },
          {
            name:"green",
            active: false
          },
          {
            name:"red",
            active: false
          },
          {
            name:"orange",
            active: false
          },
          {
            name:"black",
            active: false
          },
          {
            name:"white",
            active: false
          }
        ],
        ipsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elit ac enim dignissim molestie. Phasellus molestie quis sem malesuada fringilla. Vivamus posuere facilisis scelerisque.'
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
            name: "icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Add a left icon (see material icons)."
            }
          },
          {
            name: "icon-size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Set the icon size.",
              values: '"mini" | "small" | "default" | "medium" | "large"'
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
