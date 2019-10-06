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
    :class=`[
      "dm-field-textarea",
      "dm-field-textarea--" + (errors.length > 0 && dirty && !focused ? 'error' : computedStatus),
      "dm-field-textarea--" + size,
      "dm-field-textarea--" + theme,
      {
        "dm-field-textarea--borders": borders,
        "dm-field-textarea--disabled": disabled,
        "dm-field-textarea--focused": focused,
        "dm-field-textarea--full-width": fullWidth,
        "dm-field-textarea--readonly": readonly
      }
    ]`
  )
    field-label(
      v-if="label"
      :forField="uuid"
      :required="labelRequired"
      :size="size"
      class="dm-field-textarea__label"
    ) {{ label }}

    div(
      @click="onContainerClick"
      class="dm-field-textarea__container"
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
        class="dm-field-textarea__field js-tag-for-autofocus"
      ){{ innerValue }}

      base-icon(
        v-if="computedIcon"
        :name="computedIcon"
        class="dm-field-textarea__icon"
      )

    field-message(
      v-if="computedMessageLevel || (errors.length > 0 && dirty && !focused)"
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
// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js";

export default {
  mixins: [FieldMixin],

  props: {
    borders: {
      type: Boolean,
      default: true
    },
    cols: {
      type: Number,
      default: null
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: null
    },
    label: {
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
        return [
          "none",
          "both",
          "horizontal",
          "vertical",
          "initial",
          "inherit"
        ].includes(x);
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

  data() {
    return {
      // --> STATE <--

      focused: false
    };
  },

  computed: {
    computedIcon() {
      // Return the left icon when defined as prop
      if (this.computedStatus === "error") {
        return "close";
      } else if (this.computedStatus === "success") {
        return "check";
      } else if (this.computedStatus === "warning") {
        return "warning";
      }

      return this.icon;
    }
  },

  methods: {
    // --> HELPERS <--

    getTextareaValue() {
      return this.$el.querySelector("textarea").value || "";
    },

    // --> EVENT LISTENERS <--

    onContainerClick(event) {
      this.$el.querySelector("textarea").focus();

      this.$emit("click", this.getTextareaValue(), this.name, event);
    },

    onFieldBlur(event) {
      this.focused = false;

      this.$emit("blur", this.getTextareaValue(), this.name, event);
    },

    onFieldChange(event) {
      this.$emit("change", this.getTextareaValue(), this.name, event);
    },

    onFieldFocus(event) {
      this.focused = true;

      this.$emit("focus", this.getTextareaValue(), this.name, event);
    },

    onFieldInput(event) {
      const value = this.getTextareaValue();

      this.innerValue = value;

      this.$emit("input", value, this.name, event);
    },

    onFieldKeyDown(event) {
      this.$emit("keydown", this.getTextareaValue(), this.name, event);
    },

    onFieldKeyUp(event) {
      this.$emit("keyup", this.getTextareaValue(), this.name, event);
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

// VARIABLES
$c: ".dm-field-textarea";
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
      color: $white;

      &::placeholder {
        color: $nepal;
        transition: color linear 250ms;
      }

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

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        @if ($status != normal) {
          // Override focused state
          border-color: map-get($statusColors, $status) !important;
          color: map-get($statusColors, $status) !important;
        } @else {
          border-color: $oxford-blue;
          color: $white;
        }
      }
    }
  }

  // --> THEMES <--

  &--dark {
    #{$c}__container {
      #{$c}__field {
        background-color: $ebony-clay;
      }
    }
  }

  &--light {
    #{$c}__container {
      #{$c}__field {
        background-color: $ebony-clay-2;
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__label,
    #{$c}__container {
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

  &--focused {
    #{$c}__container {
      border-color: $azure-radiance;
      color: $azure-radiance;
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
}
</style>
