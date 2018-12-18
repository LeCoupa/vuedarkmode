<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
perfect-scrollbar(
  class="c-the-navigation"
  tag="nav"
)
  .c-the-navigation__categories
    div(
      v-for="category in categories"
      class="c-the-navigation__category"
    )
      span(
        @click="onTitleClick(category.id, category.items, $event)"
        class="c-the-navigation__main"
      )
        .c-the-navigation__title {{ category.title }}

        base-icon(
          v-if="category.items"
          :class=`[
            "c-the-navigation__arrow",
            {
              "c-the-navigation__arrow--opened": opened === category.id
            }
          ]`
          name="arrow_left"
        )

      transition-group(
        v-if="category.items && opened === category.id"
        :appear="true"
        class="c-the-navigation__items"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        tag="ul"
      )
        li(
          v-for="item in category.items"
          @click="onItemClick(item.id, $event)"
          :key="item.id"
          :class=`[
            "c-the-navigation__item",
            {
              "c-the-navigation__item--active": item.active
            }
          ]`
        ) {{ item.label }}

  a(
    class="c-the-navigation__contact"
    href="https://www.nadarifki.com/"
    target="_blank"
  )
    base-avatar(
      size="mini"
      src="/images/docs/nada.jpeg"
    )
    span.c-the-navigation__description Looking for a Vue.js / Nuxt.js freelancer? Ping me, I'm available! 👩‍🎨
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import BaseAvatar from "@/components/darkmode/base/BaseAvatar";
import BaseIcon from "@/components/darkmode/base/BaseIcon";

export default {
  components: {
    BaseAvatar,
    BaseIcon
  },

  props: {
    categories: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      // --> STATE <--

      opened: "base"
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    onItemClick(id, event) {
      this.$emit("itemClick", id, event);
    },

    onTitleClick(id, items, event) {
      if (items) {
        this.opened = this.opened !== id ? id : null;
      } else {
        this.$emit("titleClick", id, event);
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
$c: ".c-the-navigation";
$gutter: 40px;

#{$c} {
  display: none;
  flex-direction: column;
  box-sizing: border-box;
  width: 300px;
  border-right: 1px solid $oxford-blue;
  background: $ebony-clay-2;
  text-align: left;
  user-select: none;

  #{$c}__categories {
    flex: 1;
    padding: 40px 0 20px;

    #{$c}__category {
      margin: 0 $gutter 20px;
      border-bottom: 1px solid $oxford-blue;

      &:last-of-type {
        margin-bottom: 0;
      }

      #{$c}__main {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;

        #{$c}__title {
          flex: 1;
        }

        #{$c}__arrow {
          flex: 0 0 auto;
          transition: all 200ms ease-in-out;
          transform: rotate(0deg);

          &--opened {
            transform: rotate(-90deg);
          }
        }
      }

      #{$c}__items {
        margin: 0 0 20px;
        padding-left: 25px;
        border-left: 1px dashed $oxford-blue;
        list-style: none;

        #{$c}__item {
          padding-bottom: 15px;
          color: $regent-st-blue;
          transition: all 200ms ease-in-out;
          cursor: pointer;

          &:last-of-type {
            padding-bottom: 0;
          }

          &--active {
            color: $white;
          }

          // --> INTERACTIONS <--

          &:hover {
            color: $white;
          }
        }
      }
    }
  }

  #{$c}__contact {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    margin: 0 $gutter;
    padding: 20px 0;
    border-top: 1px solid $oxford-blue;
    background: $ebony-clay-2;
    color: white;
    user-select: none;

    #{$c}__description {
      margin-left: 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }
}

@include mq($from: desktop) {
  #{$c} {
    display: flex;
  }
}
</style>
