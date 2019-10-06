<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
validation-provider(
  v-slot="{ dirty, errors }"
  :name="rulesName || name"
  :rules="rules"
  :vid="rulesVid"
  ref="validationProvider"
  tag="div"
)
  div(
    v-click-outside="onClose"
    v-hotkey="hotkeys"
    :class=`[
      "dm-field-select",
      "dm-field-select--" + (errors.length > 0 && dirty ? 'error' : computedStatus),
      "dm-field-select--" + direction,
      "dm-field-select--" + size,
      "dm-field-select--" + theme,
      {
        "dm-field-select--clearable": clearable,
        "dm-field-select--disabled": disabled,
        "dm-field-select--opened": opened,
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
          v-if="clearable && selectedOption"
          @click="onClear"
          class="dm-field-select__icon dm-field-select__icon--clear"
          name="cancel"
        )

        base-icon(
          class="dm-field-select__icon dm-field-select__icon--arrow"
          name="arrow_drop_down"
        )

      div(
        v-show="opened && !disabled"
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

    field-message(
      v-if="computedMessageLevel || (errors.length > 0 && dirty)"
      :errors="errors"
      :level="computedMessageLevel"
      :message="computedMessageContent"
      :show-errors="showErrors"
      :size="size"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: HELPERS
import { generateUUID } from "../../helpers/helpers.js";

// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js";

export default {
  mixins: [FieldMixin],

  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "bottom",
      validator(x) {
        return ["bottom", "top"].includes(x);
      }
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
    options: {
      type: Array,
      required: true
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

      opened: false,
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
    },

    hotkeys() {
      return {
        esc: this.onClose
      };
    },

    selectedOption() {
      return this.options.find(option => {
        return option.value === this.value;
      });
    }
  },

  watch: {
    value(value) {
      this.validate(true);
    }
  },

  mounted() {
    this.uuid = generateUUID();

    this.validate();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClear(name, event) {
      event.stopPropagation();

      this.$emit("change", null, null, event);
      this.$emit("input", null); // Synchronization for v-model
      this.$emit("clear");
    },

    onClose() {
      this.opened = false;
    },

    onContainerClick(event) {
      if (!this.disabled) {
        this.opened = !this.opened;

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
        this.opened = !this.opened;
      }
    },

    onOptionClick(option, event) {
      this.opened = false;

      // Check that the option is not currently selected
      if ((this.selectedOption || {}).value !== option.value) {
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
@import "assets/stylesheets/settings/_settings.colors.scss";
@import "assets/stylesheets/tools/_tools.mixins.scss";

// VARIABLES
$c: ".dm-field-select";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

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
        }

        &:focus {
          color: $white;
        }
      }
    }

    #{$c}__field {
      position: relative;
      align-items: center;

      &:focus {
        outline: 0;
        border-color: $azure-radiance;

        #{$c}__icon {
          &--left,
          &--arrow {
            color: $azure-radiance;
          }
        }
      }

      #{$c}__icon {
        position: absolute;
        flex: 0 0 auto;

        &--left {
          left: 9px;
        }

        &--clear {
          right: 30px;
          opacity: 0.8;
          transition: opacity 250ms linear;

          &:hover {
            opacity: 1;
          }
        }

        &--arrow {
          right: 9px;
          transition: transform 250ms linear;
        }
      }
    }

    #{$c}__options {
      position: absolute;
      right: 0;
      left: 0;
      z-index: 1;
      overflow-y: auto;
      flex-direction: column;
      max-height: 200px;
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

  // --> DIRECTIONS <--

  &--bottom {
    #{$c}__container {
      #{$c}__field {
        #{$c}__icon {
          &--arrow {
            transform: rotate(0deg);
          }
        }
      }

      #{$c}__options {
        top: 100%;

        #{$c}__option {
          &:last-of-type {
            border-bottom: none;
          }
        }
      }
    }

    &#{$c}--opened {
      #{$c}__container {
        #{$c}__field {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;

          #{$c}__icon {
            &--arrow {
              transform: rotate(180deg);
            }
          }
        }

        #{$c}__options {
          border-top: none;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
    }
  }

  &--top {
    #{$c}__container {
      #{$c}__field {
        #{$c}__icon {
          &--arrow {
            transform: rotate(180deg);
          }
        }
      }

      #{$c}__options {
        bottom: 100%;
      }
    }

    &#{$c}--opened {
      #{$c}__container {
        #{$c}__field {
          border-top-left-radius: 0;
          border-top-right-radius: 0;

          #{$c}__icon {
            &--arrow {
              transform: rotate(0deg);
            }
          }
        }

        #{$c}__options {
          border-bottom: none;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
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
            &--left,
            &--arrow {
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
  }

  // --> THEMES <--

  &--dark {
    #{$c}__container {
      #{$c}__field,
      #{$c}__options {
        background-color: $ebony-clay;
      }

      #{$c}__options {
        #{$c}__option {
          &:hover,
          &:focus {
            background-color: $ebony-clay-2;
          }
        }
      }
    }
  }

  &--light {
    #{$c}__container {
      #{$c}__field,
      #{$c}__options {
        background-color: $ebony-clay-2;
      }

      #{$c}__options {
        #{$c}__option {
          &:hover,
          &:focus {
            background-color: $ebony-clay;
          }
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--clearable {
    #{$c}__container {
      #{$c}__field,
      #{$c}__options {
        #{$c}__option {
          padding-right: 60px;
        }
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

  &--opened {
    #{$c}__container {
      #{$c}__field,
      #{$c}__options {
        border-color: $azure-radiance;
      }

      #{$c}__field {
        #{$c}__icon {
          &--left,
          &--arrow {
            color: $azure-radiance;
          }
        }
      }
    }
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
