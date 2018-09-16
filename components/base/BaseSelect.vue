<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-base-select',
    'c-base-select--' + size,
    'c-base-select--' + computedStatus,
    {
      'c-base-select--with-left-icon': leftIcon
    }
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
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid $oxford-blue;
    border-radius: 6px;
    background-color: $ebony-clay-2;
    transition: border ease-in-out 0.2s;

    #{$c}__icon {
      z-index: 1;
      position: absolute;

      &--left {
        left: 9px;
      }

      &--right {
        right: 9px;
      }
    }

    #{$c}__field {
      z-index: 2;
      flex: 1;
      padding: 0 35px 0 15px;
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

  &--with-left-icon {
    #{$c}__container {
      #{$c}__field {
        padding-left: 35px;
      }
    }
  }
}
</style>
