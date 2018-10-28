<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  :class=`[
    "dm-base-social-login",
    "dm-base-social-login--" + network,
    "dm-base-social-login--" + size,
    {
      "dm-base-social-login--full-width": fullWidth
    }
  ]`
)
  span.dm-base-social-login__inner
    span.dm-base-social-login__icon

    span(
      v-if="size === 'large'"
      class="dm-base-social-login__label"
    ): slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    network: {
      type: String,
      required: true,
      validator(x) {
        return ["facebook", "google", "messenger", "twitter"].indexOf(x) !== -1;
      }
    },
    size: {
      type: String,
      default: "large",
      validator(x) {
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick() {
      this.$emit("click", this.network);
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
@import "assets/settings/_settings.colors.scss";

$c: ".dm-base-social-login";
$iconPath: "/images/components/darkmode/base/BaseSocialLogin";
$networks: facebook, google, messenger, twitter;
$sizes: small, large;

#{$c} {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);
  color: $white;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  transition: all ease-in-out 200ms;
  user-select: none;
  cursor: pointer;

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;

    #{$c}__icon {
      display: inline-block;
      width: 20px;
      height: 20px;
    }

    #{$c}__label {
      margin-left: 8px;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
    }
  }

  // --> NETWORKS <--

  @each $network in $networks {
    &--#{$network} {
      background: map-get($socialColors, $network);

      #{$c}__inner {
        #{$c}__icon {
          background-image: url("#{$iconPath}/#{$network}.svg");

          @if ($network == "twitter") {
            height: 16px;
          }
        }
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: 10px (10px + 20px * $i);
    }
  }

  // --> BOOLEANS <--

  &--full-width {
    width: 100%;
  }

  // --> INTERACTIONS <--

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
