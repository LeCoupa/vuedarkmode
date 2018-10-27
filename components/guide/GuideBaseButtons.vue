<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-buttons
  div(v-if="!documentation")
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

  div(v-else)
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-button&gt;&lt;/dm-button&gt;
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
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      buttons: {
        colors: ["blue", "green", "red", "orange", "black", "white"],
        icons: [
          "add_circle",
          "check_circle",
          "favorite_border",
          "star",
          "get_app",
          "camera_alt"
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
$c: ".c-guide-base-buttons";

#{$c} {
  #{$c}__container {
    grid-template-columns: repeat(auto-fill, 250px);
  }
}
</style>
