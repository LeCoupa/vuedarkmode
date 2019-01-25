/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// PROJECT
import FieldMessage from "../components/form/FieldMessage.vue";

/**************************************************************************
 * MIXIN FOR FIELD MESSAGE
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  components: {
    FieldMessage
  },

  props: {
    description: {
      type: String,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    info: {
      type: String,
      default: null
    },
    success: {
      type: String,
      default: null
    },
    warning: {
      type: String,
      default: null
    }
  },

  computed: {
    computedMessageContent() {
      if (this.errors && this.errors.first(this.name)) {
        return this.errors.first(this.name);
      } else if (this.error) {
        return this.error;
      } else if (this.success) {
        return this.success;
      } else if (this.warning) {
        return this.warning;
      } else if (this.info) {
        return this.info;
      } else if (this.description) {
        return this.description;
      }
    },

    computedMessageLevel() {
      if (this.error || (this.errors && this.errors.first(this.name))) {
        return "error";
      } else if (this.success) {
        return "success";
      } else if (this.warning) {
        return "warning";
      } else if (this.info) {
        return "info";
      } else if (this.description) {
        return "description";
      }
    }
  }
};
