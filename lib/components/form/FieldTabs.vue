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
      @click="onTabClick(tab.id, $event)"
      @keypress.prevent="onTabKeypress"
      :class=`[
        "dm-field-tabs__tab",
        {
          "dm-field-tabs__tab--active": activeTabs.includes(tab.id),
          "dm-field-tabs__tab--active-next": checkActiveBrother("asc", i+1),
          "dm-field-tabs__tab--active-previous": checkActiveBrother("desc", i-1)
        }
      ]`
      tabindex="0"
    ) {{ tab.name }}

  field-message(
    v-if="description"
    :message="description"
    :size="size"
    level="description"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldLabel from "./FieldLabel.vue";
import FieldMessage from "./FieldMessage.vue";

export default {
  components: {
    FieldLabel,
    FieldMessage
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
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    },
    tabs: {
      type: Array,
      required: true,
      validator(x) {
        return x.length > 0;
      }
    },
    value: {
      type: [Array, Number, String],
      default: null
    }
  },

  data() {
    return {
      // --> STATE <--

      activeTabs: []
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.setActiveTabs(value);
      }
    }
  },

  methods: {
    // --> HELPERS <--

    checkActiveBrother(order, index) {
      if (this.multiple && this.tabs[index]) {
        return this.activeTabs.includes(this.tabs[index].id);
      }
    },

    setActiveTabs(value) {
      if (Array.isArray(value)) {
        this.activeTabs = value;
      } else {
        this.activeTabs = [value];
      }
    },

    // --> EVENT LISTENERS <--

    onTabClick(tabId, event) {
      // When multiple values are not allowed and tab is not already active
      if (!this.multiple && !this.activeTabs.includes(tabId)) {
        this.activeTabs = [tabId];
        this.$emit("change", tabId, "added", this.activeTabs, this.name, event);

        // Synchronization for v-model
        this.$emit("input", tabId);
      }

      // When multiple values are allowed
      if (this.multiple) {
        // Remove the tab when already active
        if (this.activeTabs.includes(tabId)) {
          this.activeTabs.splice(this.activeTabs.indexOf(tabId), 1);
          this.$emit(
            "change",
            tabId,
            "removed",
            this.activeTabs,
            this.name,
            event
          );
        } else {
          // Push the tab when not already active
          this.activeTabs.push(tabId);
          this.$emit(
            "change",
            tabId,
            "added",
            this.activeTabs,
            this.name,
            event
          );
        }

        // Synchronization for v-model
        this.$emit("input", this.activeTabs);
      }

      this.$emit("click", tabId, this.activeTabs, this.name, event);
    },

    onTabKeypress(event) {
      if (event.which === 32) {
        event.target.click();
      }
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-field-tabs";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  #{$c}__container {
    display: inline-block;
    box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
    font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
      sans-serif;
    cursor: pointer;

    #{$c}__tab {
      display: inline-block;
      outline: 0;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      border-top-color: $oxford-blue;
      border-bottom-color: $oxford-blue;
      background: $ebony-clay;
      color: $nepal;
      transition-timing-function: ease-in-out;
      transition-duration: 200ms;
      transition-property: color, background-color;
      user-select: none;

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
          &:focus {
            position: relative;
            z-index: 2;
            box-shadow: 0 0 0 2px $mirage,
              0 0 0 3px map-get($statusColors, $status);
            transition: box-shadow ease-in-out 0s;
          }

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
