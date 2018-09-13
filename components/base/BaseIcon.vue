<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
i(
  @click="onClick"
  :style=`{
    color: color,
    fontSize: size
  }`
  aria-hidden="true"
  class="c-base-icon"
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
      default: "white"
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
// Based on Material Icons
// https://google.github.io/material-design-icons/#icon-font-for-the-web
.c-base-icon {
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
}

@font-face {
  font-weight: 400;
  font-style: normal;
  font-family: "Material Icons";
  src: url("/fonts/material-icons/MaterialIcons-Regular.eot"); /* For IE6-8 */
  src: url("/fonts/material-icons/MaterialIcons-Regular.woff2") format("woff2"),
    url("/fonts/material-icons/MaterialIcons-Regular.woff") format("woff"),
    url("/fonts/material-icons/MaterialIcons-Regular.ttf") format("truetype");
}
</style>
