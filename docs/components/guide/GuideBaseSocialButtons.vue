<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-social-buttons
  div(
    v-if="!documentation"
    class="c-guide-base-social-buttons__showroom o-elements o-elements--horizontal o-elements--vertical-on-mobile"
  )
    div(
      v-for="(network, i) in socialButtons.networks"
      :key="'socialButton' + network + i"
      class="o-elements__category"
    )
      div(
        v-for="(size, j) in socialButtons.sizes"
        :key="'socialButton' + network + j + size"
        class="o-elements__item"
      )
        base-social-button(
          :network="network"
          :size="size"
        ) Connect with {{ network | capitalize }}

  div(
    v-else
    class="c-guide-base-social-buttons__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-social-button&gt;Connect with Facebook&lt;/dm-social-button&gt;

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
import BaseDivider from "@/../lib/components/base/BaseDivider";
import BaseSocialButton from "@/../lib/components/base/BaseSocialButton";

// PROJECT: COMPONENTS
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  components: {
    BaseDivider,
    BaseSocialButton,
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
      socialButtons: {
        networks: ["facebook", "messenger", "twitter", "google"],
        sizes: ["large", "small"]
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
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Add the disabled tag property to the button."
            }
          },
          {
            name: "full-width",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "When set to true, the social button button will take all the width available."
            }
          },
          {
            name: "loading",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "Set the button as loading and display a small spinner inside it."
            }
          },
          {
            name: "network",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Set the social network.",
              values:
                '"facebook" | "google" | "messenger" | "shopify" | "twitter"'
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Set the button size.",
              values:
                '"nano" | "micro" | "mini" | "small" | "default" | "medium" | "large"'
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
            parameters: "network, event",
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
$c: ".c-guide-base-social-buttons";

#{$c} {
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;
  }
}
</style>
