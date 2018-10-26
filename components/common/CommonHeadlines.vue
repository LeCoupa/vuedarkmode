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
    class="c-common-headlines__documentation"
    color="blue"
    size="small"
  ) {{ documentationVisibility ? "Show components" : "Read documentation" }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseButton from "@/components/darkmode/base/BaseButton";
import CommonCommand from "@/components/common/CommonCommand";
import BaseHeading from "@/components/darkmode/base/BaseHeading";
import BaseIcon from "@/components/darkmode/base/BaseIcon";

export default {
  components: {
    BaseButton,
    CommonCommand,
    BaseHeading,
    BaseIcon
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  #{$c}__title,
  #{$c}__description,
  #{$c}__command,
  #{$c}__documentation {
    flex: 0 0 auto;

    &:last-child {
      margin-bottom: 0;
    }
  }

  #{$c}__title {
    margin-bottom: 10px;
  }

  #{$c}__description {
    margin-bottom: 15px;
  }

  #{$c}__command {
    margin-bottom: 15px;
  }
}
</style>
