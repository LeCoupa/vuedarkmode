<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-alert
  .c-guide-base-alert__showroom(
    v-if="!documentation"
  )
    .elements
      field-label(
        :forField="uuid"
        size="large"
        class="dm-field-textarea__label"
      ) NORMAL ALERTS
      .elements
        base-alert(
          active
          color="red"
        ) {{ alert.ipsum }}
      field-label(
        :forField="uuid"
        size="large"
        class="dm-field-textarea__label"
      ) WITH ICONS
      base-alert(
        active
        v-for="(color, i) in alert.colors"
        :key="i"
        :color="color.name"
        :icon="color.icon"
      ) {{ alert.ipsum }}
    .elements
      field-label(
        :forField="uuid"
        size="large"
        class="dm-field-textarea__label"
      ) CLOSABLE
      base-alert(
        closable
        :active.sync="warningActive"
        color="red"
      ) {{ alert.ipsum }}
    .elements
      field-label(
        :forField="uuid"
        size="large"
        class="dm-field-textarea__label"
      ) ALL IN ONE
      base-button(
        color="blue"
        size="small"
        class="o-elements__button"
        @click="fullExample = !fullExample"
      ) TOGGLE
      base-alert(
        :active.sync="fullExample"
        closable
        title="Active alert example with title, icon and close icon"
        color="black"
        icon="star"
        iconSize="medium"
      ) {{ alert.ipsum }}
  div(
    v-else
    class="c-guide-base-alert__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-alert&gt;My alert&lt;/dm-alert&gt;

    no-ssr
      common-table(
        :data="props.data"
        :fields="props.fields"
        class="u-mb40"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import BaseAlert from "@/components/darkmode/base/BaseAlert";
import BaseButton from "@/components/darkmode/base/BaseButton";
import { generateUUID } from "@/helpers/helpers.js";
import FieldLabel from "@/components/darkmode/form/FieldLabel.vue";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
    CommonTable,
    BaseAlert,
    FieldLabel,
    BaseButton
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      uuid: "",
      warningActive: true,
      fullExample: true,
      alert: {
        colors: [
          {
            name: "blue",
            icon: "add_circle",
            color: "white"
          },
          {
            name: "green",
            icon: "check_circle",
            color: "white"
          },
          {
            name: "red",
            icon: "cancel",
            color: "white"
          },
          {
            name: "orange",
            icon: "dashboard",
            color: "white"
          },
          {
            name: "black",
            icon: "star",
            color: "white"
          },
          {
            name: "white",
            icon: "get_app",
            color: "black"
          }
        ],
        ipsum:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel leo lacus. Suspendisse congue enim eu tellus pretium dapibus. In eu convallis tellus, at lobortis libero. Phasellus tincidunt purus orci, quis varius ante tempor vel."
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
            name: "active",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "If true then the component is visible."
            }
          },
          {
            name: "title",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Set the alert title."
            }
          },
          {
            name: "closable",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description:
                "If true then the user can close the alert left clicking the close material icon."
            }
          },
          {
            name: "icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a left icon (see material icons)."
            }
          },
          {
            name: "icon-size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Set the icon size.",
              values: '"mini" | "small" | "default" | "medium" | "large"'
            }
          },
          {
            name: "color",
            type: {
              type: "String",
              additional: "Default: black"
            },
            details: {
              description: "Set the alert color.",
              values: '"black" | "blue" | "green" | "orange" | "red" | "white"'
            }
          }
        ]
      }
    };
  },

  mounted() {
    this.uuid = generateUUID();
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
</style>
