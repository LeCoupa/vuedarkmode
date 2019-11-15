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
  div(
    @keypress.prevent="onKeypress"
    :class=`[
      "dm-field-toggle__container",
      "js-tag-for-autofocus",
      {
        "dm-field-toggle__container--active": innerValue,
        "dm-field-toggle__container--inactive": !innerValue
      }
    ]`
    tabindex="0"
  )
    div(
      @click="onClick"
      class="dm-field-toggle__field"
    )
      span.dm-field-toggle__handle

    field-label(
      v-if="label"
      @click="onClick"
      :required="labelRequired"
      :size="size"
      :uppercase="false"
      class="dm-field-toggle__label"
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
    // --> EVENT LISTENERS <--

    onClick(event) {
      const value = !this.innerValue;

      this.innerValue = value;

      this.$emit("change", value, this.name, event);
      this.$emit("input", value); // Synchronization for v-model
    },

    onKeypress(event) {
      if (event.code === "Space") {
        this.onClick(event);
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
    outline: 0;

    #{$c}__field {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
      border: 1px solid mdg($dark, "borders", "default", "primary");
      border-radius: 20px;
      background-color: rgba(
        mdg($dark, "backgrounds", "default", "secondary"),
        0.4
      );
      transition: all linear 250ms;
      cursor: pointer;

      #{$c}__handle {
        flex: 0 0 auto;
        border-radius: 100%;
        background: mdg($dark, "backgrounds", "reverse", "primary");
        transition: all linear 250ms;
      }

      &:hover {
        border-color: lighten(mdg($dark, "borders", "default", "primary"), 10%);
      }
    }

    #{$c}__label {
      flex: 1;
      margin-top: 1px;
      margin-bottom: 0;
      color: mdg($dark, "fonts", "default", "primary");
      font-weight: 400;
      opacity: 0.8;
      transition: opacity 250ms linear;
    }

    &--active {
      #{$c}__label {
        opacity: 1;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__field {
          margin-right: 6px + (1px * $i);
          width: (16px + (2px * $i)) * 2;
          height: 16px + (2px * $i);

          #{$c}__handle {
            width: 10px + (1px * $i);
            height: 10px + (1px * $i);
          }
        }

        &--inactive {
          #{$c}__field {
            #{$c}__handle {
              transform: translateX(-8px - (1px * $i));
            }
          }
        }

        &--active {
          #{$c}__field {
            #{$c}__handle {
              transform: translateX(8px + (1px * $i));
            }
          }
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
            border-color: mdg($dark, "statuses", $status);
          }
        }

        &--active {
          #{$c}__field {
            border-color: mdg($dark, "statuses", $status);
            background-color: rgba(mdg($dark, "statuses", $status), 0.4);
          }
        }

        &:hover {
          #{$c}__field {
            border-color: lighten(mdg($dark, "statuses", $status), 10%);
          }
        }

        &:focus {
          #{$c}__field {
            box-shadow: 0
                0
                0
                2px
                mdg($dark, "backgrounds", "default", "primary"),
              0 0 0 3px mdg($dark, "statuses", $status);
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
