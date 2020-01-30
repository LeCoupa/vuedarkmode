<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "gb-field-input-numeric",
    "gb-field-input-numeric--" + size,
    "gb-field-input-numeric--" + computedTheme,
    "gb-field-input-numeric--" + computedStatus,
    {
      "gb-field-input-numeric--borders": borders,
      "gb-field-input-numeric--disabled": disabled,
      "gb-field-input-numeric--focused": focused,
      "gb-field-input-numeric--full-width": fullWidth,
      "gb-field-input-numeric--readonly": readonly,
      "gb-field-input-numeric--rounded": rounded,
      "gb-field-input-numeric--with-icon": leftIcon || rightIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :required="required"
    :size="size"
    :theme="theme"
    class="gb-field-input-numeric__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="gb-field-input-numeric__container"
  )
    span(
      @click="onDecrement"
      class="gb-field-input-numeric__block gb-field-input-numeric__block--decrement gb-field-input-numeric__block--clickable"
    ) -

    span(
      @click="onIncrement"
      class="gb-field-input-numeric__block gb-field-input-numeric__block--increment gb-field-input-numeric__block--clickable"
    ) +

    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      class="gb-field-input-numeric__icon gb-field-input-numeric__icon--left"
    )

    input(
      @blur="onFieldBlur"
      @change="onFieldChange"
      @focus="onFieldFocus"
      @input="onFieldInput"
      @keydown="onFieldKeyDown"
      @keyup="onFieldKeyUp"
      :disabled="disabled"
      :id="uuid"
      :max="max"
      :min="min"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="innerValue"
      class="gb-field-input-numeric__field js-tag-for-autofocus"
      type="number"
    )

    base-icon(
      v-if="computedRightIcon"
      :name="computedRightIcon"
      class="gb-field-input-numeric__icon gb-field-input-numeric__icon--right"
    )

    span(
      v-if="append"
      @click="onAppendClick"
      :class=`[
        "gb-field-input-numeric__block",
        "gb-field-input-numeric__block--append",
        {
          "gb-field-input-numeric__block--clickable": $listeners.appendClick
        }
      ]`
    ) {{ append }}

  field-message(
    v-if="fieldMessageStatus"
    :message="fieldMessageContent"
    :size="size"
    :status="fieldMessageStatus"
    :theme="theme"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import FieldSizeMixin from "../../mixins/FieldSizeMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [FieldMixin, FieldSizeMixin, ThemeMixin],

  props: {
    append: {
      type: String,
      default: null
    },
    borders: {
      type: Boolean,
      default: true
    },
    leftIcon: {
      type: String,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    rightIcon: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    // --> STATE <--

    focused: false
  }),

  computed: {
    computedRightIcon() {
      // Return the status when defined as prop
      if (this.computedStatus === "error") {
        return "close"
      } else if (this.computedStatus === "success") {
        return "check"
      } else if (this.computedStatus === "warning") {
        return "warning"
      }

      return this.rightIcon
    }
  },

  methods: {
    // --> HELPERS <--

    getInputValue() {
      let value = ""

      if (this.$el) {
        value = this.$el.querySelector("input").value || ""

        if (value && this.type === "number") {
          value = parseInt(value)
        }
      }

      return value
    },

    // --> EVENT LISTENERS <--

    onAppendClick(event) {
      event.stopPropagation()

      this.$emit("appendClick", this.getInputValue(), this.name, event)
    },

    onContainerClick(event) {
      this.$el.querySelector("input").focus()

      this.$emit("click", this.getInputValue(), this.name, event)
    },

    onDecrement() {
      this.innerValue -= 1

      this.$emit("input", this.innerValue) // Synchronization for v-model
    },

    onIncrement() {
      this.innerValue += 1

      this.$emit("input", this.innerValue) // Synchronization for v-model
    },

    onFieldBlur(event) {
      this.focused = false

      this.$emit("blur", this.getInputValue(), this.name, event)
    },

    onFieldChange(event) {
      this.$emit("change", this.getInputValue(), this.name, event)
    },

    onFieldFocus(event) {
      this.focused = true

      this.$emit("focus", this.getInputValue(), this.name, event)
    },

    onFieldInput(event) {
      const value = this.getInputValue()

      this.innerValue = value

      this.$emit("input", value, this.name, event)
    },

    onFieldKeyDown(event) {
      if (["ArrowDow", "ArrowUp"].includes(event.key)) {
        if (event.key === "ArrowDown") {
          this.innerValue -= 1
        } else if (event.key === "ArrowUp") {
          this.innerValue += 1
        }
        this.$emit("input", this.innerValue) // Synchronization for v-model
      }

      this.$emit("keydown", this.getInputValue(), this.name, event)
    },

    onFieldKeyUp(event) {
      const value = this.getInputValue()

      this.$emit("keyup", value, this.name, event)

      if (event.key === "Enter") {
        this.$emit("submit", value, this.name, event)
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

// VARIABLES
$c: ".gb-field-input-numeric";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  #{$c}__container {
    display: flex;
    overflow: hidden;
    align-items: center;
    transition: border-color linear 250ms;
    user-select: none;

    #{$c}__block {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      height: 100%;
      transition: color linear 250ms;
      user-select: none;
      cursor: default;

      &--decrement,
      &--increment {
        border-right-width: 1px;
        border-right-style: solid;
      }

      &--append {
        border-left-width: 1px;
        border-left-style: solid;
      }

      &--clickable {
        cursor: pointer;
      }
    }

    #{$c}__icon {
      flex: 0 0 auto;
      pointer-events: none;

      &--left {
        margin-right: 5px;
        margin-left: 9px;
      }

      &--right {
        margin-right: 9px;
        margin-left: 5px;
      }
    }

    #{$c}__field {
      flex: 1;
      width: 0;
      height: 100%;
      outline: 0;
      border: none;
      text-align: right;
      line-height: initial; // Disable line-height for Safari

      &:disabled {
        cursor: not-allowed;
      }

      // Disable the spin-button for webkit browsers
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        display: none;
        margin: 0;
        -webkit-appearance: none;
      }

      &[type="number"] {
        -moz-appearance: textfield;
      }
    }

    &:hover {
      cursor: text;
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        height: 34px + (4px * $i);

        #{$c}__icon {
          // Override the font-size set in style attribute
          font-size: 16px + (1px * $i) !important;
        }

        #{$c}__block,
        #{$c}__field {
          padding: 0 (12px + (2px * $i));
          font-size: 12px + (1px * $i);
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--borders {
    #{$c}__container {
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-radius: 4px;
    }
  }

  &--disabled {
    opacity: 0.7;
    cursor: not-allowed;

    #{$c}__label,
    #{$c}__container {
      pointer-events: none;
    }
  }

  &--full-width {
    width: 100%;
  }

  &--readonly {
    #{$c}__container {
      #{$c}__field {
        cursor: default;
      }
    }
  }

  &--rounded {
    #{$c}__container {
      border-radius: 40px;
    }
  }

  &--with-icon {
    #{$c}__container {
      #{$c}__field {
        padding: 0;
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      #{$c}__container {
        background-color: mdg($theme, "backgrounds", "default", "primary");

        #{$c}__block {
          background-color: mdg($theme, "backgrounds", "default", "secondary");
          color: mdg($theme, "fonts", "default", "primary");

          &--decrement,
          &--increment  {
            border-right-color: mdg($theme, "borders", "default", "primary");
          }

          &--append {
            border-left-color: mdg($theme, "borders", "default", "primary");
          }

          &--clickable {
            &:hover {
              color: mdg($theme, "fonts", "default", "secondary");
            }

            &:active {
              color: mdg($theme, "fonts", "default", "primary");
            }
          }
        }

        #{$c}__field {
          background-color: mdg($theme, "backgrounds", "default", "primary");
          color: mdg($theme, "fonts", "default", "primary");

          &::placeholder {
            color: mdg($theme, "fonts", "default", "tertiary");
            opacity: 1;
          }

          &:-webkit-autofill {
            box-shadow: 0 0 0 30px mdg($theme, "backgrounds", "default", "primary") inset !important;

            -webkit-text-fill-color: mdg($theme, "fonts", "default", "primary") !important;
          }
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            border-color: mdg($theme, "statuses", $status);

            #{$c}__icon {
              @if ($status == "normal") {
                color: mdg($theme, "fonts", "default", "tertiary");
              } @else {
                color: mdg($theme, "statuses", $status);
              }
            }

            &:hover {
              @if (map-get($theme, "name") == "dark") {
                border-color: lighten(mdg($theme, "statuses", $status), 10%);
              } @else if (map-get($theme, "name") == "light") {
                border-color: darken(mdg($theme, "statuses", $status), 10%);
              }
            }

            &:active {
              border-color: mdg($theme, "statuses", $status);
            }
          }
        }
      }

      // --> BOOLEANS <--

      &#{$c}--focused {
        #{$c}__container {
          border-color: mdg($theme, "statuses", "active") !important;

          #{$c}__icon {
            color: mdg($theme, "statuses", "active") !important;
          }
        }
      }
    }
  }
}
</style>
