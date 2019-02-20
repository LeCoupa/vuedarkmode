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
    validationRef: {
      type: String,
      default: null
    },
    validationVvAs: {
      type: String,
      default: null
    }
  }
};
