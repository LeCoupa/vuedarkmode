<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-base-textarea',
    'c-base-textarea--' + size,
    'c-base-textarea--' + computedStatus
  ]`
)
  base-label(
    v-if="label"
    :forField="id"
    :size="size"
    class="c-base-textarea__label"
  ) {{ label }}

  textarea(
    @blur="onTextareaBlur"
    @focus="onTextareaFocus"
    @keyup="onTextareaKeyUp"
    :cols="cols"
    :disabled="disabled"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    class="c-base-textarea__field"
  ) {{ value }}

  base-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-base-textarea__description"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
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
    id: {
      type: String,
      required: true
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
      focused: false
    };
  },

  computed: {
    computedStatus() {
      // Return the status when defined as prop
      if (this.focused) {
        return "focused";
      }

      return this.status;
    }
  },

  methods: {
    getTextareaValue() {
      return this.$el.querySelector("textarea").value || "";
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
$c: ".c-base-textarea";
$sizes: mini, small, default, medium, large;
$statuses: error, focused, success, warning;

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;

  #{$c}__field {
    box-sizing: border-box;
    padding: 10px 15px;
    border: 1px solid $oxford-blue;
    border-radius: 6px;
    background-color: $ebony-clay-2;
    color: $white;
    transition: border ease-in-out 0.2s;

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

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__field {
        border-radius: 4px + (1px * $i);
        font-size: 12px + (1px * $i);
        min-height: 60px + (20px * $i);
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__field {
        border-color: map-get($statusColors, $status);
      }
    }
  }
}
</style>
