<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  @click="onClick"
  :class=`[
    "c-common-avatar",
    "c-common-avatar--" + size,
    {
      "c-common-avatar--bordered": bordered,
      "c-common-avatar--circular": circular,
      "c-common-avatar--complementaries": complementaries
    }
  ]`
)
  span(
    :style=`{
      backgroundImage: "url(" + src + ")"
    }`
    class="c-common-avatar__image"
  )
    span(
      v-if="complementaries"
      class="c-common-avatar__complementaries"
    )
      common-avatar(
        v-for="complementary in complementaries"
        :bordered="true"
        :circular="false"
        :key="complementary.src"
        :src="complementary.src"
        size="mini"
        class="c-common-avatar__complementary"
      )

  span(
    v-if="description"
    class="c-common-avatar__description"
  ) {{ description }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import CommonAvatar from "@/components/common/CommonAvatar";

export default {
  name: "CommonAvatar",

  components: {
    CommonAvatar
  },

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
    description: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default"
    },
    src: {
      type: String,
      required: true
    }
  },

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-common-avatar";
$sizes: mini, small, default, medium, large, huge;

#{$c} {
  display: flex;
  align-items: center;
  flex-direction: column;

  #{$c}__image {
    display: inline-block;
    box-sizing: border-box;
    background-size: cover;
    box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);
  }

  #{$c}__complementaries {
    display: flex;
    justify-content: flex-end;

    #{$c}__complementary {
      margin-right: 4px;

      &:last-of-type {
        margin-right: 0;
      }

      #{$c}__image {
        width: 30px;
        height: 30px;
        border-radius: 4px;
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__image {
        width: 20px + (20px * $i);
        height: 20px + (20px * $i);
        border-radius: 2px + (2px * $i);
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
