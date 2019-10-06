<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
validation-provider(
  v-slot="{ dirty, errors }"
  :name="rulesName || name"
  :rules="rules"
  :vid="rulesVid"
  ref="validationProvider"
  tag="div"
)
  div(
    :class=`[
      "dm-field-tabs",
      "dm-field-tabs--" + (errors.length > 0 && dirty ? 'error' : computedStatus),
      "dm-field-tabs--" + size,
      {
        "dm-field-tabs--disabled": disabled,
        "dm-field-tabs--multiple": multiple
      }
    ]`
  )
    field-label(
      v-if="label"
      :required="labelRequired"
      :size="size"
      class="dm-field-tabs__label"
    ) {{ label }}

    .dm-field-tabs__container
      span(
        v-for="(tab, i) in tabs"
        @click="onTabClick(tab.value, $event)"
        @keypress.prevent="onTabKeypress"
        :class=`[
          "dm-field-tabs__tab",
          {
            "dm-field-tabs__tab--active": value === tab.value || (Array.isArray(value) && value.includes(tab.value)),
            "dm-field-tabs__tab--active-next": checkActiveBrother("asc", i+1),
            "dm-field-tabs__tab--active-previous": checkActiveBrother("desc", i-1),
            "dm-field-tabs__tab--with-label": tab.label
          }
        ]`
        tabindex="0"
      )
        span(
          v-if="$scopedSlots['tab-left']"
          class="dm-field-tabs__tab-left"
        )
          slot(
            :tab="tab"
            name="tab-left"
          )

        span(
          v-if="tab.label"
          class="dm-field-tabs__label"
        ) {{ tab.label }}

        base-icon(
          v-else-if="tab.icon"
          :name="tab.icon"
          :size="tab.iconSize || computedIconSize"
          class="dm-field-tabs__label"
        )

        span(
          v-if="$scopedSlots['tab-right']"
          class="dm-field-tabs__tab-right"
        )
          slot(
            :tab="tab"
            name="tab-right"
          )

    field-message(
      v-if="computedMessageLevel || (errors.length > 0 && dirty)"
      :errors="errors"
      :level="computedMessageLevel"
      :message="computedMessageContent"
      :show-errors="showErrors"
      :size="size"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: HELPERS
import { generateUUID } from "../../helpers/helpers.js";

// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js";

export default {
  mixins: [FieldMixin],

  props: {
    label: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
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

  computed: {
    computedIconSize() {
      switch (this.size) {
        case "mini":
          return "14px";

        case "small":
          return "16px";

        case "default":
          return "18px";

        case "medium":
          return "20px";

        case "large":
          return "22px";
      }

      return null;
    }
  },

  watch: {
    value(value) {
      this.validate(true);
    }
  },

  mounted() {
    this.uuid = generateUUID();

    this.validate();
  },

  methods: {
    // --> HELPERS <--

    checkActiveBrother(order, index) {
      if (this.multiple && this.tabs[index] && Array.isArray(this.value)) {
        return this.value.includes(this.tabs[index].value);
      }
    },

    // --> EVENT LISTENERS <--

    onTabClick(tabValue, event) {
      let activeTabs;

      // When multiple values are not allowed and tab is not already active
      if (!this.multiple && !this.value !== tabValue) {
        activeTabs = tabValue;

        this.$emit("change", tabValue, "added", tabValue, this.label, event);
      }

      // When multiple values are allowed
      if (this.multiple) {
        // Remove the tab when already active
        if (Array.isArray(this.value) && this.value.includes(tabValue)) {
          activeTabs = this.value.filter(item => {
            return item !== tabValue;
          });

          this.$emit(
            "change",
            tabValue,
            "removed",
            activeTabs,
            this.label,
            event
          );
        }

        // Push the tab when not already active
        else {
          activeTabs = Array.isArray(this.value)
            ? [...this.value, tabValue]
            : [tabValue];

          this.$emit(
            "change",
            tabValue,
            "added",
            activeTabs,
            this.label,
            event
          );
        }
      }

      this.$emit("click", tabValue, activeTabs, this.label, event);
      this.$emit("input", activeTabs); // Synchronization for v-model
    },

    onTabKeypress(event) {
      if (event.code === "Space") {
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
@import "assets/stylesheets/settings/_settings.colors.scss";
@import "assets/stylesheets/tools/_tools.mixins.scss";

// VARIABLES
$c: ".dm-field-tabs";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;

  @include no-tap-highlight-color;

  #{$c}__container {
    display: inline-flex;
    align-items: center;
    box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
    font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
      sans-serif;
    cursor: pointer;

    #{$c}__tab {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      box-sizing: border-box;
      outline: 0;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      border-top-color: $oxford-blue;
      border-bottom-color: $oxford-blue;
      background: $ebony-clay;
      color: $nepal;
      font-weight: 500;
      transition-timing-function: linear;
      transition-duration: 250ms;
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

      #{$c}__tab-left,
      #{$c}__tab-right,
      #{$c}__label,
      #{$c}__icon {
        display: flex;
        flex: 0 0 auto;
      }

      // --> BOOLEANS <--

      &--active {
        color: $white;

        &:focus {
          #{$c}__label {
            text-decoration: underline;
          }
        }
      }

      &--with-label {
        &:focus {
          #{$c}__label {
            text-decoration: underline;
          }
        }
      }

      // --> INTERACTIONS <--

      &:hover {
        color: $white;
      }

      &:focus {
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
          padding: 0 (10px + (2px * $i));
          height: 34px + (2px * $i);
          font-size: 11px + (1px * $i);
          line-height: 17px + (1px * $i);
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
