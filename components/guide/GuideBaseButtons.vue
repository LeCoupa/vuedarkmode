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
        :data="table.data"
        :fields="table.fields"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseButton from "@/components/darkmode/base/BaseButton";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseButton,
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
                "When set to true, the button will take all the width available in the parent container."
            }
          },
          {
            name: "id",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Set the id property."
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
