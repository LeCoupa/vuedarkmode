<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
//- validation-provider(
//-   v-slot="{ dirty, errors }"
//-   :name="rulesName || name"
//-   :rules="rules"
//-   :vid="rulesVid"
//-   ref="validationProvider"
//-   tag="div"
//- )
//- "dm-field-checkbox--" + (errors.length > 0 && dirty ? 'error' : computedStatus),
div(
  :class=`[
    "dm-field-checkbox",
    "dm-field-checkbox--" + computedStatus,
    "dm-field-checkbox--" + size,
    {
      "dm-field-checkbox--disabled": disabled,
      "dm-field-checkbox--full-width": fullWidth
    }
  ]`
)
  .dm-field-checkbox__container
    div(
      @click="onClick"
      @keypress.prevent="onKeypress"
      :class=`[
        "dm-field-checkbox__field",
        "js-tag-for-autofocus",
        {
          "dm-field-checkbox__field--checked": innerValue
        }
      ]`
      tabindex="0"
    )
      span.dm-field-checkbox__tick

    field-label(
      v-if="label"
      @click="onClick"
      :required="labelRequired"
      :size="size"
      :uppercase="false"
      class="dm-field-checkbox__label"
    ) {{ label }}

  //-   v-if="computedMessageStatus || (errors.length > 0 && dirty)"
  //-   :errors="errors"
  field-message(
    v-if="computedMessageStatus"
    :message="computedMessageContent"
    :show-errors="showErrors"
    :size="size"
    :status="computedMessageStatus"
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
    fullWidth: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    // --> HELPERS <--

    focusCheckbox() {
      const input = this.$el.querySelector(".js-tag-for-autofocus");

      input.focus();
    },

    // --> EVENT LISTENERS <--

    onClick(event) {
      const value = !this.innerValue;

      this.innerValue = value;

      this.focusCheckbox();

      this.$emit("change", value, this.name, event);
      this.$emit("input", value); // Synchronization for v-model
    },

    onKeypress(event) {
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
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".dm-field-checkbox";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__container {
    display: flex;
    align-items: center;

    #{$c}__field {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 0;
      border: 1px solid mdg($dark, "borders", "default", "primary");
      border-radius: 3px;
      background-color: mdg($dark, "backgrounds", "default", "primary");
      transition: all linear 250ms;
      cursor: pointer;

      #{$c}__tick {
        flex: 0 0 auto;
        margin-top: -2px;
        border: 2px solid mdg($dark, "backgrounds", "default", "primary");
        border-top: none;
        border-left: none;
        transition: all linear 250ms;
        transform: rotate(45deg);
      }

      &--checked {
        #{$c}__tick {
          border-color: mdg($dark, "borders", "reverse", "primary");
        }
      }
    }

    #{$c}__label {
      flex: 1;
      margin-bottom: 0;
      color: mdg($dark, "fonts", "default", "primary");
      font-weight: 400;
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__field {
          margin-right: 6px + (1px * $i);
          width: 12px + (2px * $i);
          height: 12px + (2px * $i);

          #{$c}__tick {
            @if ($size == "mini") {
              width: 3px;
              height: 6px;
            } @else if ($size == "small" or $size == "default") {
              width: 4px;
              height: 8px;
            } @else if ($size == "medium" or $size == "large") {
              width: 5px;
              height: 10px;
            }
          }
        }

        #{$c}__label {
          line-height: 12px + (2px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        #{$c}__field {
          &--checked {
            border-color: mdg($dark, "statuses", $status);
            background: mdg($dark, "statuses", $status);
          }

          &:focus {
            box-shadow: 0
                0
                0
                2px
                mdg($dark, "backgrounds", "default", "primary"),
              0 0 0 3px mdg($dark, "statuses", $status);
            transition: box-shadow linear 0s;
          }
        }

        &:hover {
          #{$c}__field {
            border-color: mdg($dark, "statuses", $status);
          }
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__container {
      #{$c}__field,
      #{$c}__label {
        pointer-events: none;
        cursor: not-allowed;
      }
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>
