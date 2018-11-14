<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-social-logins
  div(
    v-if="!documentation"
    class="c-guide-base-social-logins__showroom o-elements o-elements--horizontal o-elements--vertical-on-mobile"
  )
    div(
      v-for="(network, i) in socialLogins.networks"
      :key="'socialLogin' + network + i"
      class="o-elements__category"
    )
      div(
        v-for="(size, j) in socialLogins.sizes"
        :key="'socialLogin' + network + j + size"
        class="o-elements__item"
      )
        base-social-login(
          :network="network"
          :size="size"
        ) Connect with {{ network | capitalize }}

  div(
    v-else
    class="c-guide-base-social-logins__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-social-login&gt;Connect with Facebook&lt;/dm-social-login&gt;

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
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import BaseSocialLogin from "@/components/darkmode/base/BaseSocialLogin";
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
    BaseSocialLogin,
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
      socialLogins: {
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
            name: "full-width",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "When set to true, the social login button will take all the width available."
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
              values: '"facebook" | "google" | "messenger" | "twitter"'
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: "Default: large"
            },
            details: {
              description: "Set the button size.",
              values: '"small" | "large"'
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
$c: ".c-guide-base-social-logins";

#{$c} {
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;
  }
}
</style>
