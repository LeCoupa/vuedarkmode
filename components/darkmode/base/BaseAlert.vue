<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
transition(
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
)
  div(
    v-if="active"
    ref="alert"
    class="dm-base-alert"
    :class="`dm-base-alert--${color}`"
    :style="styleAlert"
    v-on="$listeners"
  )
    div(
      v-if="closable"
      class="con-x vs-alert--close"
      @click="$emit('update:active',false)"
    )
      vs-icon(:icon-pack="iconPack" :icon="closeIcon")
    h4(
      v-if="title"
      :style="styleTitle"
      class="titlex vs-alert--title") {{ title }}
    div.vs-alert
      <slot/>

//- div(
//-   :class=`[
//-     "dm-field-textarea",
//-     "dm-field-textarea--" + size,
//-     "dm-field-textarea--" + status,
//-     {
//-       "dm-field-textarea--borders": borders,
//-       "dm-field-textarea--disabled": disabled,
//-       "dm-field-textarea--focused": focused,
//-       "dm-field-textarea--full-width": fullWidth
//-     }
//-   ]`
//- )
//-   field-label(
//-     v-if="label"
//-     :forField="uuid"
//-     :size="size"
//-     class="dm-field-textarea__label"
//-   ) {{ label }}

//-   div(
//-     @click="onContainerClick"
//-     class="dm-field-textarea__container"
//-   )
//-     textarea(
//-       @blur="onFieldBlur"
//-       @change="onFieldChange"
//-       @focus="onFieldFocus"
//-       @input="onFieldInput"
//-       :cols="cols"
//-       :disabled="disabled"
//-       :id="uuid"
//-       :maxlength="maxlength"
//-       :name="name"
//-       :placeholder="placeholder"
//-       :readonly="readOnly"
//-       :rows="rows"
//-       class="dm-field-textarea__field"
//-     ) {{ value }}

//-     base-icon(
//-       v-if="statusIcon"
//-       :name="statusIcon"
//-       class="dm-field-textarea__icon"
//-     )

//-   field-description(
//-     v-if="description"
//-     :description="description"
//-     :size="size"
//-   )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
export default {
  name:"BaseAlert",

  props: {
    active: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return (
          ["black", "blue", "green", "orange", "red", "white"].indexOf(x) !== -1
        );
      }
    },
    // margin:{
    //   type:[String,Boolean],
    //   default:'10px'
    // },
    // icon:{
    //   type:String,
    //   default:null
    // },
    // closeIcon:{
    //   type:String,
    //   default:'close'
    // },
    // iconPack:{
    //   type:String,
    //   default:'material-icons'
    // }
  },
  computed: {
    styleAlert () {
      return {
        boxShadow: `0px 0px 25px 0px ${this.color}`,
        color: 'white'
      }
    },
    styleTitle () {
      return {
        // boxShadow: `0px 6px 15px -7px ${_color.getColor(this.color,.4)}`
      }
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done) {
      let h = this.$refs.alert.scrollHeight
      this.$refs.alert.style.height = h + 'px'
      el.style.opacity = 1
      done()
    },
    leave: function (el) {
      this.$refs.alert.style.height = 0 + 'px'
      el.style.opacity = 0
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "assets/settings/_settings.colors.scss";

// VARIABLES
$c: ".dm-base-alert";
$colors: black, blue, green, red, orange, white;


// .con-vs-alert
//   // padding: 10px
//   border-radius: 6px
//   color: rgb(255,255,255)
//   width: 100%
//   position relative
//   font-size: .8rem
//   cursor: default
//   transition: all .25s ease
//   overflow hidden
// .icon-alert
//   height: 100%
//   position: relative
//   float: left
//   padding: 0px 10px
//   padding-left: 5px
//   font-size: 1.1rem
// .vs-alert
//   padding: 10px
//   overflow hidden
//   position relative
//   display: flex
//   align-items: center
// .vs-alert--title
//   font-size .9rem
//   font-weight: bold
//   // margin-bottom: 3px
//   padding: 8px 10px
// .vs-alert--close
//   position: relative
//   margin-top: 4px
//   margin-right: 4px
//   display: inline-block
//   float: right
//   padding: 4px
//   border-radius: 6px
//   padding-bottom: 1px
//   // padding-top: 1px
//   cursor: pointer
//   transition: all .2s ease
//   &:hover
//     box-shadow: 0px 5px 15px 0px rgba(0,0,0,.1)

// for colorx, i in $vs-colors
//   .con-vs-alert-{colorx}
//     background: var(colorx, .15)
//     box-shadow 0px 0px 25px 0px var(colorx, .15)
//     color: var(colorx, 1)
//     h4
//       box-shadow: 0px 6px 15px -7px var(colorx, .4)
//     .con-x
//       background: var(colorx, 1)
//       color: rgb(255,255,255)

#{$c} {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-position: center;
  color: $white;
  font-weight: 500;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial,
    sans-serif;
  transition: all ease-in-out 0.5s;
  user-select: none;
  cursor: pointer;

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // --> COLORS <--

  @each $color in $colors {
    &--#{$color} {
      // Reverse buttons have their own defined style (see below)
      &:not(#{$c}--reverse) {
        background: map-get($mainColors, $color)
          radial-gradient(
            circle,
            transparent 1%,
            map-get($mainColors, $color) 1%
          )
          center/15000%;

        @if ($color == black) {
          border: 1px solid $oxford-blue;
          background: $ebony-clay
            radial-gradient(circle, transparent 1%, $ebony-clay 1%)
            center/15000%;
        } @else if ($color == white) {
          color: $oxford-blue;
        }

        &:active {
          @if ($color == black) {
            background-color: map-get($mainColors, $color);
          } @else if ($color == white) {
            background-color: darken(map-get($mainColors, $color), 15%);
          } @else if ($color == orange or $color == red) {
            background-color: lighten(map-get($mainColors, $color), 20%);
          } @else {
            background-color: lighten(map-get($mainColors, $color), 10%);
          }
        }
      }
    }
  }

  // --> INTERACTIONS <--

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
}
</style>
