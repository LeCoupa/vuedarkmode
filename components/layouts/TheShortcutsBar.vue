<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-shortcuts-bar
  a(
    class="c-the-shortcuts-bar__contact-box"
    href="https://www.nadarifki.com/"
    target="_blank"
  )
    base-avatar(
      size="mini"
      src="/images/docs/nada.jpeg"
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
  //-     :checked="theme === 'dark'"
  //-     :disabled="true"
  //-     :fullWidth="false"
  //-     :label="theme === 'dark' ? 'Dark Mode Activated' : 'Light Mode Activated'"
  //-     class="c-the-shortcuts-bar__field"
  //-     name="theme"
  //-   )
  //-   base-icon(
  //-     class="c-the-shortcuts-bar__icon"
  //-     name="flash_on"
  //-     size="20px"
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
      theme: "dark"
    };
  },

  methods: {
    onThemeUpdate(name, value) {
      this.theme = value ? "dark" : "light";
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
  display: none;
}

@include mq($from: tablet) {
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

    #{$c}__contact-box {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      margin-right: 10px;
      color: white;
      user-select: none;

      #{$c}__description {
        margin-left: 8px;
        font-weight: 400;
        font-size: 14px;
      }
    }

    #{$c}__actions {
      display: block;
      flex: 1;
    }

    #{$c}__theme-switch {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      flex: 1;
      justify-content: center;

      #{$c}__field {
        width: 190px;
      }

      #{$c}__icon {
        color: $sun;
        opacity: 0.7;
      }

      &--light {
        #{$c}__icon {
          color: $nepal;
        }
      }
    }
  }
}
</style>
