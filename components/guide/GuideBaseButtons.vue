<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-buttons
  div(
    v-for="circular in [false, true]"
    :class=`[
      "c-guide-base-buttons__container",
      "o-elements",
      {
        "o-elements--horizontal": circular
      }
    ]`
  )
    div(
      v-for="(color, i) in buttons.colors"
      :key="'button' + color + i"
      class="o-elements__category"
    )
      div(
        v-for="(size, j) in buttons.sizes"
        :key="'button' + color + j + size"
        class="o-elements__item"
      )
        base-button(
          :circular="circular"
          :color="color"
          :leftIcon="buttons.icons[i]"
          :size="size"
          class="o-elements__button"
        ) {{ size }} {{ color }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseButton from "@/components/darkmode/base/BaseButton";

export default {
  components: {
    BaseButton
  },

  props: {
    buttons: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-buttons";

#{$c} {
  #{$c}__container {
    grid-template-columns: repeat(auto-fill, 250px);
  }
}
</style>
