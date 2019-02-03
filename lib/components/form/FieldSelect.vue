<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-select",
    "dm-field-select--" + computedStatus,
    "dm-field-select--" + size,
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
    @click="onLabelClick"
    :forField="uuid"
    :required="validation && validation.includes('required')"
    :size="size"
    class="dm-field-select__label"
  ) {{ label }}

  .dm-field-select__container
    div(
      @click="onContainerClick"
      @keypress.prevent="onContainerKeypress"
      class="dm-field-select__field"
      tabindex="0"
    )
      base-icon(
        v-if="computedLeftIcon"
        :name="computedLeftIcon"
        class="dm-field-select__icon dm-field-select__icon--left"
      )
      .dm-field-select__option.dm-field-select__option--current {{ currentLabel }}

      base-icon(
        class="dm-field-select__icon dm-field-select__icon--right"
        name="arrow_drop_down"
      )

    div(
      v-show="deployed && !disabled"
      class="dm-field-select__options"
    )
      div(
        v-for="option in options"
        @click="onOptionClick(option.value, $event)"
        @keypress.prevent="onOptionKeypress"
        :class=`[
          "dm-field-select__option",
          {
            "dm-field-select__option--selected": option.value === currentValue
          }
        ]`
        :key="option.value"
        tabindex="0"
      ) {{ option.label }}

  select(
    v-model="currentValue"
    v-validate="validation"
    :data-vv-as="validationVvAs"
    :name="name"
    :ref="validationRef"
    class="dm-field-select__select"
  )
    option(
      v-for="option in options"
      :key="option.value"
      :value="options.value"
    ) {{ option.label }}

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
import FieldMessageMixin from "../../mixins/FieldMessageMixin.js";
import FieldValidationMixin from "../../mixins/FieldValidationMixin.js";

export default {
  components: {
    BaseIcon,
    FieldLabel
  },

  mixins: [FieldMessageMixin, FieldValidationMixin],

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
        return x.length > 0;
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
    value: {
      type: [Number, String],
      default: null
    }
  },

  data() {
    return {
      // --> STATE <--

      currentLabel: null,
      currentValue: null,
      deployed: false,
      uuid: ""
    };
  },

  computed: {
    computedLeftIcon() {
      // Return the left icon when defined as prop
      if (this.computedStatus === "error") {
        return "close";
      } else if (this.computedStatus === "success") {
        return "check";
      } else if (this.computedStatus === "warning") {
        return "warning";
      }

      return this.leftIcon;
    }
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        if (value) {
          // When a value prop is defined set the option as active
          const option = this.options.find(el => el.value === value);

          this.currentLabel = option.label;
          this.currentValue = option.value;
        } else {
          // Or set the first option as active
          this.currentLabel = this.options[0].label;
          this.currentValue = this.options[0].value;
        }
      }
    }
  },

  mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onContainerClick(event) {
      if (!this.disabled) {
        this.deployed = !this.deployed;

        this.$emit("click", this.currentValue, this.name, event);
      }
    },

    onContainerKeypress(event) {
      if (event.which === 32) {
        event.target.click();
      }
    },

    onLabelClick() {
      if (!this.disabled) {
        this.deployed = !this.deployed;
      }
    },

    onOptionClick(value, event) {
      const selectedOption = this.options.find(el => el.value === value);

      if (this.currentValue !== value) {
        this.currentLabel = selectedOption.label;
        this.currentValue = value;

        this.$emit("change", value, this.name, event);

        // Synchronization for v-model
        this.$emit("input", value);
      }

      this.deployed = false;
    },

    onOptionKeypress(event) {
      if (event.which === 32) {
        event.target.click();
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
      user-select: none;
      cursor: pointer;
    }

    #{$c}__field {
      position: relative;
      align-items: center;
      background-color: $ebony-clay-2;

      &:focus {
        outline: 0;
        border-color: $azure-radiance;

        #{$c}__icon {
          color: $azure-radiance;
        }
      }

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
        color: $white;
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
      background-color: $ebony-clay;
      user-select: none;

      #{$c}__option {
        display: flex;
        align-items: center;
        border-bottom: 1px solid $oxford-blue;
        color: $regent-st-blue;
        transition: all ease-in-out 250ms;

        &--selected {
          color: $white;
          text-decoration: underline;
        }

        &:last-of-type {
          border-bottom: none;
        }

        &:hover,
        &:focus {
          outline: 0;
          background-color: $ebony-clay-2;
          color: $white;
        }
      }
    }
  }

  #{$c}__select {
    display: none;
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
        #{$c}__field {
          @if ($status != normal) {
            border-color: map-get($statusColors, $status);
          } @else {
            border-color: $oxford-blue;
          }

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
      }

      #{$c}__field {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;

        #{$c}__icon {
          color: $azure-radiance;

          &--right {
            transform: rotate(180deg);
          }
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
