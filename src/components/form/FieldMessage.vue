<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
p(
  :class=`[
    "dm-field-message",
    "dm-field-message--" + computedLevel,
    "dm-field-message--" + size
  ]`
)
  base-icon(
    v-if="computedIconName"
    :name="computedIconName"
    :size="computedIconSize"
    class="dm-field-message__icon"
  )

  span(
    v-html="computedMessage"
    class="dm-field-message__message"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseIcon from "../base/BaseIcon.vue";

export default {
  components: {
    BaseIcon
  },

  props: {
    errors: {
      type: Array,
      default: null
    },
    level: {
      type: String,
      default: "description",
      validator(x) {
        return ["description", "error", "info", "success", "warning"].includes(
          x
        );
      }
    },
    message: {
      type: String,
      default: null
    },
    showErrors: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["mini", "small", "default", "medium", "large"].includes(x);
      }
    }
  },

  computed: {
    computedIconName() {
      if (this.level === "error") {
        return "error";
      } else if (this.level === "info") {
        return "info";
      } else if (this.level === "success") {
        return "check_circle";
      } else if (this.level === "warning") {
        return "warning";
      }

      return null;
    },

    computedIconSize() {
      if (this.size === "mini") {
        return "15px";
      } else if (this.size === "small") {
        return "16px";
      } else if (this.size === "default") {
        return "17px";
      } else if (this.size === "medium") {
        return "18px";
      } else if (this.size === "large") {
        return "19px";
      }

      return null;
    },

    computedLevel() {
      if (this.errors && this.errors.length > 0 && this.showErrors) {
        return "error";
      } else {
        return this.level;
      }
    },

    computedMessage() {
      if (this.errors && this.errors.length > 0 && this.showErrors) {
        return this.errors[0];
      } else {
        return this.message;
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
@import "src/assets/stylesheets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-field-message";
$levels: "description", "error", "info", "success", "warning";
$sizes: "mini", "small", "default", "medium", "large";

#{$c} {
  display: flex;
  align-items: center;
  margin: 10px 0 0;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__icon {
    margin-top: -2px;
    margin-right: 5px;
  }

  // --> LEVELS <--

  @each $level in $levels {
    &--#{$level} {
      color: map-get($levelColors, $level);
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__message {
        font-size: 12px + (1px * $i);
        line-height: 16px + (2px * $i);
      }
    }
  }
}
</style>
