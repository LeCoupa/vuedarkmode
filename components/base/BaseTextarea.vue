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
    :disabled="disabled"
    :id="id"
    :placeholder="placeholder"
    class="c-base-textarea__field"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
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
    size: {
      type: String,
      default: "default"
    },
    status: {
      type: String,
      default: "normal"
    },
    value: {
      type: [String, Number],
      default: null
    }
  },

  data() {
    return {
      // --> STATE <--
      focus: false
    };
  },

  computed: {
    computedStatus() {
      // Return the status when defined as prop
      if (this.focus) {
        return "focus";
      }

      return this.status;
    }
  },

  methods: {
    getTextareaValue() {
      return this.$el.querySelector("textarea").value || "";
    },

    onTextareaBlur() {
      this.focus = false;

      this.$emit("blur", this.id, this.getTextareaValue());
    },

    onTextareaKeyUp() {
      this.$emit("keyup", this.id, this.getTextareaValue());
    },

    onTextareaFocus() {
      this.focus = true;

      this.$emit("focus", this.id, this.getTextareaValue());
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

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;

  #{$c}__field {
    box-sizing: border-box;
    padding: 0 15px;
    border: 1px solid $oxford-blue;
    border-radius: 6px;
    background-color: $ebony-clay-2;
    color: $white;
    transition: all ease-in-out 0.2s;

    &::placeholder {
      color: $nepal;
    }

    &:focus {
      outline: none;
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        height: 34px + (4px * $i);
        border-radius: 4px + (1px * $i);

        #{$c}__icon {
          // Will override the font-size set in style attribute
          font-size: 16px + (1px * $i) !important;
        }

        #{$c}__field {
          font-size: 12px + (1px * $i);
        }
      }
    }
  }
}
</style>
