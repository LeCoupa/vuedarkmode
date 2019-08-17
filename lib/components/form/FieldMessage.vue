<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
p(
  :class=`[
    "dm-field-message",
    "dm-field-message--" + level,
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
    v-html="message"
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
      required: true
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
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "assets/settings/_settings.colors.scss";

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
