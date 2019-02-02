<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
i(
  @click="onClick"
  @dblclick="onDoubleClick"
  @keypress="onKeypress"
  @mousedown="onMouseDown"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave"
  @mousemove="onMouseMove"
  @mouseout="onMouseOut"
  @mouseover="onMouseOver"
  @mouseup="onMouseUp"
  :class=`[
    "dm-base-icon",
    {
      "dm-base-icon--clickable": clickable
    }
  ]`
  :id="id"
  :style=`{
    color: color,
    fontSize: size
  }`
  :tabindex="clickable ? '0' : null"
  aria-hidden="true"
) {{ name }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null
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

    onClick(event) {
      if (this.clickable) {
        this.$emit("click", this.id, event);
      }
    },

    onDoubleClick(event) {
      this.$emit("dblclick", this.id, event);
    },

    onKeypress(event) {
      if (this.clickable && event.which === 32) {
        event.preventDefault();
        event.target.click();
      }

      this.$emit("keypress", this.id, event);
    },

    onMouseDown(event) {
      this.$emit("mousedown", this.id, event);
    },

    onMouseEnter(event) {
      this.$emit("mouseenter", this.id, event);
    },

    onMouseLeave(event) {
      this.$emit("mouseleave", this.id, event);
    },

    onMouseMove(event) {
      this.$emit("mousemove", this.id, event);
    },

    onMouseOut(event) {
      this.$emit("mouseout", this.id, event);
    },

    onMouseOver(event) {
      this.$emit("mouseover", this.id, event);
    },

    onMouseUp(event) {
      this.$emit("mouseup", this.id, event);
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

// Based on Material Icons
// https://google.github.io/material-design-icons/#icon-font-for-the-web
.dm-base-icon {
  display: inline-block;
  outline: 0;
  border-radius: 2px;
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

  // --> BOOLEANS <--

  &--clickable {
    cursor: pointer;

    &:focus {
      color: $azure-radiance !important;
      transition: color 250ms ease-in-out;
    }
  }
}

@font-face {
  font-weight: 400;
  font-style: normal;
  font-family: "Material Icons";
  src: url("https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2")
    format("woff2");
}
</style>
