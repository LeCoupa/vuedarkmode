<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-social-logins
  div(
    v-if="!documentation"
    class="c-guide-base-social-logins__showroom o-elements o-elements--horizontal o-elements--vertical-on-mobile"
  )
    div(
      v-for="(network, i) in socialLogins.networks"
      :key="'socialLogin' + network + i"
      class="o-elements__category"
    )
      div(
        v-for="(size, j) in socialLogins.sizes"
        :key="'socialLogin' + network + j + size"
        class="o-elements__item"
      )
        base-social-login(
          :network="network"
          :size="size"
        )

  div(
    v-else
    class="c-guide-base-social-logins__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-social-login&gt;&lt;/dm-social-login&gt;
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseSocialLogin from "@/components/darkmode/base/BaseSocialLogin";

export default {
  components: {
    BaseSocialLogin
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      socialLogins: {
        networks: ["facebook", "messenger", "twitter", "google"],
        sizes: ["large", "small", "mini"]
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-guide-base-social-logins";

#{$c} {
  #{$c}__showroom {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;
  }
}
</style>
