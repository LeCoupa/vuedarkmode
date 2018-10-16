<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
div(
  :class=`[
    "c-common-command",
    {
      "c-common-command--full-width": fullWidth
    }
  ]`
)
  .c-common-command__container
    span.c-common-command__slot: slot

    base-icon(
      @click="onCopyCommand"
      aria-label="Copy to clipboard"
      class="c-common-command__icon hint--top hint--no-animate"
      cursor="pointer"
      name="content_copy"
      size="16px"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
import BaseIcon from "@/components/darkmode/base/BaseIcon";

export default {
  components: {
    BaseIcon
  },

  props: {
    fullWidth: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onCopyCommand() {
      console.log("copying");
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-common-command";

#{$c} {
  display: inline-block;
  margin: 0 auto;
  padding: 10px 20px;
  border: 1px solid $oxford-blue;
  border-radius: 4px;
  background: rgba($ebony-clay-2, 0.4);

  #{$c}__container {
    display: flex;
    align-items: center;

    #{$c}__slot {
      flex: 1;
      margin-right: 10px;
      color: $white;
      font-size: 16px;
      line-height: 24px;
    }

    #{$c}__icon {
      // Update tooltip color
      &::before {
        border-top-color: $black;
      }
      &::after {
        background: $black;
      }
    }
  }

  // --> BOOLEANS <--

  &--full-width {
    display: block;
    width: 100%;
  }
}
</style>
