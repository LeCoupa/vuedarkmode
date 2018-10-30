<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-install
  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="javascript")
      | import VueDarkMode from "vuedarkmode";
      |
      | Vue.use(VueDarkMode, {
      |   // Specify the components to declare globally in your project
      |   // When undefined, null or given an empty array, all components will be imported
      |   components: ["avatar", "badge", "button", "divider", "heading", "icon",  "progress-bar",  "social-login", "checkbox", "file", "input", "radio", "select", "tabs", "textarea", "toggle"]
      | });
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
</style>
