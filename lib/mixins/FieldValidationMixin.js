/**************************************************************************
 * MIXIN FOR FIELD VALIDATION
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  props: {
    rules: {
      type: [Object, String],
      default: null
    },
    rulesName: {
      type: String,
      default: null
    },
    rulesVid: {
      type: String,
      default: null
    },
    showErrors: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    labelRequired() {
      if (!this.rules) {
        return false;
      } else if (typeof this.rules === "text") {
        return this.rules.includes("required");
      } else if (typeof this.rules === "object") {
        return this.rules.required;
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    validate(dirty) {
      // Validate new value with vee-validate
      this.$refs.validationProvider.validate(this.value);

      if (dirty) {
        this.$refs.validationProvider.setFlags({
          dirty: true
        });
      }
    }
  }
};
