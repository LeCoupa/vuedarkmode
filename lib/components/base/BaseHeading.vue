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
    fontSize: computedFontSize
  }`
): slot
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
        return (
          ["black", "blue", "green", "grey", "red", "orange", "white"].indexOf(
            x
          ) !== -1
        );
      }
    },
    fontSize: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      required: true,
      validator(x) {
        return (
          ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small"].indexOf(x) !== -1
        );
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
        return (
          [
            "thin",
            "light",
            "regular",
            "medium",
            "bold",
            "extrabold",
            "black"
          ].indexOf(x) !== -1
        );
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

  &--h1 {
    line-height: 36px;
  }

  &--h2 {
    line-height: 34px;
  }

  &--h3 {
    line-height: 32px;
  }

  &--h4 {
    line-height: 30px;
  }

  &--h5 {
    line-height: 28px;
  }

  &--h6 {
    line-height: 28px;
  }

  &--p {
    margin-bottom: 20px;
    line-height: 28px;
  }

  &--small {
    margin-bottom: 20px;
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
}
</style>
