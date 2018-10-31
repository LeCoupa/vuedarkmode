<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-icons
  div(
    v-if="!documentation"
    class="c-guide-base-icons__showroom"
  )
    .c-guide-base-icons__container.o-elements
      base-icon(
        v-for="(icon, i) in icons"
        v-if="i < maxIcons"
        :aria-label="icon"
        :key="icon"
        :name="icon"
        class="c-guide-base-icons__icon hint--top hint--no-animate"
        color="white"
        cursor="pointer"
      )

    base-button(
      v-if="maxIcons !== 1000"
      @click="maxIcons = 1000;"
      :reverse="true"
      color="white"
      size="small"
    ) Show all icons

  div(
    v-else
    class="c-guide-base-icons__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-icon&gt;&lt;/dm-icon&gt;

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
// PROJECT: COMPONENTS
import BaseButton from "@/components/darkmode/base/BaseButton";
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import BaseIcon from "@/components/darkmode/base/BaseIcon";
const CommonTable = () => import("@/components/common/CommonTable");

// PROJECT: DATA
import icons from "@/data/icons";

export default {
  components: {
    BaseButton,
    BaseDivider,
    BaseIcon,
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
      icons: icons,
      maxIcons: 216,
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
            name: "color",
            type: {
              type: "String",
              additional: 'Default:  "inherit"'
            },
            details: {
              description: "Specify the color of the icon."
            }
          },
          {
            name: "cursor",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description:
                "Specify the shape of the mouse cursor when hovering the icon.",
              values: '"default" | "pointer"'
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
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "Specify the name of the icon to display."
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "24px"'
            },
            details: {
              description: "Specify the size in pixels of the icon."
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
          },
          {
            name: "dblclick",
            parameters: "id, event",
            details: {
              description: "Fires on a mouse double-click on the element."
            }
          },
          {
            name: "mousedown",
            parameters: "id, event",
            details: {
              description:
                "Fires when a mouse button is pressed down on an element."
            }
          },
          {
            name: "mousemove",
            parameters: "id, event",
            details: {
              description:
                "Fires when the mouse pointer is moving while it is over an element."
            }
          },
          {
            name: "mouseout",
            parameters: "id, event",
            details: {
              description:
                "Fires when the mouse pointer moves out of an element."
            }
          },
          {
            name: "mouseover",
            parameters: "id, event",
            details: {
              description: "Fires when the mouse pointer moves over an element."
            }
          },
          {
            name: "mouseup",
            parameters: "id, event",
            details: {
              description:
                "Fires when a mouse button is released over an element."
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
$c: ".c-guide-base-icons";

#{$c} {
  #{$c}__container {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 24px);

    #{$c}__icon {
      // Update tooltip color
      &::before {
        border-top-color: $black;
      }
      &::after {
        background: $black;
      }
    }
  }
}
</style>
