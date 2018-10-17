<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-subscription-box
  .c-the-subscription-box__container
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
      @click="onEmailSubmit"
      class="c-the-subscription-box__button"
      rightIcon="thumb_up"
    ) Subscribe

  p.c-the-subscription-box__message We'll never send you more than one email per month.
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// TODO: Make the form submit with enter.
// TODO: Show message for users
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
      email: ""
    };
  },

  methods: {
    async onEmailSubmit() {
      let status = null;
      let message = null;

      try {
        const result = await axios.post(
          "https://www.vuedarkmode.com/.netlify/functions/mailchimp",
          qs.stringify({ email: this.email })
        );

        status = "success";
        message = result.data;
      } catch (error) {
        status = "error";
        message = error.response.data;
      }

      console.log(status);
      console.log(message);
    }
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
    margin: 10px 0 0;
    color: $nepal;
    text-align: left;
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
