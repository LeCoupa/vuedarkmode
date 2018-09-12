<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  :class=`[
    "c-base-social-auth",
    "c-base-social-auth--" + network,
    "c-base-social-auth--" + size,
    {
      "c-base-social-auth--block": block
    }
  ]`
)
  span.c-base-social-auth__inner
    span.c-base-social-auth__icon

    span.c-base-social-auth__label
      span(
        v-if="['small', 'large'].includes(size)"
        class="c-base-social-auth__action"
      ) {{ computedAction }}

      span(
        v-if="['large'].includes(size)"
        class="c-base-social-auth__network"
      )  with {{ network | capitalize }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  props: {
    action: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    network: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "large"
    }
  },

  computed: {
    computedAction() {
      // Return the action when defined as prop
      if (this.action) return this.action;

      switch (this.network) {
        case "facebook":
          return "Sign in";
        case "google":
          return "Sign in";
        case "messenger":
          return "Subscribe";
        case "twitter":
          return "Sign in";
      }
    }
  },

  methods: {
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
$c: ".c-base-social-auth";
$iconPath: "/images/components/base/BaseSocialLogin";
$networks: facebook, google, messenger, twitter;

#{$c} {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);
  color: $white;
  user-select: none;
  cursor: pointer;

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;

    #{$c}__icon {
      display: inline-block;
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }

    #{$c}__label {
      font-size: 15px;
      font-family: "Heebo Medium";
      line-height: 20px;
    }
  }

  // --> NETWORKS <--

  // @each $network in $networks {
  //   &--#{$network} {
  //     background: var($network);

  //     #{$c}__inner {
  //       #{$c}__icon {
  //         background-image: url("#{$iconPath}/#{$network}.svg");

  //         @if $network equals "twitter" {
  //           height: 16px;
  //         }
  //       }
  //     }
  //   }
  // }

  &--facebook {
    background: $facebook;

    #{$c}__inner {
      #{$c}__icon {
        background-image: url("#{$iconPath}/facebook.svg");
      }
    }
  }

  &--google {
    background: $google;

    #{$c}__inner {
      #{$c}__icon {
        background-image: url("#{$iconPath}/google.svg");
      }
    }
  }

  &--messenger {
    background: $messenger;

    #{$c}__inner {
      #{$c}__icon {
        background-image: url("#{$iconPath}/messenger.svg");
      }
    }
  }

  &--twitter {
    background: $twitter;

    #{$c}__inner {
      #{$c}__icon {
        height: 16px;
        background-image: url("#{$iconPath}/twitter.svg");
      }
    }
  }

  // --> SIZES <--

  &--mini {
    padding-right: 10px;
    padding-left: 10px;

    #{$c}__inner {
      #{$c}__icon {
        margin-right: 0;
      }
    }
  }

  &--small {
    padding-right: 40px;
    padding-left: 40px;
  }

  &--large {
    padding-right: 60px;
    padding-left: 60px;
  }

  // --> BOOLEANS <--

  &--block {
    display: block;
    width: 100%;
  }
}
</style>
