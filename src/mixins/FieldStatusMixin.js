/**************************************************************************
 * MIXINS > FIELD STATUS
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  props: {
    status: {
      type: String,
      default: "normal",
      validator(x) {
        return ["error", "normal", "success", "warning"].includes(x)
      }
    }
  }
}
