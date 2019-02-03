<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-toggle",
    "dm-field-toggle--" + computedStatus,
    "dm-field-toggle--" + size,
    {
      "dm-field-toggle--disabled": disabled,
      "dm-field-toggle--full-width": fullWidth
    }
  ]`
)
  .dm-field-toggle__container
    input(
      v-validate="validation"
      @change="onFieldChange"
      :checked="currentValue"
      :data-vv-as="validationVvAs"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      :ref="validationRef"
      class="dm-field-toggle__field"
      type="checkbox"
    )
    field-label(
      v-if="label"
      :forField="uuid"
      :required="validation && validation.includes('required')"
      :size="size"
      :uppercase="false"
      class="dm-field-toggle__label"
    ) {{ label }}

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
// PROJECT
import { generateUUID } from "../../helpers/helpers.js";
import FieldLabel from "./FieldLabel.vue";
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
    label: {
      type: String,
      default: null
    },
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // --> STATE <--

      currentValue: null,
      uuid: ""
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.currentValue = value;
      }
    }
  },

  mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange(event) {
      this.currentValue = event.target.checked;

      this.$emit("change", event.target.checked, this.name, event);

      // Synchronization for v-model
      this.$emit("input", event.target.checked);
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
$c: ".dm-field-toggle";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__container {
    display: flex;

    #{$c}__field {
      position: relative;
      margin-bottom: 0;
      outline: 0;
      border: none;
      border-radius: 100px;
      -webkit-appearance: none;
      cursor: pointer;

      &:before,
      &:after {
        position: absolute;
        display: inline-block;
        box-sizing: border-box;
        transition: all ease-in-out 250ms;
      }

      &:before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid $oxford-blue;
        border-radius: 20px;
        background-color: rgba($ebony-clay-2, 0.4);
        content: "";
      }

      &:after {
        top: 4px;
        right: initial;
        border-radius: 100%;
        background: $white;
        transform: translateX(4px);
        content: "";
      }

      &:hover {
        &:before {
          border-color: lighten($oxford-blue, 10%);
        }
      }

      &:not(:checked) {
        + #{$c}__label {
          color: $regent-st-blue;
          transition: color 250ms ease-in-out;
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

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__field {
          margin-right: 6px + (1px * $i);
          width: (18px + (2px * $i)) * 2;
          height: 18px + (2px * $i);

          &:after {
            width: 10px + (2px * $i);
            height: 10px + (2px * $i);
          }

          &:checked {
            &:after {
              transform: translateX(
                ((18px + (2px * $i)) * 2) - (10px + (2px * $i) + 4px)
              );
            }
          }
        }

        #{$c}__label {
          line-height: 18px + (2px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        #{$c}__field {
          @if ($status != normal) {
            &:before {
              border-color: map-get($statusColors, $status);
            }
          }

          &:checked {
            &:before {
              border-color: map-get($statusColors, $status);
              background-color: rgba(map-get($statusColors, $status), 0.4);
            }
          }

          &:hover {
            &:before {
              border-color: lighten(map-get($statusColors, $status), 10%);
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

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__container {
      #{$c}__field,
      #{$c}__label {
        cursor: not-allowed;
      }
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>
