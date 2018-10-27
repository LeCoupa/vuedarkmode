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
        ) Connect with {{ network }}

  div(
    v-else
    class="c-guide-base-social-logins__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-social-login&gt;Subscribe with Facebook&lt;/dm-social-login&gt;

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
import BaseSocialLogin from "@/components/darkmode/base/BaseSocialLogin";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
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
            name: "full-width",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "When set to true, the social login button will take all the width available in the parent container."
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
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-social-logins";

#{$c} {
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;
  }
}
</style>
