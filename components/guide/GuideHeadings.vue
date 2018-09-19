<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-headings
  .c-guide-headings__row.c-guide-headings__row--header
    span.c-guide-headings__type Type

    span.c-guide-headings__font-weight Font / Weight

    span.c-guide-headings__font-size Font Size

    span.c-guide-headings__line-height Line-Height

    span.c-guide-headings__normal-hover Normal / Hover

  .c-guide-headings__row.c-guide-headings__row--body
    span.c-guide-headings__type
      base-heading(
        type="h1"
      ) Heading 1

    span.c-guide-headings__font-weight.c-guide-headings__font-weight--bold Heebo Bold

    span.c-guide-headings__font-size 32px

    span.c-guide-headings__line-height 44px

    span.c-guide-headings__normal-hover
      span(
        class="c-guide-headings__color"
        style="background-color: #ffffff;"
      )

  .c-guide-headings__row.c-guide-headings__row--body
    span.c-guide-headings__type
      base-heading(
        type="h2"
      ) Heading 2

    span.c-guide-headings__font-weight.c-guide-headings__font-weight--medium Heebo Medium

    span.c-guide-headings__font-size 22px

    span.c-guide-headings__line-height 32px

    span.c-guide-headings__normal-hover
      span(
        class="c-guide-headings__color"
        style="background-color: #fafbfc;"
      )

  .c-guide-headings__row.c-guide-headings__row--body
    span.c-guide-headings__type
      base-heading(
        type="h3"
      ) Heading 3

    span.c-guide-headings__font-weight Heebo Regular

    span.c-guide-headings__font-size 20px

    span.c-guide-headings__line-height 28px

    span.c-guide-headings__normal-hover
      span(
        class="c-guide-headings__color"
        style="background-color: #a8c6df;"
      )

  .c-guide-headings__row.c-guide-headings__row--body
    span.c-guide-headings__type
      base-heading(
        type="p"
      ) Paragraph Style - Dashboard doesn't currently offer two-way syncing features like version...

    span.c-guide-headings__font-weight Heebo Regular

    span.c-guide-headings__font-size 16px

    span.c-guide-headings__line-height 24px

    span.c-guide-headings__normal-hover
      span(
        class="c-guide-headings__color"
        style="background-color: #ffffff;"
      )

  .c-guide-headings__row.c-guide-headings__row--body
    span.c-guide-headings__type
      a(
        href="#headings"
      ) Link Style

    span.c-guide-headings__font-weight.c-guide-headings__font-weight--medium Heebo Medium

    span.c-guide-headings__font-size 16px

    span.c-guide-headings__line-height 24px

    span.c-guide-headings__normal-hover
      span(
        class="c-guide-headings__color"
        style="background-color: #0093EE;"
      )
      span(
        class="c-guide-headings__color"
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
$c: ".c-guide-headings";

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
      flex: 2;
      padding-left: 20px;

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
      font-size: 14px;
      font-family: "Heebo Bold";
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
