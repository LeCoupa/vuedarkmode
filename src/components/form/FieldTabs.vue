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
      "gb-field-tabs",
      "gb-field-tabs--" + size,
      "gb-field-tabs--" + computedTheme,
      "gb-field-tabs--" + (errors.length > 0 && dirty && showErrors ? 'error' : computedStatus),
      {
        "gb-field-tabs--disabled": disabled,
        "gb-field-tabs--multiple": multiple
      }
    ]`
  )
    field-label(
      v-if="label"
      @click="onLabelClick"
      :required="labelRequired"
      :size="size"
      :theme="theme"
      class="gb-field-tabs__label"
    ) {{ label }}

    .gb-field-tabs__container
      span(
        v-for="(tab, i) in tabs"
        @click="onTabClick(tab.value, $event)"
        @keypress.prevent="onTabKeypress"
        :class=`[
          "gb-field-tabs__tab",
          "js-field-tab",
          {
            "gb-field-tabs__tab--active": innerValue === tab.value || (Array.isArray(innerValue) && innerValue.includes(tab.value)),
            "gb-field-tabs__tab--active-next": checkActiveBrother("asc", i+1),
            "gb-field-tabs__tab--active-previous": checkActiveBrother("desc", i-1),
            "gb-field-tabs__tab--with-label": tab.label
          }
        ]`
        tabindex="0"
      )
        span(
          v-if="$scopedSlots['tab-left']"
          class="gb-field-tabs__tab-left"
        )
          slot(
            :tab="tab"
            name="tab-left"
          )

        span(
          v-if="tab.label"
          class="gb-field-tabs__label"
        ) {{ tab.label }}

        base-icon(
          v-else-if="tab.icon"
          :name="tab.icon"
          :size="tab.iconSize || computedIconSize"
          class="gb-field-tabs__label"
        )

        span(
          v-if="$scopedSlots['tab-right']"
          class="gb-field-tabs__tab-right"
        )
          slot(
            :tab="tab"
            name="tab-right"
          )

    field-message(
      v-if="computedMessageStatus || (errors.length > 0 && dirty)"
      :errors="errors"
      :message="computedMessageContent"
      :show-errors="showErrors"
      :size="size"
      :status="computedMessageStatus"
      :theme="theme"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [FieldMixin, ThemeMixin],

  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Array,
      required: true,
      validator(x) {
        return x.length > 0
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
          return "14px"

        case "small":
          return "16px"

        case "default":
          return "18px"

        case "medium":
          return "20px"

        case "large":
          return "22px"
      }

      return null
    }
  },

  methods: {
    // --> HELPERS <--

    checkActiveBrother(order, index) {
      if (this.multiple && this.tabs[index] && Array.isArray(this.innerValue)) {
        return this.innerValue.includes(this.tabs[index].value)
      }
    },

    focusFirstTab() {
      const firstTab = this.$el.querySelector(".js-field-tab:first-child")

      firstTab.focus()
    },

    // --> EVENT LISTENERS <--

    onLabelClick(event) {
      // Select and focus first tab when label is clicked
      this.onTabClick(this.tabs[0].value, event)
      this.focusFirstTab()
    },

    onTabClick(tabValue, event) {
      let activeTabs

      // When multiple values are not allowed and tab is not already active
      if (!this.multiple && !this.innerValue !== tabValue) {
        activeTabs = tabValue

        this.$emit("change", tabValue, "added", tabValue, this.label, event)
      }

      // When multiple values are allowed
      if (this.multiple) {
        // Remove the tab when already active
        if (Array.isArray(this.innerValue) && this.innerValue.includes(tabValue)) {
          activeTabs = this.innerValue.filter(item => {
            return item !== tabValue
          })

          this.$emit("change", tabValue, "removed", activeTabs, this.label, event)
        }

        // Push the tab when not already active
        else {
          activeTabs = Array.isArray(this.innerValue) ? [...this.innerValue, tabValue] : [tabValue]

          this.$emit("change", tabValue, "added", activeTabs, this.label, event)
        }
      }

      this.innerValue = activeTabs

      this.$emit("click", tabValue, activeTabs, this.label, event)
      this.$emit("input", activeTabs) // Synchronization for v-model
    },

    onTabKeypress(event) {
      if (event.code === "Space") {
        event.target.click()
      }
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".gb-field-tabs";
$borderRadius: 4px;
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;

  @include no-tap-highlight-color;

  #{$c}__container {
    display: inline-flex;
    align-items: center;
    border-radius: $borderRadius;
    font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
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
      font-weight: 500;
      transition-timing-function: linear;
      transition-duration: 250ms;
      transition-property: color, background-color;
      user-select: none;

      &:first-of-type {
        border-top-left-radius: $borderRadius;
        border-bottom-left-radius: $borderRadius;
      }

      &:last-of-type {
        border-top-right-radius: $borderRadius;
        border-bottom-right-radius: $borderRadius;
      }

      #{$c}__tab-left,
      #{$c}__tab-right,
      #{$c}__label,
      #{$c}__icon {
        display: flex;
        flex: 0 0 auto;
      }

      &--active {
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
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__tab {
          padding: 0 (10px + (2px * $i));
          height: 32px + (2px * $i);
          font-size: 11px + (1px * $i);
          line-height: 17px + (1px * $i);
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

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      #{$c}__container {
        #{$c}__tab {
          border-top-color: mdg($theme, "borders", "default", "primary");
          border-bottom-color: mdg($theme, "borders", "default", "primary");
          background: mdg($theme, "backgrounds", "default", "primary");
          color: mdg($theme, "fonts", "default", "tertiary");

          &:first-of-type {
            border-left-color: mdg($theme, "borders", "default", "primary");
          }

          &:last-of-type {
            border-right-color: mdg($theme, "borders", "default", "primary");
          }

          &--active {
            color: mdg($theme, "colors", "white") !important; // Override color for hover and focus
          }

          &:hover {
            color: mdg($theme, "fonts", "default", "primary");
          }

          &:focus {
            color: mdg($theme, "fonts", "default", "primary");
          }
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            #{$c}__tab {
              &--active {
                // "!important" overrides first-of-type and last-of-type
                @if ($status == "normal") {
                  @if (map-get($theme, "name") == "dark") {
                    border-color: mdg($theme, "statuses", "active") !important;
                    background-color: rgba(mdg($theme, "statuses", "active"), 0.4);
                  } @else {
                    border-color: mdg($theme, "statuses", "active") !important;
                    background-color: rgba(mdg($theme, "statuses", "active"), 0.9);
                  }
                } @else {
                  @if (map-get($theme, "name") == "dark") {
                    border-color: mdg($theme, "statuses", $status) !important;
                    background-color: rgba(mdg($theme, "statuses", $status), 0.4);
                  } @else {
                    border-color: mdg($theme, "statuses", $status) !important;
                    background-color: rgba(mdg($theme, "statuses", $status), 0.9);
                  }
                }
              }

              &--active-previous {
                // "!important" overrides first-of-type and last-of-type
                border-left-color: rgba(mdg($theme, "statuses", $status), 0.25) !important;
              }

              &--active-next {
                // "!important" overrides first-of-type and last-of-type
                border-right-color: rgba(mdg($theme, "statuses", $status), 0.25) !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
