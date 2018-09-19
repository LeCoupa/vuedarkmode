<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-field-input',
    'c-field-input--' + size,
    'c-field-input--' + status,
    {
      'c-field-input--block': block,
      'c-field-input--borders': borders,
      'c-field-input--focused': focused,
      'c-field-input--rounded': rounded,
      'c-field-input--with-icon': leftIcon || rightIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :size="size"
    class="c-field-input__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="c-field-input__container"
  )
    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      class="c-field-input__icon c-field-input__icon--left"
    )
    input(
      @blur="onInputBlur"
      @focus="onInputFocus"
      @keyup="onInputKeyUp"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      class="c-field-input__field"
    )
    base-icon(
      v-if="computedRightIcon"
      :name="computedRightIcon"
      class="c-field-input__icon c-field-input__icon--right"
    )

  field-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-field-input__description"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import { generateUUID } from "@/helpers/helpers";
import FieldDescription from "@/components/form/FieldDescription";
import FieldLabel from "@/components/form/FieldLabel";

export default {
  components: {
    FieldDescription,
    FieldLabel
  },

  props: {
    autocomplete: {
      type: String,
      default: "off"
    },
    block: {
      type: Boolean,
      default: true
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
    label: {
      type: String,
      default: null
    },
    leftIcon: {
      type: String,
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
      default: "default"
    },
    status: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number],
      default: null
    }
  },

  data() {
    return {
      // --> STATE <--
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
    getInputValue() {
      let value = this.$el.querySelector("input").value || "";

      if (value && this.type === "number") {
        value = parseInt(value);
      }

      return value;
    },

    onContainerClick() {
      this.$el.querySelector("input").focus();

      this.$emit("click", this.name, this.getInputValue());
    },

    onInputBlur() {
      this.focused = false;

      this.$emit("blur", this.name, this.getInputValue());
    },

    onInputKeyUp() {
      this.$emit("keyup", this.name, this.getInputValue());
    },

    onInputFocus() {
      this.focused = true;

      this.$emit("focus", this.name, this.getInputValue());
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-field-input";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;

  #{$c}__container {
    display: flex;
    align-items: center;

    &:hover {
      cursor: text;
    }

    #{$c}__icon {
      flex: 0 0 auto;

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

  &--block {
    width: 100%;
  }

  &--borders {
    #{$c}__container {
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-radius: 6px;
      background-color: $ebony-clay-2;
      transition: border ease-in-out 0.2s;
    }
  }

  &--focused {
    #{$c}__container {
      border-color: $azure-radiance;
      color: $azure-radiance;
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
