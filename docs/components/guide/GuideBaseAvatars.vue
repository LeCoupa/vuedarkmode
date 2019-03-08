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
            :clickable="true"
            :size="size"
            src="/images/docs/nada.jpeg"
          )
          base-avatar(
            v-else-if="type === 'thumbnails'"
            :bordered="true"
            :circular="false"
            :clickable="true"
            :description="size"
            :secondaries="avatars.secondaries[size]"
            :size="size"
            src="/images/docs/tesla.jpg"
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
import BaseAvatar from "@/../lib/components/base/BaseAvatar";
import BaseDivider from "@/../lib/components/base/BaseDivider";

// PROJECT: COMPONENTS
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseAvatar,
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
      avatars: {
        sizes: ["huge", "large", "medium", "default", "small", "mini"],
        secondaries: {
          huge: [
            {
              src: "/images/docs/mastercard.jpg"
            },
            {
              src: "/images/docs/visa.jpg"
            }
          ],
          large: [
            {
              src: "/images/docs/paypal.jpg"
            }
          ]
        }
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
            name: "bordered",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "When set to true, this will display a white border around the image."
            }
          },
          {
            name: "circular",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description:
                "When set to true, the image will be shaped like a circle."
            }
          },
          {
            name: "clickable",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Whether the avatar is clickable or not."
            }
          },
          {
            name: "description",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Display an helping description below the avatar element."
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
            name: "secondaries",
            type: {
              type: "Array",
              additional: "Default: null"
            },
            details: {
              description:
                "Add additional images in the bottom right corner of the main image.",
              values: '[{ src: "/path/of/the/resource" }]'
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the avatar.",
              values:
                '"mini" | "small" | "default" | "medium" | "large" | "huge"'
            }
          },
          {
            name: "src",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the path of the image to display."
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
              description:
                "Fires on a mouse click on the element (only when clickable is set to true)."
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
$c: ".c-guide-base-avatars";

#{$c} {
  #{$c}__container {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 20px;
  }
}
</style>
