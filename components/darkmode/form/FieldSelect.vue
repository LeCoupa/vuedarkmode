<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-select",
    "dm-field-select--" + size,
    "dm-field-select--" + status,
    {
      "dm-field-select--disabled": disabled,
      "dm-field-select--deployed": deployed,
      "dm-field-select--full-width": fullWidth,
      "dm-field-select--with-left-icon": computedLeftIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :size="size"
    class="dm-field-select__label"
  ) {{ label }}

  .dm-field-select__container
    div(
      @click="onContainerMouseClick"
      class="dm-field-select__field"
    )
      base-icon(
        v-if="computedLeftIcon"
        :name="computedLeftIcon"
        class="dm-field-select__icon dm-field-select__icon--left"
      )
      .dm-field-select__option.dm-field-select__option--current {{ currentValue }}

      base-icon(
        class="dm-field-select__icon dm-field-select__icon--right"
        name="arrow_drop_down"
      )

    div(
      v-show="deployed"
      class="dm-field-select__options"
    )
      div(
        v-for="option in options"
        @click="onOptionClick(option.value, $event)"
        :class=`[
          "dm-field-select__option",
          {
            "dm-field-select__option--selected": option.value === currentValue
          }
        ]`
      ) {{ option.label }}

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
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator(x) {
        return x.length !== 0;
      }
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
    }
  },

  data() {
    return {
      // --> STATE <--

      currentValue: null,
      deployed: false,
      uuid: ""
    };
  },

  computed: {
    computedLeftIcon() {
      // Return the left icon when defined as prop
      if (this.status === "error") {
        return "close";
      } else if (this.status === "success") {
        return "check";
      } else if (this.status === "warning") {
        return "warning";
      }

      return this.leftIcon;
    }
  },

  created() {
    // Set the current value for the element
    const selectedOption = this.options.find(el => el.selected);

    if (selectedOption) {
      this.currentValue = selectedOption.value;
    } else {
      this.currentValue = this.options[0].value;
    }
  },

  mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> HELPERS <--

    getSelectedValue() {
      return this.$el.querySelector("select").value || "";
    },

    // --> EVENT LISTENERS <--

    onContainerMouseClick(event) {
      if (!this.disabled) {
        this.deployed = !this.deployed;

        this.$emit("click", this.currentValue, this.name, event);
      }
    },

    onOptionClick(value, event) {
      this.deployed = false;

      if (this.currentValue !== value) {
        this.currentValue = value;
        this.$emit("change", value, this.name, event);
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
$c: ".dm-field-select";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__container {
    position: relative;

    #{$c}__field,
    #{$c}__options {
      display: flex;
      overflow: hidden;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      background-color: $ebony-clay-2;
      user-select: none;
      cursor: pointer;
    }

    #{$c}__field {
      position: relative;
      align-items: center;

      #{$c}__icon {
        position: absolute;
        pointer-events: none;

        &--left {
          left: 9px;
        }

        &--right {
          right: 9px;
          transition: transform 250ms ease-in-out;
          transform: rotate(0deg);
        }
      }

      #{$c}__option {
        flex: 1;
      }
    }

    #{$c}__options {
      position: absolute;
      right: 0;
      left: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      border-top: none;
      user-select: none;

      #{$c}__option {
        display: flex;
        align-items: center;
        border-bottom: 1px solid $oxford-blue;
        transition: background-color ease-in-out 250ms;

        &:last-of-type {
          border-bottom: none;
        }

        &:hover {
          background-color: $ebony-clay;
        }
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__field,
        #{$c}__options {
          border-radius: 4px + (1px * $i);

          #{$c}__option {
            padding: 0 35px 0 (10px + (1px * $i));
            font-size: 12px + (1px * $i);
          }
        }

        #{$c}__field {
          height: 34px + (4px * $i);

          #{$c}__icon {
            // Will override the font-size set in style attribute
            font-size: 16px + (1px * $i) !important;
          }
        }

        #{$c}__options {
          #{$c}__option {
            height: 34px + (4px * $i);
          }
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        #{$c}__field,
        #{$c}__options {
          @if ($status != normal) {
            border-color: map-get($statusColors, $status) !important;
          } @else {
            border-color: $oxford-blue;
          }
        }

        #{$c}__field {
          #{$c}__icon {
            @if ($status != normal) {
              color: map-get($statusColors, $status);
            } @else {
              color: $white;
            }
          }
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--deployed {
    #{$c}__container {
      #{$c}__field,
      #{$c}__options {
        border-color: $azure-radiance;

        #{$c}__option {
          color: $white;
        }
      }

      #{$c}__field {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;

        #{$c}__icon--right {
          transform: rotate(180deg);
        }
      }

      #{$c}__options {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }

  &--disabled {
    opacity: 0.7;

    #{$c}__label,
    #{$c}__field {
      cursor: not-allowed;
    }
  }

  &--full-width {
    width: 100%;
  }

  &--with-left-icon {
    #{$c}__container {
      #{$c}__field,
      #{$c}__options {
        #{$c}__option {
          padding-left: 35px;
        }
      }
    }
  }
}
</style>
