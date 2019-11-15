/**************************************************************************
 * MIXIN > COMMON
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  props: {
    theme: {
      type: String,
      default: "dark",
      validator(x) {
        return ["dark", "light"].includes(x)
      }
    }
  }
}
