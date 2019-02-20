<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-guide-base-list-items
  div(
    v-if="!documentation"
    class="c-guide-base-list-items__showroom o-elements o-elements--800max"
  )
    div(
      v-for="(color, i) in listItems.colors"
      :key="'alert' + i"
      class="o-elements__category"
    )
      base-list-item(
        :color="color"
        :icon="i >= 3 & i < 6 ? listItems.icons[i - 3] : null"
        :icon-size="i >= 3 ? listItems.iconsSizes[i - 3] : null"
        :image="i >= 6 ? listItems.images[i - 6] : null"
        :number="i < 3 ? i + 1 : null"
        :source="i >= 6 ? listItems.sources[i - 6] : null"
        class="c-guide-base-list-items__list-item"
      ) {{ listItems.content[i] }}

  div(
    v-else
    class="c-guide-base-list-items__documentation"
  )
    pre(v-highlightjs)
      code(class="html")
        | &lt;!-- Insert this component in your code --&gt;
        | &lt;!-- Customize it with props (see table below) --&gt;
        | &lt;dm-list-item&gt;My List Item&lt;/dm-list-item&gt;

    no-ssr
      common-table(
        :data="props.data"
        :fields="props.fields"
        class="u-mb40"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// VUE DARK MODE
import BaseDivider from "@/../lib/components/base/BaseDivider";
import BaseListItem from "@/../lib/components/base/BaseListItem";

// PROJECT: COMPONENTS
const CommonTable = () => import("@/components/common/CommonTable");

export default {
  components: {
    BaseDivider,
    BaseListItem,
    CommonTable
  },

  props: {
    documentation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      listItems: {
        colors: [
          "blue",
          "green",
          "red",
          "orange",
          "black",
          "white",
          "white",
          "white",
          "white"
        ],
        content: [
          "Don’t diversify yourself in too many channels; it’s like a death sentence. You should be focusing on the single and most efficient one.",
          "What a lot of people miss is that the entire onboarding and activation experience is to get somebody from the point where they might hear about the product for the first time (marketing is your best friend) to the point on which they are trained and actually have the product to become a habit.",
          "Advertising is fundamentally a business model competition. It is you, competing with the other companies, to figure out who can afford to pay the most for the attention of this specific user.",
          "If you are not tracking your data and not trying to figure out what makes people sign up, use your product, come back, and leave…it is going to be hard to grow.",
          "Don’t take advice from people who do not ask a lot of questions. Good advice comes only when a person puts forth the effort to understand what your business is and the problems it may have.",
          "There is a big difference between traction and growth. You must know what phase you are in. There is a time for traction and there is a time for growth.",
          "To create a company that’s building for the long term, you have to dedicate five, ten, maybe even 20 years, who knows? A business is a collection of people working toward something. That’s your culture.",
          "During Y combinator, there are only two things that really matter: writing code (building the product) and talking to your users.",
          "Do not make the mistake of having a broad audience at the beginning. You have to start small and be very specific to develop your early user base."
        ],
        icons: ["star_border", "done", "thumb_up"],
        iconsSizes: ["22px", "22px", "18px"],
        images: [
          "/images/docs/nyt.jpg",
          "/images/docs/cnn.jpg",
          "/images/docs/wp.jpg"
        ],
        sources: [
          {
            label: "Winning does not necessarily mean having the best product.",
            link: "https://www.vuedarkmode.com/"
          },
          {
            label: "We live in an attention economy.",
            link: "https://www.vuedarkmode.com/"
          },
          {
            label: "Every company has its own path for growth.",
            link: "https://www.vuedarkmode.com/"
          }
        ]
      },
      props: {
        fields: [
          {
            name: "name",
            title: "Prop Name",
            dataClass: "u-bold",
            width: "150px"
          },
          {
            name: "type",
            title: "Type",
            width: "150px"
          },
          {
            name: "details",
            title: "Details"
          }
        ],
        data: [
          {
            name: "color",
            type: {
              type: "String",
              additional: 'Default: "blue"'
            },
            details: {
              description: "Set the circle color.",
              values: '"black" | "blue" | "green" | "orange" | "red" | "white"'
            }
          },
          {
            name: "icon",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add an icon inside the circle (see material icons)."
            }
          },
          {
            name: "icon-color",
            type: {
              type: "String",
              additional: 'Default: "white"'
            },
            details: {
              description: "Set the icon color."
            }
          },
          {
            name: "icon-size",
            type: {
              type: "String",
              additional: 'Default: "22px"'
            },
            details: {
              description: "Set the icon size."
            }
          },
          {
            name: "image",
            type: {
              type: "String",
              additional: "Default: null"
            },
            details: {
              description: "Add an image inside the circle."
            }
          },
          {
            name: "number",
            type: {
              type: "Number",
              additional: "Default: null"
            },
            details: {
              description: "Add a number inside the circle."
            }
          },
          {
            name: "source",
            type: {
              type: "Object",
              additional: "Default: null"
            },
            details: {
              description: "Add a clickable source below the list item.",
              values:
                '{ label: "The Incredible Growth Bunker", link: "https://www.growthbunker.com/" }'
            }
          }
        ]
      }
    };
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".c-guide-base-list-items";

#{$c} {
  #{$c}__showroom {
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, 100%);
    margin-bottom: 0;
  }
}
</style>
