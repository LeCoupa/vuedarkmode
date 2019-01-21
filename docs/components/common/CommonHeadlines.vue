<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-common-headlines
  base-heading(
    class="c-common-headlines__title"
    :uppercase="true"
    tag="h2"
  ) {{ title }}

  base-heading(
    v-if="description"
    class="c-common-headlines__description"
    tag="h3"
  ) {{ description }}

  base-button(
    v-if="hasDocumentation"
    @click="onToggleDocumentation"
    :reverse="true"
    :rightIcon="documentationVisibility ? 'extension' : 'explore'"
    class="c-common-headlines__button"
    color="blue"
  ) {{ documentationVisibility ? "Show components" : "Show documentation" }}

  base-divider(
    class="c-common-headlines__divider"
    color="blue"
    size="small"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// VUE DARK MODE
import BaseButton from "@/../lib/components/base/BaseButton";
import BaseDivider from "@/../lib/components/base/BaseDivider";
import BaseHeading from "@/../lib/components/base/BaseHeading";
import BaseIcon from "@/../lib/components/base/BaseIcon";

export default {
  components: {
    BaseButton,
    BaseDivider,
    BaseHeading,
    BaseIcon
  },

  props: {
    description: {
      type: String,
      default: null
    },
    hasDocumentation: {
      type: Boolean,
      default: true
    },
    section: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      documentationVisibility: false
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    onToggleDocumentation() {
      this.documentationVisibility = !this.documentationVisibility;

      this.$emit(
        "toggleDocumentation",
        this.section,
        this.documentationVisibility
      );
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".c-common-headlines";

#{$c} {
  margin-bottom: 40px;

  #{$c}__title {
    margin-bottom: 10px;
  }

  #{$c}__description,
  #{$c}__button {
    margin: 0;
  }

  #{$c}__divider {
    margin-top: 20px;
  }
}
</style>
