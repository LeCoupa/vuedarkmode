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
//- "dm-field-toggle--" + (errors.length > 0 && dirty ? 'error' : computedStatus),
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
      @change="onFieldChange"
      :checked="innerValue"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      class="dm-field-toggle__field js-tag-for-autofocus"
      type="checkbox"
    )

    field-label(
      v-if="label"
      :forField="uuid"
      :required="labelRequired"
      :size="size"
      :uppercase="false"
      class="dm-field-toggle__label"
    ) {{ label }}

  //- field-message(
  //-   v-if="computedMessageLevel || (errors.length > 0 && dirty)"
  //-   :errors="errors"
  //-   :level="computedMessageLevel"
  //-   :message="computedMessageContent"
  //-   :show-errors="showErrors"
  //-   :size="size"
  //- )
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
    // --> EVENT LISTENERS <--

    onFieldChange(event) {
      const value = event.target.checked;

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
@import "src/assets/stylesheets/settings/_settings.colors.scss";
@import "src/assets/stylesheets/tools/_tools.mixins.scss";

// VARIABLES
$c: ".dm-field-toggle";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

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
        transition: all linear 250ms;
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
          transition: color 250ms linear;
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
            transition: box-shadow linear 0s;
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
