<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-radios",
    "dm-field-radios--" + size,
    "dm-field-radios--" + status,
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
        v-validate="validation"
        @change="onFieldChange(radio, $event)"
        :checked="radio.value === currentValue"
        :disabled="disabled"
        :id="radio.id"
        :name="name"
        :required="required"
        :value="radio.value"
        class="dm-field-radios__field"
        type="radio"
      )
      field-label(
        v-if="radio.label"
        :forField="radio.id"
        :required="validation && validation.includes('required')"
        :size="size"
        :uppercase="false"
        class="dm-field-radios__label"
      ) {{ radio.label }}

  field-error(
    v-if="errors.first(name)"
    :message="errors.first(name)"
    :size="size"
  )
  field-description(
    v-else-if="description"
    :description="description"
    :size="size"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldDescription from "./FieldDescription.vue";
import FieldError from "./FieldError.vue";
import FieldLabel from "./FieldLabel.vue";

export default {
  components: {
    FieldDescription,
    FieldError,
    FieldLabel
  },

  props: {
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
    name: {
      type: String,
      required: true
    },
    radios: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
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
    validation: {
      type: String,
      default: null
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
    value: function(value) {
      this.currentValue = value;
    }
  },

  created() {
    if (this.value) {
      // When a value prop is defined set the radio as active
      this.currentValue = this.value;
    } else {
      // Or set the first radio as active
      this.currentValue = this.radios[0].value;
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange(radio, event) {
      this.currentValue = radio.value;

      this.$emit("change", radio.value, radio.id, this.name, event);

      // Synchronization for v-model
      this.$emit("input", radio.value);
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
$c: ".dm-field-radios";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

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
        transition: all ease-in-out 200ms;
        -webkit-appearance: none;
        cursor: pointer;

        &:before,
        &:after {
          position: absolute;
          display: inline-block;
          box-sizing: border-box;
          transition: all ease-in-out 200ms;
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
              transition: box-shadow ease-in-out 0s;
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
