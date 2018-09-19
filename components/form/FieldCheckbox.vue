<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
div(
  :class=`[
    'c-field-checkbox',
    'c-field-checkbox--' + size,
    'c-field-checkbox--' + status,
    {
      'c-field-checkbox--block': block
    }
  ]`
)
  div(
    class="c-field-checkbox__container"
  )
    input(
      @change="onCheckboxChange"
      :checked="checked"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      :required="required"
      class="c-field-checkbox__field"
      type="checkbox"
    )
    field-label(
      v-if="label"
      :forField="uuid"
      :size="size"
      :uppercase="false"
      class="c-field-checkbox__label"
    ) {{ label }}

  field-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-field-checkbox__description"
  )
</template>


<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->


<script>
// PROJECT
import { generateUUID } from "@/helpers/helpers";
import FieldDescription from "@/components/form/FieldDescription";
import FieldLabel from "@/components/form/FieldLabel";

export default {
  components: {
    FieldDescription,
    FieldLabel
  },

  props: {
    block: {
      type: Boolean,
      default: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
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
    onCheckboxChange(event) {
      this.$emit("change", this.name, event.target.checked);
    }
  }
};
</script>


<!-- *************************************************************************
     STYLE
     ************************************************************************* -->


<style lang="scss">
$c: ".c-field-checkbox";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: inline-block;
  text-align: left;
  user-select: none;

  #{$c}__container {
    display: flex;

    #{$c}__field {
      position: relative;
      margin-right: 8px;
      margin-bottom: 0;
      outline: none;
      border: none;
      appearance: none;
      cursor: pointer;

      &:before,
      &:after {
        position: absolute;
        display: inline-block;
        box-sizing: border-box;
        transition: all ease-in-out 0.2s;
      }

      &:before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid $regent-st-blue;
        border-radius: 3px;
        background-color: $white;
        content: "";
      }

      &:after {
        border: 2px solid $white;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg);
        content: "";
      }

      &:hover {
        &:after {
          border-color: $oxford-blue;
          border-right-width: 2px;
          border-bottom-width: 2px;
        }
      }

      &:checked {
        &:after {
          border-color: $white;
        }
      }
    }

    #{$c}__label {
      flex: 1;
      margin-bottom: 0;
      color: $white;
      font-family: "Heebo Regular";
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        #{$c}__field {
          width: 12px + (2px * $i);
          height: 12px + (2px * $i);

          &:after {
            @if ($size == "mini") {
              top: 1px;
              left: 4px;
              width: 4px;
              height: 8px;
            } @else if ($size == "small") {
              top: 2px;
              left: 5px;
              width: 4px;
              height: 8px;
            } @else if ($size == "default") {
              top: 2px;
              left: 6px;
              width: 5px;
              height: 10px;
            } @else if ($size == "medium") {
              top: 3px;
              left: 7px;
              width: 5px;
              height: 10px;
            } @else if ($size == "large") {
              top: 3px;
              left: 8px;
              width: 6px;
              height: 12px;
            }
          }
        }

        #{$c}__label {
          line-height: 12px + (2px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        #{$c}__field {
          &:hover {
            &:before {
              border-color: map-get($statusColors, $status);
            }
          }

          &:checked {
            &:before {
              border-color: map-get($statusColors, $status);
              background: map-get($statusColors, $status);
            }
          }
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
