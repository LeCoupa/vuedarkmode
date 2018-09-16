<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-base-input',
    'c-base-input--' + size,
    'c-base-input--' + computedStatus,
    {
      'c-base-input--with-icon': leftIcon || rightIcon,
      'c-base-input--rounded': rounded
    }
  ]`
)
  base-label(
    v-if="label"
    :forField="id"
    :size="size"
    class="c-base-input__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="c-base-input__container"
  )
    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      class="c-base-input__icon c-base-input__icon--left"
    )
    input(
      @blur="onInputBlur"
      @focus="onInputFocus"
      @keyup="onInputKeyUp"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      class="c-base-input__field"
    )
    base-icon(
      v-if="computedRightIcon"
      :name="computedRightIcon"
      class="c-base-input__icon c-base-input__icon--right"
    )

  base-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-base-input__description"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    autocomplete: {
      type: String,
      default: "off"
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    leftIcon: {
      type: String,
      default: null
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
      focused: false
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
    },

    computedStatus() {
      // Return the status when defined as prop
      if (this.focused) {
        return "focused";
      }

      return this.status;
    }
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

      this.$emit("click", this.id, this.getInputValue());
    },

    onInputBlur() {
      this.focused = false;

      this.$emit("blur", this.id, this.getInputValue());
    },

    onInputKeyUp() {
      this.$emit("keyup", this.id, this.getInputValue());
    },

    onInputFocus() {
      this.focused = true;

      this.$emit("focus", this.id, this.getInputValue());
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-input";
$sizes: mini, small, default, medium, large;
$statuses: error, focused, success, warning;

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;

  #{$c}__container {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid $oxford-blue;
    border-radius: 6px;
    background-color: $ebony-clay-2;
    transition: border ease-in-out 0.2s;

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
        border-color: map-get($statusColors, $status);
        color: map-get($statusColors, $status);
      }
    }
  }

  // --> BOOLEANS <--

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
