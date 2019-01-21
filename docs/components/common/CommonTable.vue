<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
vuetable(
  :api-mode="false"
  :data="data"
  :fields="fields"
  class="c-common-table"
)
  template(
    slot="type"
    slot-scope="props"
  )
    span(
      v-if="props.rowData.type.type"
      class="c-common-table__type"
    ) {{ props.rowData.type.type }}

    span(
      v-if="props.rowData.type.additional"
      class="c-common-table__additional"
    ) {{ props.rowData.type.additional }}

  template(
    slot="details"
    slot-scope="props"
  )
    span(
      v-if="props.rowData.details.description"
      class="c-common-table__description"
    ) {{ props.rowData.details.description }}

    span(
      v-if="props.rowData.details.values"
      class="c-common-table__values"
    ) {{ props.rowData.details.values }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import Vuetable from "vuetable-2";

export default {
  components: {
    Vuetable
  },

  props: {
    data: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".c-common-table";

#{$c} {
  overflow-x: auto;
  text-align: left;

  table {
    margin: 0 auto;
    min-width: 640px;
    max-width: 800px;
    border-collapse: collapse;

    thead,
    tbody {
      tr {
        th,
        td {
          padding: 14px 20px;
        }
      }
    }

    thead {
      tr {
        th {
          color: $nepal;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 14px;
          user-select: none;
        }
      }
    }

    tbody {
      tr {
        td {
          color: $white;
          font-size: 16px;
          line-height: 26px;

          .c-common-table__type,
          .c-common-table__additional,
          .c-common-table__description,
          .c-common-table__values {
            display: block;
          }

          .c-common-table__additional,
          .c-common-table__values {
            color: $nepal;
            font-size: 15px;
          }
        }

        &:nth-child(even) {
          border: 1px solid $oxford-blue;
          background: rgba($ebony-clay-2, 0.4);
        }
      }
    }
  }
}
</style>
