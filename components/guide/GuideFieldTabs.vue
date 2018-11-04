<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-tabs
  div(
    v-if="!documentation"
    class="c-guide-field-tabs__showroom o-elements o-elements--form"
  )
    div(
      v-for="(statuses, i) in tabs.statuses"
      :key="'tabs ' + i"
      class="o-elements__category"
    )
      div(
        v-if="statuses[j]"
        v-for="(size, j) in tabs.sizes"
        :key="'tabs ' + i + ' ' + j"
        class="o-elements__item"
      )
        field-tabs(
          :label="size.charAt(0).toUpperCase() + size.slice(1) + ' tabs (' + statuses[j] + ')'"
          :name="'tabs_' + size + '_'  + statuses[j] + i + j"
          :size="size"
          :status="statuses[j]"
          :tabs=`[
            { id: "auto", name: 'Auto', active: true },
            { id: "k", name: 'K', active: false },
            { id: "M", name: 'M', active: false },
            { id: "B", name: 'B', active: false }
          ]`
          description="This is a customizable description for tabs."
        )

  div(
    v-else
    class="c-guide-field-tabs__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-tabs&gt;&lt;/dm-tabs&gt;

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
import FieldTabs from "@/components/darkmode/form/FieldTabs";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
    CommonTable,
    FieldTabs
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      tabs: {
        sizes: ["large", "medium", "default", "small", "mini"],
        statuses: [
          ["normal", "normal", "normal", "normal", "normal"],
          ["success", "error", "warning"]
        ]
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
            name: "description",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Display an helping description below the tabs."
            }
          },
          {
            name: "disabled",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Disable the tabs."
            }
          },
          {
            name: "label",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add a label above the tabs."
            }
          },
          {
            name: "multiple",
            type: {
              type: "Boolean",
              additional: "Default: false"
            },
            details: {
              description: "Allow the selection of multiple tabs."
            }
          },
          {
            name: "size",
            type: {
              type: "String",
              additional: 'Default: "default"'
            },
            details: {
              description: "Specify the size of the tabs.",
              values: '"mini" | "small"  | "default" | "medium" | "large"'
            }
          },
          {
            name: "status",
            type: {
              type: "String",
              additional: 'Default: "normal"'
            },
            details: {
              description: "Specify the status for the tabs.",
              values: '"error" | "normal" | "success" | "warning"'
            }
          },
          {
            name: "tabs",
            type: {
              type: "Array",
              additional: "Required: true"
            },
            details: {
              description: "Define the tabs to display.",
              values: '{ id: "vuedarkmode", name: "Vue Dark Mode" }'
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
            name: "change",
            parameters:
              'tabId, status ("added"|"removed"), activeTabs, name, event',
            details: {
              description: "Fires when a tab is added or removed."
            }
          },
          {
            name: "click",
            parameters: "tabId, activeTabs, name, event",
            details: {
              description: "Fires on a mouse click on a tab element."
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
</style>
