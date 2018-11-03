<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  @click="onClick(id, $event)"
  :class=`[
    "dm-base-avatar",
    "dm-base-avatar--" + size,
    {
      "dm-base-avatar--bordered": bordered,
      "dm-base-avatar--circular": circular,
      "dm-base-avatar--complementaries": complementaries
    }
  ]`
  :id="id"
  tabindex="0"
)
  span(
    :style=`{
      backgroundImage: "url(" + src + ")",
      cursor: cursor
    }`
    class="dm-base-avatar__image"
  )
    div(
      v-if="complementaries"
      class="dm-base-avatar__complementaries"
    )
      span(
        v-for="complementary in complementaries"
        :key="complementary.src"
        :style=`{
          backgroundImage: "url(" + complementary.src + ")",
        }`
        class="dm-base-avatar__image dm-base-avatar__complementary"
      )

  span(
    v-if="description"
    class="dm-base-avatar__description"
  ) {{ description }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
// import BaseAvatar from "./BaseAvatar.vue";

export default {
  name: "BaseAvatar",

  // components: {
  //   BaseAvatar
  // },

  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    complementaries: {
      type: Array,
      default: null
    },
    cursor: {
      type: String,
      default: "default",
      validator(x) {
        return ["default", "pointer"].indexOf(x) !== -1;
      }
    },
    description: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large", "huge"].indexOf(x) !==
          -1
        );
      }
    },
    src: {
      type: String,
      required: true
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(id, event) {
      this.$emit("click", id, event);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";

$c: ".dm-base-avatar";
$sizes: mini, small, default, medium, large, huge;

#{$c} {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;

  #{$c}__image {
    display: inline-block;
    box-sizing: border-box;
    background-size: cover;
    box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
    user-select: none;
  }

  #{$c}__complementaries {
    display: flex;
    justify-content: flex-end;

    #{$c}__complementary {
      margin-right: 4px;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      border: 1px solid $white;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__image {
        border-radius: 2px + (2px * $i);

        @if ($size == mini) {
          width: 30px;
          height: 30px;
        } @else {
          width: 20px + (20px * $i);
          height: 20px + (20px * $i);
        }
      }

      #{$c}__description {
        padding-top: 4px + (1px * $i);
        text-transform: uppercase;
        font-size: 8px + (2px * $i);
      }
    }
  }

  // --> BOOLEANS <--

  &--bordered {
    #{$c}__image {
      border: 1px solid $white;
    }
  }

  &--circular {
    #{$c}__image {
      border-radius: 100%;
    }
  }

  &--complementaries {
    > #{$c}__image {
      position: relative;

      #{$c}__complementaries {
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
    }
  }
}
</style>
