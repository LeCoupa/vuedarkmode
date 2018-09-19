<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    'c-field-select',
    'c-field-select--' + size,
    'c-field-select--' + status,
    {
      'c-field-select--block': block,
      'c-field-select--borders': borders,
      'c-field-select--focused': focused,
      'c-field-select--with-left-icon': computedLeftIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :size="size"
    class="c-field-select__label"
  ) {{ label }}

  .c-field-select__container
    common-icon(
      v-if="computedLeftIcon"
      :name="computedLeftIcon"
      class="c-field-select__icon c-field-select__icon--left"
    )
    select(
      @blur="onSelectBlur"
      @click="onSelectClick"
      @focus="onSelectFocus"
      @change="onSelectChange"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      class="c-field-select__field"
    )
      option(
        v-for="option in options"
        :value="option.value"
      ) {{ option.label }}

    common-icon(
      :name="rightIcon"
      class="c-field-select__icon c-field-select__icon--right"
    )

  field-description(
    v-if="description"
    :description="description"
    :size="size"
    class="c-common-input__description"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import { generateUUID } from "@/helpers/helpers";
import CommonIcon from "@/components/common/CommonIcon";
import FieldDescription from "@/components/form/FieldDescription";
import FieldLabel from "@/components/form/FieldLabel";

export default {
  components: {
    CommonIcon,
    FieldDescription,
    FieldLabel
  },

  props: {
    block: {
      type: Boolean,
      default: true
    },
    borders: {
      type: Boolean,
      default: true
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
    leftIcon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
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
      focused: false,
      rightIcon: "arrow_drop_down",
      uuid: ""
    };
  },

  computed: {
    computedLeftIcon() {
      // Return the left icon when defined as prop
      if (this.status === "error") {
        return "close";
      } else if (this.status === "success") {
        return "check";
      } else if (this.status === "warning") {
        return "warning";
      }

      return this.leftIcon;
    }
  },

  mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    getSelectedValue() {
      return this.$el.querySelector("select").value || "";
    },

    onSelectBlur() {
      this.focused = false;
      this.rightIcon = "arrow_drop_down";

      this.$emit("blur", this.name, this.getSelectedValue());
    },

    onSelectChange() {
      this.rightIcon = "arrow_drop_down";

      this.$emit("change", this.name, this.getSelectedValue());
    },

    onSelectClick() {
      this.rightIcon = "arrow_drop_up";

      this.$emit("click", this.name, this.getSelectedValue());
    },

    onSelectFocus() {
      this.focused = true;
      this.rightIcon = "arrow_drop_up";

      this.$emit("focus", this.name, this.getSelectedValue());
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-field-select";
$sizes: mini, small, default, medium, large;
$statuses: error, normal, success, warning;

#{$c} {
  display: flex;
  flex-direction: column;
  text-align: left;

  #{$c}__container {
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    transition: all ease-in-out 0.2s;

    #{$c}__icon {
      position: absolute;

      &--left {
        left: 9px;
      }

      &--right {
        right: 9px;
      }
    }

    #{$c}__field {
      flex: 1;
      padding: 0 35px 0 15px;
      height: 100%;
      border: none;
      background-color: transparent;
      background-image: none;
      box-shadow: none;
      color: $white;
      cursor: pointer;

      -webkit-appearance: none;

      &:disabled {
        cursor: not-allowed;
      }

      &:focus {
        outline: none;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__container {
        height: 34px + (4px * $i);
        border-radius: 4px + (1px * $i);

        #{$c}__icon {
          // Will override the font-size set in style attribute
          font-size: 16px + (1px * $i) !important;
        }

        #{$c}__field {
          font-size: 12px + (1px * $i);
        }
      }
    }
  }

  // --> STATUSES <--

  @each $status in $statuses {
    &--#{$status} {
      #{$c}__container {
        @if ($status != "normal") {
          border-color: map-get($statusColors, $status);
          color: map-get($statusColors, $status);
        } @else {
          border-color: $oxford-blue;
          color: $white;
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--block {
    width: 100%;
  }

  &--borders {
    #{$c}__container {
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-radius: 6px;
      background-color: $ebony-clay-2;
    }
  }

  &--focused {
    #{$c}__container {
      border-color: $azure-radiance;
      color: $azure-radiance;
    }
  }

  &--with-left-icon {
    #{$c}__container {
      #{$c}__field {
        padding-left: 35px;
      }
    }
  }
}
</style>
