<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-headlines
  base-heading(
    type="h2"
    class="c-guide-headlines__title"
  ) {{ title }}

  base-heading(
    type="h3"
    class="c-guide-headlines__description"
  ) {{ description }}

  base-button(
    v-if="hasDocumentation"
    @click="toggleDocumentation"
    :reverse="true"
    rightIcon="explore"
    size="small"
    color="blue"
    class="c-guide-headlines__documentation"
  ) {{ documentationVisible ? "Hide" : "Show" }} documentation
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

  data() {
    return {
      documentationVisible: false
    };
  },

  methods: {
    toggleDocumentation() {
      this.documentationVisible = !this.documentationVisible;

      this.$emit("toggleDocumentation", this.documentationVisible);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-headlines";

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
