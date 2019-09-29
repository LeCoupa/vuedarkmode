/**************************************************************************
 * MIXIN FOR FIELD VALIDATION
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  props: {
    validation: {
      type: [Object, String],
      default: null
    },
    validationVvAs: {
      type: String,
      default: null
    }
  },

  computed: {
    labelRequired() {
      if (!this.validation) {
        return false;
      } else if (typeof this.validation === "text") {
        return this.validation.includes("required");
      } else if (typeof this.validation === "object") {
        return this.validation.required;
      }
    }
  }
};
