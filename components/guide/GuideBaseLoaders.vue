<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-loaders.o-elements
  div(
    v-for="(loader, i) in loaders"
    :key="'loader' + i"
    class="o-elements__category"
  )
    base-loader(
      :color="loader.color"
      :labelMain="loader.labelMain"
      :labelSecondary="loader.labelSecondary"
      :progress="(i + 1) * 10"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseLoader from "@/components/darkmode/base/BaseLoader";

export default {
  components: {
    BaseLoader
  },

  props: {
    loaders: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-loaders";

#{$c} {
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 80%);
  margin-bottom: 0;
}
</style>
