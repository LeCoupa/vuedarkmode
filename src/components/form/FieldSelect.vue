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
      "gb-field-select",
      "gb-field-select--" + direction,
      "gb-field-select--" + size,
      "gb-field-select--" + computedTheme,
      "gb-field-select--" + (errors.length > 0 && dirty && showErrors ? 'error' : computedStatus),
      {
        "gb-field-select--clearable": clearable,
        "gb-field-select--disabled": disabled,
        "gb-field-select--opened": opened,
        "gb-field-select--full-width": fullWidth,
        "gb-field-select--with-left-icon": computedLeftIcon && (!$scopedSlots['option-left'] || !selectedOption)
      }
    ]`
  )
    field-label(
      v-if="label"
      @click="onLabelClick"
      :forField="uuid"
      :required="labelRequired"
      :size="size"
      :theme="theme"
      class="gb-field-select__label"
    ) {{ label }}

    .gb-field-select__container
      div(
        @click="onContainerClick"
        @keypress.prevent="onContainerKeypress"
        class="gb-field-select__field js-tag-for-autofocus"
        tabindex="0"
      )
        base-icon(
          v-if="computedLeftIcon && (!$scopedSlots['option-left'] || !selectedOption)"
          :name="computedLeftIcon"
          class="gb-field-select__icon gb-field-select__icon--left"
        )

        span(
          v-if="selectedOption"
          class="gb-field-select__option gb-field-select__option--selected"
        )
          span(
            v-if="$scopedSlots['option-left']"
            class="gb-field-select__option-left"
          )
            slot(
              :option="selectedOption"
              name="option-left"
            )

          span.gb-field-select__option-label {{ selectedOption.label }}

          span(
            v-if="$scopedSlots['option-right']"
            class="gb-field-select__option-right"
          )
            slot(
              :option="selectedOption"
              name="option-right"
            )

        div(
          v-else-if="placeholder"
          class="gb-field-select__option gb-field-select__option--placeholder"
        ) {{ placeholder }}

        base-icon(
          v-if="clearable && selectedOption"
          @click="onClear"
          class="gb-field-select__icon gb-field-select__icon--clear"
          name="cancel"
        )

        base-icon(
          class="gb-field-select__icon gb-field-select__icon--arrow"
          name="arrow_drop_down"
        )

      div(
        v-show="opened && !disabled"
        class="gb-field-select__options"
      )
        field-input(
          v-if="searchable && opened"
          @input="onSearchInput"
          :autofocus="true"
          :borders="false"
          :size="size"
          class="gb-field-select__search"
          placeholder="Search..."
          left-icon="search"
        )

        div(
          v-for="(option, index) in computedOptions"
          @click="onOptionClick(option, $event)"
          @keypress.prevent="onOptionKeypress(option, $event)"
          :class=`[
            "gb-field-select__option",
            {
              "js-keyboard-focused-option": keyboardIndex === index,
              "gb-field-select__option--keyboard-focused": keyboardIndex === index,
              "gb-field-select__option--selected": selectedOption && option.value === selectedOption.value
            }
          ]`
          :key="option.value"
          tabindex="0"
        )
          span(
            v-if="$scopedSlots['option-left']"
            class="gb-field-select__option-left"
          )
            slot(
              :option="option"
              name="option-left"
            )

          span.gb-field-select__option-label {{ option.label }}

          span(
            v-if="$scopedSlots['option-right']"
            class="gb-field-select__option-right"
          )
            slot(
              :option="option"
              name="option-right"
            )

    field-message(
      v-if="computedMessageStatus || (errors.length > 0 && dirty)"
      :errors="errors"
      :message="computedMessageContent"
      :show-errors="showErrors"
      :size="size"
      :status="computedMessageStatus"
      :theme="theme"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import vClickOutside from "v-click-outside"

// PROJECT: COMPONENTS
import FieldInput from "./FieldInput.vue"

// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import FieldSizeMixin from "../../mixins/FieldSizeMixin.js"
import FieldStatusMixin from "../../mixins/FieldStatusMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },

  components: {
    FieldInput
  },

  mixins: [FieldMixin, FieldSizeMixin, FieldStatusMixin, ThemeMixin],

  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "bottom",
      validator(x) {
        return ["bottom", "top"].includes(x)
      }
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    leftIcon: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: null
    },
    searchable: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: null
    }
  },

  data: () => ({
    // --> STATE <--

    opened: false,

    keyboardIndex: null,
    searchQuery: ""
  }),

  computed: {
    computedLeftIcon() {
      // Return the left icon when defined as prop
      if (this.computedStatus === "error") {
        return "close"
      } else if (this.computedStatus === "success") {
        return "check"
      } else if (this.computedStatus === "warning") {
        return "warning"
      }

      return this.leftIcon
    },

    computedOptions() {
      // Return only searched options
      if (this.searchQuery) {
        return this.options.filter(option => {
          return option.label.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
      }

      return this.options
    },

    hotkeys() {
      return {
        esc: this.onClose,
        down: this.onNavigateWithKeyboard,
        enter: this.onNavigateWithKeyboard,
        up: this.onNavigateWithKeyboard
      }
    },

    selectedOption() {
      return this.options.find(option => {
        return option.value === this.innerValue
      })
    }
  },

  methods: {
    // --> HELPERS <--

    reset() {
      this.opened = false
      this.keyboardIndex = null
      this.searchQuery = ""
    },

    selectOption(value) {
      this.innerValue = value

      this.$emit("change", value, this.name, event)
      this.$emit("input", value) // Synchronization for v-model

      this.reset()
      this.focus()
    },

    // --> EVENT LISTENERS <--

    onClear(name, event) {
      event.stopPropagation()

      this.$emit("change", null, null, event)
      this.$emit("input", null) // Synchronization for v-model
      this.$emit("clear")
    },

    onClose() {
      this.reset()
    },

    onContainerClick(event) {
      if (!this.disabled) {
        this.opened = !this.opened

        this.$emit("click", (this.selectedOption || {}).value, this.name, event)
      }
    },

    onContainerKeypress(event) {
      if (event.code === "Space") {
        event.target.click()
      }
    },

    onLabelClick() {
      if (!this.disabled) {
        this.opened = !this.opened
      }
    },

    onNavigateWithKeyboard(event) {
      event.preventDefault()

      if (this.opened) {
        const code = event.code

        if (["ArrowDown", "ArrowUp"].includes(code)) {
          if (code === "ArrowDown") {
            // Select next option or go to the first one
            if (this.keyboardIndex < this.computedOptions.length - 1 && this.keyboardIndex !== null) {
              this.keyboardIndex += 1
            } else {
              this.keyboardIndex = 0
            }
          } else if (code === "ArrowUp") {
            // Select previous option or go to the last one
            if (this.keyboardIndex !== 0 && this.keyboardIndex !== null) {
              this.keyboardIndex -= 1
            } else {
              this.keyboardIndex = this.computedOptions.length - 1
            }
          }

          // Scroll to the newly focused option
          this.$nextTick(() => {
            const focusedOption = this.$el.querySelector(".js-keyboard-focused-option")

            if (focusedOption) {
              focusedOption.scrollIntoView({
                behavior: "auto",
                block: "nearest"
              })
            }
          })
        } else if (code === "Enter") {
          // Select the focused option
          this.selectOption(this.computedOptions[this.keyboardIndex].value)
        }
      }
    },

    onOptionClick(option, event) {
      // Check that the option is not currently selected
      if ((this.selectedOption || {}).value !== option.value) {
        this.selectOption(option.value)
      }
    },

    onOptionKeypress(option, event) {
      if (event.code === "Space") {
        event.target.click()
      }
    },

    onSearchInput(query) {
      this.searchQuery = query

      // Refocus the first option
      this.keyboardIndex = 0
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".gb-field-select";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  #{$c}__container {
    position: relative;

    #{$c}__field,
    #{$c}__options {
      display: flex;
      overflow: hidden;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      transition: border-color linear 250ms;
      user-select: none;
      cursor: pointer;

      #{$c}__option {
        display: flex;
        overflow: hidden;
        align-items: center;
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;

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
      }
    }

    #{$c}__field {
      position: relative;
      align-items: center;

      &:focus {
        outline: 0;
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

      #{$c}__search {
        border-bottom-width: 1px;
        border-bottom-style: solid;
      }

      #{$c}__option {
        flex: 0 0 auto;
        border-bottom-width: 1px;
        border-bottom-style: solid;

        &:last-of-type {
          border-bottom: none;
        }

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
      pointer-events: none;
      cursor: not-allowed;
    }
  }

  &--full-width {
    width: 100%;
  }

  &--with-left-icon {
    #{$c}__container {
      #{$c}__field {
        #{$c}__option {
          padding-left: 35px;
        }
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      #{$c}__container {
        #{$c}__field,
        #{$c}__options {
          background-color: mdg($theme, "backgrounds", "default", "primary");

          #{$c}__option {
            color: mdg($theme, "fonts", "default", "secondary");

            &--placeholder {
              color: mdg($theme, "fonts", "default", "tertiary");
            }

            &--selected {
              color: mdg($theme, "fonts", "default", "primary");
            }

            &:focus {
              color: mdg($theme, "fonts", "default", "primary");
            }
          }
        }

        #{$c}__options {
          #{$c}__search {
            border-bottom-color: mdg($theme, "borders", "default", "primary");
          }

          #{$c}__option {
            border-bottom-color: mdg($theme, "borders", "default", "primary");

            &:hover,
            &:focus {
              background-color: mdg($theme, "backgrounds", "default", "secondary");
            }
          }
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            #{$c}__field {
              border-color: mdg($theme, "statuses", $status);

              #{$c}__icon {
                &--left,
                &--arrow {
                  @if ($status == normal) {
                    color: mdg($theme, "fonts", "default", "tertiary");
                  } @else {
                    color: mdg($theme, "statuses", $status);
                  }
                }
              }

              &:hover {
                @if (map-get($theme, "name") == "dark") {
                  border-color: lighten(mdg($theme, "statuses", $status), 10%);
                } @else if (map-get($theme, "name") == "light") {
                  border-color: darken(mdg($theme, "statuses", $status), 10%);
                }
              }

              &:focus {
                border-color: mdg($theme, "statuses", "active");

                #{$c}__icon {
                  &--left,
                  &--arrow {
                    color: mdg($theme, "statuses", "active");
                  }
                }
              }

              &:active {
                border-color: mdg($theme, "statuses", $status);
              }
            }
          }
        }
      }

      // --> BOOLEANS <--

      &#{$c}--opened {
        #{$c}__container {
          #{$c}__field,
          #{$c}__options {
            border-color: mdg($theme, "statuses", "active") !important;
          }

          #{$c}__field {
            #{$c}__icon {
              &--left,
              &--arrow {
                color: mdg($theme, "statuses", "active") !important;
              }
            }
          }

          #{$c}__options {
            #{$c}__option {
              &--keyboard-focused {
                border-bottom-color: mdg($theme, "statuses", "active");
                background-color: mdg($theme, "statuses", "active");
                color: mdg($theme, "colors", "white");
              }
            }
          }
        }
      }
    }
  }
}
</style>
