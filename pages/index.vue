<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  the-logo(
    class="c-index__logo"
  )
  base-divider

  base-heading(
    tag="h1"
  ) A MINIMALIST DARK DESIGN SYSTEM FOR VUE.JS

  base-heading(
    tag="h2"
    color="grey"
    fontWeight="regular"
  ) Designed for the ones who enjoy dark interfaces as much as we do.

  base-divider(
    color="black"
    size="big"
  )

  section(
    v-for="(section, index) in sections"
    :key="index"
    class="c-index__section"
  )
    common-headlines(
      :title="section.headlines.title"
      :description="section.headlines.description"
    )
    base-divider(
      color="black"
      size="big"
    )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import CommonHeadlines from "@/components/common/CommonHeadlines";
import TheLogo from "@/components/layouts/TheLogo";

export default {
  components: {
    CommonHeadlines,
    TheLogo
  },

  data() {
    return {
      // --> COMPONENTS <--
      sections: [
        {
          headlines: {
            title: "COLORS FOR THE FANCIEST DARK PAINTERS 👨‍🎨",
            description: "Gather all colors here in a beautiful way"
          }
        },
        {
          headlines: {
            title: "TYPOGRAPHY, HEADINGS & SPACES LIKE YOU HAVE NEVER SEEN 😎",
            description: "Check the shopify style guide"
          }
        },
        {
          headlines: {
            title: "ONE BUTTON TO RULE THEM ALL 🤴",
            description: "Add Social Connects"
          }
        },
        {
          headlines: {
            title: "INCREASE YOUR CONVERSION RATE WITH SOCIAL LOGINS 🤩",
            description: "Time is precious and we are in 2018."
          }
        },
        {
          headlines: {
            title: "BUILDING FORMS HAS NEVER BEEN THIS DELICIOUS 😋",
            description: "With all these form elements"
          }
        },
        {
          headlines: {
            title: "DIVIDE AND CONQUER 👨‍💻",
            description: "Small and big, large and thin. We have them all."
          }
        },
        {
          headlines: {
            title: "DON’T MAKE THEM WAIT TOO LONG… 😉",
            description:
              "From blue to yellow, you’re ready to unlock a great loading experience."
          }
        },
        {
          headlines: {
            title: "AVATARS & THUMBNAILS 🧞",
            description: "Make your users stand out from the dark"
          }
        },
        {
          headlines: {
            title: "200+ ICONS FROM MATERIAL DESIGN 👻",
            description:
              "Material icons are delightful, beautifully crafted symbols for common actions and items."
          }
        }
      ]
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-index";

#{$c} {
}
</style>
