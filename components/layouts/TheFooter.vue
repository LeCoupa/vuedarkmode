<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
footer.c-the-footer
  span.c-the-footer__line Made by Nada Rifki &amp; Julien Le Coupanec.

  the-logo(
    size="50px"
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import TheLogo from "@/components/layouts/TheLogo";

export default {
  components: {
    TheLogo
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-the-footer";

#{$c} {
  #{$c}__line {
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
