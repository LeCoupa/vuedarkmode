<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-field-textarea',
    'c-field-textarea--' + size,
    'c-field-textarea--' + status,
    {
      'c-field-textarea--block': block,
      'c-field-textarea--borders': borders,
      'c-field-textarea--focused': focused,
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :size="size"
    class="c-field-textarea__label"
  ) {{ label }}

  div(
    @click="onContainerClick"
    class="c-field-textarea__container"
  )
    textarea(
      @blur="onTextareaBlur"
      @focus="onTextareaFocus"
      @keyup="onTextareaKeyUp"
      :cols="cols"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
      class="c-field-textarea__field"
    ) {{ value }}

    base-icon(
      v-if="statusIcon"
      :name="statusIcon"
      class="c-field-textarea__icon"
    )

  field-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-field-textarea__description"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import { generateUUID } from "@/helpers/helpers";
import FieldDescription from "@/components/form/FieldDescription";
import FieldLabel from "@/components/form/FieldLabel";

export default {
  components: {
    FieldDescription,
    FieldLabel
  },

  props: {
    block: {
      type: Boolean,
      default: true
    },
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
    label: {
      type: String,
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
    rows: {
      type: Number,
      default: null
    },
    size: {
      type: String,
      default: "default"
    },
    status: {
      type: String,
      default: "normal"
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
    getTextareaValue() {
      return this.$el.querySelector("textarea").value || "";
    },

    onContainerClick() {
      this.$el.querySelector("textarea").focus();

      this.$emit("click", this.name, this.getTextareaValue());
    },

    onTextareaBlur() {
      this.focused = false;

      this.$emit("blur", this.name, this.getTextareaValue());
    },

    onTextareaKeyUp() {
      this.$emit("keyup", this.name, this.getTextareaValue());
    },

    onTextareaFocus() {
      this.focused = true;

      this.$emit("focus", this.name, this.getTextareaValue());
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-field-textarea";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;

  #{$c}__container {
    position: relative;
    display: flex;
    transition: all ease-in-out 0.2s;

    #{$c}__icon {
      position: absolute;
      right: 8px;
      bottom: 8px;
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

  &--block {
    width: 100%;
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
}
</style>
