import BaseAvatar from '@/components/darkmode/base/BaseAvatar';
import BaseIcon from '@/components/darkmode/base/BaseIcon';
import { generateUUID } from '@/helpers/helpers';
import FieldDescription from '@/components/darkmode/form/FieldDescription';
import FieldLabel from '@/components/darkmode/form/FieldLabel';

//

var script = {
  name: "BaseAvatar",

  components: {
    BaseAvatar: BaseAvatar
  },

  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    complementaries: {
      type: Array,
      default: null
    },
    cursor: {
      type: String,
      default: "default"
    },
    description: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large", "huge"].indexOf(x) !==
          -1
        );
      }
    },
    src: {
      type: String,
      required: true
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick: function onClick() {
      this.$emit("click");
    }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-base-avatar",
        "dm-base-avatar--" + _vm.size,
        {
          "dm-base-avatar--bordered": _vm.bordered,
          "dm-base-avatar--circular": _vm.circular,
          "dm-base-avatar--complementaries": _vm.complementaries
        }
      ],
      on: { click: _vm.onClick }
    },
    [
      _c(
        "span",
        {
          staticClass: "dm-base-avatar__image",
          style: {
            backgroundImage: "url(" + _vm.src + ")",
            cursor: _vm.cursor
          }
        },
        [
          _vm.complementaries
            ? _c(
                "span",
                { staticClass: "dm-base-avatar__complementaries" },
                _vm._l(_vm.complementaries, function(complementary) {
                  return _c("base-avatar", {
                    key: complementary.src,
                    staticClass: "dm-base-avatar__complementary",
                    attrs: {
                      bordered: true,
                      circular: false,
                      src: complementary.src,
                      size: "mini"
                    }
                  })
                })
              )
            : _vm._e()
        ]
      ),
      _vm.description
        ? _c("span", { staticClass: "dm-base-avatar__description" }, [
            _vm._v(_vm._s(_vm.description))
          ])
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseAvatar.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseAvatar$1 = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
  props: {
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return (
          [
            "black",
            "blue",
            "green",
            "orange",
            "purple",
            "red",
            "turquoise",
            "white"
          ].indexOf(x) !== -1
        );
      }
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    }
  }
};

