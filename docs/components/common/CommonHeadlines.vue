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
    weight="regular"
  ) {{ description }}

  .c-common-headlines__buttons
    base-button(
      v-if="hasDocumentation"
      @click="onToggleDocumentation"
      :reverse="true"
      :left-icon="documentationVisibility ? 'extension' : 'explore'"
      class="c-common-headlines__button"
      color="blue"
      size="small"
    ) {{ documentationVisibility ? "Preview" : "Documentation" }}

    base-button(
      v-if="sourceUrl"
      @click="onOpenSourceUrl"
      :reverse="true"
      class="c-common-headlines__button"
      color="orange"
      left-icon="code"
      size="small"
    ) Source Code

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
    sourceUrl: {
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

    onOpenSourceUrl() {
      window.open(this.sourceUrl, "_blank");
    },

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

  #{$c}__description {
    margin: 0;
  }

  #{$c}__buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    #{$c}__button {
      margin-right: 10px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  #{$c}__divider {
    margin-top: 20px;
  }
}
</style>
