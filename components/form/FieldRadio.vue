<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
div(
  :class=`[
    'c-field-radio',
    'c-field-radio--' + size,
    'c-field-radio--' + status,
    {
      'c-field-radio--block': block
    }
  ]`
)
  div(
    class="c-field-radio__container"
  )
    input(
      @change="onRadioChange"
      :checked="checked"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      :required="required"
      class="c-field-radio__field"
      type="radio"
    )
    field-label(
      v-if="label"
      :forField="uuid"
      :size="size"
      :uppercase="false"
      class="c-field-radio__label"
    ) {{ label }}

  field-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-field-radio__description"
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
    // --> EVENT LISTENERS <--

    onRadioChange(event) {
      this.$emit("change", this.name, event.target.checked);
    }
  }
};
</script>


<!-- *************************************************************************
     STYLE
     ************************************************************************* -->


<style lang="scss">
$c: ".c-field-radio";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: inline-block;
  text-align: left;

  #{$c}__container {
    display: flex;
    user-select: none;

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
        border-radius: 100%;
        background-color: $white;
        content: "";
      }

      &:after {
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: $white;
        transform: translate(-50%, -50%);
        content: "";
      }

      &:hover {
        &:after {
          background-color: $oxford-blue;
        }
      }

      &:checked {
        &:after {
          background-color: $white;
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
