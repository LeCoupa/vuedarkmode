<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-package-options
  pre(
    v-highlightjs
    class="c-guide-package-options__code"
  )
    code(class="javascript")
      | import VueDarkMode from "vuedarkmode";
      |
      | Vue.use(VueDarkMode, {
      |   // Specify the components to declare globally in your project
      |   // When undefined, null or given an empty array, all components will be imported
      |   components: [
      |     // Base components
      |     "alert", "avatar", "badge", "button", "divider", "heading", "icon",  "progress-bar",  "social-login", "spinner",
      |
      |     // Form components
      |     "checkbox", "file", "input", "label", "message", "radios", "select", "tabs", "textarea", "toggle"
      |   ]
      | });


  base-heading(
    tag="h4"
    weight="regular"
  ) How to update the font-family for all components?

  pre(v-highlightjs)
    code(class="scss")
      | [class^="dm-"]:not(.dm-base-icon) {
      |   font-family: Arial, Helvetica, sans-serif !important;
      | }
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// VUE DARK MODE
import BaseHeading from "@/../lib/components/base/BaseHeading";

export default {
  components: {
    BaseHeading
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss"></style>w
