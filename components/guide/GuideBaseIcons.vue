<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-icons
  .c-guide-base-icons__container.o-elements
    base-icon(
      v-for="(icon, i) in icons"
      v-if="i < maxIcons"
      :aria-label="icon"
      :key="icon"
      :name="icon"
      class="c-guide-base-icons__icon hint--top hint--no-animate"
      color="white"
    )

  base-button(
    v-if="maxIcons !== 1000"
    @click="maxIcons = 1000;"
    :reverse="true"
    color="white"
    size="small"
  ) Show all icons
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseButton from "@/components/darkmode/base/BaseButton";
import BaseIcon from "@/components/darkmode/base/BaseIcon";

export default {
  components: {
    BaseButton,
    BaseIcon
  },

  props: {
    icons: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      // --> STATE <--
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
    overflow: hidden;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 24px);

    #{$c}__icon {
      cursor: pointer;

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
