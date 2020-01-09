<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "gb-field-checkbox",
    "gb-field-checkbox--" + size,
    "gb-field-checkbox--" + computedTheme,
    "gb-field-checkbox--" + computedStatus,
    {
      "gb-field-checkbox--disabled": disabled,
      "gb-field-checkbox--full-width": fullWidth
    }
  ]`
)
  div(
    @keypress.prevent="onKeypress"
    :class=`[
      "gb-field-checkbox__container",
      "js-tag-for-autofocus",
      {
        "gb-field-checkbox__container--active": innerValue
      }
    ]`
    tabindex="0"
  )
    div(
      @click="onClick"
      class="gb-field-checkbox__field"
    )
      span.gb-field-checkbox__focuser

      span.gb-field-checkbox__tick

    field-label(
      v-if="label"
      @click="onClick"
      :required="required"
      :size="size"
      :theme="theme"
      :uppercase="false"
      class="gb-field-checkbox__label"
    ) {{ label }}

  field-message(
    v-if="fieldMessageStatus"
    :message="fieldMessageContent"
    :size="size"
    :status="fieldMessageStatus"
    :theme="theme"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import FieldSizeMixin from "../../mixins/FieldSizeMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [FieldMixin, FieldSizeMixin, ThemeMixin],

  props: {
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
$c: ".gb-field-checkbox";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  #{$c}__container {
    display: flex;
    align-items: center;
    outline: 0;

    #{$c}__field {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-width: 1px;
      border-style: solid;
      border-radius: 3px;
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
        border-radius: 5px;
        opacity: 0;
        transition: all linear 250ms;
      }

      #{$c}__tick {
        flex: 0 0 auto;
        margin-top: -2px;
        border-width: 2px;
        border-style: solid;
        border-top: none;
        border-left: none;
        transition: all linear 250ms;
        transform: rotate(45deg);
      }
    }

    #{$c}__label {
      flex: 1;
      margin-top: 2px;
      margin-bottom: 0;
      font-weight: 400;
    }

    &:focus {
      #{$c}__field {
        #{$c}__focuser {
          opacity: 1;
        }
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
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      #{$c}__container {
        #{$c}__field {
          background-color: mdg($theme, "backgrounds", "default", "primary");

          #{$c}__tick {
            border-color: mdg($theme, "backgrounds", "default", "primary");
          }
        }

        #{$c}__label {
          color: mdg($theme, "fonts", "default", "primary");
        }

        &--active {
          #{$c}__field {
            #{$c}__tick {
              border-color: mdg($theme, "colors", "white");
            }
          }
        }
      }

      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          #{$c}__container {
            #{$c}__field {
              border-color: mdg($theme, "statuses", $status);
            }

            &:hover {
              #{$c}__field {
                @if (map-get($theme, "name") == "dark") {
                  border-color: lighten(mdg($theme, "statuses", $status), 10%);
                } @else if (map-get($theme, "name") == "light") {
                  border-color: darken(mdg($theme, "statuses", $status), 10%);
                }
              }
            }

            &:active {
              #{$c}__field {
                border-color: mdg($theme, "statuses", $status);
              }
            }

            &:focus {
              #{$c}__field {
                #{$c}__focuser {
                  border-color: mdg($theme, "statuses", $status);
                }
              }
            }

            &--active {
              $value: if($status == "normal", "active", $status);

              #{$c}__field {
                border-color: mdg($theme, "statuses", $value);

                @if (map-get($theme, "name") == "dark") {
                  background-color: rgba(mdg($theme, "statuses", $value), 0.4);
                } @else {
                  background-color: rgba(mdg($theme, "statuses", $value), 0.9);
                }
              }

              @if ($status == "normal") {
                &:hover {
                  #{$c}__field {
                    @if (map-get($theme, "name") == "dark") {
                      border-color: lighten(mdg($theme, "statuses", "active"), 10%);
                    } @else if (map-get($theme, "name") == "light") {
                      border-color: darken(mdg($theme, "statuses", "active"), 10%);
                    }
                  }
                }

                &:focus {
                  #{$c}__field {
                    #{$c}__focuser {
                      border-color: mdg($theme, "statuses", "active");
                    }
                  }
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
