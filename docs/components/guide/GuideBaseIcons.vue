<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-icons
  div(
    v-if="!documentation"
    class="c-guide-base-icons__showroom"
  )
    .c-guide-base-icons__container.o-elements.o-elements--800max
      base-icon(
        v-for="(icon, i) in icons"
        v-if="i < maxIcons"
        v-clipboard:copy="icon"
        :aria-label="icon"
        :clickable="true"
        :key="icon"
        :name="icon"
        class="c-guide-base-icons__icon hint--top hint--no-animate"
        color="white"
      )

    base-button(
      v-if="maxIcons !== 1000"
      @click="maxIcons = 1000;"
      :reverse="true"
      class="c-guide-base-icons__button"
      color="white"
      right-icon="mood"
      size="small"
    ) Show all icons

  div(
    v-else
    class="c-guide-base-icons__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;head&gt;
        |   &lt;!-- Only if you need to use the outlined theme --&gt;
        |   &lt;link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"&gt;
        | &lt;/head&gt;
        |
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
import BaseButton from "@/../lib/components/base/BaseButton";
import BaseDivider from "@/../lib/components/base/BaseDivider";
import BaseIcon from "@/../lib/components/base/BaseIcon";

// PROJECT: COMPONENTS
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
            name: "clickable",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Whether the icon is clickable or not."
            }
          },
          {
            name: "color",
            type: {
              type: "String",
              additional: "Default:  null"
            },
            details: {
              description: "Specify the color of the icon."
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
          },
          {
            name: "thtme",
            type: {
              type: "String",
              additional: 'Default: "filled"'
            },
            details: {
              description: "Set the icon theme.",
              values: '"filled" | "outlined"'
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
            name: "keypress",
            parameters: "id, event",
            details: {
              description: "Fires when a key is pressed on the element."
            }
          },
          {
            name: "mousedown",
            parameters: "id, event",
            details: {
              description:
                "Fires when a mouse button is pressed down on the element."
            }
          },
          {
            name: "mouseenter",
            parameters: "id, event",
            details: {
              description:
                "The event occurs when the pointer is moved onto the element."
            }
          },
          {
            name: "mouseleave",
            parameters: "id, event",
            details: {
              description:
                "The event occurs when the pointer is moved out of the element."
            }
          },
          {
            name: "mousemove",
            parameters: "id, event",
            details: {
              description:
                "Fires when the mouse pointer is moving while it is over the element."
            }
          },
          {
            name: "mouseout",
            parameters: "id, event",
            details: {
              description:
                "Fires when the mouse pointer moves out of the element."
            }
          },
          {
            name: "mouseover",
            parameters: "id, event",
            details: {
              description:
                "Fires when the mouse pointer moves over the element."
            }
          },
          {
            name: "mouseup",
            parameters: "id, event",
            details: {
              description:
                "Fires when a mouse button is released over the element."
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
$c: ".c-guide-base-icons";

#{$c} {
  overflow: hidden;

  #{$c}__showroom {
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

    #{$c}__button {
      margin-top: 40px;
    }
  }
}

@include mq($from: tablet) {
  #{$c} {
    overflow: initial;
  }
}
</style>
