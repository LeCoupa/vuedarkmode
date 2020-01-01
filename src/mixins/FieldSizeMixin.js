/**************************************************************************
 * MIXINS > FIELD SIZE
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  props: {
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["mini", "small", "default", "medium", "large"].includes(x)
      }
    }
  }
}
