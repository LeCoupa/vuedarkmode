<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-base-input',
    'c-base-input--' + size,
    'c-base-input--' + status,
    {
      'c-base-input--block': block,
      'c-base-input--rounded': rounded
    }
  ]`
)
  base-label(
    v-if="label"
    :forField="id"
    class="c-base-input__label"
  ) {{ label }}

  .c-base-input__container
    input(
      @keyup="onKeyUp"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      class="c-base-input__field"
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
    placeholder: {
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

  methods: {
    onKeyUp(event) {
      let value = event.target.value || "";

      if (value && this.type === "number") {
        value = parseInt(value);
      }

      this.$emit("keyup", this.id, value);
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

    #{$c}__field {
      flex: 1;
      border: 1px solid #313d4f;
      border-radius: 6px;
      background-color: #273142;
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
        #{$c}__field {
          box-sizing: border-box;
          padding: 0 15px;
          height: 34px + (4px * $i);
          border-radius: 4px + (1px * $i);
          font-size: 12px + (1px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  &--error {
    #{$c}__container {
      #{$c}__field {
        border-color: #e0102b;
      }
    }
  }

  &--selected {
    #{$c}__container {
      #{$c}__field {
        border-color: #0093ee;
      }
    }
  }

  &--success {
    #{$c}__container {
      #{$c}__field {
        border-color: #1bb934;
      }
    }
  }

  // --> BOOLEANS <--

  &--block {
    width: 100%;

    #{$c}__container {
      #{$c}__field {
        display: block;
        width: 100%;
      }
    }
  }

  &--rounded {
    #{$c}__container {
      #{$c}__field {
        border-radius: 40px;
      }
    }
  }
}
</style>
