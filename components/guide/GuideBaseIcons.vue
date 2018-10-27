<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-icons
  div(v-if="!documentation")
    .c-guide-base-icons__container.o-elements
      base-icon(
        v-for="(icon, i) in icons"
        v-if="i < maxIcons"
        :aria-label="icon"
        :key="icon"
        :name="icon"
        class="c-guide-base-icons__icon hint--top hint--no-animate"
        color="white"
        cursor="pointer"
      )

    base-button(
      v-if="maxIcons !== 1000"
      @click="maxIcons = 1000;"
      :reverse="true"
      color="white"
      size="small"
    ) Show all icons

  div(v-else)
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-icon&gt;&lt;/dm-icon&gt;
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseButton from "@/components/darkmode/base/BaseButton";
import BaseIcon from "@/components/darkmode/base/BaseIcon";
import icons from "@/data/icons";

export default {
  components: {
    BaseButton,
    BaseIcon
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      icons: icons,
      maxIcons: 207
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-icons";

#{$c} {
  #{$c}__container {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 24px);

    #{$c}__icon {
      // Update tooltip color
      &::before {
        border-top-color: $black;
      }
      &::after {
        background: $black;
      }
    }
  }
}
</style>
