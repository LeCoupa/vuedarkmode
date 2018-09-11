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
  ) Based components designed for the ones who enjoy dark interfaces as much as we do.

  the-github-buttons(
    class="c-index__github-buttons"
    repo="dark-mode"
    user="lecoupa"
  )

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
    div(
      v-if="section.colors"
      class="c-index__colors"
    )
      common-color(
        v-for="color in section.colors"
        :hex="color.hex"
        :key="color.hex"
        :name="color.name"
      )

    div(
      v-if="section.buttons"
      class="c-index__buttons"
    )
      div(
        v-for="(color, index) in section.buttons.colors"
        :key="'button' + color + index"
        class="c-index__buttons-color"
      )
        div(
          v-for="(size, index) in section.buttons.sizes"
          :key="'button' + color + index + size"
          class="c-index__buttons-size"
        )
          base-button(
            :color="color"
            :size="size"
            class="c-index__button"
          ) {{ size }} {{ color }}

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
import CommonColor from "@/components/common/CommonColor";
import CommonHeadlines from "@/components/common/CommonHeadlines";
import TheGithubButtons from "@/components/layouts/TheGithubButtons";
import TheLogo from "@/components/layouts/TheLogo";

export default {
  components: {
    CommonColor,
    CommonHeadlines,
    TheGithubButtons,
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
          },
          colors: [
            {
              hex: "#AB7DF6",
              name: "$portage"
            },
            {
              hex: "#0079C4",
              name: "$lochmara"
            },
            {
              hex: "#0093EE",
              name: "$azure-radiance"
            },
            {
              hex: "#26C1C9",
              name: "$java"
            },
            {
              hex: "#40B630",
              name: "$apple"
            },
            {
              hex: "#4ECE3D",
              name: "$apple2"
            },
            {
              hex: "#81C926",
              name: "$atlantis"
            },
            {
              hex: "#E0102B",
              name: "$crimson"
            },
            {
              hex: "#EE334B",
              name: "$amaranth"
            },
            {
              hex: "#FD7B1F",
              name: "$pumpkin"
            },
            {
              hex: "#FACA00",
              name: "$supernova"
            },
            {
              hex: "#FFF5CC",
              name: "$barley-white"
            },
            {
              hex: "#FFFFFF",
              name: "$white"
            },
            {
              hex: "#FAFBFC",
              name: "$athens-gray"
            },
            {
              hex: "#ECF5FD",
              name: "$selago"
            },
            {
              hex: "#C5D9E8",
              name: "$periwinkle"
            },
            {
              hex: "#A8C6DF",
              name: "$regent-st-blue"
            },
            {
              hex: "#8DABC4",
              name: "$nepal"
            },
            {
              hex: "#3F536E",
              name: "$fiord"
            },
            {
              hex: "#2C405A",
              name: "$rhino"
            },
            {
              hex: "#273950",
              name: "$rhino2"
            },
            {
              hex: "#25374F",
              name: "$rhino3"
            },
            {
              hex: "#1C293B",
              name: "$mirage"
            }
          ]
        },
        {
          headlines: {
            title: "HEADINGS LIKE YOU HAVE NEVER SEEN 😎",
            description:
              "From titles to paragraphs, organizing your content will feel like a breeze"
          }
        },
        {
          headlines: {
            title: "BUTTONS AND TAGS TO RULE THEM ALL 🤴",
            description:
              "Make your interfaces stand out from the dark with theses beautiful elements"
          },
          buttons: {
            colors: ["blue", "green", "red", "orange", "black", "white"],
            sizes: ["large", "medium", "default", "small", "mini"]
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
  #{$c}__github-buttons {
    margin-top: 20px;
  }

  #{$c}__colors {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: center;
  }

  #{$c}__buttons {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, 260px);
    justify-content: center;

    #{$c}__buttons-color {
      #{$c}__buttons-size {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
