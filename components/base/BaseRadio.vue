<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->


<template lang="pug">
div(
  :class=`[
    'c-base-radio',
    'c-base-radio--' + size,
    'c-base-radio--' + status,
    {
      'c-base-radio--block': block
    }
  ]`
)
  div(
    class="c-base-radio__container"
  )
    input(
      @change="onRadioChange"
      :checked="checked"
      :disabled="disabled"
      :id="id"
      :name="name"
      :required="required"
      class="c-base-radio__field"
      type="radio"
    )
    base-label(
      v-if="label"
      :forField="id"
      :size="size"
      :uppercase="false"
      class="c-base-radio__label"
    ) {{ label }}

  base-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-base-radio__description"
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
      required: true
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
$c: ".c-base-radio";
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
        border-radius: 100%;
        background-color: $white;
        content: "";
      }

      &:after {
        top: 50%;
        left: 50%;
        display: none;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        content: "";
        transform: translate(-50%, -50%);
      }

      &:hover:before {
        border-color: $white;
      }

      &:hover:after {
        display: block;
        background-color: $oxford-blue;
      }

      &:checked {
        &:before {
          border-color: $azure-radiance;
          background: $azure-radiance;
          animation-name: none;
        }

        &:after {
          display: block;
          background-color: $white;
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
