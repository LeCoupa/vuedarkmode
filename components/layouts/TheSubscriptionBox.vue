<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-subscription-box
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
  display: flex;
  align-items: flex-end;
  margin: 30px auto;
  max-width: 550px;

  #{$c}__field {
    flex: 1;
    margin-right: 10px;
  }

  #{$c}__button {
    flex: 0 0 auto;
  }
}
</style>
