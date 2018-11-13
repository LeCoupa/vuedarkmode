<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-alerts
  div(
    v-if="!documentation"
    class="c-guide-base-alerts__showroom o-elements"
  )
    div(
      v-for="(color, i) in alerts.colors"
      :key="'alert' + i"
      class="o-elements__category"
    )
      base-alert(
        :color="color"
        class="c-guide-base-alerts__alert"
        icon="error_outline"
      ) This is {{ color !== "orange" ? "a" : "an" }} {{ color }} alert you can customize as you wish.

  div(
    v-else
    class="c-guide-base-alerts__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-alert&gt;My Alert&lt;/dm-alert&gt;

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
import BaseAlert from "@/components/darkmode/base/BaseAlert";
import BaseDivider from "@/components/darkmode/base/BaseDivider";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseAlert,
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
      alerts: {
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
            name: "closable",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "When set to true, a cross icon will appear at the right end of the alert."
            }
          },
          {
            name: "color",
            type: {
              type: "String",
              additional: 'Default: "blue"'
            },
            details: {
              description: "Set the alert color.",
              values: '"black" | "blue" | "green" | "orange" | "red" | "white"'
            }
          },
          {
            name: "icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a left icon (see material icons)."
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
            name: "close",
            parameters: "event",
            details: {
              description: "Fires when the user click on the cross icon."
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
$c: ".c-guide-base-alerts";

#{$c} {
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;
  }
}

@include mq($from: desktop) {
  #{$c} {
    #{$c}__showroom {
      grid-template-columns: repeat(auto-fill, 800px);
    }
  }
}
</style>
