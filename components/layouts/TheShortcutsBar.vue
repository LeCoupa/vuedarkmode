<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-shortcuts-bar
  a(
    href="https://www.nadarifki.com/"
    target="_blank"
    class="c-the-shortcuts-bar__contact-box"
  )
    base-avatar(
      :src="baseUrl + '/images/medley/nada.jpg'"
      size="mini"
    )
    span.c-the-shortcuts-bar__description Looking for a Vue.js / Nuxt.js freelancer? Ping me, I'm available! 👩‍🎨

  //- .c-the-shortcuts-bar__actions

  //- div(
  //-   :class=`[
  //-     "c-the-shortcuts-bar__theme-switch",
  //-     {
  //-       "c-the-shortcuts-bar__theme-switch--light": theme === "light"
  //-     }
  //-   ]`
  //- )
  //-   field-toggle(
  //-     @change="onThemeUpdate"
  //-     :checked="theme === 'light'"
  //-     :fullWidth="false"
  //-     :label="theme === 'light' ? 'Turn off the lights' : 'Turn on the lights'"
  //-     name="theme"
  //-     class="c-the-shortcuts-bar__field"
  //-   )
  //-   base-icon(
  //-     size="20px"
  //-     name="flash_on"
  //-     class="c-the-shortcuts-bar__icon"
  //-   )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseAvatar from "@/components/darkmode/base/BaseAvatar";
import BaseIcon from "@/components/darkmode/base/BaseIcon";
import FieldToggle from "@/components/darkmode/form/FieldToggle";

export default {
  components: {
    BaseAvatar,
    BaseIcon,
    FieldToggle
  },

  data() {
    return {
      // --> STATE <--

      baseUrl: process.env.baseUrl,
      theme: "dark"
    };
  },

  methods: {
    onThemeUpdate(name, value) {
      this.theme = value ? "light" : "dark";
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-the-shortcuts-bar";

#{$c} {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 20px;
  border-top: 1px solid $oxford-blue;
  background-color: #171e29;
  box-shadow: 0 -1px 5px 0 rgba($woodsmoke, 0.6);
  text-align: left;

  #{$c}__contact-box,
  #{$c}__actions {
    display: none;
  }

  #{$c}__theme-switch {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    #{$c}__field {
      width: 168px;
    }

    #{$c}__icon {
      color: $sunglow;
    }

    &--light {
      #{$c}__icon {
        color: $nepal;
      }
    }
  }
}

@include mq($from: tablet) {
  #{$c} {
    #{$c}__contact-box {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      margin-right: 10px;
      color: white;
      font-family: "Heebo";
      user-select: none;

      #{$c}__description {
        margin-left: 8px;
        font-size: 14px;
      }
    }

    #{$c}__actions {
      display: block;
      flex: 1;
    }

    #{$c}__theme-switch {
      flex: 0 0 auto;
    }
  }
}
</style>
