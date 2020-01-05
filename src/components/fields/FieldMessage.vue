<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
p(
  :class=`[
    "gb-field-message",
    "gb-field-message--" + size,
    "gb-field-message--" + status,
    "gb-field-message--" + computedTheme
  ]`
)
  base-icon(
    v-if="computedIconName"
    :name="computedIconName"
    :size="computedIconSize"
    class="gb-field-message__icon"
  )

  span(
    v-html="message"
    class="gb-field-message__message"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseIcon from "../base/BaseIcon.vue"

// PROJECT: MIXINS
import FieldSizeMixin from "../../mixins/FieldSizeMixin.js"
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  components: {
    BaseIcon
  },

  mixins: [FieldSizeMixin, ThemeMixin],

  props: {
    message: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: "description",
      validator(x) {
        return ["description", "error", "info", "success", "warning"].includes(x)
      }
    }
  },

  computed: {
    computedIconName() {
      if (this.status === "error") {
        return "error"
      } else if (this.status === "info") {
        return "info"
      } else if (this.status === "success") {
        return "check_circle"
      } else if (this.status === "warning") {
        return "warning"
      }

      return null
    },

    computedIconSize() {
      if (this.size === "mini") {
        return "15px"
      } else if (this.size === "small") {
        return "16px"
      } else if (this.size === "default") {
        return "17px"
      } else if (this.size === "medium") {
        return "18px"
      } else if (this.size === "large") {
        return "19px"
      }

      return null
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";

// VARIABLES
$c: ".gb-field-message";
$sizes: "mini", "small", "default", "medium", "large";
$statuses: "description", "error", "info", "success", "warning";

#{$c} {
  display: flex;
  align-items: center;
  margin: 0;
  font-family: "Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif;

  #{$c}__icon {
    margin-top: -2px;
    margin-right: 5px;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      margin-top: 8px + (1px * $i);

      #{$c}__message {
        font-size: 12px + (1px * $i);
        line-height: 16px + (2px * $i);
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      // --> STATUSES <--

      @each $status in $statuses {
        &#{$c}--#{$status} {
          color: mdg($theme, "statuses", $status);
        }
      }
    }
  }
}
</style>
