<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-headlines
  common-heading(
    type="h2"
    class="c-guide-headlines__title"
  ) {{ title }}

  common-heading(
    type="h3"
    class="c-guide-headlines__description"
  ) {{ description }}

  common-button(
    v-if="hasDocumentation"
    @click="onToggleDocumentation"
    :reverse="true"
    :rightIcon="documentationVisibility ? 'extension' : 'explore'"
    size="small"
    color="blue"
    class="c-guide-headlines__documentation"
  ) {{ documentationVisibility ? "Show components" : "Read documentation" }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import CommonButton from "@/components/common/CommonButton";
import CommonHeading from "@/components/common/CommonHeading";
import CommonIcon from "@/components/common/CommonIcon";

export default {
  components: {
    CommonButton,
    CommonHeading,
    CommonIcon
  },

  props: {
    description: {
      type: String,
      required: true
    },
    hasDocumentation: {
      type: Boolean,
      default: true
    },
    section: {
      type: String,
      required: true
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
$c: ".c-guide-headlines";

#{$c} {
  margin-bottom: 40px;

  #{$c}__description {
    margin-bottom: 0;
  }

  #{$c}__documentation {
    margin-top: 15px;
  }
}
</style>
