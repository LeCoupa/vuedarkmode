<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-field-select",
    "dm-field-select--" + size,
    "dm-field-select--" + status,
    {
      "dm-field-select--borders": borders,
      "dm-field-select--focused": focused,
      "dm-field-select--full-width": fullWidth,
      "dm-field-select--with-left-icon": computedLeftIcon
    }
  ]`
)
  field-label(
    v-if="label"
    :forField="uuid"
    :size="size"
    class="dm-field-select__label"
  ) {{ label }}

  .dm-field-select__container
    base-icon(
      v-if="computedLeftIcon"
      :name="computedLeftIcon"
      class="dm-field-select__icon dm-field-select__icon--left"
    )
    select(
      @blur="onSelectBlur"
      @click="onSelectClick"
      @focus="onSelectFocus"
      @change="onSelectChange"
      :disabled="disabled"
      :id="uuid"
      :name="name"
      class="dm-field-select__field"
    )
      option(
        v-for="option in options"
        :value="option.value"
      ) {{ option.label }}

    base-icon(
      :name="rightIcon"
      class="dm-field-select__icon dm-field-select__icon--right"
    )

  field-description(
    v-if="description"
    :description="description"
    :size="size"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import { generateUUID } from "@/helpers/helpers";
import BaseIcon from "@/components/darkmode/base/BaseIcon";
import FieldDescription from "@/components/darkmode/form/FieldDescription";
import FieldLabel from "@/components/darkmode/form/FieldLabel";

export default {
  components: {
    BaseIcon,
    FieldDescription,
    FieldLabel
  },

  props: {
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
    fullWidth: {
      type: Boolean,
      default: true
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
    // --> HELPERS <--

    getSelectedValue() {
      return this.$el.querySelector("select").value || "";
    },

    // --> EVENT LISTENERS <--

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
$c: ".dm-field-select";
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

  &--full-width {
    width: 100%;
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
