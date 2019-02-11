<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-input",
    "dm-field-input--" + computedStatus,
    "dm-field-input--" + size,
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
    :required="validation && validation.includes('required')"
    :size="size"
    class="dm-field-input__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="dm-field-input__container"
  )
    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      class="dm-field-input__icon dm-field-input__icon--left"
    )
    input(
      v-validate="validation"
      @blur="onFieldBlur"
      @change="onFieldChange"
      @focus="onFieldFocus"
      @input="onFieldInput"
      @keydown="onFieldKeyDown"
      @keyup="onFieldKeyUp"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :data-vv-as="validationVvAs"
      :disabled="disabled"
      :id="uuid"
      :max="max"
      :maxlength="maxlength"
      :min="min"
      :name="name"
      :placeholder="placeholder"
      :spellcheck="spellcheck"
      :readonly="readonly"
      :type="type"
      :ref="validationRef"
      :value="currentValue"
      class="dm-field-input__field"
    )
    base-icon(
      v-if="computedRightIcon"
      @click="onRightIconClick"
      :clickable="clearable"
      :name="computedRightIcon"
      class="dm-field-input__icon dm-field-input__icon--right"
    )

  field-message(
    v-if="computedMessageLevel"
    :level="computedMessageLevel"
    :message="computedMessageContent"
    :size="size"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import { generateUUID } from "../../helpers/helpers.js";
import BaseIcon from "../base/BaseIcon.vue";
import FieldLabel from "./FieldLabel.vue";
import FieldCommonMixin from "../../mixins/FieldCommonMixin.js";
import FieldMessageMixin from "../../mixins/FieldMessageMixin.js";
import FieldValidationMixin from "../../mixins/FieldValidationMixin.js";

export default {
  components: {
    BaseIcon,
    FieldLabel
  },

  mixins: [FieldCommonMixin, FieldMessageMixin, FieldValidationMixin],

  props: {
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
    label: {
      type: String,
      default: null
    },
    leftIcon: {
      type: String,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    maxlength: {
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
    spellcheck: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text",
      validator(x) {
        return (
          [
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
          ].indexOf(x) !== -1
        );
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

      currentValue: "",
      focused: false,
      uuid: ""
    };
  },

  computed: {
    computedRightIcon() {
      // Add ability to clear the input
      if (this.clearable) {
        if (this.currentValue) {
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

  watch: {
    value: {
      immediate: true,
      handler(value) {
        if (value === undefined || value === null) {
          this.currentValue = "";
        } else {
          this.currentValue = value;
        }
      }
    }
  },

  mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> HELPERS <--

    getInputValue() {
      let value = this.$el.querySelector("input").value || "";

      if (value && this.type === "number") {
        value = parseInt(value);
      }

      return value;
    },

    // --> EVENT LISTENERS <--

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

      this.currentValue = value;
      this.$emit("input", value, this.name, event);
    },

    onFieldKeyDown(event) {
      const value = this.getInputValue();

      this.$emit("keydown", value, this.name, event);
    },

    onFieldKeyUp(event) {
      const value = this.getInputValue();

      this.$emit("keyup", value, this.name, event);
    },

    onRightIconClick() {
      if (this.clearable) {
        this.currentValue = "";

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
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-field-input";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

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
    transition: all ease-in-out 250ms;

    &:hover {
      cursor: text;
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
      height: 100%;
      outline: 0;
      border: none;
      background-color: transparent;
      color: $white;

      &::placeholder {
        color: $nepal;
      }

      &:disabled {
        cursor: not-allowed;
      }

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px $ebony-clay-2 inset !important;

        -webkit-text-fill-color: $white !important;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        height: 34px + (4px * $i);
        border-radius: 4px + (1px * $i);

        #{$c}__icon {
          // Override the font-size set in style attribute
          font-size: 16px + (1px * $i) !important;
        }

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
          border-color: map-get($statusColors, $status) !important;
          // Override focused state
          color: map-get($statusColors, $status) !important;
        } @else {
          border-color: $oxford-blue;
          color: $white;
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
      border-radius: 6px;
      background-color: $ebony-clay-2;
    }
  }

  &--clearable {
    #{$c}__container {
      #{$c}__icon {
        &--right {
          color: rgba($white, 0.8);
          pointer-events: auto;

          &:hover {
            color: $white;
          }
        }
      }
    }
  }

  &--disabled {
    opacity: 0.7;

    #{$c}__label,
    #{$c}__container {
      cursor: not-allowed;
    }
  }

  &--focused {
    #{$c}__container {
      border-color: $azure-radiance;
      color: $azure-radiance;
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
}
</style>
