/**************************************************************************
 * MIXINS > THEME
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  props: {
    theme: {
      type: String,
      default: null,
      validator(x) {
        return ["dark", "light"].includes(x)
      }
    }
  },

  computed: {
    computedTheme() {
      if (this.theme) {
        return this.theme
      }

      return this.$gb.vuedarkmode.theme
    }
  }
}
