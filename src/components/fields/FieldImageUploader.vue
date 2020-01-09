<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  @dragenter="onDragEnter"
  :class=`[
    "gb-field-image-uploader",
    "gb-field-image-uploader--" + size,
    "gb-field-image-uploader--" + computedTheme,
    "gb-field-image-uploader--" + computedStatus,
    {
      "gb-field-image-uploader--disabled": disabled,
      "gb-field-image-uploader--dragging": dragging || dragError,
      "gb-field-image-uploader--full-width": fullWidth
    }
  ]`
)
  .gb-field-image-uploader__container
    div(
      v-if="label"
      class="gb-field-image-uploader__information"
    )
      field-label(
        :for-field="uuid"
        :required="required"
        :size="size"
        :theme="theme"
        class="gb-field-image-uploader__label"
      ) {{ label }}

      field-message(
        v-if="fieldMessageStatus"
        :message="fieldMessageContent"
        :size="size"
        :status="fieldMessageStatus"
        :theme="theme"
        class="gb-field-image-uploader__message"
      )

    label(
      @keypress.prevent="onLabelKeypress"
      :for="uuid"
      class="gb-field-image-uploader__upload js-tag-for-autofocus"
      tabindex="0"
    )
      span.gb-field-image-uploader__focuser

      base-icon(
        name="cloud_upload"
        class="gb-field-image-uploader__icon"
      )

    input(
      @change="onFieldChange"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      accept="image/*"
      class="gb-field-image-uploader__field"
      type="file"
    )

  div(
    v-if="hasPreview && innerValue"
    class="gb-field-image-uploader__preview"
  )
    div(
      class="gb-field-image-uploader__image"
      :style=`{
        backgroundImage: innerValue ? "url(" + innerValue + ")" : null
      }`
    )

    base-button(
      v-if="clearable"
      @confirm="onRemoveImage"
      :color="theme === 'dark' ? 'white' : 'black'"
      :confirmation="true"
      :full-width="true"
      :reverse="true"
      class="gb-field-image-uploader__remove"
      left-icon="delete_outline"
      size="mini"
    ) Remove image


  div(
    v-if="dragging || dragError"
    @dragenter="onDragEnter"
    @dragleave="onDragLeave"
    @dragover="onDragOver"
    @drop="onDrop"
    :class=`[
      "gb-field-image-uploader__dropzone",
      {
        "gb-field-image-uploader__dropzone--invalid": dragError
      }
    ]`
  )
    base-icon(
      :name="dragError ? 'cloud_off' : 'cloud_upload'"
      class="gb-field-image-uploader__icon"
    )

    span(
      v-if="dragError"
      class="gb-field-image-uploader__error"
    ) The file is not an image
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROEJECT: COMPONENTS
import BaseButton from "../base/BaseButton.vue"
import BaseIcon from "../base/BaseIcon.vue"

// PROEJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js"
import FieldSizeMixin from "../../mixins/FieldSizeMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  components: {
    BaseButton,
    BaseIcon
  },

  mixins: [FieldMixin, FieldSizeMixin, ThemeMixin],

  props: {
    clearable: {
      type: Boolean,
      default: true
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    hasPreview: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: null
    }
  },

  data: () => ({
    // --> STATE <--

    dragging: false,
    dragError: false
  }),

  methods: {
    // --> HELPERS <--

    convertToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener("load", () => resolve(reader.result))
        reader.addEventListener("error", error => reject(error))
      })
    },

    async processFile(file) {
      const base64Image = await this.convertToBase64(file)

      this.innerValue = base64Image

      this.$emit("change", this.name, base64Image, event)
      this.$emit("input", base64Image) // Synchronization for v-model
    },

    // --> EVENT LISTENERS <--

    onDragEnter(event) {
      event.preventDefault()

      this.dragging = true
    },

    onDragLeave(event) {
      event.preventDefault()

      this.dragging = false
    },

    onDragOver(event) {
      event.preventDefault()
    },

    onDrop(event) {
      event.preventDefault()

      if (event.dataTransfer && event.dataTransfer.files.length > 0) {
        const file = event.dataTransfer.files[0]

        // Make sure the dropped file is an image
        this.dragError = !file.type.includes("image/")

        if (!this.dragError) {
          this.processFile(file)
          this.$emit("drop", this.name, file, event)
        }
      }

      this.dragging = false
    },

    onFieldChange(event) {
      if (event.target && event.target.files.length > 0) {
        const file = event.target.files[0]

        this.processFile(file)
      }
    },

    onLabelKeypress(event) {
      if (event.code === "Space") {
        this.$el.querySelector("input[type='file']").click()
      }
    },

    onRemoveImage() {
      this.innerValue = null

      this.$emit("change", this.name, null, event)
      this.$emit("remove", this.name, event)
      this.$emit("input", null) // Synchronization for v-model
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
$c: ".gb-field-image-uploader";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

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
        margin-bottom: 0;
      }

      #{$c}__message {
        margin-top: 6px;
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

  #{$c}__preview {
    margin-top: 10px;

    #{$c}__image {
      width: 100%;
      border-width: 1px;
      border-style: solid;
      border-radius: 4px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    #{$c}__remove {
      margin-top: 10px;
    }
  }

  #{$c}__dropzone {
    display: none;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-width: 2px;
    border-style: dashed;
    border-radius: 4px;

    #{$c}__icon,
    #{$c}__error {
      flex: 0 0 auto;
      pointer-events: none;
    }

    #{$c}__error {
      margin-top: 4px;
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
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

      #{$c}__preview {
        #{$c}__image {
          height: 80px + (10px * $i);
        }
      }

      #{$c}__dropzone {
        height: 170px + (15px * $i);

        #{$c}__icon {
          font-size: 24px + (6px * $i) !important; // Override base-icon's size prop
        }

        #{$c}__error {
          font-size: 14px + (1px * $i);
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

  &--dragging {
    #{$c}__container,
    #{$c}__preview {
      display: none;
    }

    #{$c}__dropzone {
      display: flex;
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

      #{$c}__preview {
        #{$c}__image {
          border-color: mdg($theme, "borders", "default", "primary");
        }
      }

      #{$c}__dropzone {
        border-color: mdg($theme, "borders", "default", "primary");
        color: mdg($theme, "fonts", "default", "primary");

        &--invalid {
          border-color: mdg($theme, "statuses", "error");
          color: mdg($theme, "statuses", "error");
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
