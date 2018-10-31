<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-buttons
  div(
    v-if="!documentation"
    class="c-guide-base-buttons__showroom"
  )
    div(
      v-for="circular in [false, true]"
      :class=`[
        "c-guide-base-buttons__container",
        "o-elements",
        {
          "o-elements--horizontal": circular
        }
      ]`
    )
      div(
        v-for="(color, i) in buttons.colors"
        :key="'button' + color + i"
        class="o-elements__category"
      )
        div(
          v-for="(size, j) in buttons.sizes"
          :key="'button' + color + j + size"
          class="o-elements__item"
        )
          base-button(
            :circular="circular"
            :color="color"
            :left-icon="buttons.icons[i]"
            :size="size"
            class="o-elements__button"
          ) {{ size }} {{ color }}

  div(
    v-else
    class="c-guide-base-buttons__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-button&gt;My Button&lt;/dm-button&gt;

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
import BaseButton from "@/components/darkmode/base/BaseButton";
import BaseDivider from "@/components/darkmode/base/BaseDivider";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseButton,
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
      buttons: {
        colors: ["blue", "green", "red", "orange", "black", "white"],
        icons: [
          "add_circle",
          "check_circle",
          "favorite_border",
          "star",
          "get_app",
          "camera_alt"
        ],
        sizes: ["large", "medium", "default", "small", "mini"]
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
            name: "capitalize",
            type: {
              type: "Boolean",
              additional: "Default: true"
            },
            details: {
              description: "Capitalize the button content."
            }
          },
          {
            name: "circular",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Convert the button shape to circular."
            }
          },
          {
            name: "color",
            type: {
              type: "String",
              additional: "Default: blue"
            },
            details: {
              description: "Set the button color.",
              values: '"black" | "blue" | "green" | "orange" | "red" | "white"'
            }
          },
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
                "When set to true, the button will take all the width available."
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
            name: "left-icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a left icon (see material icons)."
            }
          },
          {
            name: "left-icon-color",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Specify the color for the left icon."
            }
          },
          {
            name: "reverse",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Reverse the button color."
            }
          },
          {
            name: "right-icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a right icon (see material icons)."
            }
          },
          {
            name: "right-icon-color",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Specify the color for the right icon."
            }
          },
          {
            name: "rounded",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Round the button corners."
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
              values: '"mini" | "small" | "default" | "medium" | "large"'
            }
          },
          {
            name: "type",
            type: {
              type: "String",
              additional: 'Default: "button"'
            },
            details: {
              description: "Set the button type.",
              values: '"button" | "reset" | "submit"'
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
            name: "mouseenter",
            parameters: "id, event",
            details: {
              description:
                "The event occurs when the pointer is moved onto an element."
            }
          },
          {
            name: "mouseleave",
            parameters: "id, event",
            details: {
              description:
                "The event occurs when the pointer is moved out of an element.s"
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
$c: ".c-guide-base-buttons";

#{$c} {
  #{$c}__container {
    grid-template-columns: repeat(auto-fill, 250px);
  }
}
</style>
