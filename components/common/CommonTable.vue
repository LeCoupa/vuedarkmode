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
    span.c-common-table__type {{ props.rowData.type.type }}
    span.c-common-table__additional {{ props.rowData.type.additional }}

  template(
    slot="details"
    slot-scope="props"
  )
    span.c-common-table__description {{ props.rowData.details.description }}
    span.c-common-table__values {{ props.rowData.details.values }}
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
$c: ".c-common-table";

#{$c} {
  overflow-x: scroll;

  table {
    margin: 0 auto;
    min-width: 640px;
    max-width: 1000px;
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

          .c-common-table__type,
          .c-common-table__additional,
          .c-common-table__description,
          .c-common-table__values {
            display: block;
          }

          .c-common-table__type,
          .c-common-table__description {
            margin-bottom: 6px;
          }

          .c-common-table__additional,
          .c-common-table__values {
            color: $nepal;
            font-size: 15px;
            line-height: 26px;
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
