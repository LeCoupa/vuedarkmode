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
    title: {
      type: String,
      required: true
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
}
</style>
