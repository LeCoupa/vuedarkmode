<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "gb-field-radios",
    "gb-field-radios--" + size,
    "gb-field-radios--" + computedTheme,
    "gb-field-radios--" + computedStatus,
    {
      "gb-field-radios--disabled": disabled,
      "gb-field-radios--full-width": fullWidth
    }
  ]`
)
  .gb-field-radios__container
    div(
      v-for="(radio, index) in radios"
      @keypress.prevent="onKeypress(radio, $event)"
      :class=`[
        "gb-field-radios__radio",
        {
          "js-tag-for-autofocus": index === 0,
          "gb-field-radios__radio--active": radio.value === innerValue
        }
      ]`
      :key="radio.value"
      tabindex="0"
    )
      div(
        @click="onClick(radio, $event)"
        class="gb-field-radios__field"
      )
        span.gb-field-radios__focuser

        span.gb-field-radios__dot

      field-label(
        v-if="radio.label"
        @click="onClick(radio, $event)"
        :required="required"
        :size="size"
        :theme="theme"
        :uppercase="false"
        class="gb-field-radios__label"
      ) {{ radio.label }}

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
$c: ".gb-field-radios";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  text-align: left;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  #{$c}__container {
    margin-bottom: 20px;

    #{$c}__radio {
      display: flex;
      outline: 0;

      &:last-of-type {
        margin-bottom: 0;
      }

      #{$c}__field {
        position: relative;
        border-width: 1px;
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

        #{$c}__dot {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-block;
          border-radius: 100%;
          transition: all linear 250ms;
          transform: translate(-50%, -50%);
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
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      #{$c}__container {
        #{$c}__radio {
          #{$c}__field {
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
                background-color: mdg($theme, "colors", "white");
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
}
</style>
