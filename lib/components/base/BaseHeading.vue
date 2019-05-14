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
    {
      "dm-base-heading--uppercase": uppercase
    }
  ]`
  :is="tag"
  :style=`{
    fontSize: computedFontSize,
    lineHeight: computedLineHeight
  }`
)
  slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    color: {
      type: String,
      default: null,
      validator(x) {
        return [
          "black",
          "blue",
          "green",
          "grey",
          "red",
          "orange",
          "white"
        ].includes(x);
      }
    },
    fontSize: {
      type: String,
      default: null
    },
    lineHeight: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      required: true,
      validator(x) {
        return ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small"].includes(x);
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
        return [
          "thin",
          "light",
          "regular",
          "medium",
          "bold",
          "extrabold",
          "black"
        ].includes(x);
      }
    }
  },

  computed: {
    computedColor() {
      let color = "white";

      if (this.color) {
        color = this.color;
      } else if (["h3", "h4", "h5", "h6"].includes(this.tag)) {
        color = "grey";
      }

      return color;
    },

    computedFontSize() {
      if (this.fontSize) {
        return this.fontSize;
      } else if (this.tag === "h1") {
        return "26px";
      } else if (this.tag === "h2") {
        return "24px";
      } else if (this.tag === "h3") {
        return "22px";
      } else if (this.tag === "h4") {
        return "20px";
      } else if (this.tag === "h5") {
        return "18px";
      } else if (this.tag === "h6") {
        return "16px";
      } else if (this.tag === "p") {
        return "16px";
      } else if (this.tag === "small") {
        return "14px";
      }
    },

    computedLineHeight() {
      if (this.lineHeight) {
        return this.lineHeight;
      } else if (this.tag === "h1") {
        return "36px";
      } else if (this.tag === "h2") {
        return "34px";
      } else if (this.tag === "h3") {
        return "32px";
      } else if (this.tag === "h4") {
        return "30px";
      } else if (this.tag === "h5") {
        return "28px";
      } else if (this.tag === "h6") {
        return "28px";
      } else if (this.tag === "p") {
        return "28px";
      } else if (this.tag === "small") {
        return "24px";
      }

      return null;
    },

    computedWeight() {
      let weight = "regular";

      if (this.weight) {
        weight = this.weight;
      } else if (this.tag === "h1") {
        weight = "bold";
      } else if (["h2", "h3", "h4"].includes(this.tag)) {
        weight = "medium";
      }

      return weight;
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

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
// IMPORTS
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-base-heading";
$colors: black, blue, green, grey, red, orange, white;

#{$c} {
  margin: 0;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      color: map-get($mainColors, $color);
    }
  }

  // --> TAGS <--

  &--p {
    margin-bottom: 20px;
  }

  &--small {
    margin-bottom: 20px;
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
}
</style>
