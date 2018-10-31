<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-input",
    "dm-field-input--" + size,
    "dm-field-input--" + status,
    {
      "dm-field-input--borders": borders,
      "dm-field-input--disabled": disabled,
      "dm-field-input--focused": focused,
      "dm-field-input--full-width": fullWidth,
      "dm-field-input--rounded": rounded,
      "dm-field-input--with-icon": leftIcon || rightIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
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
      @blur="onFieldBlur"
      @change="onFieldChange"
      @focus="onFieldFocus"
      @input="onFieldInput"
      :autocomplete="autocomplete ? 'on' : 'false'"
      :disabled="disabled"
      :id="uuid"
      :max="max"
      :maxlength="maxlength"
      :min="min"
      :name="name"
      :placeholder="placeholder"
      :readonly="readOnly"
      :type="type"
      :value="currentValue"
      class="dm-field-input__field"
    )
    base-icon(
      v-if="computedRightIcon"
      :name="computedRightIcon"
      class="dm-field-input__icon dm-field-input__icon--right"
    )

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
import { generateUUID } from "../../../helpers/helpers.js";
import BaseIcon from "../base/BaseIcon.vue";
import FieldDescription from "./FieldDescription.vue";
import FieldLabel from "./FieldLabel.vue";

export default {
  components: {
    BaseIcon,
    FieldDescription,
    FieldLabel
  },

  props: {
    autocomplete: {
      type: Boolean,
      default: false
    },
    borders: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
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
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: null
    },
    readOnly: {
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

      currentValue:
        this.value === undefined || this.value === null ? "" : this.value,
      focused: false,
      uuid: ""
    };
  },

  computed: {
    computedRightIcon() {
      // Return the status when defined as prop
      if (this.status === "error") {
        return "close";
      } else if (this.status === "success") {
        return "check";
      } else if (this.status === "warning") {
        return "warning";
      }

      return this.rightIcon;
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

    onContainerClick() {
      this.$el.querySelector("input").focus();

      this.$emit("click", this.name, this.getInputValue());
    },

    onFieldBlur() {
      this.focused = false;

      this.$emit("blur", this.name, this.getInputValue());
    },

    onFieldChange() {
      this.$emit("change", this.name, this.getInputValue());
    },

    onFieldFocus() {
      this.focused = true;

      this.$emit("focus", this.name, this.getInputValue());
    },

    onFieldInput() {
      const value = this.getInputValue();

      this.currentValue = value;
      this.$emit("input", value);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";
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
    align-items: center;
    transition: all ease-in-out 0.2s;

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
      padding: 0 15px;
      height: 100%;
      border: none;
      background-color: transparent;
      color: $white;

      &::placeholder {
        color: $nepal;
      }

      &:disabled {
        cursor: not-allowed;
      }

      &:focus {
        outline: none;
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
          // Will override the font-size set in style attribute
          font-size: 16px + (1px * $i) !important;
        }

        #{$c}__field {
          font-size: 12px + (1px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        @if ($status != "normal") {
          border-color: map-get($statusColors, $status);
          color: map-get($statusColors, $status);
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
