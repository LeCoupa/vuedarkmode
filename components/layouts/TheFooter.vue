<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
footer.c-the-footer
  span.c-the-footer__line
    | ⚡️Made by
    | &#32;
    a(
      class="c-the-footer__link"
      href="https://www.nadarifki.com/"
      target="_blank"
    ) Nada Rifki
    | &#32;&amp;&#32;
    a(
      class="c-the-footer__link"
      href="https://twitter.com/LeCoupa"
      target="_blank"
    ) Julien Le Coupanec
    | &#32;⚡️

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
// VARIABLES
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
