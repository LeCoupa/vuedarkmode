<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-textarea",
    "dm-field-textarea--" + size,
    "dm-field-textarea--" + status,
    {
      "dm-field-textarea--borders": borders,
      "dm-field-textarea--disabled": disabled,
      "dm-field-textarea--focused": focused,
      "dm-field-textarea--full-width": fullWidth
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :size="size"
    class="dm-field-textarea__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="dm-field-textarea__container"
  )
    textarea(
      @blur="onFieldBlur"
      @focus="onFieldFocus"
      @keyup="onFieldKeyUp"
      :cols="cols"
      :disabled="disabled"
      :id="uuid"
      :maxlength="maxlength"
      :name="name"
      :placeholder="placeholder"
      :readonly="readOnly"
      :rows="rows"
      class="dm-field-textarea__field"
    ) {{ value }}

    base-icon(
      v-if="statusIcon"
      :name="statusIcon"
      class="dm-field-textarea__icon"
    )

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
    borders: {
      type: Boolean,
      default: true
    },
    cols: {
      type: Number,
      default: null
    },
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
    maxlength: {
      type: Number,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: null
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
    },
    value: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      // --> STATE <--

      focused: false,
      uuid: ""
    };
  },

  computed: {
    statusIcon() {
      // Return the left icon when defined as prop
      if (this.status === "error") {
        return "close";
      } else if (this.status === "success") {
        return "check";
      } else if (this.status === "warning") {
        return "warning";
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

    onContainerClick() {
      this.$el.querySelector("textarea").focus();

      this.$emit("click", this.name, this.getTextareaValue());
    },

    onFieldBlur() {
      this.focused = false;

      this.$emit("blur", this.name, this.getTextareaValue());
    },

    onFieldFocus() {
      this.focused = true;

      this.$emit("focus", this.name, this.getTextareaValue());
    },

    onFieldKeyUp() {
      this.$emit("keyup", this.name, this.getTextareaValue());
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";
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
    transition: all ease-in-out 0.2s;

    #{$c}__icon {
      position: absolute;
      right: 7px;
      bottom: 7px;
      pointer-events: none;
    }

    #{$c}__field {
      padding: 10px 15px;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      color: $white;
      resize: none;

      &::placeholder {
        color: $nepal;
      }

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
      #{$c}__field {
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
        @if ($status != "normal") {
          border-color: map-get($statusColors, $status);
          color: map-get($statusColors, $status);
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
}
</style>
