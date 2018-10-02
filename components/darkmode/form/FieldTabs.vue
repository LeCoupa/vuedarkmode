<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-tabs",
    "dm-field-tabs--" + size,
    "dm-field-tabs--" + status,
    {
      "dm-field-tabs--disabled": disabled,
      "dm-field-tabs--multiple": multiple
    }
  ]`
)
  field-label(
    v-if="label"
    :size="size"
    class="dm-field-tabs__label"
  ) {{ label }}

  .dm-field-tabs__container
    span(
      v-for="(tab, i) in tabs"
      @click="onTabClick(tab.id)"
      :class=`[
        "dm-field-tabs__tab",
        {
          "dm-field-tabs__tab--active": activeTabs.includes(tab.id),
          "dm-field-tabs__tab--active-previous": checkActiveBrother("desc", i-1),
          "dm-field-tabs__tab--active-next": checkActiveBrother("asc", i+1)
        }
      ]`
    ) {{ tab.name }}

  field-description(
    v-if="description"
    :description="description"
    :size="size"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldDescription from "@/components/darkmode/form/FieldDescription";
import FieldLabel from "@/components/darkmode/form/FieldLabel";

export default {
  components: {
    FieldDescription,
    FieldLabel
  },

  props: {
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    status: {
      type: String,
      default: "normal"
    },
    tabs: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      // --> STATE <--

      activeTabs: []
    };
  },

  created() {
    // Set initial active tabs
    this.tabs.map(tab => {
      if (tab.active) {
        this.activeTabs.push(tab.id);
      }
    });
  },

  methods: {
    // --> HELPERS <--

    checkActiveBrother(order, index) {
      if (this.multiple && this.tabs[index]) {
        return this.activeTabs.includes(this.tabs[index].id);
      }
    },

    // --> EVENT LISTENERS <--

    onTabClick(tabId) {
      // When multiple values are not allowed and tab is not already active
      if (!this.multiple && !this.activeTabs.includes(tabId)) {
        this.activeTabs = [tabId];
        this.$emit("change", tabId, "added");
      }

      // When multiple values are allowed
      if (this.multiple) {
        // Remove the tab when already active
        if (this.activeTabs.includes(tabId)) {
          this.activeTabs.splice(this.activeTabs.indexOf(tabId), 1);
          this.$emit("change", tabId, "removed", this.activeTabs);
        } else {
          // Push the tab when not already active
          this.activeTabs.push(tabId);
          this.$emit("change", tabId, "added", this.activeTabs);
        }
      }

      this.$emit("click", tabId);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".dm-field-tabs";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  #{$c}__container {
    display: inline-block;
    box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
    cursor: pointer;

    #{$c}__tab {
      user-select: none;
      display: inline-block;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      border-top-color: $oxford-blue;
      border-bottom-color: $oxford-blue;
      background: $ebony-clay;
      color: $nepal;
      transition: all ease-in-out 0.25s;

      &:first-of-type {
        border-left-color: $oxford-blue;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-of-type {
        border-right-color: $oxford-blue;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &:hover {
        color: $white;
      }

      &--active {
        color: $white;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__tab {
          padding: (6px + (1px * $i)) (12px + (2px * $i));
          font-size: 12px + (1px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        #{$c}__tab {
          &--active {
            // !important overrides first-of-type and last-of-type
            border-color: map-get($statusColors, $status) !important;
            background-color: rgba(map-get($statusColors, $status), 0.4);
          }

          &--active-previous {
            // !important overrides first-of-type and last-of-type
            border-left-color: rgba(
              map-get($statusColors, $status),
              0.25
            ) !important;
          }

          &--active-next {
            // !important overrides first-of-type and last-of-type
            border-right-color: rgba(
              map-get($statusColors, $status),
              0.25
            ) !important;
          }
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__label,
    #{$c}__container {
      cursor: not-allowed;

      #{$c}__tab {
        pointer-events: none;
      }
    }
  }
}
</style>
