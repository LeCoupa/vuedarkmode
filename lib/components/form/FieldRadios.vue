<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
validation-provider(
  v-slot="{ errors }"
  :name="rulesName || name"
  :rules="rules"
  :vid="rulesVid"
  tag="div"
)
  div(
    :class=`[
      "dm-field-radios",
      "dm-field-radios--" + errors.length > 0 ? 'error' : computedStatus,
      "dm-field-radios--" + size,
      {
        "dm-field-radios--disabled": disabled,
        "dm-field-radios--full-width": fullWidth
      }
    ]`
  )
    .dm-field-radios__container
      div(
        v-for="radio in radios"
        class="dm-field-radios__fields"
      )
        input(
          @change="onFieldChange(radio, $event)"
          :checked="radio.value === currentValue"
          :class=`[
            "dm-field-radios__field",
            {
              "js-tag-for-autofocus": index === 0
            }
          ]`
          :disabled="disabled"
          :id="radio.id"
          :name="name"
          :value="radio.value"
          type="radio"
        )

        field-label(
          v-if="radio.label"
          :forField="radio.id"
          :required="labelRequired"
          :size="size"
          :uppercase="false"
          class="dm-field-radios__label"
        ) {{ radio.label }}

    field-message(
      v-if="computedMessageLevel || errors.length > 0"
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
// PROJECT: COMPONENTS
import FieldLabel from "./FieldLabel.vue";

// PROJECT: MIXINS
import FieldCommonMixin from "../../mixins/FieldCommonMixin.js";
import FieldMessageMixin from "../../mixins/FieldMessageMixin.js";
import FieldValidationMixin from "../../mixins/FieldValidationMixin.js";

export default {
  components: {
    FieldLabel
  },

  mixins: [FieldCommonMixin, FieldMessageMixin, FieldValidationMixin],

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

  data() {
    return {
      // --> STATE <--

      currentValue: null
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        if (value) {
          // When a value prop is defined set the radio as active
          this.currentValue = value;
        } else {
          // Or set the first radio as active
          this.currentValue = this.radios[0].value;
        }
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange(radio, event) {
      this.currentValue = radio.value;

      this.$emit("change", radio.value, radio.id, this.name, event);
      this.$emit("input", radio.value); // Synchronization for v-model
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
@import "assets/stylesheets/tools/_tools.mixins.scss";

// VARIABLES
$c: ".dm-field-radios";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  @include no-tap-highlight-color;

  #{$c}__container {
    margin-bottom: 20px;

    #{$c}__fields {
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
          border: 1px solid $regent-st-blue;
          border-radius: 100%;
          background-color: $white;
          content: "";
        }

        &:after {
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background-color: $white;
          transform: translate(-50%, -50%);
          content: "";
        }

        &:hover {
          &:after {
            background-color: $oxford-blue;
          }
        }

        &:checked {
          &:after {
            background-color: $white;
          }
        }
      }

      #{$c}__label {
        flex: 1;
        margin-bottom: 0;
        color: $white;
        font-weight: 400;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__fields {
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
        #{$c}__fields {
          #{$c}__field {
            &:hover {
              &:before {
                border-color: map-get($statusColors, $status);
              }
            }

            &:checked {
              &:before {
                border-color: map-get($statusColors, $status);
                background: map-get($statusColors, $status);
              }
            }

            &:focus {
              box-shadow: 0 0 0 2px $mirage,
                0 0 0 3px map-get($statusColors, $status);
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
      #{$c}__fields {
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
