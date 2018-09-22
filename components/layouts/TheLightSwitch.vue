<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-light-switch
  field-toggle(
    @change="onThemeUpdate"
    :checked="theme === 'light'"
    :label="theme === 'light' ? 'Turn off the lights' : 'Turn on the lights'"
    name="theme"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldToggle from "@/components/form/FieldToggle";

export default {
  components: {
    FieldToggle
  },

  data() {
    return {
      // --> STATE <--
      theme: "dark"
    };
  },

  methods: {
    onThemeUpdate(name, value) {
      console.log(name, value);
      this.theme = value ? "light" : "dark";
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-the-light-switch";

#{$c} {
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: 14px;
  width: 180px;
  height: 38px;
  border: 1px solid $oxford-blue;
  border-top-left-radius: 6px;
  background-color: $ebony-clay-2;
  box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
  text-align: left;
}
</style>
