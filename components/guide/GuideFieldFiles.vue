<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-field-files.o-elements
  div(
    v-for="(statuses, i) in files.statuses"
    :key="'files ' + i"
    class="o-elements__category"
  )
    div(
      v-if="statuses[j]"
      v-for="(size, j) in files.sizes"
      :key="'files ' + i + ' ' + j"
      class="o-elements__item"
    )
      field-file(
        :fullWidth="false"
        :label="size.charAt(0).toUpperCase() + size.slice(1) + ' file upload (' + statuses[j] + ')'"
        :name="'file_' + size + '_'  + statuses[j] + i + j"
        :size="size"
        :status="statuses[j]"
        description="JPG, max. 500KB"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import FieldFile from "@/components/darkmode/form/FieldFile";

export default {
  components: {
    FieldFile
  },

  props: {
    files: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-field-files";

#{$c} {
  .dm-field-file__information {
    min-width: 235px;
  }
}
</style>
