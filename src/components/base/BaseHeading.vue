<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
component(
  @click="onClick"
  :class=`[
    "dm-base-heading",
    "dm-base-heading--" + computedColor,
    "dm-base-heading--" + computedWeight,
    "dm-base-heading--" + tag,
    "dm-base-heading--" + theme,
    {
      "dm-base-heading--uppercase": uppercase
    }
  ]`
  :is="tag"
)
  slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [ThemeMixin],

  props: {
    color: {
      type: String,
      default: null,
      validator(x) {
        return ["black", "blue", "green", "grey", "red", "orange", "white"].includes(x)
      }
    },
    tag: {
      type: String,
      required: true,
      validator(x) {
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small"].includes(x)
      }
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    weight: {
      type: String,
      default: null,
      validator(x) {
        return ["thin", "light", "regular", "medium", "bold", "extrabold", "black"].includes(x)
      }
    }
  },

  computed: {
    computedColor() {
      let color = "white"

      if (this.color) {
        color = this.color
      } else if (["h3", "h4", "h5", "h6"].includes(this.tag)) {
        color = "grey"
      }

      return color
    },

    computedWeight() {
      let weight = "regular"

      if (this.weight) {
        weight = this.weight
      } else if (this.tag === "h1") {
        weight = "bold"
      } else if (["h2", "h3", "h4"].includes(this.tag)) {
        weight = "medium"
      }

      return weight
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick() {
      this.$emit("click")
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
$c: ".dm-base-heading";
$colors: "black", "blue", "green", "grey", "red", "orange", "white";

#{$c} {
  margin: 0;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  // --> TAGS <--

  &--h1 {
    font-size: 26px;
    line-height: 36px;
  }

  &--h2 {
    font-size: 24px;
    line-height: 34px;
  }

  &--h3 {
    font-size: 22px;
    line-height: 32px;
  }

  &--h4 {
    font-size: 20px;
    line-height: 30px;
  }

  &--h5 {
    font-size: 18px;
    line-height: 28px;
  }

  &--h6 {
    font-size: 16px;
    line-height: 28px;
  }

  &--p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 28px;
  }

  &--small {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 24px;
  }

  // --> WEIGHTS <--

  &--thin {
    font-weight: 100;
  }

  &--light {
    font-weight: 300;
  }

  &--regular {
    font-weight: 400;
  }

  &--medium {
    font-weight: 500;
  }

  &--bold {
    font-weight: 700;
  }

  &--extrabold {
    font-weight: 800;
  }

  &--black {
    font-weight: 900;
  }

  // --> BOOLEANS <--

  &--uppercase {
    text-transform: uppercase;
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      color: mdg($theme, "fonts", "default", "primary");

      // --> COLORS <--

      @each $color in $colors {
        &#{$c}--#{$color} {
          color: mdg($theme, "colors", $color);
        }
      }
    }
  }
}
</style>
