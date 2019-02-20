<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-textarea",
    "dm-field-textarea--" + computedStatus,
    "dm-field-textarea--" + size,
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
    :required="validation && validation.includes('required')"
    :size="size"
    class="dm-field-textarea__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="dm-field-textarea__container"
  )
    textarea(
      v-validate="validation"
      @blur="onFieldBlur"
      @change="onFieldChange"
      @focus="onFieldFocus"
      @input="onFieldInput"
      @keydown="onFieldKeyDown"
      @keyup="onFieldKeyUp"
      :cols="cols"
      :data-vv-as="validationVvAs"
      :disabled="disabled"
      :id="uuid"
      :maxlength="maxlength"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :ref="validationRef"
      :rows="rows"
      :spellcheck="spellcheck"
      :style=`{
        resize: resize
      }`
      class="dm-field-textarea__field"
    ) {{ currentValue }}

    base-icon(
      v-if="computedIcon"
      :name="computedIcon"
      class="dm-field-textarea__icon"
    )

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
    maxlength: {
      type: Number,
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
        return (
          [
            "none",
            "both",
            "horizontal",
            "vertical",
            "initial",
            "inherit"
          ].indexOf(x) !== -1
        );
      }
    },
    rows: {
      type: Number,
      default: null
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

      currentValue: "",
      focused: false,
      uuid: ""
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

  watch: {
    value: {
      immediate: true,
      handler(value) {
        if (value === undefined || value === null) {
          this.currentValue = "";
        } else {
          this.currentValue = value;
        }
      }
    }
  },

  mounted() {
    this.uuid = generateUUID();
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

      this.currentValue = value;
      this.$emit("input", value, this.name, event);
    },

    onFieldKeyDown(event) {
      const value = this.getTextareaValue();

      this.$emit("keydown", value, this.name, event);
    },

    onFieldKeyUp(event) {
      const value = this.getTextareaValue();

      this.$emit("keyup", value, this.name, event);
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
$c: ".dm-field-textarea";
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
    display: flex;
    transition: all ease-in-out 250ms;

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
      background-color: transparent;
      color: $white;

      &::placeholder {
        color: $nepal;
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
        min-height: 60px + (20px * $i);
        border-radius: 4px + (1px * $i);
        font-size: 12px + (1px * $i);
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
      border-radius: 6px;
      background-color: $ebony-clay-2;
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
