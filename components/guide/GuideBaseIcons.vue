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
        :data="table.data"
        :fields="table.fields"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseButton from "@/components/darkmode/base/BaseButton";
import BaseIcon from "@/components/darkmode/base/BaseIcon";
const CommonTable = () => import("@/components/common/CommonTable");

// PROJECT: DATA
import icons from "@/data/icons";

export default {
  components: {
    BaseButton,
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
            name: "color",
            type: {
              type: "String",
              additional: "Default:  null"
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
              additional: "Default: null"
            },
            details: {
              description: "",
              values: ""
            }
          },
          {
            name: "name",
            type: {
              type: "String",
              additional: "Required: true"
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
              additional: 'Default: "24px"'
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
