/**************************************************************************
 * MIXIN REGARDING COMMON THINGS FOR FIELDS
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    }
  },

  mounted() {
    if (this.autofocus) {
      const field = this.$el.querySelector(".js-tag-for-autofocus");

      field.focus();
    }
  }
};
