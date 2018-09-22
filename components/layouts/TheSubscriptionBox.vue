<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-subscription-box
  .c-the-subscription-box__container
    field-input(
      :block="false"
      label="Get notified when we release new components"
      name="email"
      placeholder="e.g. you@awesome.com"
      size="medium"
      class="c-the-subscription-box__field"
    )
    common-button(
      class="c-the-subscription-box__button"
    ) Subscribe 🎉

  p.c-the-subscription-box__message We'll never send you more than one email per month.
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import CommonButton from "@/components/common/CommonButton";
import FieldInput from "@/components/form/FieldInput";

export default {
  components: {
    CommonButton,
    FieldInput
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-the-subscription-box";

#{$c} {
  margin: 30px auto 0;

  #{$c}__container {
    #{$c}__field {
      margin-bottom: 10px;
      width: 100%;
    }

    #{$c}__button {
      width: 100%;
    }
  }

  #{$c}__message {
    text-align: left;
    margin: 10px 0 0;
    color: $nepal;
    font-size: 14px;
    line-height: 20px;
  }
}

@include mq($from: tablet) {
  #{$c} {
    max-width: 550px;

    #{$c}__container {
      display: flex;
      align-items: flex-end;

      #{$c}__field {
        flex: 1;
        margin-right: 10px;
        margin-bottom: 0;
        width: initial;
      }

      #{$c}__button {
        flex: 0 0 auto;
        width: initial;
      }
    }
  }
}
</style>
