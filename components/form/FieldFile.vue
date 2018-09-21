<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "c-field-file",
    "c-field-file--" + size,
    "c-field-file--" + status,
    {
      "c-field-file--block": block
    }
  ]`
)
  .c-field-file__container
    div(
      v-if="label"
      class="c-field-file__information"
    )
      span.c-field-file__label {{ label }}

      span(
        v-if="description"
        class="c-field-file__description"
      ) {{ description }}

    label(
      :for="uuid"
      class="c-field-file__upload"
    )
      common-icon(
        name="cloud_upload"
        class="c-field-file__icon"
      )

    input(
      @change="onFileChange"
      :id="uuid"
      :multiple="multiple"
      :name="name"
      type="file"
      class="c-field-file__field"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import { generateUUID } from "@/helpers/helpers";
import CommonIcon from "@/components/common/CommonIcon";

export default {
  components: {
    CommonIcon
  },

  props: {
    block: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: null
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
      default: "normal"
    },
    status: {
      type: String,
      default: "normal"
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
    onFileChange() {
      this.$emit("change", this.name);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-field-file";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: inline-block;

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
        color: $regent-st-blue;
        text-transform: uppercase;
        font-family: "Heebo Bold";
      }

      #{$c}__description {
        color: $nepal;
      }
    }
    #{$c}__upload {
      position: relative;
      box-sizing: border-box;
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
      width: 100%;
      height: 100%;
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__information {
        #{$c}__label {
          font-size: 12px + (1px * $i);
        }

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
        @if ($status != "normal") {
          border-color: map-get($statusColors, $status);
        } @else {
          border-color: $white;
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--block {
    width: 100%;
  }
}
</style>
