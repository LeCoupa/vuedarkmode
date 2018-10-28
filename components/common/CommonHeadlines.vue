<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-common-headlines
  base-heading(
    class="c-common-headlines__title"
    type="h2"
  ) {{ title }}

  base-heading(
    v-if="description"
    class="c-common-headlines__description"
    type="h3"
  ) {{ description }}

  //- common-command(
  //-   v-if="command"
  //-   class="c-common-headlines__command"
  //- ) {{ command }}

  base-button(
    v-if="hasDocumentation"
    @click="onToggleDocumentation"
    :reverse="true"
    :rightIcon="documentationVisibility ? 'extension' : 'explore'"
    class="c-common-headlines__button"
    color="blue"
    size="small"
  ) {{ documentationVisibility ? "Show components" : "Show documentation" }}

  base-divider(
    class="c-common-headlines__divider"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseButton from "@/components/darkmode/base/BaseButton";
import BaseDivider from "@/components/darkmode/base/BaseDivider";
import BaseHeading from "@/components/darkmode/base/BaseHeading";
import BaseIcon from "@/components/darkmode/base/BaseIcon";
import CommonCommand from "@/components/common/CommonCommand";

export default {
  components: {
    BaseButton,
    BaseDivider,
    BaseHeading,
    BaseIcon,
    CommonCommand
  },

  props: {
    command: {
      type: String,
      default: null
    },
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
