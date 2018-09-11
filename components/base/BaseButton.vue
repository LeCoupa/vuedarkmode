<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  :class=`[
    "c-base-button",
    "c-base-button--" + color,
    "c-base-button--" + size,
    {
      "c-base-button--capitalize": capitalize,
      "c-base-button--circular": circular
    }
  ]`
)
  base-icon(
    v-if="leftIcon"
    :name="leftIcon"
    :size="iconSize"
    class="c-base-button__left-icon"
  )
  span.c-base-button__label: slot

  base-icon(
    v-if="rightIcon"
    :name="rightIcon"
    :size="iconSize"
    class="c-base-button__right-icon"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    capitalize: {
      type: Boolean,
      default: true
    },
    circular: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue"
    },
    leftIcon: {
      type: String,
      default: null
    },
    rightIcon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default"
    }
  },

  computed: {
    iconSize() {
      switch (this.size) {
        case "mini":
          return "14px";
        case "small":
          return "16px";
        case "default":
          return "18px";
        case "medium":
          return "20px";
        case "large":
          return "22px";
      }
    }
  },

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-base-button";

#{$c} {
  display: flex;
  align-items: center;
  outline: 0;
  background-color: transparent; // Chrome displays white borders sometimes
  font-family: "Heebo Medium";
  user-select: none;
  cursor: pointer;

  // --> COLORS <--

  &--black {
    border: 1px solid #313d4f;
    background-color: #222c3c;
    color: $white;
  }

  &--blue {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(-1deg, #1991eb 2%, #2da1f8 98%);
    color: $white;
  }

  &--green {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #4ece3d;
    color: $white;
  }

  &--orange {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(-1deg, #fdc018 2%, #ffc82e 98%);
    color: $white;
  }

  &--red {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(0deg, #c8270c 0%, #e44023 100%);
    color: $white;
  }

  &--white {
    border: 1px solid #e6eaee;
    background-image: linear-gradient(0deg, #f4f7fa 0%, #ffffff 100%);
    color: #2c405a;
  }

  // --> SIZES <--

  &--mini {
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;

    #{$c}__left-icon {
      margin-right: 3px;
    }

    #{$c}__right-icon {
      margin-left: 3px;
    }
  }

  &--small {
    padding: 10px 14px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 16px;

    #{$c}__left-icon {
      margin-right: 4px;
    }

    #{$c}__right-icon {
      margin-left: 4px;
    }
  }

  &--default {
    padding: 12px 16px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 18px;

    #{$c}__left-icon {
      margin-right: 5px;
    }

    #{$c}__right-icon {
      margin-left: 5px;
    }
  }

  &--medium {
    padding: 14px 18px;
    border-radius: 7px;
    font-size: 18px;
    line-height: 20px;

    #{$c}__left-icon {
      margin-right: 6px;
    }

    #{$c}__right-icon {
      margin-left: 6px;
    }
  }

  &--large {
    padding: 16px 20px;
    border-radius: 8px;
    font-size: 20px;
    line-height: 22px;

    #{$c}__left-icon {
      margin-right: 7px;
    }

    #{$c}__right-icon {
      margin-left: 7px;
    }
  }

  // --> BOOLEANS <--

  &--capitalize {
    text-transform: capitalize;
  }

  &--circular {
    border-radius: 100%;

    #{$c}__label {
      display: none;
    }

    #{$c}__left-icon {
      margin-right: 0;
    }

    #{$c}__right-icon {
      margin-left: 0;
    }

    &#{$c}--mini {
      padding: 8px;
    }

    &#{$c}--small {
      padding: 9px;
    }

    &#{$c}--default {
      padding: 10px;
    }

    &#{$c}--medium {
      padding: 11px;
    }

    &#{$c}--large {
      padding: 12px;
    }
  }
}
</style>
