<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-file",
    "dm-field-file--" + size,
    "dm-field-file--" + status,
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
        :size="size"
        class="dm-field-file__label"
      ) {{ label }}

      span(
        v-if="description"
        class="dm-field-file__description"
      ) {{ description }}

    label(
      @keypress.prevent="onLabelKeypress"
      :for="uuid"
      class="dm-field-file__upload"
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
// PROJECT
import { generateUUID } from "../../../helpers/helpers.js";
import BaseIcon from "../base/BaseIcon.vue";
import FieldLabel from "./FieldLabel.vue";

export default {
  components: {
    BaseIcon,
    FieldLabel
  },

  props: {
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    }
  },

  data() {
    return {
      // --> STATE <--

      uuid: ""
    };
  },

  mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange(event) {
      this.$emit("change", this.name, event);
    },

    onLabelKeypress(event) {
      if (event.which === 32) {
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
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-field-file";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: inline-block;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__container {
    display: flex;
    align-items: center;

    #{$c}__information {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      text-align: left;

      #{$c}__label {
        margin-bottom: 6px;
      }

      #{$c}__description {
        color: $nepal;
      }
    }

    #{$c}__upload {
      position: relative;
      box-sizing: border-box;
      outline: 0;
      border-width: 2px;
      border-style: solid;
      border-radius: 100%;
      background-color: rgba($ebony-clay, 0.9);
      box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
      transition: all ease-in-out 0.2s;
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
        #{$c}__description {
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
          border-color: map-get($statusColors, $status);
        } @else {
          border-color: $white;
        }

        &:focus {
          box-shadow: 0 0 0 2px $mirage,
            0 0 0 4px map-get($statusColors, $status);
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
