<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
i(
  @click="onClick(id, $event)"
  @dblclick="onDoubleClick(id, $event)"
  @mousedown="onMouseDown(id, $event)"
  @mouseenter="onMouseEnter(id, $event)"
  @mouseleave="onMouseLeave(id, $event)"
  @mousemove="onMouseMove(id, $event)"
  @mouseout="onMouseOut(id, $event)"
  @mouseover="onMouseOver(id, $event)"
  @mouseup="onMouseUp(id, $event)"
  :id="id"
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
        return ["default", "pointer"].indexOf(x) !== -1;
      }
    },
    id: {
      type: String,
      default: null
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

    onClick(id, event) {
      this.$emit("click", id, event);
    },

    onDoubleClick(id, event) {
      this.$emit("dblclick", id, event);
    },

    onMouseDown(id, event) {
      this.$emit("mousedown", id, event);
    },

    onMouseEnter(id, event) {
      this.$emit("mouseenter", id, event);
    },

    onMouseLeave(id, event) {
      this.$emit("mouseleave", id, event);
    },

    onMouseMove(id, event) {
      this.$emit("mousemove", id, event);
    },

    onMouseOut(id, event) {
      this.$emit("mouseout", id, event);
    },

    onMouseOver(id, event) {
      this.$emit("mouseover", id, event);
    },

    onMouseUp(id, event) {
      this.$emit("mouseup", id, event);
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
