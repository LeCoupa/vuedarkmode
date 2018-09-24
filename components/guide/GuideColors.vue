<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-colors.o-elements
  common-color(
    v-for="color in colors"
    :hex="color.hex"
    :key="color.hex"
    :name="color.name"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import CommonColor from "@/components/common/CommonColor";

export default {
  components: {
    CommonColor
  },

  props: {
    colors: {
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
$c: ".c-guide-colors";

#{$c} {
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 100px);
  margin-bottom: 0;
}
</style>
