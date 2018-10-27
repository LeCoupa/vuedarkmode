<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-dividers
  div(
    v-if="!documentation"
    class="c-guide-base-dividers__showroom o-elements"
  )
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

  div(
    v-else
    class="c-guide-base-dividers__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-divider&gt;&lt;/dm-divider&gt;
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

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
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
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;

    #{$c}__divider {
      margin: 0 auto;
    }
  }
}
</style>
