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
    "dm-field-radios--" + theme,
    {
      "dm-field-radios--disabled": disabled,
      "dm-field-radios--full-width": fullWidth
    }
  ]`
)
  .dm-field-radios__container
    div(
      v-for="(radio, index) in radios"
      @keypress.prevent="onKeypress(radio, $event)"
      :class=`[
        "dm-field-radios__radio",
        {
          "js-tag-for-autofocus": index === 0,
          "dm-field-radios__radio--active": radio.value === innerValue
        }
      ]`
      :key="radio.value"
      tabindex="0"
    )
      div(
        @click="onClick(radio, $event)"
        class="dm-field-radios__field"
      )
        span.dm-field-radios__dot

      field-label(
        v-if="radio.label"
        @click="onClick(radio, $event)"
        :required="labelRequired"
        :size="size"
        :theme="theme"
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
    :theme="theme"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [FieldMixin, ThemeMixin],

  props: {
    fullWidth: {
      type: Boolean,
      default: true
    },
    radios: {
      type: Array,
      required: true,
      validator(x) {
        return x.length > 0
      }
    },
    value: {
      type: [Number, String],
      default: null
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(radio, event) {
      const value = radio.value

      if (value !== this.innerValue) {
        this.innerValue = value

        this.$emit("change", value, this.name, event)
        this.$emit("input", value) // Synchronization for v-model
      }
    },

    onKeypress(radio, event) {
      if (event.code === "Space") {
        this.onClick(radio, event)
      }
    }
  }
}
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
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  #{$c}__container {
    margin-bottom: 20px;

    #{$c}__radio {
      display: flex;
      outline: 0;

      &:last-of-type {
        margin-bottom: 0;
      }

      #{$c}__field {
        display: flex;
        align-items: center;
        justify-content: center;
        border-width: 1px;
        border-style: solid;
        border-radius: 100%;
        transition: all linear 250ms;
        cursor: pointer;

        #{$c}__dot {
          flex: 0 0 auto;
          border-radius: 100%;
          transition: all linear 250ms;
        }
      }

      #{$c}__label {
        flex: 1;
        margin-top: 2px;
        margin-bottom: 0;
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
          margin-bottom: 16px + (1px * $i);

          #{$c}__field {
            margin-right: 6px + (1px * $i);
            width: 12px + (2px * $i);
            height: 12px + (2px * $i);

            #{$c}__dot {
              @if ($size == "mini") {
                width: 4px;
                height: 4px;
              } @else if ($size == "small" or $size == "default") {
                width: 5px;
                height: 5px;
              } @else if ($size == "medium" or $size == "large") {
                width: 6px;
                height: 6px;
              }
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
          pointer-events: none;
          cursor: not-allowed;
        }
      }
    }
  }

  &--full-width {
    width: 100%;
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      #{$c}__container {
        #{$c}__radio {
          #{$c}__field {
            border-color: mdg($theme, "borders", "default", "primary");
            background-color: mdg($theme, "backgrounds", "default", "primary");

            #{$c}__dot {
              background-color: mdg($theme, "backgrounds", "default", "primary");
            }
          }

          #{$c}__label {
            color: mdg($theme, "fonts", "default", "primary");
          }

          &--active {
            #{$c}__field {
              #{$c}__dot {
                background-color: mdg($theme, "backgrounds", "reverse", "primary");
              }
            }
          }
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            #{$c}__radio {
              &--active {
                #{$c}__field {
                  border-color: mdg($theme, "statuses", $status);
                  background: mdg($theme, "statuses", $status);
                }
              }

              &:hover {
                #{$c}__field {
                  border-color: mdg($theme, "statuses", $status);
                }
              }

              &:focus {
                #{$c}__field {
                  box-shadow: 0 0 0 2px mdg($theme, "backgrounds", "default", "primary"),
                    0 0 0 3px mdg($theme, "statuses", $status);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
