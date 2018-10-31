<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-headings
  div(
    v-if="!documentation"
    class="c-guide-headings__showroom"
  )
    .c-guide-headings__row.c-guide-headings__row--header
      span.c-guide-headings__type Type

      span.c-guide-headings__font-weight Font / Weight

      span.c-guide-headings__font-size Font Size

      span.c-guide-headings__line-height Line-Height

      span.c-guide-headings__normal-hover Normal

    .c-guide-headings__row.c-guide-headings__row--body
      span.c-guide-headings__type
        base-heading(type="h1") Heading 1

      span.c-guide-headings__font-weight.c-guide-headings__font-weight--bold Heebo Bold

      span.c-guide-headings__font-size 26px

      span.c-guide-headings__line-height 32px

      span.c-guide-headings__normal-hover
        span(
          class="c-guide-headings__color"
          style="background-color: #ffffff;"
        )

    .c-guide-headings__row.c-guide-headings__row--body
      span.c-guide-headings__type
        base-heading(type="h2") Heading 2

      span.c-guide-headings__font-weight.c-guide-headings__font-weight--medium Heebo Medium

      span.c-guide-headings__font-size 24px

      span.c-guide-headings__line-height 30px

      span.c-guide-headings__normal-hover
        span(
          class="c-guide-headings__color"
          style="background-color: #fafbfc;"
        )

    .c-guide-headings__row.c-guide-headings__row--body
      span.c-guide-headings__type
        base-heading(type="h3") Heading 3

      span.c-guide-headings__font-weight Heebo Regular

      span.c-guide-headings__font-size 22px

      span.c-guide-headings__line-height 28px

      span.c-guide-headings__normal-hover
        span(
          class="c-guide-headings__color"
          style="background-color: #a8c6df;"
        )

    .c-guide-headings__row.c-guide-headings__row--body
      span.c-guide-headings__type
        base-heading(type="p") Paragraph Style

      span.c-guide-headings__font-weight Heebo Regular

      span.c-guide-headings__font-size 16px

      span.c-guide-headings__line-height 28px

      span.c-guide-headings__normal-hover
        span(
          class="c-guide-headings__color"
          style="background-color: #ffffff;"
        )

  div(
    v-else
    class="c-guide-headings__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-heading&gt;&lt;/dm-heading&gt;

    no-ssr
      common-table(
        :data="props.data"
        :fields="props.fields"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseHeading from "@/components/darkmode/base/BaseHeading";
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseHeading,
    CommonTable
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      props: {
        fields: [
          {
            name: "name",
            title: "Prop Name",
            dataClass: "u-bold",
            width: "150px"
          },
          {
            name: "type",
            title: "Type",
            width: "150px"
          },
          {
            name: "details",
            title: "Details"
          }
        ],
        data: [
          {
            name: "color",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Override default color for the element.",
              values: '"grey" | "white" | "white2"'
            }
          },
          {
            name: "font-weight",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Override default font-weight for the element.",
              values:
                '"thin" | "light" | "regular" | "medium" | "bold" | "extrabold" | "black"'
            }
          },
          {
            name: "type",
            type: {
              type: "String",
              additional: "Required: true"
            },
            details: {
              description: "The element name used for the heading.",
              values: '"h1" | "h2" | "h3" | "p"'
            }
          }
        ]
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-headings";

#{$c} {
  text-align: left;

  #{$c}__row {
    display: flex;
    align-items: center;
    color: $white;

    > * {
      padding-right: 20px;
    }

    #{$c}__type {
      flex: 2;
      padding-left: 20px;

      > * {
        margin-bottom: 0;
      }
    }

    #{$c}__font-weight {
      flex: 2;

      &--bold {
        font-weight: 700;
      }

      &--medium {
        font-weight: 500;
      }
    }

    #{$c}__font-size {
      flex: 1;
    }

    #{$c}__line-height {
      flex: 1;
    }

    #{$c}__normal-hover {
      display: flex;
      flex: 1;

      @include mq($until: tablet) {
        display: none;
      }

      #{$c}__color {
        display: inline-block;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        box-shadow: 0 1px 5px 0 rgba($woodsmoke, 0.6);

        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    // --> TYPES <--

    &--header {
      padding-bottom: 20px;
      color: $nepal;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
      user-select: none;
    }

    &--body {
      padding: 10px 0;

      &:nth-of-type(odd) {
        border: 1px solid $oxford-blue;
        border-radius: 4px;
        background: rgba($ebony-clay-2, 0.4);
      }
    }
  }
}
</style>
