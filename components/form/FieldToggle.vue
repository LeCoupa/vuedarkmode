<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
div(
  :class=`[
    'c-field-toggle',
    'c-field-toggle--' + size,
    'c-field-toggle--' + status,
    {
      'c-field-toggle--block': block
    }
  ]`
)
  div(
    class="c-field-toggle__container"
  )
    input(
      @change="onToggleChange"
      :checked="checked"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      :required="required"
      class="c-field-toggle__field"
      type="checkbox"
    )
    field-label(
      v-if="label"
      :forField="uuid"
      :size="size"
      :uppercase="false"
      class="c-field-toggle__label"
    ) {{ label }}

  field-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-field-toggle__description"
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
    onToggleChange(event) {
      this.$emit("change", this.name, event.target.checked);
    }
  }
};
</script>


<!-- *************************************************************************
     STYLE
     ************************************************************************* -->


<style lang="scss">
$c: ".c-field-toggle";
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
        transition: all ease-in-out 0.3s;
      }

      &:before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid $oxford-blue;
        border-radius: 20px;
        background-color: rgba($ebony-clay-2, 0.4);
        content: "";
      }

      &:after {
        top: 4px;
        right: initial;
        border-radius: 100%;
        background: $white;
        transform: translateX(4px);
        content: "";
      }

      &:hover {
        &:before {
          border-color: lighten($oxford-blue, 10%);
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
          width: (18px + (2px * $i)) * 2;
          height: 18px + (2px * $i);

          &:after {
            width: 10px + (2px * $i);
            height: 10px + (2px * $i);
          }

          &:checked {
            &:after {
              transform: translateX(
                ((18px + (2px * $i)) * 2) - (10px + (2px * $i) + 4px)
              );
            }
          }
        }

        #{$c}__label {
          line-height: 18px + (2px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        #{$c}__field {
          &:checked {
            &:before {
              border-color: map-get($statusColors, $status);
              background-color: rgba(map-get($statusColors, $status), 0.4);
            }
          }

          &:hover {
            &:before {
              border-color: lighten(map-get($statusColors, $status), 10%);
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
