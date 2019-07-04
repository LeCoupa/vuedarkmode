<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  v-click-outside="onClose"
  v-hotkey=`{
    "esc": onClose,
  }`
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
    :required="labelRequired"
    :size="size"
    class="dm-field-select__label"
  ) {{ label }}

  .dm-field-select__container
    div(
      @click="onContainerClick"
      @keypress.prevent="onContainerKeypress"
      class="dm-field-select__field js-tag-for-autofocus"
      tabindex="0"
    )
      base-icon(
        v-if="computedLeftIcon"
        :name="computedLeftIcon"
        class="dm-field-select__icon dm-field-select__icon--left"
      )

      span(
        v-if="selectedOption"
        class="dm-field-select__option dm-field-select__option--selected"
      )
        span(
          v-if="$scopedSlots['option-left']"
          class="dm-field-select__option-left"
        )
          slot(
            :option="selectedOption"
            name="option-left"
          )

        span.dm-field-select__option-label {{ selectedOption.label }}

        span(
          v-if="$scopedSlots['option-right']"
          class="dm-field-select__option-right"
        )
          slot(
            :option="selectedOption"
            name="option-right"
          )

      div(
        v-else-if="placeholder"
        class="dm-field-select__option dm-field-select__option--placeholder"
      ) {{ placeholder }}

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
        @click="onOptionClick(option, $event)"
        @keypress.prevent="onOptionKeypress(option, $event)"
        :class=`[
          "dm-field-select__option",
          {
            "dm-field-select__option--selected": selectedOption && option.value === selectedOption.value
          }
        ]`
        :key="option.value"
        tabindex="0"
      )
        span(
          v-if="$scopedSlots['option-left']"
          class="dm-field-select__option-left"
        )
          slot(
            :option="option"
            name="option-left"
          )

        span.dm-field-select__option-label {{ option.label }}

        span(
          v-if="$scopedSlots['option-right']"
          class="dm-field-select__option-right"
        )
          slot(
            :option="option"
            name="option-right"
          )

  select(
    v-model="(selectedOption || {}).value"
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
// PROJECT: COMPONENTS
import BaseIcon from "../base/BaseIcon.vue";
import FieldLabel from "./FieldLabel.vue";

// PROJECT: HELPERS
import { generateUUID } from "../../helpers/helpers.js";

// PROJECT: MIXINS
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
    options: {
      type: Array,
      required: true,
      validator(x) {
        return x.length > 0;
      }
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: [Number, String],
      default: null
    }
  },

  data() {
    return {
      // --> STATE <--

      deployed: false,
      selectedOption: null,
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
    options: {
      handler(options) {
        // When the available options are updated
        // This make sure we keep the selected option up-to-date
        const option = options.find(option => {
          if (this.selectedOption) {
            return option.value === this.selectedOption.value;
          }
        });

        this.setSelectedOption(option);
      }
    },

    value: {
      immediate: true,
      handler(value) {
        const option = this.options.find(option => option.value === value);

        // Select the right option for the select value
        this.$nextTick(() => {
          this.setSelectedOption(option);
        });
      }
    }
  },

  mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> HELPERS <--

    setSelectedOption(option) {
      if (option) {
        this.selectedOption = option;
      } else {
        this.selectedOption = null;
      }
    },

    // --> EVENT LISTENERS <--

    onClose() {
      this.deployed = false;
    },

    onContainerClick(event) {
      if (!this.disabled) {
        this.deployed = !this.deployed;

        this.$emit(
          "click",
          (this.selectedOption || {}).value,
          this.name,
          event
        );
      }
    },

    onContainerKeypress(event) {
      if (event.code === "Space") {
        event.target.click();
      }
    },

    onLabelClick() {
      if (!this.disabled) {
        this.deployed = !this.deployed;
      }
    },

    onOptionClick(option, event) {
      this.deployed = false;

      // Check that the option is not currently selected
      if ((this.selectedOption || {}).value !== option.value) {
        this.setSelectedOption(option);

        this.$emit("change", option.value, this.name, event);
        this.$emit("input", option.value); // Synchronization for v-model
      }
    },

    onOptionKeypress(option, event) {
      if (event.code === "Space") {
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
@import "assets/tools/_tools.mixins.scss";

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

  @include no-tap-highlight-color;

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

      #{$c}__option {
        display: flex;
        overflow: hidden;
        align-items: center;
        flex: 1;
        border-bottom: 1px solid $oxford-blue;
        color: $regent-st-blue;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all linear 250ms;

        &--placeholder {
          color: $nepal;
        }

        &--selected {
          color: $white;
        }

        &:last-of-type {
          border-bottom: none;
        }

        #{$c}__option-left,
        #{$c}__option-right {
          flex: 0 0 auto;
        }

        #{$c}__option-left {
          margin-right: 6px;
        }

        #{$c}__option-label {
          flex: 1;
        }

        #{$c}__option-right {
          margin-left: 6px;
        }

        &:hover,
        &:focus {
          outline: 0;
          background-color: $ebony-clay-2;
        }

        &:focus {
          color: $white;
        }
      }
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
        flex: 0 0 auto;
        pointer-events: none;

        &--left {
          left: 9px;
        }

        &--right {
          right: 9px;
          transition: transform 250ms linear;
          transform: rotate(0deg);
        }
      }
    }

    #{$c}__options {
      position: absolute;
      right: 0;
      left: 0;
      z-index: 2;
      overflow-y: auto;
      flex-direction: column;
      max-height: 200px;
      border-top: none;
      background-color: $ebony-clay;
      user-select: none;

      #{$c}__option {
        flex: 0 0 auto;

        &--selected {
          #{$c}__option-label {
            text-decoration: underline;
          }
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
          border-radius: 3px + (1px * $i);

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
