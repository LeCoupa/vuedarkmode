<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-avatars
  div(
    v-if="!documentation"
    class="c-guide-base-avatars__showroom"
  )
    div(
      v-for="type in ['avatars', 'thumbnails']"
      class="c-guide-base-avatars__container o-elements o-elements--horizontal o-elements--vertical-on-mobile"
    )
      .o-elements__category
        div(
          v-for="(size, i) in avatars.sizes"
          :key="'avatar' + size + i"
          class="o-elements__item"
        )
          base-avatar(
            v-if="type === 'avatars'"
            :size="size"
            src="/images/medley/nada.jpeg"
          )
          base-avatar(
            v-else-if="type === 'thumbnails'"
            :bordered="true"
            :circular="false"
            :complementaries="avatars.complementaries[size]"
            :description="size"
            :size="size"
            src="/images/medley/tesla.jpg"
          )

  div(
    v-else
    class="c-guide-base-avatars__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-avatar&gt;&lt;/dm-avatar&gt;

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
import BaseAvatar from "@/components/darkmode/base/BaseAvatar";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseAvatar,
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
      avatars: {
        sizes: ["huge", "large", "medium", "default", "small", "mini"],
        complementaries: {
          huge: [
            {
              src: "/images/medley/mastercard.jpg"
            },
            {
              src: "/images/medley/visa.jpg"
            }
          ],
          large: [
            {
              src: "/images/medley/paypal.jpg"
            }
          ]
        }
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
            name: "bordered",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "circular",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "complementaries",
            type: {
              type: "Array",
              additional: "Default: null"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "cursor",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "description",
            type: {
              type: "String",
              additional: "Default: null"
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
              additional: 'Default: "default"'
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "src",
            type: {
              type: "String",
              additional: "Required: true"
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
$c: ".c-guide-base-avatars";

#{$c} {
  #{$c}__container {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 20px;
  }
}
</style>
