<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-common-headings
  .c-common-headings__row.c-common-headings__row--header
    span.c-common-headings__type Type

    span.c-common-headings__font-weight Font / Weight

    span.c-common-headings__font-size Font Size

    span.c-common-headings__line-height Line-Height

    span.c-common-headings__normal-hover Normal / Hover

  .c-common-headings__row.c-common-headings__row--body
    span.c-common-headings__type
      base-heading(
        type="h1"
      ) Heading 1

    span.c-common-headings__font-weight.c-common-headings__font-weight--bold Heebo Bold

    span.c-common-headings__font-size 32px

    span.c-common-headings__line-height 44px

    span.c-common-headings__normal-hover
      span(
        class="c-common-headings__color"
        style="background-color: #ffffff;"
      )

  .c-common-headings__row.c-common-headings__row--body
    span.c-common-headings__type
      base-heading(
        type="h2"
      ) Heading 2

    span.c-common-headings__font-weight.c-common-headings__font-weight--medium Heebo Medium

    span.c-common-headings__font-size 22px

    span.c-common-headings__line-height 32px

    span.c-common-headings__normal-hover
      span(
        class="c-common-headings__color"
        style="background-color: #fafbfc;"
      )

  .c-common-headings__row.c-common-headings__row--body
    span.c-common-headings__type
      base-heading(
        type="h3"
      ) Heading 3

    span.c-common-headings__font-weight Heebo Regular

    span.c-common-headings__font-size 20px

    span.c-common-headings__line-height 28px

    span.c-common-headings__normal-hover
      span(
        class="c-common-headings__color"
        style="background-color: #a8c6df;"
      )

  .c-common-headings__row.c-common-headings__row--body
    span.c-common-headings__type
      base-heading(
        type="p"
      ) Paragraph Style - Dashboard doesn't currently offer two-way syncing features like version...

    span.c-common-headings__font-weight Heebo Regular

    span.c-common-headings__font-size 16px

    span.c-common-headings__line-height 24px

    span.c-common-headings__normal-hover
      span(
        class="c-common-headings__color"
        style="background-color: #ffffff;"
      )

  .c-common-headings__row.c-common-headings__row--body
    span.c-common-headings__type
      a(
        href="#headings"
      ) Link Style

    span.c-common-headings__font-weight.c-common-headings__font-weight--medium Heebo Medium

    span.c-common-headings__font-size 16px

    span.c-common-headings__line-height 24px

    span.c-common-headings__normal-hover
      span(
        class="c-common-headings__color"
        style="background-color: #0093EE;"
      )
      span(
        class="c-common-headings__color"
        style="background-color: #fafbfc;"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-common-headings";

#{$c} {
  text-align: left;

  #{$c}__row {
    display: flex;
    align-items: center;
    color: $white;

    &:last-of-type {
      padding-bottom: 0;
    }

    > * {
      padding-right: 20px;
    }

    #{$c}__type {
      padding-left: 20px;
      flex: 2;

      > * {
        margin-bottom: 0;
      }
    }

    #{$c}__font-weight {
      flex: 2;

      &--bold {
        font-family: "Heebo Bold";
      }

      &--medium {
        font-family: "Heebo Medium";
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

      #{$c}__color {
        display: inline-block;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        box-shadow: 0 1px 5px 0 rgba(#171819, 0.6);

        &:last-of-type {
          margin-right: 0;
        }
      }

      @include mq($until: tablet) {
        display: none;
      }
    }

    // --> TYPES <--

    &--header {
      padding-bottom: 20px;
      color: #8dabc4;
      text-transform: uppercase;
      font-size: 14px;
      font-family: "Heebo Bold";
      user-select: none;
    }

    &--body {
      padding: 10px 0;

      &:nth-of-type(odd) {
        border: 1px solid #313d4f;
        border-radius: 4px;
        background: rgba(#273142, 0.4);
      }
    }
  }
}
</style>
