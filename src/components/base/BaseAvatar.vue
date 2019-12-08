<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  @click="onClick"
  :class=`[
    "gb-base-avatar",
    "gb-base-avatar--" + size,
    "gb-base-avatar--" + computedTheme,
    {
      "gb-base-avatar--animated": animated,
      "gb-base-avatar--bordered": bordered,
      "gb-base-avatar--circular": circular,
      "gb-base-avatar--clickable": $listeners.click && clickable !== false,
      "gb-base-avatar--secondaries": secondaries,
      "gb-base-avatar--shadow": shadow
    }
  ]`
)
  span(
    @keypress.prevent="onKeypress"
    :style=`{ backgroundImage: "url(" + src + ")" }`
    :tabindex="$listeners.click ? '0' : null"
    class="gb-base-avatar__image"
  )
    span.gb-base-avatar__focuser

    div(
      v-if="secondaries"
      class="gb-base-avatar__secondaries"
    )
      span(
        v-for="secondary in secondaries"
        :key="secondary.src"
        :style=`{
          backgroundImage: "url(" + secondary.src + ")",
        }`
        class="gb-base-avatar__image gb-base-avatar__secondary"
      )

  span(
    v-if="description"
    class="gb-base-avatar__description"
  ) {{ description }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: MIXINS
import ThemeMixin from "../../mixins/ThemeMixin.js"

export default {
  mixins: [ThemeMixin],

  props: {
    animated: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    id: {
      type: [String, Number],
      default: null
    },
    secondaries: {
      type: Array,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["nano", "micro", "mini", "small", "default", "medium", "large", "huge"].includes(x)
      }
    },
    shadow: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      required: true
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      this.$emit("click", this.id, event)
    },

    onKeypress(event) {
      if (event.code === "Space") {
        event.target.click()
      }
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".gb-base-avatar";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large", "huge";

#{$c} {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

  @include no-tap-highlight-color;

  #{$c}__image {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    outline: 0;
    background-size: cover;
    transition: all linear 0s;
    user-select: none;

    #{$c}__focuser {
      position: absolute;
      top: -3px;
      right: -3px;
      bottom: -3px;
      left: -3px;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      opacity: 0;
      transition: all linear 250ms;
    }

    #{$c}__secondaries {
      display: flex;
      justify-content: flex-end;

      #{$c}__secondary {
        margin-right: 4px;
        width: 30px;
        height: 30px;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-shadow: none;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  #{$c}__description {
    text-align: center;
    text-transform: uppercase;
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      #{$c}__image {
        @if ($size == "nano") {
          width: 20px;
          height: 20px;
          border-radius: 2px;

          #{$c}__focuser {
            border-radius: 4px;
          }
        } @else if ($size == "micro") {
          width: 24px;
          height: 24px;
          border-radius: 2px;

          #{$c}__focuser {
            border-radius: 4px;
          }
        } @else if ($size == "mini") {
          width: 30px;
          height: 30px;
          border-radius: 4px;

          #{$c}__focuser {
            border-radius: 6px;
          }
        } @else {
          width: 20px * ($i - 1);
          height: 20px * ($i - 1);
          border-radius: 2px * ($i - 1);

          #{$c}__focuser {
            border-radius: 2px * ($i - 1) + 2px;
          }
        }
      }

      #{$c}__description {
        @if ($size == "nano") {
          padding-top: 3px;
          font-size: 8px;
          line-height: 12px;
        } @else if ($size == "micro") {
          padding-top: 3px;
          font-size: 10px;
          line-height: 14px;
        } @else if ($size == "mini") {
          padding-top: 3px;
          font-size: 12px;
          line-height: 16px;
        } @else {
          padding-top: 3px + (1px * $i);
          font-size: 4px + (2px * $i);
          line-height: 8px + (2px * $i);
        }
      }
    }
  }

  // --> BOOLEANS <--

  &--animated {
    #{$c}__image {
      transition: transform 250ms linear;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &--bordered {
    #{$c}__image {
      border-width: 1px;
      border-style: solid;
    }
  }

  &--circular {
    #{$c}__image {
      border-radius: 100%;

      #{$c}__focuser {
        border-radius: 100%;
      }
    }
  }

  &--clickable {
    cursor: pointer;
  }

  &--secondaries {
    > #{$c}__image {
      position: relative;

      #{$c}__secondaries {
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    $themeName: map-get($theme, "name");

    &--#{themeName} {
      #{$c}__image {
        #{$c}__secondaries {
          #{$c}__secondary {
            border-color: mdg($theme, "borders", "reverse", "primary");
          }
        }
      }

      // --> BOOLEANS <--

      &#{$c}--bordered {
        #{$c}__image {
          border-color: mdg($theme, "borders", "reverse", "primary");
        }
      }

      &#{$c}--clickable {
        #{$c}__image {
          &:focus {
            #{$c}__focuser {
              border-color: mdg($theme, "statuses", "active");
            }
          }
        }
      }

      &#{$c}--shadow {
        #{$c}__image {
          box-shadow: 0 1px 3px 0 mdg($theme, "box-shadows", "default", "primary");
        }
      }
    }
  }

  // --> INTERACTIONS <--

  &--clickable {
    #{$c}__image {
      &:focus {
        #{$c}__focuser {
          opacity: 1;
        }
      }
    }
  }
}
</style>
