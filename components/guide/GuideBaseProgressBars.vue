<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-progress-bars
  div(
    v-if="!documentation"
    class="c-guide-base-progress-bars__showroom o-elements"
  )
    div(
      v-for="(progressBar, i) in progressBars"
      :key="'progressBar' + i"
      class="o-elements__category"
    )
      base-progress-bar(
        :color="progressBar.color"
        :details="progressBar.details"
        :progress="(i + 1) * 10"
        :title="progressBar.title"
      )

  div(
    v-else
    class="c-guide-base-progress-bars__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-progress-bar&gt;&lt;/dm-progress-bar&gt;
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseProgressBar from "@/components/darkmode/base/BaseProgressBar";

export default {
  components: {
    BaseProgressBar
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      progressBars: [
        {
          color: "blue",
          title: "Loading",
          details: "10%"
        },
        {
          color: "green",
          title: "Progression",
          details: "20%"
        },
        {
          color: "red",
          title: "Experience",
          details: "30%"
        },
        {
          color: "orange",
          title: "XPs until next level",
          details: "2/5"
        },
        {
          color: "turquoise",
          title: "XPs until next level",
          details: "5/10"
        },
        {
          color: "purple",
          title: "XPs until next level",
          details: "6/10"
        },
        {
          color: "black",
          title: "Remaining Steps",
          details: "7/10"
        },
        {
          color: "white",
          title: "Completed Steps",
          details: "8/10"
        }
      ]
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-progress-bars";

#{$c} {
  #{$c}__showroom {
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 80%);
    margin-bottom: 0;
  }
}
</style>