/* script */
            var __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    {
      class: [
        "dm-base-badge",
        "dm-base-badge--" + _vm.color,
        "dm-base-badge--" + _vm.size
      ]
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseBadge.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseBadge = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//

var script$2 = {
  components: {
    BaseIcon: BaseIcon
  },

  props: {
    capitalize: {
      type: Boolean,
      default: true
    },
    circular: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return (
          ["black", "blue", "green", "red", "orange", "white"].indexOf(x) !== -1
        );
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    leftIcon: {
      type: String,
      default: null
    },
    reverse: {
      type: Boolean,
      default: false
    },
    rightIcon: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    type: {
      type: String,
      default: "button",
      validator: function validator(x) {
        return ["button", "reset", "submit"].indexOf(x) !== -1;
      }
    }
  },

  computed: {
    iconSize: function iconSize() {
      switch (this.size) {
        case "mini":
          return "12px";
        case "small":
          return "14px";
        case "default":
          return "16px";
        case "medium":
          return "18px";
        case "large":
          return "20px";
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onBlur: function onBlur() {
      this.$emit("blur", this.id);
    },

    onClick: function onClick() {
      this.$emit("click", this.id);
    },

    onFocus: function onFocus() {
      this.$emit("focus", this.id);
    }
  }
};

/* script */
            var __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      class: [
        "dm-base-button",
        "dm-base-button--" + _vm.color,
        "dm-base-button--" + _vm.size,
        {
          "dm-base-button--capitalize": _vm.capitalize,
          "dm-base-button--circular": _vm.circular,
          "dm-base-button--disabled": _vm.disabled,
          "dm-base-button--full-width": _vm.fullWidth,
          "dm-base-button--reverse": _vm.reverse,
          "dm-base-button--rounded": _vm.rounded
        }
      ],
      attrs: { disabled: _vm.disabled, id: _vm.id, type: _vm.type },
      on: { blur: _vm.onBlur, click: _vm.onClick, focus: _vm.onFocus }
    },
    [
      _c(
        "span",
        { staticClass: "dm-base-button__inner" },
        [
          _vm.leftIcon
            ? _c("base-icon", {
                staticClass: "dm-base-button__left-icon",
                attrs: { name: _vm.leftIcon, size: _vm.iconSize }
              })
            : _vm._e(),
          _vm.$slots.default && _vm.$slots.default[0].text.trim()
            ? _c(
                "span",
                { staticClass: "dm-base-button__label" },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm.rightIcon
            ? _c("base-icon", {
                staticClass: "dm-base-button__right-icon",
                attrs: { name: _vm.rightIcon, size: _vm.iconSize }
              })
            : _vm._e()
        ],
        1
      )
    ]
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseButton.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseButton = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
  props: {
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return (
          [
            "black",
            "blue",
            "green",
            "orange",
            "purple",
            "red",
            "turquoise",
            "white"
          ].indexOf(x) !== -1
        );
      }
    },
    size: {
      type: String,
      default: "small",
      validator: function validator(x) {
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  }
};

/* script */
            var __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("hr", {
    class: [
      "dm-base-divider",
      "dm-base-divider--" + _vm.size,
      "dm-base-divider--" + _vm.color
    ]
  })
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseDivider.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseDivider = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$4 = {
  props: {
    color: {
      type: String,
      default: null,
      validator: function validator(x) {
        return ["grey", "white", "white2"].indexOf(x) !== -1;
      }
    },
    fontWeight: {
      type: String,
      default: null,
      validator: function validator(x) {
        return (
          [
            "thin",
            "light",
            "regular",
            "medium",
            "bold",
            "extrabold",
            "black"
          ].indexOf(x) !== -1
        );
      }
    },
    type: {
      type: String,
      required: true,
      validator: function validator(x) {
        return ["h1", "h2", "h3", "p"].indexOf(x) !== -1;
      }
    }
  },

  computed: {
    computedColor: function computedColor() {
      // Directly return prop when defined
      if (this.color) { return this.color; }

      switch (this.type) {
        case "h1":
          return "white";
        case "h2":
          return "white2";
        case "h3":
          return "grey";
        case "p":
          return "white";
      }
    },

    computedFontWeight: function computedFontWeight() {
      // Directly return prop when defined
      if (this.fontWeight) { return this.fontWeight; }

      switch (this.type) {
        case "h1":
          return "bold";
        case "h2":
          return "medium";
        case "h3":
          return "regular";
        case "p":
          return "regular";
      }
    }
  }
};

/* script */
            var __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-base-heading",
        "dm-base-heading--" + _vm.computedColor,
        "dm-base-heading--" + _vm.computedFontWeight,
        "dm-base-heading--" + _vm.type
      ]
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseHeading.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseHeading = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$5 = {
  props: {
    color: {
      type: String,
      default: null
    },
    cursor: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "24px"
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick: function onClick() {
      this.$emit("click", this.name);
    }
  }
};

/* script */
            var __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "i",
    {
      staticClass: "dm-base-icon",
      style: {
        color: _vm.color,
        cursor: _vm.cursor,
        fontSize: _vm.size
      },
      attrs: { "aria-hidden": "true" },
      on: { click: _vm.onClick }
    },
    [_vm._v(_vm._s(_vm.name))]
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  var __vue_inject_styles__$5 = function (inject) {
    if (!inject) { return }
    inject("data-v-13e325c0_0", { source: "\n.dm-base-icon {\n  display: inline-block;\n  color: inherit;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  white-space: nowrap;\n  word-wrap: normal;\n  letter-spacing: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  font-feature-settings: \"liga\";\n  line-height: 1;\n  direction: ltr;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n}\n@font-face {\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  src: url(\"https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2\") format(\"woff2\");\n}\n\n/*# sourceMappingURL=BaseIcon.vue.map */", map: {"version":3,"sources":["/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseIcon.vue","BaseIcon.vue"],"names":[],"mappings":";AA2DA;EACA,sBAAA;EACA,eAAA;EACA,qBAAA;EACA,mCAAA;EACA,oBAAA;EACA,kBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,8BAAA;EACA,8BAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EAEA,oCAAA;CACA;AAEA;EACA,iBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mHACA;CAAA;;AC5DA,wCAAwC","file":"BaseIcon.vue","sourcesContent":[null,".dm-base-icon {\n  display: inline-block;\n  color: inherit;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  white-space: nowrap;\n  word-wrap: normal;\n  letter-spacing: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  font-feature-settings: \"liga\";\n  line-height: 1;\n  direction: ltr;\n  user-select: none;\n  -webkit-font-smoothing: antialiased; }\n\n@font-face {\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  src: url(\"https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2\") format(\"woff2\"); }\n\n/*# sourceMappingURL=BaseIcon.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseIcon.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseIcon$1 = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    __vue_create_injector__,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$6 = {
  props: {
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return (
          [
            "black",
            "blue",
            "green",
            "orange",
            "purple",
            "red",
            "turquoise",
            "white"
          ].indexOf(x) !== -1
        );
      }
    },
    labelSecondary: {
      type: String,
      default: null
    },
    labelMain: {
      type: String,
      default: null
    },
    progress: {
      type: Number,
      default: 0
    }
  }
};

/* script */
            var __vue_script__$6 = script$6;
            
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ["dm-base-loader", "dm-base-loader--" + _vm.color]
    },
    [
      _vm.labelMain || _vm.labelSecondary
        ? _c("span", { staticClass: "dm-base-loader__content" }, [
            _vm.labelMain
              ? _c("span", { staticClass: "dm-base-loader__label-main" }, [
                  _vm._v(_vm._s(_vm.labelMain))
                ])
              : _vm._e(),
            _vm.labelSecondary
              ? _c("span", { staticClass: "dm-base-loader__label-secondary" }, [
                  _vm._v(_vm._s(_vm.labelSecondary))
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _c("div", { staticClass: "dm-base-loader__bar" }),
      _c("div", {
        staticClass: "dm-base-loader__progress",
        style: {
          width: _vm.progress + "%"
        }
      })
    ]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* component normalizer */
  function __vue_normalize__$6(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseLoader.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseLoader = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
  filters: {
    capitalize: function capitalize(value) {
      if (!value) { return ""; }
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },

  props: {
    action: {
      type: String,
      default: null
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    network: {
      type: String,
      required: true,
      validator: function validator(x) {
        return ["facebook", "google", "messenger", "twitter"].indexOf(x) !== -1;
      }
    },
    size: {
      type: String,
      default: "large",
      validator: function validator(x) {
        return ["mini", "small", "large"].indexOf(x) !== -1;
      }
    }
  },

  computed: {
    computedAction: function computedAction() {
      // Return the action when defined as prop
      if (this.action) { return this.action; }

      switch (this.network) {
        case "facebook":
          return "Sign in";
        case "google":
          return "Sign in";
        case "messenger":
          return "Subscribe";
        case "twitter":
          return "Sign in";
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick: function onClick() {
      this.$emit("click", this.network);
    }
  }
};

/* script */
            var __vue_script__$7 = script$7;
            
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      class: [
        "dm-base-social-login",
        "dm-base-social-login--" + _vm.network,
        "dm-base-social-login--" + _vm.size,
        {
          "dm-base-social-login--full-width": _vm.fullWidth
        }
      ],
      on: { click: _vm.onClick }
    },
    [
      _c("span", { staticClass: "dm-base-social-login__inner" }, [
        _c("span", { staticClass: "dm-base-social-login__icon" }),
        ["small", "large"].includes(_vm.size)
          ? _c("span", { staticClass: "dm-base-social-login__label" }, [
              _c("span", { staticClass: "dm-base-social-login__action" }, [
                _vm._v(_vm._s(_vm.computedAction))
              ]),
              ["large"].includes(_vm.size)
                ? _c("span", { staticClass: "dm-base-social-login__network" }, [
                    _vm._v(" with " + _vm._s(_vm._f("capitalize")(_vm.network)))
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ])
    ]
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = undefined;
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* component normalizer */
  function __vue_normalize__$7(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseSocialLogin.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseSocialLogin = __vue_normalize__$7(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

//

var script$8 = {
  components: {
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },

  props: {
    checked: {
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
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      uuid: ""
    };
  },

  mounted: function mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange: function onFieldChange(event) {
      this.$emit("change", this.name, event.target.checked);
    }
  }
};

/* script */
            var __vue_script__$8 = script$8;
            
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-checkbox",
        "dm-field-checkbox--" + _vm.size,
        "dm-field-checkbox--" + _vm.status,
        {
          "dm-field-checkbox--disabled": _vm.disabled,
          "dm-field-checkbox--full-width": _vm.fullWidth
        }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "dm-field-checkbox__container" },
        [
          _c("input", {
            staticClass: "dm-field-checkbox__field",
            attrs: {
              disabled: _vm.disabled,
              id: _vm.uuid,
              name: _vm.name,
              required: _vm.required,
              type: "checkbox"
            },
            domProps: { checked: _vm.checked },
            on: { change: _vm.onFieldChange }
          }),
          _vm.label
            ? _c(
                "field-label",
                {
                  staticClass: "dm-field-checkbox__label",
                  attrs: {
                    forField: _vm.uuid,
                    size: _vm.size,
                    uppercase: false
                  }
                },
                [_vm._v(_vm._s(_vm.label))]
              )
            : _vm._e()
        ],
        1
      ),
      _vm.description
        ? _c("field-description", {
            attrs: { description: _vm.description, size: _vm.size }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = undefined;
  /* functional template */
  var __vue_is_functional_template__$8 = false;
  /* component normalizer */
  function __vue_normalize__$8(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldCheckbox.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldCheckbox = __vue_normalize__$8(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

//

var script$9 = {
  components: {
    BaseIcon: BaseIcon,
    FieldLabel: FieldLabel
  },

  props: {
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      uuid: ""
    };
  },

  mounted: function mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange: function onFieldChange() {
      this.$emit("change", this.name);
    }
  }
};

/* script */
            var __vue_script__$9 = script$9;
            
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-file",
        "dm-field-file--" + _vm.size,
        "dm-field-file--" + _vm.status,
        {
          "dm-field-file--disabled": _vm.disabled,
          "dm-field-file--full-width": _vm.fullWidth
        }
      ]
    },
    [
      _c("div", { staticClass: "dm-field-file__container" }, [
        _vm.label
          ? _c(
              "div",
              { staticClass: "dm-field-file__information" },
              [
                _c(
                  "field-label",
                  {
                    staticClass: "dm-field-file__label",
                    attrs: { size: _vm.size }
                  },
                  [_vm._v(_vm._s(_vm.label))]
                ),
                _vm.description
                  ? _c("span", { staticClass: "dm-field-file__description" }, [
                      _vm._v(_vm._s(_vm.description))
                    ])
                  : _vm._e()
              ],
              1
            )
          : _vm._e(),
        _c(
          "label",
          { staticClass: "dm-field-file__upload", attrs: { for: _vm.uuid } },
          [
            _c("base-icon", {
              staticClass: "dm-field-file__icon",
              attrs: { name: "cloud_upload" }
            })
          ],
          1
        ),
        _c("input", {
          staticClass: "dm-field-file__field",
          attrs: {
            disabled: _vm.disabled,
            id: _vm.uuid,
            multiple: _vm.multiple,
            name: _vm.name,
            type: "file"
          },
          on: { change: _vm.onFieldChange }
        })
      ])
    ]
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  var __vue_inject_styles__$9 = undefined;
  /* scoped */
  var __vue_scope_id__$9 = undefined;
  /* module identifier */
  var __vue_module_identifier__$9 = undefined;
  /* functional template */
  var __vue_is_functional_template__$9 = false;
  /* component normalizer */
  function __vue_normalize__$9(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldFile.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldFile = __vue_normalize__$9(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

//

var script$a = {
  components: {
    BaseIcon: BaseIcon,
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },

  props: {
    autocomplete: {
      type: String,
      default: "off",
      validator: function validator(x) {
        return ["off", "on"].indexOf(x) !== -1;
      }
    },
    borders: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    leftIcon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: null
    },
    rightIcon: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    },
    type: {
      type: String,
      default: "text",
      validator: function validator(x) {
        return ["number", "text"].indexOf(x) !== -1;
      }
    },
    value: {
      type: [String, Number],
      default: null
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      currentValue:
        this.value === undefined || this.value === null ? "" : this.value,
      focused: false,
      uuid: ""
    };
  },

  computed: {
    computedRightIcon: function computedRightIcon() {
      // Return the status when defined as prop
      if (this.status === "error") {
        return "close";
      } else if (this.status === "success") {
        return "check";
      } else if (this.status === "warning") {
        return "warning";
      }

      return this.rightIcon;
    }
  },

  mounted: function mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> HELPERS <--

    getInputValue: function getInputValue() {
      var value = this.$el.querySelector("input").value || "";

      if (value && this.type === "number") {
        value = parseInt(value);
      }

      return value;
    },

    // --> EVENT LISTENERS <--

    onContainerClick: function onContainerClick() {
      this.$el.querySelector("input").focus();

      this.$emit("click", this.name, this.getInputValue());
    },

    onFieldBlur: function onFieldBlur() {
      this.focused = false;

      this.$emit("blur", this.name, this.getInputValue());
    },

    onFieldChange: function onFieldChange() {
      this.$emit("change", this.getInputValue());
    },

    onFieldFocus: function onFieldFocus() {
      this.focused = true;

      this.$emit("focus", this.name, this.getInputValue());
    },

    onFieldInput: function onFieldInput() {
      var value = this.getInputValue();

      this.currentValue = value;
      this.$emit("input", value);
    }
  }
};

/* script */
            var __vue_script__$a = script$a;
            
/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-input",
        "dm-field-input--" + _vm.size,
        "dm-field-input--" + _vm.status,
        {
          "dm-field-input--borders": _vm.borders,
          "dm-field-input--disabled": _vm.disabled,
          "dm-field-input--focused": _vm.focused,
          "dm-field-input--full-width": _vm.fullWidth,
          "dm-field-input--rounded": _vm.rounded,
          "dm-field-input--with-icon": _vm.leftIcon || _vm.rightIcon
        }
      ]
    },
    [
      _vm.label
        ? _c(
            "field-label",
            {
              staticClass: "dm-field-input__label",
              attrs: { forField: _vm.uuid, size: _vm.size }
            },
            [_vm._v(_vm._s(_vm.label))]
          )
        : _vm._e(),
      _c(
        "div",
        {
          staticClass: "dm-field-input__container",
          on: { click: _vm.onContainerClick }
        },
        [
          _vm.leftIcon
            ? _c("base-icon", {
                staticClass: "dm-field-input__icon dm-field-input__icon--left",
                attrs: { name: _vm.leftIcon }
              })
            : _vm._e(),
          _c("input", {
            staticClass: "dm-field-input__field",
            attrs: {
              autocomplete: _vm.autocomplete,
              disabled: _vm.disabled,
              id: _vm.uuid,
              name: _vm.name,
              placeholder: _vm.placeholder,
              type: _vm.type
            },
            domProps: { value: _vm.currentValue },
            on: {
              blur: _vm.onFieldBlur,
              change: _vm.onFieldChange,
              focus: _vm.onFieldFocus,
              input: _vm.onFieldInput
            }
          }),
          _vm.computedRightIcon
            ? _c("base-icon", {
                staticClass: "dm-field-input__icon dm-field-input__icon--right",
                attrs: { name: _vm.computedRightIcon }
              })
            : _vm._e()
        ],
        1
      ),
      _vm.description
        ? _c("field-description", {
            attrs: { description: _vm.description, size: _vm.size }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  var __vue_inject_styles__$a = undefined;
  /* scoped */
  var __vue_scope_id__$a = undefined;
  /* module identifier */
  var __vue_module_identifier__$a = undefined;
  /* functional template */
  var __vue_is_functional_template__$a = false;
  /* component normalizer */
  function __vue_normalize__$a(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldInput.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldInput = __vue_normalize__$a(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

//

var script$b = {
  components: {
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },

  props: {
    checked: {
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
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      uuid: ""
    };
  },

  mounted: function mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange: function onFieldChange(event) {
      this.$emit("change", this.name, event.target.checked);
    }
  }
};

/* script */
            var __vue_script__$b = script$b;
            
/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-radio",
        "dm-field-radio--" + _vm.size,
        "dm-field-radio--" + _vm.status,
        {
          "dm-field-radio--disabled": _vm.disabled,
          "dm-field-radio--full-width": _vm.fullWidth
        }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "dm-field-radio__container" },
        [
          _c("input", {
            staticClass: "dm-field-radio__field",
            attrs: {
              disabled: _vm.disabled,
              id: _vm.uuid,
              name: _vm.name,
              required: _vm.required,
              type: "radio"
            },
            domProps: { checked: _vm.checked },
            on: { change: _vm.onFieldChange }
          }),
          _vm.label
            ? _c(
                "field-label",
                {
                  staticClass: "dm-field-radio__label",
                  attrs: {
                    forField: _vm.uuid,
                    size: _vm.size,
                    uppercase: false
                  }
                },
                [_vm._v(_vm._s(_vm.label))]
              )
            : _vm._e()
        ],
        1
      ),
      _vm.description
        ? _c("field-description", {
            attrs: { description: _vm.description, size: _vm.size }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  var __vue_inject_styles__$b = undefined;
  /* scoped */
  var __vue_scope_id__$b = undefined;
  /* module identifier */
  var __vue_module_identifier__$b = undefined;
  /* functional template */
  var __vue_is_functional_template__$b = false;
  /* component normalizer */
  function __vue_normalize__$b(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldRadio.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldRadio = __vue_normalize__$b(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

//

var script$c = {
  components: {
    BaseIcon: BaseIcon,
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },

  props: {
    borders: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    leftIcon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      focused: false,
      rightIcon: "arrow_drop_down",
      uuid: ""
    };
  },

  computed: {
    computedLeftIcon: function computedLeftIcon() {
      // Return the left icon when defined as prop
      if (this.status === "error") {
        return "close";
      } else if (this.status === "success") {
        return "check";
      } else if (this.status === "warning") {
        return "warning";
      }

      return this.leftIcon;
    }
  },

  mounted: function mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> HELPERS <--

    getSelectedValue: function getSelectedValue() {
      return this.$el.querySelector("select").value || "";
    },

    // --> EVENT LISTENERS <--

    onFieldBlur: function onFieldBlur() {
      this.focused = false;
      this.rightIcon = "arrow_drop_down";

      this.$emit("blur", this.name, this.getSelectedValue());
    },

    onFieldChange: function onFieldChange() {
      this.rightIcon = "arrow_drop_down";

      this.$emit("change", this.name, this.getSelectedValue());
    },

    onFieldClick: function onFieldClick() {
      this.rightIcon = "arrow_drop_up";

      this.$emit("click", this.name, this.getSelectedValue());
    },

    onFieldFocus: function onFieldFocus() {
      this.focused = true;
      this.rightIcon = "arrow_drop_up";

      this.$emit("focus", this.name, this.getSelectedValue());
    }
  }
};

/* script */
            var __vue_script__$c = script$c;
            
/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-select",
        "dm-field-select--" + _vm.size,
        "dm-field-select--" + _vm.status,
        {
          "dm-field-select--borders": _vm.borders,
          "dm-field-select--disabled": _vm.disabled,
          "dm-field-select--focused": _vm.focused,
          "dm-field-select--full-width": _vm.fullWidth,
          "dm-field-select--with-left-icon": _vm.computedLeftIcon
        }
      ]
    },
    [
      _vm.label
        ? _c(
            "field-label",
            {
              staticClass: "dm-field-select__label",
              attrs: { forField: _vm.uuid, size: _vm.size }
            },
            [_vm._v(_vm._s(_vm.label))]
          )
        : _vm._e(),
      _c(
        "div",
        { staticClass: "dm-field-select__container" },
        [
          _vm.computedLeftIcon
            ? _c("base-icon", {
                staticClass:
                  "dm-field-select__icon dm-field-select__icon--left",
                attrs: { name: _vm.computedLeftIcon }
              })
            : _vm._e(),
          _c(
            "select",
            {
              staticClass: "dm-field-select__field",
              attrs: { disabled: _vm.disabled, id: _vm.uuid, name: _vm.name },
              on: {
                blur: _vm.onFieldBlur,
                change: _vm.onFieldChange,
                click: _vm.onFieldClick,
                focus: _vm.onFieldFocus
              }
            },
            _vm._l(_vm.options, function(option) {
              return _c("option", { domProps: { value: option.value } }, [
                _vm._v(_vm._s(option.label))
              ])
            })
          ),
          _c("base-icon", {
            staticClass: "dm-field-select__icon dm-field-select__icon--right",
            attrs: { name: _vm.rightIcon }
          })
        ],
        1
      ),
      _vm.description
        ? _c("field-description", {
            attrs: { description: _vm.description, size: _vm.size }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  var __vue_inject_styles__$c = undefined;
  /* scoped */
  var __vue_scope_id__$c = undefined;
  /* module identifier */
  var __vue_module_identifier__$c = undefined;
  /* functional template */
  var __vue_is_functional_template__$c = false;
  /* component normalizer */
  function __vue_normalize__$c(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldSelect.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldSelect = __vue_normalize__$c(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    undefined
  );

//

var script$d = {
  components: {
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },

  props: {
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    },
    tabs: {
      type: Array,
      required: true
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      activeTabs: []
    };
  },

  created: function created() {
    var this$1 = this;

    // Set initial active tabs
    this.tabs.map(function (tab) {
      if (tab.active) {
        this$1.activeTabs.push(tab.id);
      }
    });
  },

  methods: {
    // --> HELPERS <--

    checkActiveBrother: function checkActiveBrother(order, index) {
      if (this.multiple && this.tabs[index]) {
        return this.activeTabs.includes(this.tabs[index].id);
      }
    },

    // --> EVENT LISTENERS <--

    onTabClick: function onTabClick(tabId) {
      // When multiple values are not allowed and tab is not already active
      if (!this.multiple && !this.activeTabs.includes(tabId)) {
        this.activeTabs = [tabId];
        this.$emit("change", tabId, "added");
      }

      // When multiple values are allowed
      if (this.multiple) {
        // Remove the tab when already active
        if (this.activeTabs.includes(tabId)) {
          this.activeTabs.splice(this.activeTabs.indexOf(tabId), 1);
          this.$emit("change", tabId, "removed", this.activeTabs);
        } else {
          // Push the tab when not already active
          this.activeTabs.push(tabId);
          this.$emit("change", tabId, "added", this.activeTabs);
        }
      }

      this.$emit("click", tabId);
    }
  }
};

/* script */
            var __vue_script__$d = script$d;
            
/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-tabs",
        "dm-field-tabs--" + _vm.size,
        "dm-field-tabs--" + _vm.status,
        {
          "dm-field-tabs--disabled": _vm.disabled,
          "dm-field-tabs--multiple": _vm.multiple
        }
      ]
    },
    [
      _vm.label
        ? _c(
            "field-label",
            { staticClass: "dm-field-tabs__label", attrs: { size: _vm.size } },
            [_vm._v(_vm._s(_vm.label))]
          )
        : _vm._e(),
      _c(
        "div",
        { staticClass: "dm-field-tabs__container" },
        _vm._l(_vm.tabs, function(tab, i) {
          return _c(
            "span",
            {
              class: [
                "dm-field-tabs__tab",
                {
                  "dm-field-tabs__tab--active": _vm.activeTabs.includes(tab.id),
                  "dm-field-tabs__tab--active-previous": _vm.checkActiveBrother(
                    "desc",
                    i - 1
                  ),
                  "dm-field-tabs__tab--active-next": _vm.checkActiveBrother(
                    "asc",
                    i + 1
                  )
                }
              ],
              on: {
                click: function($event) {
                  _vm.onTabClick(tab.id);
                }
              }
            },
            [_vm._v(_vm._s(tab.name))]
          )
        })
      ),
      _vm.description
        ? _c("field-description", {
            attrs: { description: _vm.description, size: _vm.size }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  var __vue_inject_styles__$d = undefined;
  /* scoped */
  var __vue_scope_id__$d = undefined;
  /* module identifier */
  var __vue_module_identifier__$d = undefined;
  /* functional template */
  var __vue_is_functional_template__$d = false;
  /* component normalizer */
  function __vue_normalize__$d(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTabs.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldTabs = __vue_normalize__$d(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

//

var script$e = {
  components: {
    BaseIcon: BaseIcon,
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },

  props: {
    borders: {
      type: Boolean,
      default: true
    },
    cols: {
      type: Number,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    rows: {
      type: Number,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    },
    value: {
      type: String,
      default: null
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      focused: false,
      uuid: ""
    };
  },

  computed: {
    statusIcon: function statusIcon() {
      // Return the left icon when defined as prop
      if (this.status === "error") {
        return "close";
      } else if (this.status === "success") {
        return "check";
      } else if (this.status === "warning") {
        return "warning";
      }
    }
  },

  mounted: function mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> HELPERS <--

    getTextareaValue: function getTextareaValue() {
      return this.$el.querySelector("textarea").value || "";
    },

    // --> EVENT LISTENERS <--

    onContainerClick: function onContainerClick() {
      this.$el.querySelector("textarea").focus();

      this.$emit("click", this.name, this.getTextareaValue());
    },

    onFieldBlur: function onFieldBlur() {
      this.focused = false;

      this.$emit("blur", this.name, this.getTextareaValue());
    },

    onFieldFocus: function onFieldFocus() {
      this.focused = true;

      this.$emit("focus", this.name, this.getTextareaValue());
    },

    onFieldKeyUp: function onFieldKeyUp() {
      this.$emit("keyup", this.name, this.getTextareaValue());
    }
  }
};

/* script */
            var __vue_script__$e = script$e;
            
/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-textarea",
        "dm-field-textarea--" + _vm.size,
        "dm-field-textarea--" + _vm.status,
        {
          "dm-field-textarea--borders": _vm.borders,
          "dm-field-textarea--disabled": _vm.disabled,
          "dm-field-textarea--focused": _vm.focused,
          "dm-field-textarea--full-width": _vm.fullWidth
        }
      ]
    },
    [
      _vm.label
        ? _c(
            "field-label",
            {
              staticClass: "dm-field-textarea__label",
              attrs: { forField: _vm.uuid, size: _vm.size }
            },
            [_vm._v(_vm._s(_vm.label))]
          )
        : _vm._e(),
      _c(
        "div",
        {
          staticClass: "dm-field-textarea__container",
          on: { click: _vm.onContainerClick }
        },
        [
          _c(
            "textarea",
            {
              staticClass: "dm-field-textarea__field",
              attrs: {
                cols: _vm.cols,
                disabled: _vm.disabled,
                id: _vm.uuid,
                name: _vm.name,
                placeholder: _vm.placeholder,
                rows: _vm.rows
              },
              on: {
                blur: _vm.onFieldBlur,
                focus: _vm.onFieldFocus,
                keyup: _vm.onFieldKeyUp
              }
            },
            [_vm._v(_vm._s(_vm.value))]
          ),
          _vm.statusIcon
            ? _c("base-icon", {
                staticClass: "dm-field-textarea__icon",
                attrs: { name: _vm.statusIcon }
              })
            : _vm._e()
        ],
        1
      ),
      _vm.description
        ? _c("field-description", {
            attrs: { description: _vm.description, size: _vm.size }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  var __vue_inject_styles__$e = undefined;
  /* scoped */
  var __vue_scope_id__$e = undefined;
  /* module identifier */
  var __vue_module_identifier__$e = undefined;
  /* functional template */
  var __vue_is_functional_template__$e = false;
  /* component normalizer */
  function __vue_normalize__$e(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTextarea.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldTextarea = __vue_normalize__$e(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    undefined
  );

//

var script$f = {
  components: {
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },

  props: {
    checked: {
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
    fullWidth: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return (
          ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1
        );
      }
    },
    status: {
      type: String,
      default: "normal",
      validator: function validator(x) {
        return ["error", "normal", "success", "warning"].indexOf(x) !== -1;
      }
    }
  },

  data: function data() {
    return {
      // --> STATE <--

      uuid: ""
    };
  },

  mounted: function mounted() {
    this.uuid = generateUUID();
  },

  methods: {
    // --> EVENT LISTENERS <--

    onFieldChange: function onFieldChange(event) {
      this.$emit("change", this.name, event.target.checked);
    }
  }
};

/* script */
            var __vue_script__$f = script$f;
            
/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-field-toggle",
        "dm-field-toggle--" + _vm.size,
        "dm-field-toggle--" + _vm.status,
        {
          "dm-field-toggle--disabled": _vm.disabled,
          "dm-field-toggle--full-width": _vm.fullWidth
        }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "dm-field-toggle__container" },
        [
          _c("input", {
            staticClass: "dm-field-toggle__field",
            attrs: {
              disabled: _vm.disabled,
              id: _vm.uuid,
              name: _vm.name,
              required: _vm.required,
              type: "checkbox"
            },
            domProps: { checked: _vm.checked },
            on: { change: _vm.onFieldChange }
          }),
          _vm.label
            ? _c(
                "field-label",
                {
                  staticClass: "dm-field-toggle__label",
                  attrs: {
                    forField: _vm.uuid,
                    size: _vm.size,
                    uppercase: false
                  }
                },
                [_vm._v(_vm._s(_vm.label))]
              )
            : _vm._e()
        ],
        1
      ),
      _vm.description
        ? _c("field-description", {
            attrs: { description: _vm.description, size: _vm.size }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  var __vue_inject_styles__$f = undefined;
  /* scoped */
  var __vue_scope_id__$f = undefined;
  /* module identifier */
  var __vue_module_identifier__$f = undefined;
  /* functional template */
  var __vue_is_functional_template__$f = false;
  /* component normalizer */
  function __vue_normalize__$f(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldToggle.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FieldToggle = __vue_normalize__$f(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    undefined,
    undefined
  );

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;

  Vue.component("dm-avatar", BaseAvatar$1);
  Vue.component("dm-badge", BaseBadge);
  Vue.component("dm-button", BaseButton);
  Vue.component("dm-divider", BaseDivider);
  Vue.component("dm-heading", BaseHeading);
  Vue.component("dm-icon", BaseIcon$1);
  Vue.component("dm-loader", BaseLoader);
  Vue.component("dm-social-login", BaseSocialLogin);
  Vue.component("dm-checkbox", FieldCheckbox);
  Vue.component("dm-file", FieldFile);
  Vue.component("dm-input", FieldInput);
  Vue.component("dm-radio", FieldRadio);
  Vue.component("dm-select", FieldSelect);
  Vue.component("dm-tabs", FieldTabs);
  Vue.component("dm-textarea", FieldTextarea);
  Vue.component("dm-toggle", FieldToggle);
}

// Create module definition for Vue.use()
var plugin = {
  install: install
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
