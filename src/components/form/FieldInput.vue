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
//- "dm-field-input--" + (errors.length > 0 && dirty && !focused ? 'error' : computedStatus),
div(
  :class=`[
    "dm-field-input",
    "dm-field-input--" + computedStatus,
    "dm-field-input--" + size,
    "dm-field-input--" + theme,
    {
      "dm-field-input--borders": borders,
      "dm-field-input--clearable": clearable,
      "dm-field-input--disabled": disabled,
      "dm-field-input--focused": focused,
      "dm-field-input--full-width": fullWidth,
      "dm-field-input--readonly": readonly,
      "dm-field-input--rounded": rounded,
      "dm-field-input--with-icon": leftIcon || rightIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :required="labelRequired"
    :size="size"
    class="dm-field-input__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="dm-field-input__container"
  )
    span(
      v-if="prepend"
      @click="onPrependClick"
      :class=`[
        "dm-field-input__block",
        "dm-field-input__block--prepend",
        {
          "dm-field-input__block--clickable": $listeners.prependClick
        }
      ]`
    ) {{ prepend }}

    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      class="dm-field-input__icon dm-field-input__icon--left"
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
      class="dm-field-input__field js-tag-for-autofocus"
    )

    base-icon(
      v-if="computedRightIcon"
      @click="onRightIconClick"
      :name="computedRightIcon"
      class="dm-field-input__icon dm-field-input__icon--right"
    )

    span(
      v-if="append"
      @click="onAppendClick"
      :class=`[
        "dm-field-input__block",
        "dm-field-input__block--append",
        {
          "dm-field-input__block--clickable": $listeners.appendClick
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
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import CommonMixin from "../../mixins/CommonMixin.js";
import FieldMixin from "../../mixins/FieldMixin.js";

export default {
  mixins: [CommonMixin, FieldMixin],

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
        ].includes(x);
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
    };
  },

  computed: {
    computedRightIcon() {
      // Add ability to clear the input
      if (this.clearable) {
        if (this.innerValue) {
          return "cancel";
        }
      } else {
        // Return the status when defined as prop
        if (this.computedStatus === "error") {
          return "close";
        } else if (this.computedStatus === "success") {
          return "check";
        } else if (this.computedStatus === "warning") {
          return "warning";
        }
      }

      return this.rightIcon;
    }
  },

  methods: {
    // --> HELPERS <--

    getInputValue() {
      let value = "";

      if (this.$el) {
        value = this.$el.querySelector("input").value || "";

        if (value && this.type === "number") {
          value = parseInt(value);
        }
      }

      return value;
    },

    // --> EVENT LISTENERS <--

    onAppendClick(event) {
      event.stopPropagation();

      this.$emit("appendClick", this.getInputValue(), this.name, event);
    },

    onContainerClick(event) {
      this.$el.querySelector("input").focus();

      this.$emit("click", this.getInputValue(), this.name, event);
    },

    onFieldBlur(event) {
      this.focused = false;

      this.$emit("blur", this.getInputValue(), this.name, event);
    },

    onFieldChange(event) {
      this.$emit("change", this.getInputValue(), this.name, event);
    },

    onFieldFocus(event) {
      this.focused = true;

      this.$emit("focus", this.getInputValue(), this.name, event);
    },

    onFieldInput(event) {
      const value = this.getInputValue();

      this.innerValue = value;

      this.$emit("input", value, this.name, event);
    },

    onFieldKeyDown(event) {
      this.$emit("keydown", this.getInputValue(), this.name, event);
    },

    onFieldKeyUp(event) {
      const value = this.getInputValue();

      this.$emit("keyup", value, this.name, event);

      if (event.key === "Enter") {
        this.$emit("submit", value, this.name, event);
      }
    },

    onPrependClick(event) {
      event.stopPropagation();

      this.$emit("prependClick", this.getInputValue(), this.name, event);
    },

    onRightIconClick() {
      if (this.clearable) {
        this.$emit("input", ""); // Synchronization for v-model
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
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";

// VARIABLES
$c: ".dm-field-input";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__container {
    display: flex;
    overflow: hidden;
    align-items: center;
    background-color: mdg($dark, "backgrounds", "default", "primary");
    transition: all linear 250ms;
    user-select: none;

    #{$c}__block {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      height: 100%;
      background-color: mdg($dark, "backgrounds", "default", "secondary");
      color: mdg($dark, "fonts", "default", "primary");
      user-select: none;
      cursor: default;

      &--append {
        border-left: 1px solid mdg($dark, "borders", "default", "primary");
      }

      &--prepend {
        border-right: 1px solid mdg($dark, "borders", "default", "primary");
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
      background-color: mdg($dark, "backgrounds", "default", "primary");
      color: mdg($dark, "fonts", "default", "primary");

      &::placeholder {
        color: mdg($dark, "fonts", "default", "tertiary");
        transition: color linear 250ms;
      }

      &:disabled {
        cursor: not-allowed;
      }

      &:-webkit-autofill {
        box-shadow: 0 0 0 30px mdg($dark, "backgrounds", "default", "primary")
          inset !important;

        -webkit-text-fill-color: mdg(
          $dark,
          "fonts",
          "default",
          "primary"
        ) !important;
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

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        @if ($status != normal) {
          border-color: mdg($dark, "statuses", $status) !important;
          // Override focused state
          color: mdg($dark, "statuses", $status) !important;
        } @else {
          border-color: mdg($dark, "borders", "default", "primary");
          color: mdg($dark, "fonts", "default", "primary");
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
          color: mdg($dark, "colors", "white");
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

  &--focused {
    #{$c}__container {
      border-color: mdg($dark, "statuses", "active");
      color: mdg($dark, "statuses", "active");
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
    }
  }
}
</style>
