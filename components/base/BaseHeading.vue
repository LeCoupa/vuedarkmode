<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "c-base-heading",
    "c-base-heading--" + computedColor,
    "c-base-heading--" + computedFontWeight,
    "c-base-heading--" + tag
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
      default: null
    },
    fontWeight: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      required: true
    }
  },

  computed: {
    computedColor() {
      // Directly return prop when defined
      if (this.color) return this.color;

      switch (this.tag) {
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

      switch (this.tag) {
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
$c: ".c-base-heading";

#{$c} {
  // --> COLORS <--

  &--grey {
    color: #a8c6df;
  }

  &--white {
    color: $white;
  }

  &--white2 {
    color: #fafbfc;
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

  // --> TAGS <--

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
