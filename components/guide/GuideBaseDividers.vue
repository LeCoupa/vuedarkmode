<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-dividers.o-elements
  div(
    v-for="(color, i) in dividers.colors"
    :key="'divider' + color + i"
    class="o-elements__category"
  )
    div(
      v-for="(size, j) in dividers.sizes"
      :key="'divider' + color + j + size"
      class="o-elements__item"
    )
      base-divider(
        :color="color"
        :size="size"
        class="c-guide-base-dividers__divider"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseDivider from "@/components/darkmode/base/BaseDivider";

export default {
  components: {
    BaseDivider
  },

  data() {
    return {
      dividers: {
        colors: [
          "blue",
          "green",
          "red",
          "orange",
          "turquoise",
          "purple",
          "black",
          "white"
        ],
        sizes: ["large", "small"]
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-dividers";

#{$c} {
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 100%);
  margin-bottom: 0;

  #{$c}__divider {
    margin: 0 auto;
  }
}
</style>
