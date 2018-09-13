<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-common-headlines
  base-heading(
    tag="h2"
    class="c-common-headlines__title"
  ) {{ title }}

  base-heading(
    tag="h3"
    class="c-common-headlines__description"
  ) {{ description }}

  base-button(
    v-if="hasDocumentation"
    @click="showDocumentation"
    :reverse="true"
    size="small"
    color="white"
    class="c-common-headlines__documentation"
  ) Show documentation
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    },
    hasDocumentation: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    }
  },

  methods: {
    showDocumentation() {
      this.$emit("showDocumentation");
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-common-headlines";

#{$c} {
  margin-bottom: 40px;

  #{$c}__description {
    margin-bottom: 0;
  }

  #{$c}__documentation {
    margin-top: 15px;
  }
}
</style>
