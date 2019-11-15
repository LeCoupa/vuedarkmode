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
//- "dm-field-radios--" + (errors.length > 0 && dirty ? 'error' : computedStatus),
div(
  :class=`[
    "dm-field-radios",
    "dm-field-radios--" + computedStatus,
    "dm-field-radios--" + size,
    {
      "dm-field-radios--disabled": disabled,
      "dm-field-radios--full-width": fullWidth
    }
  ]`
)
  .dm-field-radios__container
    div(
      v-for="(radio, index) in radios"
      :key="radio.value"
      class="dm-field-radios__radio"
    )
      input(
        @change="onRadioChange(radio, $event)"
        :checked="radio.value === innerValue"
        :class=`[
          "dm-field-radios__field",
          {
            "js-tag-for-autofocus": index === 0
          }
        ]`
        :disabled="disabled"
        :id="radio.value"
        :name="name"
        type="radio"
      )

      field-label(
        v-if="radio.label"
        :forField="radio.value"
        :required="labelRequired"
        :size="size"
        :uppercase="false"
        class="dm-field-radios__label"
      ) {{ radio.label }}

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
    radios: {
      type: Array,
      required: true,
      validator(x) {
        return x.length > 0;
      }
    },
    value: {
      type: [Number, String],
      default: null
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onRadioChange(radio, event) {
      const value = radio.value;

      this.innerValue = value;

      this.$emit("change", value, this.name, event);
      this.$emit("input", value); // Synchronization for v-model
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
$c: ".dm-field-radios";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__container {
    margin-bottom: 20px;

    #{$c}__radio {
      display: flex;
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }

      #{$c}__field {
        position: relative;
        margin-bottom: 0;
        outline: 0;
        border: none;
        border-radius: 100%;
        transition: all linear 250ms;
        -webkit-appearance: none;
        cursor: pointer;

        &:before,
        &:after {
          position: absolute;
          display: inline-block;
          box-sizing: border-box;
          transition: all linear 250ms;
        }

        &:before {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid mdg($darkTheme, "borders", "default", "primary");
          border-radius: 100%;
          background-color: mdg(
            $darkTheme,
            "backgrounds",
            "default",
            "primary"
          );
          content: "";
        }

        &:after {
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background-color: mdg($darkTheme, "borders", "default", "primary");
          transform: translate(-50%, -50%);
          content: "";
        }

        &:hover {
          &:after {
            background-color: mdg(
              $darkTheme,
              "borders",
              "default",
              "secondary"
            );
          }
        }

        &:checked {
          &:after {
            background-color: mdg($darkTheme, "borders", "reverse", "primary");
          }
        }
      }

      #{$c}__label {
        flex: 1;
        margin-bottom: 0;
        color: mdg($darkTheme, "fonts", "default", "primary");
        font-weight: 400;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__radio {
          #{$c}__field {
            margin-right: 6px + (1px * $i);
            width: 12px + (2px * $i);
            height: 12px + (2px * $i);
          }

          #{$c}__label {
            line-height: 12px + (2px * $i);
          }
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        #{$c}__radio {
          #{$c}__field {
            &:hover {
              &:before {
                border-color: mdg($darkTheme, "statuses", $status);
              }
            }

            &:checked {
              &:before {
                border-color: mdg($darkTheme, "statuses", $status);
                background: mdg($darkTheme, "statuses", $status);
              }
            }

            &:focus {
              box-shadow: 0 0 0 2px rgba(0, 0, 0, 0),
                0 0 0 3px mdg($darkTheme, "statuses", $status);
              transition: box-shadow linear 0s;
            }
          }
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__container {
      #{$c}__radio {
        #{$c}__field,
        #{$c}__label {
          cursor: not-allowed;
        }
      }
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>
