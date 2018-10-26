<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "dm-base-heading",
    "dm-base-heading--" + computedColor,
    "dm-base-heading--" + computedFontWeight,
    "dm-base-heading--" + type
  ]`
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
        return ["grey", "white", "white2"].indexOf(x) !== -1;
      }
    },
    fontWeight: {
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
    },
    type: {
      type: String,
      required: true,
      validator(x) {
        return ["h1", "h2", "h3", "p"].indexOf(x) !== -1;
      }
    }
  },

  computed: {
    computedColor() {
      // Directly return prop when defined
      if (this.color) return this.color;

      switch (this.type) {
        case "h1":
          return "white";
        case "h2":
          return "white2";
        case "h3":
          return "grey";
        case "p":
          return "white";
      }
    },

    computedFontWeight() {
      // Directly return prop when defined
      if (this.fontWeight) return this.fontWeight;

      switch (this.type) {
        case "h1":
          return "bold";
        case "h2":
          return "medium";
        case "h3":
          return "regular";
        case "p":
          return "regular";
      }
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";
$c: ".dm-base-heading";

#{$c} {
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  // --> COLORS <--

  &--grey {
    color: $regent-st-blue;
  }

  &--white {
    color: $white;
  }

  &--white2 {
    color: $athens-gray;
  }

  // --> FONT-WEIGHT <--

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

  // --> TYPES <--

  &--h1 {
    margin-bottom: 8px;
    font-size: 26px;
    line-height: 32px;
  }

  &--h2 {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 30px;
  }

  &--h3 {
    margin-bottom: 8px;
    font-size: 22px;
    line-height: 28px;
  }

  &--p {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 26px;
  }
}
</style>
