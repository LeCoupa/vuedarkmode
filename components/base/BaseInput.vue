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
      'c-base-input--block': block,
      'c-base-input--left-icon': leftIcon,
      'c-base-input--right-icon': rightIcon,
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

  .c-base-input__container
    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      color="white"
      class="c-base-input__left-icon"
    )
    input(
      @blur="onBlur"
      @focus="onFocus"
      @keyup="onKeyUp"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      class="c-base-input__field"
    )
    base-icon(
      v-if="rightIcon"
      :name="rightIcon"
      color="white"
      class="c-base-input__right-icon"
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
    block: {
      type: Boolean,
      default: true
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
      focus: false
    };
  },

  computed: {
    computedStatus() {
      // Return the status when defined as prop
      if (this.focus) {
        return "focus";
      } else if (this.status) {
        return this.status;
      }
    }
  },

  methods: {
    onBlur() {
      this.focus = false;
    },

    onKeyUp(event) {
      let value = event.target.value || "";

      if (value && this.type === "number") {
        value = parseInt(value);
      }

      this.$emit("keyup", this.id, value);
    },

    onFocus() {
      this.focus = true;
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

#{$c} {
  text-align: left;

  #{$c}__container {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #313d4f;
    border-radius: 6px;
    background-color: #273142;
    transition: border-color ease-in-out 0.2s;

    &:focus {
      border-color: #0093ee;
    }

    #{$c}__field {
      flex: 1;
      height: 100%;
      padding: 0 15px;
      border: none;
      background-color: transparent;
      color: $white;

      &::placeholder {
        color: #8dabc4;
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

        #{$c}__field {
          font-size: 12px + (1px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  &--error {
    #{$c}__container {
      border-color: #e0102b;
    }
  }

  &--focus {
    #{$c}__container {
      border-color: #0093ee;
    }
  }

  &--success {
    #{$c}__container {
      border-color: #1bb934;
    }
  }

  // --> BOOLEANS <--

  &--block {
    width: 100%;

    #{$c}__label {
      width: 100%;
    }

    #{$c}__container {
      width: 100%;
    }
  }

  &--rounded {
    #{$c}__container {
      border-radius: 40px;
    }
  }

  // --> INTERACTIONS <--
}
</style>
