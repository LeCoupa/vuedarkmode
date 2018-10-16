<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-avatars
  div(
    v-for="type in ['avatars', 'thumbnails']"
    class="c-guide-base-avatars__container o-elements o-elements--horizontal o-elements--vertical-on-mobile"
  )
    .o-elements__category
      div(
        v-for="(size, i) in avatars.sizes"
        :key="'avatar' + size + i"
        class="o-elements__item"
      )
        base-avatar(
          v-if="type === 'avatars'"
          :size="size"
          src="/images/medley/nada.jpeg"
        )
        base-avatar(
          v-else-if="type === 'thumbnails'"
          :bordered="true"
          :circular="false"
          :complementaries="avatars.complementaries[size]"
          :description="size"
          :size="size"
          src="/images/medley/tesla.jpg"
        )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseAvatar from "@/components/darkmode/base/BaseAvatar";

export default {
  components: {
    BaseAvatar
  },

  props: {
    avatars: {
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
$c: ".c-guide-base-avatars";

#{$c} {
  #{$c}__container {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 20px;
  }
}
</style>
