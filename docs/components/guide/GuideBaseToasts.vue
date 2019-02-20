<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-toasts
  div(
    v-if="!documentation"
    class="c-guide-base-toasts__showroom o-elements o-elements--horizontal"
  )
    div(
      v-for="(color, i) in toasts.colors"
      :key="'toast' + i"
      class="o-elements__category"
    )
      base-toast(
        :color="color"
        class="c-guide-base-toasts__toast"
        icon="error_outline"
      ) {{ color !== "orange" ? "A" : "An" }} {{ color }} toast.

  div(
    v-else
    class="c-guide-base-toasts__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-toast&gt;My Toast&lt;/dm-toast&gt;

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
// VUE DARK MODE
import BaseToast from "@/../lib/components/base/BaseToast";
import BaseDivider from "@/../lib/components/base/BaseDivider";

// PROJECT: COMPONENTSS
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseToast,
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
      toasts: {
        colors: ["blue", "green", "red", "orange", "black", "white"]
      },
      props: {
        fields: [
          {
            name: "name",
            title: "Prop name",
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
                "When set to true, a cross icon will appear at the right end of the toast."
            }
          },
          {
            name: "color",
            type: {
              type: "String",
              additional: 'Default: "blue"'
            },
            details: {
              description: "Set the toast color.",
              values: '"black" | "blue" | "green" | "orange" | "red" | "white"'
            }
          },
          {
            name: "width",
            type: {
              type: "String",
              additional: 'Default: "225px"'
            },
            details: {
              description: "Set the toast width."
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
              description: "Fires when the user clicks on the cross icon."
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
$c: ".c-guide-base-toasts";

#{$c} {
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 250px);
  }
}
</style>
