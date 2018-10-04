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
        return ["regular", "medium", "bold"].indexOf(x) !== -1;
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
$c: ".dm-base-heading";

#{$c} {
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

  &--regular {
    font-family: "Heebo Regular";
  }

  &--medium {
    font-family: "Heebo Medium";
  }

  &--bold {
    font-family: "Heebo Bold";
  }

  // --> TYPES <--

  &--h1 {
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 6px;
  }

  &--h2 {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 6px;
  }

  &--h3 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
  }

  &--p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
}
</style>
