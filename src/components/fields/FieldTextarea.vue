<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "gb-field-textarea",
    "gb-field-textarea--" + size,
    "gb-field-textarea--" + computedTheme,
    "gb-field-textarea--" + computedStatus,
    {
      "gb-field-textarea--borders": borders,
      "gb-field-textarea--disabled": disabled,
      "gb-field-textarea--focused": focused,
      "gb-field-textarea--full-width": fullWidth,
      "gb-field-textarea--readonly": readonly
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :required="required"
    :size="size"
    :theme="theme"
    class="gb-field-textarea__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="gb-field-textarea__container"
  )
    textarea(
      @blur="onFieldBlur"
      @change="onFieldChange"
      @focus="onFieldFocus"
      @input="onFieldInput"
      @keydown="onFieldKeyDown"
      @keyup="onFieldKeyUp"
      :cols="cols"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :rows="rows"
      :spellcheck="spellcheck"
      :style=`{
        resize: resize
      }`
      class="gb-field-textarea__field js-tag-for-autofocus"
    ) {{ innerValue }}

    base-icon(
      v-if="computedIcon"
      :name="computedIcon"
      class="gb-field-textarea__icon"
    )

  field-message(
    v-if="fieldMessageStatus"
    :message="fieldMessageContent"
    :size="size"
    :status="fieldMessageStatus"
    :theme="theme"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import FieldSizeMixin from "../../mixins/FieldSizeMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [FieldMixin, FieldSizeMixin, ThemeMixin],

  props: {
    borders: {
      type: Boolean,
      default: true
    },
    cols: {
      type: Number,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    resize: {
      type: String,
      default: "none",
      validator(x) {
        return ["none", "both", "horizontal", "vertical", "initial", "inherit"].includes(x)
      }
    },
    rows: {
      type: Number,
      default: 6
    },
    spellcheck: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },

  data: () => ({
    // --> STATE <--

    focused: false
  }),

  computed: {
    computedIcon() {
      // Return the left icon when defined as prop
      if (this.computedStatus === "error") {
        return "close"
      } else if (this.computedStatus === "success") {
        return "check"
      } else if (this.computedStatus === "warning") {
        return "warning"
      }

      return this.icon
    }
  },

  methods: {
    // --> HELPERS <--

    getTextareaValue() {
      return this.$el.querySelector("textarea").value || ""
    },

    // --> EVENT LISTENERS <--

    onContainerClick(event) {
      this.$el.querySelector("textarea").focus()

      this.$emit("click", this.getTextareaValue(), this.name, event)
    },

    onFieldBlur(event) {
      this.focused = false

      this.$emit("blur", this.getTextareaValue(), this.name, event)
    },

    onFieldChange(event) {
      this.$emit("change", this.getTextareaValue(), this.name, event)
    },

    onFieldFocus(event) {
      this.focused = true

      this.$emit("focus", this.getTextareaValue(), this.name, event)
    },

    onFieldInput(event) {
      const value = this.getTextareaValue()

      this.innerValue = value

      this.$emit("input", value, this.name, event)
    },

    onFieldKeyDown(event) {
      this.$emit("keydown", this.getTextareaValue(), this.name, event)
    },

    onFieldKeyUp(event) {
      this.$emit("keyup", this.getTextareaValue(), this.name, event)
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

// VARIABLES
$c: ".gb-field-textarea";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  #{$c}__container {
    position: relative;
    display: flex;
    overflow: hidden;
    transition: all linear 250ms;

    #{$c}__icon {
      position: absolute;
      right: 7px;
      bottom: 7px;
      pointer-events: none;
    }

    #{$c}__field {
      width: 100%;
      height: 100%;
      outline: 0;
      border: none;

      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__field {
        padding: (10px + (1px * $i));
        font-size: 12px + (1px * $i);
        line-height: 18px+ (1px * $i);
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__label,
    #{$c}__container {
      pointer-events: none;
      cursor: not-allowed;
    }
  }

  &--borders {
    #{$c}__container {
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-radius: 4px;
    }
  }

  &--full-width {
    width: 100%;
  }

  &--readonly {
    #{$c}__container {
      #{$c}__field {
        cursor: default;
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      #{$c}__container {
        #{$c}__field {
          background-color: mdg($theme, "backgrounds", "default", "primary");
          color: mdg($theme, "fonts", "default", "primary");

          &::placeholder {
            color: mdg($theme, "fonts", "default", "tertiary");
          }
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            border-color: mdg($theme, "statuses", $status);

            #{$c}__icon {
              @if ($status == "normal") {
                color: mdg($theme, "fonts", "default", "tertiary");
              } @else {
                color: mdg($theme, "statuses", $status);
              }
            }

            &:hover {
              @if (map-get($theme, "name") == "dark") {
                border-color: lighten(mdg($theme, "statuses", $status), 10%);
              } @else if (map-get($theme, "name") == "light") {
                border-color: darken(mdg($theme, "statuses", $status), 10%);
              }
            }

            &:active {
              border-color: mdg($theme, "statuses", $status);
            }
          }
        }
      }

      // --> BOOLEANS <--

      &#{$c}--focused {
        #{$c}__container {
          // "!important" overrides overrides hover
          border-color: mdg($theme, "statuses", "active") !important;

          #{$c}__icon {
            color: mdg($theme, "statuses", "active") !important;
          }
        }
      }
    }
  }
}
</style>
