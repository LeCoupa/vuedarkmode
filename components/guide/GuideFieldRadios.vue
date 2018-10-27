<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-radios
  div(
    v-if="!documentation"
    class="c-guide-field-radios__showroom o-elements o-elements--form"
  )
    div(
      v-for="(statuses, i) in radios.statuses"
      :key="'radios ' + i"
      class="o-elements__category"
    )
      div(
        v-if="statuses[j]"
        v-for="(size, j) in radios.sizes"
        :key="'radios ' + i + ' ' + j"
        class="o-elements__item"
      )
        field-radio(
          :checked="j === 0"
          :fullWidth="false"
          :label="size.charAt(0).toUpperCase() + size.slice(1) + ' radio (' + statuses[j] + ')'"
          :name="'radios_' + i"
          :size="size"
          :status="statuses[j]"
          description="This is a customizable description for radios."
        )

  div(
    v-else
    class="c-guide-field-radios__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-radio&gt;&lt;/dm-radio&gt;
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldRadio from "@/components/darkmode/form/FieldRadio";

export default {
  components: {
    FieldRadio
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      radios: {
        sizes: ["large", "medium", "default", "small", "mini"],
        statuses: [
          ["normal", "normal", "normal", "normal", "normal"],
          ["normal", "success", "error", "warning"]
        ]
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
</style>
