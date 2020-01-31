/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// PROJECT: COMPONENTS
import BaseIcon from "../components/base/BaseIcon.vue"
import FieldLabel from "../components/fields/FieldLabel.vue"
import FieldMessage from "../components/fields/FieldMessage.vue"

// PROJECT: HELPERS
import { generateUUID, detectMobileDevice } from "../helpers/helpers.js"

/**************************************************************************
 * MIXINS > FIELD
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

export default {
  components: {
    BaseIcon,
    FieldLabel,
    FieldMessage
  },

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
    error: {
      type: String,
      default: null
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    info: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: "normal",
      validator(x) {
        return ["error", "normal", "success", "warning"].includes(x)
      }
    },
    success: {
      type: String,
      default: null
    },
    validation: {
      type: Object,
      default: null
    },
    warning: {
      type: String,
      default: null
    }
  },

  data: () => ({
    // --> STATE <--

    innerValue: null,
    uuid: ""
  }),

  computed: {
    computedStatus() {
      if (this.error || this.validationMessage) {
        return "error"
      } else if (this.success) {
        return "success"
      } else if (this.warning) {
        return "warning"
      }

      return this.status
    },

    fieldMessageContent() {
      if (this.validationMessage) {
        return this.validationMessage
      } else if (this.error) {
        return this.error
      } else if (this.success) {
        return this.success
      } else if (this.warning) {
        return this.warning
      } else if (this.info) {
        return this.info
      } else if (this.description) {
        return this.description
      }
    },

    fieldMessageStatus() {
      if (this.error || this.validationMessage) {
        return "error"
      } else if (this.success) {
        return "success"
      } else if (this.warning) {
        return "warning"
      } else if (this.info) {
        return "info"
      } else if (this.description) {
        return "description"
      }
    },

    // Available rules: https://vuelidate.js.org/#sub-builtin-validators
    validationMessage() {
      let message = ""

      if (this.validation && this.validation.$dirty) {
        // Required, Required If, Required Unless
        if (
          this.validation.required === false ||
          this.validation.requiredIf === false ||
          this.validation.requiredUnless === false
        ) {
          message = "The value is required."
        }
        // Min Length
        else if (this.validation.minLength === false) {
          const min = this.validation.$params.minLength.min
          message = `The value is too short (min: ${min}).`
        }
        // Max Length
        else if (this.validation.maxLength === false) {
          const max = this.validation.$params.maxLength.max
          message = `This value is too long (max ${max}).`
        }
        // Min Value
        else if (this.validation.minValue === false) {
          const min = this.validation.$params.minValue.min
          message = `Minimum value allowed: ${min}.`
        }
        // Max Value
        else if (this.validation.maxValue === false) {
          const max = this.validation.$params.maxValue.max
          message = `Maximum value allowed: ${max}.`
        }
        // Between
        else if (this.validation.between === false) {
          const max = this.validation.$params.between.max
          const min = this.validation.$params.between.min
          message = `Value should be between ${min} and ${max}.`
        }
        // Alpha
        else if (this.validation.alpha === false) {
          message = "The value accepts only alphabet characters."
        }
        // Alpha Num
        else if (this.validation.alphaNum === false) {
          message = "The value accepts only alphanumerics."
        }
        // Numeric
        else if (this.validation.numeric === false) {
          message = "The value accepts only numerics."
        }
        // Integer
        else if (this.validation.integer === false) {
          message = "The value accepts only positive and negative integers."
        }
        // Integer
        else if (this.validation.decimal === false) {
          message = "The value accepts only positive and negative decimal numbers."
        }
        // Email
        else if (this.validation.email === false) {
          message = "The value is not a valid email."
        }
        // IP Address
        else if (this.validation.ipAddress === false) {
          message = "The value accepts only valid IPv4 addresses."
        }
        // Mac Address
        else if (this.validation.macAddress === false) {
          message = "The value accepts only valid MAC addresses."
        }
        // Same As
        else if (this.validation.sameAs === false) {
          const field = this.validation.$params.sameAs.eq
          message = `The value does not match: ${field}.`
        }
        // Url
        else if (this.validation.url === false) {
          message = "The value is not a valid url."
        }
        // Other rules
        else if (this.validation.$invalid === true) {
          message = "The value is invalid."
        }
      }

      return message
    }
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        // Synchronize inner value with new one
        this.innerValue = this.value
      }
    }
  },

  mounted() {
    const isMobile = detectMobileDevice()

    // Generate a unique identifier
    this.uuid = generateUUID()

    // Focus only on desktop browsers
    if (this.autofocus && !isMobile) {
      this.focus()
    }
  },

  methods: {
    // --> HELPERS <--

    focus() {
      const field = this.$el.querySelector(".js-tag-for-autofocus")

      field.focus()
    }
  }
}
