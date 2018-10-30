<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
i(
  @click="onClick"
  :style=`{
    color: color,
    cursor: cursor,
    fontSize: size
  }`
  aria-hidden="true"
  class="dm-base-icon"
) {{ name }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    color: {
      type: String,
      default: "inherit"
    },
    cursor: {
      type: String,
      default: "default",
      validator(x) {
        return ["default", "pointer"];
      }
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "24px"
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick() {
      this.$emit("click", this.name);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";

// Based on Material Icons
// https://google.github.io/material-design-icons/#icon-font-for-the-web
.dm-base-icon {
  display: inline-block;
  color: inherit;
  text-transform: none;
  text-rendering: optimizeLegibility;
  white-space: nowrap;
  word-wrap: normal;
  letter-spacing: normal;
  font-weight: normal;
  font-style: normal;
  font-family: "Material Icons";
  font-feature-settings: "liga";
  line-height: 1;
  direction: ltr;
  user-select: none;

  -webkit-font-smoothing: antialiased;
}

@font-face {
  font-weight: 400;
  font-style: normal;
  font-family: "Material Icons";
  src: url("https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2")
    format("woff2");
}
</style>
