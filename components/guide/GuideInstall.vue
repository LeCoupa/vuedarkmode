<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-install
  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="bash")
      | npm install vuedarkmode
      |
      | # Or if you prefer using yarn
      | yarn add vuedarkmode

  base-heading(
    class="c-guide-install__title"
    tag="h3"
  ) Vue.js

  base-heading(
    tag="p"
  ) In your main.js file:

  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="javascript")
      | import Vue from "vue";
      | import VueDarkMode from "vuedarkmode";
      |
      | Vue.use(VueDarkMode);

  base-heading(
    class="c-guide-install__title"
    tag="h3"
  ) Nuxt.js

  base-heading(
    tag="p"
  )
    | Create a new plugin in plugins/vuedarkmode.js:

  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="javascript")
      | import Vue from "vue";
      | import VueDarkMode from "vuedarkmode";
      |
      | Vue.use(VueDarkMode);

  base-heading(
    tag="p"
  )
    | Add this new plugin to nuxt.config.js.
    br
    | Don't forget to set ssr to false as Vue Dark Mode only works in the browser for the time being.

  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="javascript")
      | {
      |   // ...
      |   plugins: [
      |     { src: "@/plugins/vuedarkmode.js", ssr: false }
      |   ]
      | }

  base-heading(
    class="c-guide-install__title"
    tag="h3"
  ) CDN

  base-heading(
    tag="p"
  )
    | Get the latest version from jsdelivr, and import the JavaScript file in your page.

  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="html")
      | &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"&gt;&lt;/script&gt;
      | &lt;script src="https://cdn.jsdelivr.net/npm/vuedarkmode@latest/dist/vuedarkmode.min.js"&gt;&lt;/script&gt;

  base-heading(
    tag="p"
  )
    | We recommend our users to lock Vue Dark Mode's version when using CDN.
    | Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous
    | because major versions usually come with breaking changes. Only do this if you really know
    | what you are doing.
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseHeading from "@/lib//base/BaseHeading";

export default {
  components: {
    BaseHeading
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".c-guide-install";

#{$c} {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;

  #{$c}__title {
    margin-top: 35px;
  }
}
</style>
