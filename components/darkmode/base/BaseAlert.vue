<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
transition(
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
)
  .dm-base-alert(
    v-if="active"
    ref="alert"
    :class="`dm-base-alert--${color}`"
    v-on="$listeners"
  )
    .dm-base-alert__close(
      v-if="closable"
      @click="$emit('update:active', false)"
    )
      base-icon(
        name="close"
      )
    h4.dm-base-alert__title(
      v-if="title"
      :style="styleTitle"
    )
      span {{ title }}
    .dm-base-alert__main(
      v-if="$slots.default && $slots.default[0].text.trim()"
    )
      base-icon(
        v-if="icon"
        :color="colorIcon"
        :name="icon"
        :size="iconSize"
      )
      slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
import BaseIcon from "./BaseIcon.vue";

// PROJECT
export default {
  name:"BaseAlert",

  components: {
    BaseIcon
  },

  props: {
    active: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return (
          ["black", "blue", "green", "orange", "red", "white"].includes(x)
        );
      }
    },
    icon:{
      type: String,
      default: null
    },
    colorIcon: {
      type: String,
      default: "blue",
      validator(x) {
        return (
          ["black", "blue", "green", "orange", "red", "white"].includes(x)
        );
      }
    }
  },

  computed: {
    iconSize() {
      return {
        "mini": "12px",
        "small": "14px",
        "medium": "18px",
        "large": "20px"
      }[this.size];
    },
    styleTitle() {
      return {
        boxShadow: `0px 6px 15px -7px ${this.color}`
      };
    }
  },

  methods: {
    beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },

    enter(el, done) {
      const scrollHeight = this.$refs.alert.scrollHeight;

      this.$refs.alert.style.height = scrollHeight + 'px';
      el.style.opacity = 1;

      done();
    },

    leave(el) {
      this.$refs.alert.style.height = 0 + 'px';
      el.style.opacity = 0;
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-base-alert";
$colors: black, blue, green, red, orange, white;

#{$c} {
  border-radius: 6px;
  width: 100%;
  position: relative;
  font-size: .8rem;
  cursor: default;
  transition: all .25s ease;
  overflow: hidden;
  background-position: center;
  color: $white;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  transition: all ease-in-out 0.5s;
  margin: 15px;

  // --> CLOSABLE <--

  #{$c}__close {
    position: relative;
    margin-top: 4px;
    margin-right: 4px;
    float: right;
    padding: 4px;
    border-radius: 6px;
    padding-bottom: 1px;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
      box-shadow: 0px 5px 15px 0px rgba(0,0,0,.1);
    }
  }

  // --> SLOT <--

  #{$c}__main {
    padding: 10px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 4px;
  }

  // --> TITLE <--

  #{$c}__title {
    font-size: .9rem;
    font-weight: bold;
    padding: 0px 10px 8px;
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      // Reverse buttons have their own defined style (see below)
      &:not(#{$c}--reverse) {
        background: map-get($mainColors, $color)
          radial-gradient(
            circle,
            transparent 1%,
            map-get($mainColors, $color) 1%
          )
          center/15000%;

        @if ($color == black) {
          border: 1px solid $oxford-blue;
          background: $ebony-clay
            radial-gradient(circle, transparent 1%, $ebony-clay 1%)
            center/15000%;
        } @else if ($color == white) {
          color: $oxford-blue;
        }

        &:active {
          @if ($color == black) {
            background-color: map-get($mainColors, $color);
          } @else if ($color == white) {
            background-color: darken(map-get($mainColors, $color), 15%);
          } @else if ($color == orange or $color == red) {
            background-color: lighten(map-get($mainColors, $color), 20%);
          } @else {
            background-color: lighten(map-get($mainColors, $color), 10%);
          }
        }
      }
    }
  }
}
</style>
