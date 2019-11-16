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
    "dm-field-toggle--" + theme,
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
      :theme="theme"
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
    value: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      const value = !this.innerValue

      this.innerValue = value

      this.$emit("change", value, this.name, event)
      this.$emit("input", value) // Synchronization for v-model
    },

    onKeypress(event) {
      if (event.code === "Space") {
        this.onClick(event)
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
$c: ".dm-field-toggle";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  #{$c}__container {
    display: flex;
    outline: 0;

    #{$c}__field {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
      border-width: 1px;
      border-style: solid;
      border-radius: 20px;
      transition: all linear 250ms;
      cursor: pointer;

      #{$c}__handle {
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

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      #{$c}__container {
        #{$c}__field {
          border-color: mdg($theme, "borders", "default", "primary");
          background-color: rgba(mdg($theme, "backgrounds", "default", "secondary"), 0.4);

          #{$c}__handle {
            background: mdg($theme, "backgrounds", "reverse", "primary");
          }

          &:hover {
            border-color: lighten(mdg($theme, "borders", "default", "primary"), 10%);
          }
        }

        #{$c}__label {
          color: mdg($theme, "fonts", "default", "primary");
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            #{$c}__field {
              @if ($status != normal) {
                border-color: mdg($theme, "statuses", $status);
              }
            }

            &--active {
              #{$c}__field {
                border-color: mdg($theme, "statuses", $status);
                background-color: rgba(mdg($theme, "statuses", $status), 0.4);
              }
            }

            &:hover {
              #{$c}__field {
                border-color: lighten(mdg($theme, "statuses", $status), 10%);
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
</style>
