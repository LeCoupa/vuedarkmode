<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-badges.o-elements.o-elements--horizontal.o-elements--vertical-on-mobile
  div(
    v-for="(color, i) in badges.colors"
    :key="'badge' + color + i"
    class="o-elements__category"
  )
    div(
      v-for="(size, j) in badges.sizes"
      :key="'badge' + color + j + size"
      class="o-elements__item"
    )
      base-badge(
        :color="color"
        :size="size"
      ) {{ size }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseBadge from "@/components/darkmode/base/BaseBadge";

export default {
  components: {
    BaseBadge
  },

  data() {
    return {
      badges: {
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
        sizes: ["large", "medium", "default", "small", "mini"]
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-badges";

#{$c} {
  grid-template-columns: repeat(auto-fill, 400px);
  margin-bottom: 0;
}
</style>
