<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
div(
  :class=`[
    'c-base-checkbox',
    'c-base-checkbox--' + size,
    'c-base-checkbox--' + status,
    {
      'c-base-checkbox--block': block
    }
  ]`
)
  div(
    class="c-base-checkbox__container"
  )
    input(
      @change="onCheckboxChange"
      :checked="checked"
      :disabled="disabled"
      :id="id"
      :name="name"
      :required="required"
      class="c-base-checkbox__field"
      type="checkbox"
    )
    base-label(
      v-if="label"
      :forField="id"
      :size="size"
      :uppercase="false"
      class="c-base-checkbox__label"
    ) {{ label }}

  base-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-base-checkbox__description"
  )
</template>


<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->


<script>
export default {
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
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ""
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
$c: ".c-base-checkbox";
$sizes: mini, small, default, medium, large;
$statuses: error, success, warning;

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
        box-sizing: border-box;
        transition: all ease-in-out 0.2s;
      }

      &:before {
        top: 0;
        left: 0;
        display: inline-block;
        border: 1px solid $regent-st-blue;
        border-radius: 3px;
        background-color: $white;
        content: "";
      }

      &:after {
        display: none;
        border-width: 2px;
        border-style: solid;
        border-top: 0;
        border-left: 0;
        content: "";
        transform: rotate(45deg);
      }

      &:hover:before {
        border-color: $white;
      }

      &:hover:after {
        display: block;
        border-color: $oxford-blue;
        border-right-width: 2px;
        border-bottom-width: 2px;
      }

      &:checked {
        &:before {
          border-color: $azure-radiance;
          background: $azure-radiance;
          animation-name: none;
        }

        &:after {
          display: block;
          border-color: $white;
        }
      }

      &[disabled] {
        color: $crimson;
        cursor: not-allowed;

        &:hover,
        &:before,
        &:after {
          cursor: not-allowed;
        }

        &:hover:before {
          border: 1px solid $crimson;
          animation-name: none;
        }

        &:before {
          border-color: $crimson;
        }

        &:checked:before {
          border: $regent-st-blue;
          background: $regent-st-blue;
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

          &:before {
            width: 12px + (2px * $i);
            height: 12px + (2px * $i);
          }

          &:after {
            @if ($size == "mini") {
              width: 4px;
              height: 8px;
              top: 1px;
              left: 4px;
            } @else if ($size == "small") {
              width: 4px;
              height: 8px;
              top: 2px;
              left: 5px;
            } @else if ($size == "default") {
              width: 5px;
              height: 10px;
              top: 2px;
              left: 6px;
            } @else if ($size == "medium") {
              width: 5px;
              height: 10px;
              top: 3px;
              left: 7px;
            } @else if ($size == "large") {
              width: 6px;
              height: 12px;
              top: 3px;
              left: 8px;
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
          &:before {
            border-color: map-get($statusColors, $status);
          }

          &:hover:before {
            border-color: map-get($statusColors, $status);
          }

          &:checked,
          &:indeterminate {
            &:before {
              border-color: map-get($statusColors, $status);
              background: map-get($statusColors, $status);
            }

            &:after {
              border-color: $white;
            }
          }
        }

        #{$c}__label {
          color: map-get($statusColors, $status);
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--block {
    display: block;
    width: 100%;
  }
}
</style>
