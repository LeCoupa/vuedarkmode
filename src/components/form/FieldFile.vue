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
//- "dm-field-file--" + (errors.length > 0 && dirty ? 'error' : computedStatus),
div(
  :class=`[
    "dm-field-file",
    "dm-field-file--" + computedStatus,
    "dm-field-file--" + size,
    {
      "dm-field-file--disabled": disabled,
      "dm-field-file--full-width": fullWidth
    }
  ]`
)
  .dm-field-file__container
    div(
      v-if="label"
      class="dm-field-file__information"
    )
      field-label(
        :required="labelRequired"
        :size="size"
        class="dm-field-file__label"
      ) {{ label }}

      //-   v-if="computedMessageStatus || (errors.length > 0 && dirty)"
      //-   :errors="errors"
      field-message(
        v-if="computedMessageStatus"
        :message="computedMessageContent"
        :show-errors="showErrors"
        :size="size"
        :status="computedMessageStatus"
        class="dm-field-file__message"
      )

    label(
      @keypress.prevent="onLabelKeypress"
      :for="uuid"
      class="dm-field-file__upload js-tag-for-autofocus"
      tabindex="0"
    )
      base-icon(
        name="cloud_upload"
        class="dm-field-file__icon"
      )

    input(
      @change="onFieldChange"
      :disabled="disabled"
      :id="uuid"
      :multiple="multiple"
      :name="name"
      class="dm-field-file__field"
      type="file"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROEJECT: MIXINS
import FieldMixin from "../../mixins/FieldMixin.js";

export default {
  mixins: [FieldMixin],

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
      this.$emit("change", this.name, event);
    },

    onLabelKeypress(event) {
      if (event.code === "Space") {
        this.$el.querySelector("input[type='file']").click();
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
@import "src/assets/stylesheets/settings/_datasets.scss";

// VARIABLES
$c: ".dm-field-file";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "error", "normal", "success", "warning";

#{$c} {
  display: inline-block;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

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
      background-color: rgba($ebony-clay, 0.9);
      box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
      transition: all linear 250ms;
      cursor: pointer;

      #{$c}__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1px;
        transform: translate(-50%, -50%);
      }

      &:hover {
        border-color: $azure-radiance;
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

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__upload {
        @if ($status != normal) {
          border-color: mdg($darkTheme, "statuses", $status);
        } @else {
          border-color: $white;
        }

        &:focus {
          box-shadow: 0 0 0 2px $mirage,
            0 0 0 3px mdg($darkTheme, "statuses", $status);
          transition: box-shadow linear 0s;
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;

    #{$c}__container {
      #{$c}__upload {
        cursor: not-allowed;

        &:hover {
          border-color: $crimson;
        }
      }
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>
