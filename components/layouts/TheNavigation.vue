<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-the-navigation
  div(
    v-for="category in categories"
    class="c-the-navigation__category"
  )
    span(
      @click="onTitleClick(category.id, category.items, $event)"
      class="c-the-navigation__title"
    ) {{ category.title }}

    ul(
      v-if="category.items && opened === category.id "
      class="c-the-navigation__items"
    )
      li(
        v-for="item in category.items"
        @click="onItemClick(item.id, $event)"
        class="c-the-navigation__item"
      ) {{ item.label }}
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      // --> STATE <--
      opened: null
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

#{$c} {
  display: none;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 40px;
  width: 300px;
  border-right: 1px solid $oxford-blue;
  background: $ebony-clay-2;
  text-align: left;
  user-select: none;

  #{$c}__category {
    margin-bottom: 20px;
    border-bottom: 1px solid $oxford-blue;

    &:last-of-type {
      margin-bottom: 0;
    }

    #{$c}__title {
      display: block;
      margin-bottom: 20px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;
    }

    #{$c}__items {
      margin: 0 0 20px;
      padding-left: 28px;
      border-left: 1px dashed $oxford-blue;
      list-style: none;

      #{$c}__item {
        margin-bottom: 15px;
        color: $regent-st-blue;
        cursor: pointer;

        &:hover {
          color: $azure-radiance;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}

@include mq($from: desktop) {
  #{$c} {
    display: block;
  }
}
</style>
