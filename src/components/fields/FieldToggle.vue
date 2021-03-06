<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "gb-field-toggle",
    "gb-field-toggle--" + size,
    "gb-field-toggle--" + computedTheme,
    "gb-field-toggle--" + computedStatus,
    "gb-field-toggle--label-" + labelPosition,
    {
      "gb-field-toggle--active": innerValue,
      "gb-field-toggle--disabled": disabled,
      "gb-field-toggle--full-width": fullWidth,
      "gb-field-toggle--inactive": !innerValue
    }
  ]`
)
  div(
    @keypress.prevent="onKeypress"
    class="gb-field-toggle__container js-tag-for-autofocus"
    tabindex="0"
  )
    div(
      @click="onClick"
      class="gb-field-toggle__field"
    )
      span.gb-field-toggle__focuser

      span.gb-field-toggle__handle

    field-label(
      v-if="label"
      @click="onClick"
      :required="required"
      :size="size"
      :theme="theme"
      :uppercase="labelPosition === 'top'"
      class="gb-field-toggle__label"
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
    labelPosition: {
      type: String,
      default: "right",
      validator(x) {
        return ["right", "top"].includes(x)
      }
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
$c: ".gb-field-toggle";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  #{$c}__container {
    display: flex;
    outline: 0;

    #{$c}__field {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
      border-width: 1px;
      border-style: solid;
      border-radius: 20px;
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
        border-radius: 20px;
        opacity: 0;
        transition: all linear 250ms;
      }

      #{$c}__handle {
        flex: 0 0 auto;
        border-radius: 100%;
        transition: all linear 250ms;
      }
    }

    &:focus {
      #{$c}__field {
        #{$c}__focuser {
          opacity: 1;
        }
      }
    }
  }

  // --> LABEL POSITIONS <--

  &--label-right {
    #{$c}__container {
      #{$c}__label {
        flex: 1;
        margin-top: 4px;
        margin-bottom: 0;
        font-weight: 400;
        opacity: 0.8;
        transition: opacity 250ms linear;
      }
    }

    &#{$c}--active {
      #{$c}__container {
        #{$c}__label {
          opacity: 1;
        }
      }
    }
  }

  &--label-top {
    #{$c}__container {
      flex-direction: column;

      #{$c}__field {
        order: 1;
      }

      #{$c}__label {
        order: 0;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__field {
          width: (20px + (2px * $i)) * 2;
          height: 20px + (2px * $i);

          #{$c}__handle {
            width: 12px + (1px * $i);
            height: 12px + (1px * $i);
          }
        }
      }

      &#{$c}--active {
        #{$c}__container {
          #{$c}__field {
            #{$c}__handle {
              box-shadow: none !important;
              transform: translateX(10px + (1px * $i));
            }
          }
        }
      }

      &#{$c}--inactive {
        #{$c}__container {
          #{$c}__field {
            #{$c}__handle {
              transform: translateX(-10px - (1px * $i));
            }
          }
        }
      }

      &#{$c}--label-right {
        #{$c}__container {
          #{$c}__label {
            margin-left: 8px + (1px * $i);
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
          @if (map-get($theme, "name") == "dark") {
            background-color: rgba(mdg($theme, "backgrounds", "default", "secondary"), 0.4);
          } @else {
            background-color: rgba(mdg($theme, "backgrounds", "default", "secondary"), 0.9);
          }

          #{$c}__handle {
            background: mdg($theme, "colors", "white");
            box-shadow: 0 1px 5px 0 mdg($theme, "shadows", "default", "primary");
          }
        }
      }

      &#{$c}--label-right {
        #{$c}__container {
          #{$c}__label {
            color: mdg($theme, "fonts", "default", "primary");
          }
        }
      }

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
          }

          &#{$c}--active {
            $value: if($status == "normal", "active", $status);

            #{$c}__container {
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

      &#{$c}--active {
        #{$c}__container {
          #{$c}__field {
            #{$c}__handle {
              background: mdg($theme, "colors", "white");
            }
          }
        }
      }
    }
  }
}
</style>
