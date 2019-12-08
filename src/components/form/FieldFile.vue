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
//- "gb-field-file--" + (errors.length > 0 && dirty ? 'error' : computedStatus),
div(
  :class=`[
    "gb-field-file",
    "gb-field-file--" + computedStatus,
    "gb-field-file--" + size,
    "gb-field-file--" + computedTheme,
    {
      "gb-field-file--disabled": disabled,
      "gb-field-file--full-width": fullWidth
    }
  ]`
)
  .gb-field-file__container
    div(
      v-if="label"
      class="gb-field-file__information"
    )
      field-label(
        :for-field="uuid"
        :required="labelRequired"
        :size="size"
        :theme="theme"
        class="gb-field-file__label"
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
        class="gb-field-file__message"
      )

    label(
      @keypress.prevent="onLabelKeypress"
      :for="uuid"
      class="gb-field-file__upload js-tag-for-autofocus"
      tabindex="0"
    )
      span.gb-field-file__focuser

      base-icon(
        name="cloud_upload"
        class="gb-field-file__icon"
      )

    input(
      @change="onFieldChange"
      :disabled="disabled"
      :id="uuid"
      :multiple="multiple"
      :name="name"
      class="gb-field-file__field"
      type="file"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROEJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [FieldMixin, ThemeMixin],

  props: {
    fullWidth: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange(event) {
      this.$emit("change", this.name, event)
    },

    onLabelKeypress(event) {
      if (event.code === "Space") {
        this.$el.querySelector("input[type='file']").click()
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
$c: ".gb-field-file";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  @include no-tap-highlight-color;

  #{$c}__container {
    display: flex;
    align-items: center;

    #{$c}__information {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-right: 20px;
      text-align: left;

      #{$c}__label {
        margin-bottom: 6px;
      }

      #{$c}__message {
        margin-top: 0;
        user-select: none;
      }
    }

    #{$c}__upload {
      position: relative;
      flex: 0 0 auto;
      box-sizing: border-box;
      outline: 0;
      border-width: 2px;
      border-style: solid;
      border-radius: 100%;
      transition: all linear 250ms;
      cursor: pointer;

      #{$c}__focuser {
        position: absolute;
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        border-radius: 100%;
        opacity: 0;
        transition: all linear 250ms;
      }

      #{$c}__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1px;
        transform: translate(-50%, -50%);
      }

      &:focus {
        #{$c}__focuser {
          opacity: 1;
        }
      }
    }

    #{$c}__field {
      display: none;
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__information {
        #{$c}__message {
          font-size: 10px + (1px * $i);
        }
      }

      #{$c}__upload {
        width: 40px + (5px * $i);
        height: 40px + (5px * $i);

        #{$c}__icon {
          // Will override the font-size set in style attribute
          font-size: 18px + (2px * $i) !important;
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__container {
      #{$c}__upload {
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
    $themeName: map-get($theme, "name");

    &--#{themeName} {
      #{$c}__container {
        #{$c}__information {
          #{$c}__label {
            color: mdg($theme, "fonts", "default", "primary");
          }

          #{$c}__message {
            color: mdg($theme, "fonts", "default", "secondary");
          }
        }

        #{$c}__upload {
          background-color: mdg($theme, "backgrounds", "default", "primary");
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            #{$c}__upload {
              border-color: mdg($theme, "statuses", $status);

              &:hover {
                @if (map-get($theme, "name") == "dark") {
                  border-color: lighten(mdg($theme, "statuses", $status), 10%);
                } @else if (map-get($theme, "name") == "light") {
                  border-color: darken(mdg($theme, "statuses", $status), 10%);
                }
              }

              &:active {
                border-color: mdg($theme, "statuses", $status);
              }

              &:focus {
                #{$c}__focuser {
                  border-color: mdg($theme, "statuses", $status);
                }
              }
            }
          }
        }
      }

      // --> BOOLEANS <--

      &#{$c}--disabled {
        #{$c}__container {
          #{$c}__upload {
            &:hover {
              border-color: mdg($theme, "colors", "red");
            }
          }
        }
      }
    }
  }
}
</style>
