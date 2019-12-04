<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
//- validation-provider(
//-   v-slot="{ dirty, errors }"
//-   :name="rulesName || name"
//-   :rules="rules"
//-   :vid="rulesVid"
//-   ref="validationProvider"
//-   tag="div"
//- )
//- "gb-field-input--" + (errors.length > 0 && dirty && !focused ? 'error' : computedStatus),
div(
  :class=`[
    "gb-field-input",
    "gb-field-input--" + computedStatus,
    "gb-field-input--" + size,
    "gb-field-input--" + computedTheme,
    {
      "gb-field-input--borders": borders,
      "gb-field-input--clearable": clearable,
      "gb-field-input--disabled": disabled,
      "gb-field-input--focused": focused,
      "gb-field-input--full-width": fullWidth,
      "gb-field-input--readonly": readonly,
      "gb-field-input--rounded": rounded,
      "gb-field-input--with-icon": leftIcon || rightIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :required="labelRequired"
    :size="size"
    :theme="theme"
    class="gb-field-input__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="gb-field-input__container"
  )
    span(
      v-if="prepend"
      @click="onPrependClick"
      :class=`[
        "gb-field-input__block",
        "gb-field-input__block--prepend",
        {
          "gb-field-input__block--clickable": $listeners.prependClick
        }
      ]`
    ) {{ prepend }}

    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      class="gb-field-input__icon gb-field-input__icon--left"
    )

    input(
      @blur="onFieldBlur"
      @change="onFieldChange"
      @focus="onFieldFocus"
      @input="onFieldInput"
      @keydown="onFieldKeyDown"
      @keyup="onFieldKeyUp"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :disabled="disabled"
      :id="uuid"
      :max="max"
      :min="min"
      :name="name"
      :placeholder="placeholder"
      :spellcheck="spellcheck"
      :readonly="readonly"
      :type="type"
      :value="innerValue"
      class="gb-field-input__field js-tag-for-autofocus"
    )

    base-icon(
      v-if="computedRightIcon"
      @click="onRightIconClick"
      :name="computedRightIcon"
      class="gb-field-input__icon gb-field-input__icon--right"
    )

    span(
      v-if="append"
      @click="onAppendClick"
      :class=`[
        "gb-field-input__block",
        "gb-field-input__block--append",
        {
          "gb-field-input__block--clickable": $listeners.appendClick
        }
      ]`
    ) {{ append }}

  //-   v-if="computedMessageStatus || (errors.length > 0 && dirty && !focused)"
  //-   :errors="errors"
  field-message(
    v-if="computedMessageStatus"
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
    append: {
      type: String,
      default: null
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    borders: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: false
    },
    fullWidth: {
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
    prepend: {
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
    spellcheck: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text",
      validator(x) {
        return [
          "currency",
          "email",
          "date",
          "datetime-local",
          "month",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "time",
          "url",
          "week"
        ].includes(x)
      }
    },
    value: {
      type: [String, Number],
      default: null
    }
  },

  data() {
    return {
      // --> STATE <--

      focused: false
    }
  },

  computed: {
    computedRightIcon() {
      // Add ability to clear the input
      if (this.clearable) {
        if (this.innerValue) {
          return "cancel"
        }
      } else {
        // Return the status when defined as prop
        if (this.computedStatus === "error") {
          return "close"
        } else if (this.computedStatus === "success") {
          return "check"
        } else if (this.computedStatus === "warning") {
          return "warning"
        }
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
      this.$emit("keydown", this.getInputValue(), this.name, event)
    },

    onFieldKeyUp(event) {
      const value = this.getInputValue()

      this.$emit("keyup", value, this.name, event)

      if (event.key === "Enter") {
        this.$emit("submit", value, this.name, event)
      }
    },

    onPrependClick(event) {
      event.stopPropagation()

      this.$emit("prependClick", this.getInputValue(), this.name, event)
    },

    onRightIconClick() {
      if (this.clearable) {
        this.$emit("input", "") // Synchronization for v-model
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
$c: ".gb-field-input";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  #{$c}__container {
    display: flex;
    overflow: hidden;
    align-items: center;
    transition: all linear 250ms;
    user-select: none;

    #{$c}__block {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      height: 100%;
      user-select: none;
      cursor: default;

      &--append {
        border-left-width: 1px;
        border-left-style: solid;
      }

      &--prepend {
        border-right-width: 1px;
        border-right-style: solid;
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

      &:disabled {
        cursor: not-allowed;
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
          padding: 0 (10px + (1px * $i));
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

  &--clearable {
    #{$c}__container {
      #{$c}__icon {
        &--right {
          opacity: 0.8;
          transition: opacity 250ms linear;
          pointer-events: auto;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  &--disabled {
    opacity: 0.7;

    #{$c}__label,
    #{$c}__container {
      pointer-events: none;
      cursor: not-allowed;
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
    &--#{map-get($theme, "name")} {
      #{$c}__container {
        background-color: mdg($theme, "backgrounds", "default", "primary");

        #{$c}__block {
          background-color: mdg($theme, "backgrounds", "default", "secondary");
          color: mdg($theme, "fonts", "default", "primary");

          &--append {
            border-left-color: mdg($theme, "borders", "default", "primary");
          }

          &--prepend {
            border-right-color: mdg($theme, "borders", "default", "primary");
          }
        }

        #{$c}__field {
          background-color: mdg($theme, "backgrounds", "default", "primary");
          color: mdg($theme, "fonts", "default", "primary");

          &::placeholder {
            color: mdg($theme, "fonts", "default", "tertiary");
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
              color: mdg($theme, "statuses", $status);
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

      &#{$c}--clearable {
        #{$c}__container {
          #{$c}__icon {
            &--right {
              color: mdg($theme, "colors", "white");
            }
          }
        }
      }

      &#{$c}--focused {
        #{$c}__container {
          // "!important" overrides overrides hover
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
