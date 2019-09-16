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
      |     "alert", "avatar", "badge", "button", "divider", "heading", "icon",  "progress-bar",  "social-button", "spinner",
      |
      |     // Form components
      |     "checkbox", "file", "input", "label", "message", "radios", "select", "tabs", "textarea", "toggle"
      |   ]
      | });

  base-heading(
    tag="h4"
    weight="regular"
  ) How to install or update the font-family for all components?

  pre(v-highlightjs)
    code(class="html")
      | &lt;!-- We are using the Heebo font --&gt;
      | &lt;!-- Copy this code into the &lt;head> of your HTML document. --&gt;
      | &lt;link href="https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900" rel="stylesheet"&gt;
      |
      | &lt;!--  To update with your own font --&gt;
      | &lt;style&gt;
      | [class^="dm-"]:not(.dm-base-icon) {
      |   font-family: Arial, Helvetica, sans-serif !important;
      | }
      | &lt;/style&gt;
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
