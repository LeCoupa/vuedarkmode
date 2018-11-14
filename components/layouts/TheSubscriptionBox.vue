<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-subscription-box
  form(
    @submit.prevent="onEmailSubmit"
    class="c-the-subscription-box__container"
  )
    field-input(
      v-model="email"
      :fullWidth="false"
      class="c-the-subscription-box__field"
      label="Get notified when we release new components"
      name="email"
      placeholder="e.g. you@awesome.com"
      size="medium"
    )
    base-button(
      class="c-the-subscription-box__button"
      rightIcon="thumb_up"
      type="submit"
    ) Subscribe

  p(
    :class=`[
      "c-the-subscription-box__message",
      "c-the-subscription-box__message--" + message.status
    ]`
  ) {{ message.content }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// TODO: Validate email field on front-end
// TODO: Show loader circle icon

// NPM
import axios from "axios";
import qs from "qs";

// PROJECT
import BaseButton from "@/components/darkmode/base/BaseButton";
import FieldInput from "@/components/darkmode/form/FieldInput";

export default {
  components: {
    BaseButton,
    FieldInput
  },

  data() {
    return {
      // --> STATE <--

      email: "",
      message: {
        status: "normal",
        content: "We'll never send you more than one email per month."
      }
    };
  },

  methods: {
    async onEmailSubmit() {
      try {
        const result = await axios.post(
          "https://www.vuedarkmode.com/.netlify/functions/mailchimp",
          qs.stringify({ email: this.email })
        );

        this.message.status = "success";
        this.message.content = result.data;
      } catch (error) {
        this.message.status = "error";
        this.message.content = error.response.data;
      }
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
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
    margin: 10px 0 0;
    color: $nepal;
    text-align: left;
    font-size: 14px;
    line-height: 20px;

    &--error {
      color: $crimson;
    }

    &--success {
      color: $malachite;
    }
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
