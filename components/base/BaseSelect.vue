<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-base-select',
    'c-base-select--' + size,
    'c-base-select--' + computedStatus
  ]`
)
  base-label(
    v-if="label"
    :forField="id"
    :size="size"
    class="c-base-select__label"
  ) {{ label }}

  .c-base-select__container
    base-icon(
      v-if="leftIcon"
      :name="leftIcon"
      class="c-base-select__icon c-base-select__icon--left"
    )
    select(
      @blur="onSelectBlur"
      @click="onSelectClick"
      @focus="onSelectFocus"
      @change="onSelectChange"
      :disabled="disabled"
      :id="id"
      class="c-base-select__field"
    )
      option(
        v-for="option in options"
        :value="option.value"
      ) {{ option.label }}

    base-icon(
      :name="computedRightIcon"
      class="c-base-select__icon c-base-select__icon--right"
    )

  p(
    v-if="description"
    class="c-base-input__description"
  ) {{ description }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
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
    options: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "default"
    },
    status: {
      type: String,
      default: "normal"
    }
  },

  data() {
    return {
      // --> STATE <--
      focused: false,
      rightIcon: "arrow_drop_down"
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
    getSelectedValue() {
      return this.$el.querySelector("select").value || "";
    },

    onSelectBlur() {
      this.focused = false;
      this.rightIcon = "arrow_drop_down";

      this.$emit("blur", this.id, this.getSelectedValue());
    },

    onSelectChange() {
      this.rightIcon = "arrow_drop_down";

      this.$emit("change", this.id, this.getSelectedValue());
    },

    onSelectClick() {
      this.rightIcon = "arrow_drop_up";

      this.$emit("click", this.id, this.getSelectedValue());
    },

    onSelectFocus() {
      this.focused = true;
      this.rightIcon = "arrow_drop_up";

      this.$emit("focus", this.id, this.getSelectedValue());
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-select";
$sizes: mini, small, default, medium, large;
$statuses: error, focused, success, warning;

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;

  #{$c}__container {
    display: flex;
    overflow: hidden;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid $oxford-blue;
    border-radius: 6px;
    background-color: $ebony-clay-2;
    transition: border ease-in-out 0.2s;

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
      background-image: none;
      box-shadow: none;
      color: $white;
      cursor: pointer;

      -webkit-appearance: none;

      &:disabled {
        cursor: not-allowed;
      }

      &:focus {
        outline: none;
      }
    }
  }

  #{$c}__description {
    margin: 10px 0 0;
    color: $nepal;
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

      #{$c}__description {
        font-size: 12px + (1px * $i);
        line-height: 14px + (2px * $i);
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
}
</style>
