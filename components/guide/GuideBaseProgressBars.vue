<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-progress-bars.o-elements
  div(
    v-for="(progressBar, i) in progressBars"
    :key="'progressBar' + i"
    class="o-elements__category"
  )
    base-progress-bar(
      :color="progressBar.color"
      :labelMain="progressBar.labelMain"
      :labelSecondary="progressBar.labelSecondary"
      :progress="(i + 1) * 10"
    )
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

  data() {
    return {
      progressBars: [
        {
          color: "blue",
          labelMain: "Loading",
          labelSecondary: "10%"
        },
        {
          color: "green",
          labelMain: "Progression",
          labelSecondary: "20%"
        },
        {
          color: "red",
          labelMain: "Experience",
          labelSecondary: "30%"
        },
        {
          color: "orange",
          labelMain: "XPs until next level",
          labelSecondary: "2/5"
        },
        {
          color: "turquoise",
          labelMain: "XPs until next level",
          labelSecondary: "5/10"
        },
        {
          color: "purple",
          labelMain: "XPs until next level",
          labelSecondary: "6/10"
        },
        {
          color: "black",
          labelMain: "Remaining Steps",
          labelSecondary: "7/10"
        },
        {
          color: "white",
          labelMain: "Completed Steps",
          labelSecondary: "8/10"
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
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 80%);
  margin-bottom: 0;
}
</style>
