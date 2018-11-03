<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-github-buttons
  span.c-the-github-buttons__wrapper
    iframe(
      :src="'https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=star&count=true'"
      class="c-the-github-buttons__button c-the-github-buttons__button--star"
      frameborder="0"
      height="20px"
      scrolling="0"
    )

  span.c-the-github-buttons__wrapper
    iframe(
      :src="'https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=watch&count=true&v=2'"
      class="c-the-github-buttons__button c-the-github-buttons__button--watch"
      frameborder="0"
      height="20px"
      scrolling="0"
    )

  span.c-the-github-buttons__wrapper
    iframe(
      :src="'https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=fork&count=true'"
      class="c-the-github-buttons__button c-the-github-buttons__button--fork"
      frameborder="0"
      height="20px"
      scrolling="0"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    repo: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-the-github-buttons";

#{$c} {
  #{$c}__wrapper {
    display: inline-block;
    margin-bottom: 10px;
    width: 100%;

    #{$c}__button {
      margin: 0 auto;

      &--star {
        width: 95px;
      }

      &--watch {
        width: 95px;
      }

      &--fork {
        width: 80px;
      }

      &:nth-last-of-type {
        margin-bottom: 0;
      }
    }
  }
}

@include mq($from: tablet) {
  #{$c} {
    display: flex;
    justify-content: center;

    #{$c}__wrapper {
      margin-bottom: 0;
      width: initial;
    }
  }
}
</style>
