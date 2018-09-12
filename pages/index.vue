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
      class="c-index__elements c-index__elements--colors"
    )
      common-color(
        v-for="color in section.colors"
        :hex="color.hex"
        :key="color.hex"
        :name="color.name"
      )

    div(
      v-if="section.buttons"
      v-for="circular in [false, true]"
      :class=`[
        "c-index__elements c-index__elements--buttons",
        {
          "c-index__elements--horizontal": circular
        }
      ]`
    )
      div(
        v-for="(color, i) in section.buttons.colors"
        :key="'button' + color + i"
        class="c-index__elements-color"
      )
        div(
          v-for="(size, j) in section.buttons.sizes"
          :key="'button' + color + j + size"
          class="c-index__elements-size"
        )
          base-button(
            :circular="circular"
            :color="color"
            :leftIcon="section.buttons.icons[i]"
            :size="size"
            class="c-index__button"
          ) {{ size }} {{ color }}

    div(
      v-if="section.badges"
      class="c-index__elements c-index__elements--badges c-index__elements--horizontal c-index__elements--vertical-on-mobile"
    )
      div(
        v-for="(color, i) in section.badges.colors"
        :key="'badge' + color + i"
        class="c-index__elements-color"
      )
        div(
          v-for="(size, j) in section.badges.sizes"
          :key="'badge' + color + j + size"
          class="c-index__elements-size"
        )
          base-badge(
            :color="color"
            :size="size"
            class="c-index__badge"
          ) {{ size }}

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
            title: "BUTTONS AND BADGES TO RULE THEM ALL 🤴",
            description:
              "Make your interfaces stand out from the dark with theses beautiful elements"
          },
          buttons: {
            colors: ["blue", "green", "red", "orange", "black", "white"],
            icons: [
              "add_circle",
              "check_circle",
              "favorite_border",
              "star",
              "get_app",
              "camera_alt"
            ],
            sizes: ["large", "medium", "default", "small", "mini"]
          },
          badges: {
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

  #{$c}__elements {
    display: grid;
    grid-gap: 40px;
    justify-content: center;

    #{$c}__elements-color {
      #{$c}__elements-size {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    // --> ORIENTATIONS

    &--horizontal {
      #{$c}__elements-color {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: center;

        #{$c}__elements-size {
          display: block;
          margin-right: 10px;
          margin-bottom: 0;

          &:first-of-type {
            margin-right: 0;
          }
        }
      }
    }
    @include mq($from: mobile, $until: tablet) {
      &--vertical-on-mobile {
        #{$c}__elements-color {
          display: block;

          #{$c}__elements-size {
            margin-bottom: 20px;
            margin-right: 0;

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }
    }

    // --> SECTIONS <--

    &--colors {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 100px);
    }

    &--buttons {
      grid-template-columns: repeat(auto-fill, 260px);
      margin-bottom: 40px;
    }

    &--badges {
      grid-template-columns: repeat(auto-fill, 410px);
    }
  }
}
</style>
