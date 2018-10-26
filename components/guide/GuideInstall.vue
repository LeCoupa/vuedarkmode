<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-install
  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="Bash")
      | npm install vuedarkmode
      |
      | # Or if you prefer using yarn
      | yarn add vuedarkmode

  base-heading(
    class="c-guide-install__title"
    type="h3"
  ) Vue.js

  base-heading(
    class="c-guide-install__paragraph"
    type="p"
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
    type="h3"
  ) Nuxt.js

  base-heading(
    class="c-guide-install__paragraph"
    type="p"
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
    class="c-guide-install__paragraph"
    type="p"
  )
    | Add this new plugin to nuxt.config.js.
    | Don't forget to set ssr to false as VueDarkMode only works in the browser for the time being.

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
    type="h3"
  ) CDN

  base-heading(
    class="c-guide-install__paragraph"
    type="p"
  )
    | Get the latest version from jsdelivr, and import the JavaScript file in your page.

  pre(
    v-highlightjs
    class="c-guide-install__code"
  )
    code(class="HTML")
      | &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"&gt;&lt;/script&gt;
      | &lt;script src="https://cdn.jsdelivr.net/npm/vuedarkmode@0.1/dist/vuedarkmode.min.js"&gt;&lt;/script&gt;

  base-heading(
    class="c-guide-install__paragraph"
    type="p"
  )
    | We recommend our users to lock VueDarkMode's version when using CDN.
    | Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous
    | because major versions usually come with breaking changes. Only do this if you really know
    | what you are doing.



</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseHeading from "@/components/darkmode/base/BaseHeading";
import CommonCommand from "@/components/common/CommonCommand";

export default {
  components: {
    BaseHeading,
    CommonCommand
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-install";

#{$c} {
  #{$c}__title {
    margin-top: 40px;
  }

  #{$c}__paragraph {
    margin-top: 10px;
  }

  #{$c}__code {
    margin: 40px 0;
  }
}
</style>
