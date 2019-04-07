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
      :autofocus="true"
      :clearable="true"
      :error="error"
      :fullWidth="false"
      :success="success"
      class="c-the-subscription-box__field"
      label="Get notified when we release new components"
      name="email"
      placeholder="e.g. you@awesome.com"
      size="medium"
      validation="required|email"
    )
    base-button(
      :loading="loading"
      class="c-the-subscription-box__button"
      rightIcon="thumb_up"
      type="submit"
    ) Subscribe
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import axios from "axios";
import qs from "qs";

// VUE DARK MODE
import BaseButton from "@/../lib/components/base/BaseButton";
import FieldInput from "@/../lib/components/form/FieldInput";

export default {
  components: {
    BaseButton,
    FieldInput
  },

  data() {
    return {
      // --> STATE <--

      email: null,
      error: "",
      loading: false,
      success: null
    };
  },

  methods: {
    async onEmailSubmit() {
      this.loading = true;

      try {
        const result = await axios.post(
          "https://www.vuedarkmode.com/.netlify/functions/mailchimp",
          qs.stringify({ email: this.email })
        );

        this.error = null;
        this.success = result.data;

        // Clear input field
        this.email = "";
      } catch (error) {
        this.success = null;
        this.error = error.response.data;
      }

      this.loading = false;
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
}

@include mq($from: tablet) {
  #{$c} {
    max-width: 550px;

    #{$c}__container {
      display: flex;
      align-items: flex-start;

      #{$c}__field {
        flex: 1;
        margin-right: 10px;
        margin-bottom: 0;
        width: initial;
      }

      #{$c}__button {
        margin-top: 32px;
        flex: 0 0 auto;
        width: initial;
      }
    }
  }
}
</style>
