/*!
 * vuedarkmode v0.2.11
 * (c) 2018-present Team <team@vuedarkmode.com>
 * Released under the MIT License.
 */
'use strict';

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
var script = {
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "inherit"
    },
    id: {
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
    onClick: function onClick(event) {
      if (this.clickable) {
        this.$emit("click", this.id, event);
      }
    },
    onDoubleClick: function onDoubleClick(event) {
      this.$emit("dblclick", this.id, event);
    },
    onKeypress: function onKeypress(event) {
      if (this.clickable && event.which === 32) {
        event.preventDefault();
        event.target.click();
      }

      this.$emit("keypress", this.id, event);
    },
    onMouseDown: function onMouseDown(event) {
      this.$emit("mousedown", this.id, event);
    },
    onMouseEnter: function onMouseEnter(event) {
      this.$emit("mouseenter", this.id, event);
    },
    onMouseLeave: function onMouseLeave(event) {
      this.$emit("mouseleave", this.id, event);
    },
    onMouseMove: function onMouseMove(event) {
      this.$emit("mousemove", this.id, event);
    },
    onMouseOut: function onMouseOut(event) {
      this.$emit("mouseout", this.id, event);
    },
    onMouseOver: function onMouseOver(event) {
      this.$emit("mouseover", this.id, event);
    },
    onMouseUp: function onMouseUp(event) {
      this.$emit("mouseup", this.id, event);
    }
  }
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "i",
    {
      class: [
        "dm-base-icon",
        {
          "dm-base-icon--clickable": _vm.clickable
        }
      ],
      style: {
        color: _vm.color,
        fontSize: _vm.size
      },
      attrs: {
        id: _vm.id,
        tabindex: _vm.clickable ? "0" : null,
        "aria-hidden": "true"
      },
      on: {
        click: _vm.onClick,
        dblclick: _vm.onDoubleClick,
        keypress: _vm.onKeypress,
        mousedown: _vm.onMouseDown,
        mouseenter: _vm.onMouseEnter,
        mouseleave: _vm.onMouseLeave,
        mousemove: _vm.onMouseMove,
        mouseout: _vm.onMouseOut,
        mouseover: _vm.onMouseOver,
        mouseup: _vm.onMouseUp
      }
    },
    [_vm._v(_vm._s(_vm.name))]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-4966a286_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-icon {\n  display: inline-block;\n  outline: 0;\n  border-radius: 2px;\n  color: inherit;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  white-space: nowrap;\n  word-wrap: normal;\n  letter-spacing: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  font-feature-settings: \"liga\";\n  line-height: 1;\n  direction: ltr;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n}\n.dm-base-icon--clickable {\n    cursor: pointer;\n}\n.dm-base-icon--clickable:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s;\n}\n@font-face {\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  src: url(\"https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2\") format(\"woff2\");\n}\n\n/*# sourceMappingURL=BaseIcon.vue.map */", map: {"version":3,"sources":["BaseIcon.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseIcon.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACyHhF;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;EACA,mCAAA;EACA,oBAAA;EACA,kBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;EACA,8BAAA;EACA,8BAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EAEA,oCAAA;CAYA;AARA;IACA,gBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AAIA;EACA,iBAAA;EACA,mBAAA;EACA,8BAAA;EACA,mHACA;CAAA;;AD/HA,wCAAwC","file":"BaseIcon.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-icon {\n  display: inline-block;\n  outline: 0;\n  border-radius: 2px;\n  color: inherit;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  white-space: nowrap;\n  word-wrap: normal;\n  letter-spacing: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  font-feature-settings: \"liga\";\n  line-height: 1;\n  direction: ltr;\n  user-select: none;\n  -webkit-font-smoothing: antialiased; }\n  .dm-base-icon--clickable {\n    cursor: pointer; }\n    .dm-base-icon--clickable:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s; }\n\n@font-face {\n  font-weight: 400;\n  font-style: normal;\n  font-family: \"Material Icons\";\n  src: url(\"https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2\") format(\"woff2\"); }\n\n/*# sourceMappingURL=BaseIcon.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseIcon.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseIcon = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  )

//
var script$1 = {
  components: {
    BaseIcon: BaseIcon
  },
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return ["black", "blue", "green", "orange", "red", "white"].includes(x);
      }
    },
    icon: {
      type: String,
      default: null
    }
  },
  methods: {
    // --> EVENT LISTENERS <--
    onClose: function onClose(event) {
      this.$emit("close", event);
    },
    onTabKeypress: function onTabKeypress(id, event) {
      event.preventDefault();

      if (event.which === 32) {
        event.target.click();
      }
    }
  }
};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ["dm-base-alert", "dm-base-alert--" + _vm.color]
    },
    [
      _vm.icon
        ? _c("base-icon", {
            staticClass: "dm-base-alert__icon dm-base-alert__icon--left",
            attrs: { name: _vm.icon, size: "20px" }
          })
        : _vm._e(),
      _vm.$slots.default && _vm.$slots.default[0].text.trim()
        ? _c(
            "span",
            { staticClass: "dm-base-alert__slot" },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
      _vm.closable
        ? _c("base-icon", {
            staticClass: "dm-base-alert__icon dm-base-alert__icon--right",
            attrs: {
              clickable: true,
              name: "close",
              size: "20px",
              tabindex: "0"
            },
            on: { click: _vm.onClose, keypress: _vm.onTabKeypress }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-7fff554d_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-alert {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  color: #ffffff;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 200ms ease-in-out;\n}\n.dm-base-alert .dm-base-alert__icon {\n    flex: 0 0 auto;\n}\n.dm-base-alert .dm-base-alert__icon--left {\n      margin-right: 20px;\n}\n.dm-base-alert .dm-base-alert__icon--right {\n      margin-left: 20px;\n      outline: 0;\n      border-radius: 100%;\n      transition: all 200ms ease-in-out;\n}\n.dm-base-alert .dm-base-alert__icon--right:focus {\n        transition: box-shadow ease-in-out 0s;\n}\n.dm-base-alert .dm-base-alert__slot {\n    flex: 1;\n    font-size: 16px;\n    line-height: 22px;\n}\n.dm-base-alert--black {\n    background-color: #323e4f;\n}\n.dm-base-alert--black .dm-base-alert__icon--right:hover {\n      color: #e1112c !important;\n}\n.dm-base-alert--black .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #323e4f, 0 0 0 3px #e1112c;\n      color: #e1112c !important;\n}\n.dm-base-alert--blue {\n    background-color: #0194ef;\n}\n.dm-base-alert--blue .dm-base-alert__icon--right:hover {\n      color: #e1112c !important;\n}\n.dm-base-alert--blue .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #0194ef, 0 0 0 3px #e1112c;\n      color: #e1112c !important;\n}\n.dm-base-alert--green {\n    background-color: #1bb934;\n}\n.dm-base-alert--green .dm-base-alert__icon--right:hover {\n      color: #e1112c !important;\n}\n.dm-base-alert--green .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #1bb934, 0 0 0 3px #e1112c;\n      color: #e1112c !important;\n}\n.dm-base-alert--red {\n    background-color: #e1112c;\n}\n.dm-base-alert--red .dm-base-alert__icon--right:hover {\n      color: #323e4f !important;\n}\n.dm-base-alert--red .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #e1112c, 0 0 0 3px #323e4f;\n      color: #323e4f !important;\n}\n.dm-base-alert--orange {\n    background-color: #ffb610;\n}\n.dm-base-alert--orange .dm-base-alert__icon--right:hover {\n      color: #e1112c !important;\n}\n.dm-base-alert--orange .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #ffb610, 0 0 0 3px #e1112c;\n      color: #e1112c !important;\n}\n.dm-base-alert--white {\n    background-color: #ffffff;\n    color: #323e4f;\n}\n.dm-base-alert--white .dm-base-alert__icon--right:hover {\n      color: #e1112c !important;\n}\n.dm-base-alert--white .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #e1112c;\n      color: #e1112c !important;\n}\n\n/*# sourceMappingURL=BaseAlert.vue.map */", map: {"version":3,"sources":["BaseAlert.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseAlert.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4FhF;EACA,cAAA;EACA,oBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,sFACA;EACA,kCAAA;CA8DA;AAtEA;IAWA,eAAA;CAgBA;AA3BA;MAcA,mBAAA;CACA;AAfA;MAkBA,kBAAA;MACA,WAAA;MACA,oBAAA;MACA,kCAAA;CAKA;AA1BA;QAwBA,sCAAA;CACA;AAzBA;IA8BA,QAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAKA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;CA6BA;AA9BA;MAUA,0BAAA;CACA;AAXA;MAcA,iDACA;MACA,0BAAA;CACA;AAjBA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;IAGA,eAAA;CA0BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;;ADzFA,yCAAyC","file":"BaseAlert.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-alert {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  color: #ffffff;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 200ms ease-in-out; }\n  .dm-base-alert .dm-base-alert__icon {\n    flex: 0 0 auto; }\n    .dm-base-alert .dm-base-alert__icon--left {\n      margin-right: 20px; }\n    .dm-base-alert .dm-base-alert__icon--right {\n      margin-left: 20px;\n      outline: 0;\n      border-radius: 100%;\n      transition: all 200ms ease-in-out; }\n      .dm-base-alert .dm-base-alert__icon--right:focus {\n        transition: box-shadow ease-in-out 0s; }\n  .dm-base-alert .dm-base-alert__slot {\n    flex: 1;\n    font-size: 16px;\n    line-height: 22px; }\n  .dm-base-alert--black {\n    background-color: #323e4f; }\n    .dm-base-alert--black .dm-base-alert__icon--right:hover {\n      color: #e1112c !important; }\n    .dm-base-alert--black .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #323e4f, 0 0 0 3px #e1112c;\n      color: #e1112c !important; }\n  .dm-base-alert--blue {\n    background-color: #0194ef; }\n    .dm-base-alert--blue .dm-base-alert__icon--right:hover {\n      color: #e1112c !important; }\n    .dm-base-alert--blue .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #0194ef, 0 0 0 3px #e1112c;\n      color: #e1112c !important; }\n  .dm-base-alert--green {\n    background-color: #1bb934; }\n    .dm-base-alert--green .dm-base-alert__icon--right:hover {\n      color: #e1112c !important; }\n    .dm-base-alert--green .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #1bb934, 0 0 0 3px #e1112c;\n      color: #e1112c !important; }\n  .dm-base-alert--red {\n    background-color: #e1112c; }\n    .dm-base-alert--red .dm-base-alert__icon--right:hover {\n      color: #323e4f !important; }\n    .dm-base-alert--red .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #e1112c, 0 0 0 3px #323e4f;\n      color: #323e4f !important; }\n  .dm-base-alert--orange {\n    background-color: #ffb610; }\n    .dm-base-alert--orange .dm-base-alert__icon--right:hover {\n      color: #e1112c !important; }\n    .dm-base-alert--orange .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #ffb610, 0 0 0 3px #e1112c;\n      color: #e1112c !important; }\n  .dm-base-alert--white {\n    background-color: #ffffff;\n    color: #323e4f; }\n    .dm-base-alert--white .dm-base-alert__icon--right:hover {\n      color: #e1112c !important; }\n    .dm-base-alert--white .dm-base-alert__icon--right:focus {\n      box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #e1112c;\n      color: #e1112c !important; }\n\n/*# sourceMappingURL=BaseAlert.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseAlert.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseAlert = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  )

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
//
//
//
//
//
//
//
//
//
var script$2 = {
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: false
    },
    complementaries: {
      type: Array,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large", "huge"].indexOf(x) !== -1;
      }
    },
    src: {
      type: String,
      required: true
    }
  },
  methods: {
    // --> EVENT LISTENERS <--
    onClick: function onClick(event) {
      if (this.clickable) {
        this.$emit("click", this.id, event);
      }
    },
    onKeypress: function onKeypress(event) {
      if (event.which === 32) {
        event.target.click();
      }
    }
  }
};

/* script */
            const __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
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
          "dm-base-avatar--clickable": _vm.clickable,
          "dm-base-avatar--complementaries": _vm.complementaries
        }
      ],
      attrs: { id: _vm.id },
      on: { click: _vm.onClick }
    },
    [
      _c(
        "span",
        {
          staticClass: "dm-base-avatar__image",
          style: { backgroundImage: "url(" + _vm.src + ")" },
          attrs: { tabindex: _vm.clickable ? "0" : null },
          on: {
            keypress: function($event) {
              $event.preventDefault();
              return _vm.onKeypress($event)
            }
          }
        },
        [
          _vm.complementaries
            ? _c(
                "div",
                { staticClass: "dm-base-avatar__complementaries" },
                _vm._l(_vm.complementaries, function(complementary) {
                  return _c("span", {
                    key: complementary.src,
                    staticClass:
                      "dm-base-avatar__image dm-base-avatar__complementary",
                    style: {
                      backgroundImage: "url(" + complementary.src + ")"
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
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-b622a2d4_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-avatar {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-base-avatar .dm-base-avatar__image {\n    display: inline-block;\n    box-sizing: border-box;\n    outline: 0;\n    background-size: cover;\n    box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n    user-select: none;\n}\n.dm-base-avatar .dm-base-avatar__image .dm-base-avatar__complementaries {\n      display: flex;\n      justify-content: flex-end;\n}\n.dm-base-avatar .dm-base-avatar__image .dm-base-avatar__complementaries .dm-base-avatar__complementary {\n        margin-right: 4px;\n        width: 30px;\n        height: 30px;\n        border: 1px solid #ffffff;\n        border-radius: 4px;\n}\n.dm-base-avatar .dm-base-avatar__image .dm-base-avatar__complementaries .dm-base-avatar__complementary:last-of-type {\n          margin-right: 0;\n}\n.dm-base-avatar--mini .dm-base-avatar__image {\n    border-radius: 2px;\n    width: 30px;\n    height: 30px;\n}\n.dm-base-avatar--mini .dm-base-avatar__description {\n    padding-top: 4px;\n    text-transform: uppercase;\n    font-size: 8px;\n}\n.dm-base-avatar--small .dm-base-avatar__image {\n    border-radius: 4px;\n    width: 40px;\n    height: 40px;\n}\n.dm-base-avatar--small .dm-base-avatar__description {\n    padding-top: 5px;\n    text-transform: uppercase;\n    font-size: 10px;\n}\n.dm-base-avatar--default .dm-base-avatar__image {\n    border-radius: 6px;\n    width: 60px;\n    height: 60px;\n}\n.dm-base-avatar--default .dm-base-avatar__description {\n    padding-top: 6px;\n    text-transform: uppercase;\n    font-size: 12px;\n}\n.dm-base-avatar--medium .dm-base-avatar__image {\n    border-radius: 8px;\n    width: 80px;\n    height: 80px;\n}\n.dm-base-avatar--medium .dm-base-avatar__description {\n    padding-top: 7px;\n    text-transform: uppercase;\n    font-size: 14px;\n}\n.dm-base-avatar--large .dm-base-avatar__image {\n    border-radius: 10px;\n    width: 100px;\n    height: 100px;\n}\n.dm-base-avatar--large .dm-base-avatar__description {\n    padding-top: 8px;\n    text-transform: uppercase;\n    font-size: 16px;\n}\n.dm-base-avatar--huge .dm-base-avatar__image {\n    border-radius: 12px;\n    width: 120px;\n    height: 120px;\n}\n.dm-base-avatar--huge .dm-base-avatar__description {\n    padding-top: 9px;\n    text-transform: uppercase;\n    font-size: 18px;\n}\n.dm-base-avatar--bordered .dm-base-avatar__image {\n    border: 1px solid #ffffff;\n}\n.dm-base-avatar--circular .dm-base-avatar__image {\n    border-radius: 100%;\n}\n.dm-base-avatar--clickable .dm-base-avatar__image {\n    cursor: pointer;\n}\n.dm-base-avatar--clickable .dm-base-avatar__image:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-avatar--complementaries > .dm-base-avatar__image {\n    position: relative;\n}\n.dm-base-avatar--complementaries > .dm-base-avatar__image .dm-base-avatar__complementaries {\n      position: absolute;\n      right: 5px;\n      bottom: 5px;\n}\n\n/*# sourceMappingURL=BaseAvatar.vue.map */", map: {"version":3,"sources":["BaseAvatar.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseAvatar.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACsHhF;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,sFACA;CA0FA;AA/FA;IAQA,sBAAA;IACA,uBAAA;IACA,WAAA;IACA,uBAAA;IACA,8CAAA;IACA,kBAAA;CAkBA;AA/BA;MAgBA,cAAA;MACA,0BAAA;CAaA;AA9BA;QAoBA,kBAAA;QACA,YAAA;QACA,aAAA;QACA,0BAAA;QACA,mBAAA;CAKA;AA7BA;UA2BA,gBAAA;CACA;AAUA;IAEA,mBAAA;IAGA,YAAA;IACA,aAAA;CAKA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,eAAA;CACA;AAjBA;IAEA,mBAAA;IAMA,YAAA;IACA,aAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,mBAAA;IAMA,YAAA;IACA,aAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,mBAAA;IAMA,YAAA;IACA,aAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,oBAAA;IAMA,aAAA;IACA,cAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAjBA;IAEA,oBAAA;IAMA,aAAA;IACA,cAAA;CAEA;AAXA;IAcA,iBAAA;IACA,0BAAA;IACA,gBAAA;CACA;AAMA;IAEA,0BAAA;CACA;AAGA;IAEA,oBAAA;CACA;AAGA;IAEA,gBAAA;CAMA;AARA;MAKA,iDAAA;MACA,sCAAA;CACA;AAIA;IAEA,mBAAA;CAOA;AATA;MAKA,mBAAA;MACA,WAAA;MACA,YAAA;CACA;;AD1HA,0CAA0C","file":"BaseAvatar.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-avatar {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-base-avatar .dm-base-avatar__image {\n    display: inline-block;\n    box-sizing: border-box;\n    outline: 0;\n    background-size: cover;\n    box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n    user-select: none; }\n    .dm-base-avatar .dm-base-avatar__image .dm-base-avatar__complementaries {\n      display: flex;\n      justify-content: flex-end; }\n      .dm-base-avatar .dm-base-avatar__image .dm-base-avatar__complementaries .dm-base-avatar__complementary {\n        margin-right: 4px;\n        width: 30px;\n        height: 30px;\n        border: 1px solid #ffffff;\n        border-radius: 4px; }\n        .dm-base-avatar .dm-base-avatar__image .dm-base-avatar__complementaries .dm-base-avatar__complementary:last-of-type {\n          margin-right: 0; }\n  .dm-base-avatar--mini .dm-base-avatar__image {\n    border-radius: 2px;\n    width: 30px;\n    height: 30px; }\n  .dm-base-avatar--mini .dm-base-avatar__description {\n    padding-top: 4px;\n    text-transform: uppercase;\n    font-size: 8px; }\n  .dm-base-avatar--small .dm-base-avatar__image {\n    border-radius: 4px;\n    width: 40px;\n    height: 40px; }\n  .dm-base-avatar--small .dm-base-avatar__description {\n    padding-top: 5px;\n    text-transform: uppercase;\n    font-size: 10px; }\n  .dm-base-avatar--default .dm-base-avatar__image {\n    border-radius: 6px;\n    width: 60px;\n    height: 60px; }\n  .dm-base-avatar--default .dm-base-avatar__description {\n    padding-top: 6px;\n    text-transform: uppercase;\n    font-size: 12px; }\n  .dm-base-avatar--medium .dm-base-avatar__image {\n    border-radius: 8px;\n    width: 80px;\n    height: 80px; }\n  .dm-base-avatar--medium .dm-base-avatar__description {\n    padding-top: 7px;\n    text-transform: uppercase;\n    font-size: 14px; }\n  .dm-base-avatar--large .dm-base-avatar__image {\n    border-radius: 10px;\n    width: 100px;\n    height: 100px; }\n  .dm-base-avatar--large .dm-base-avatar__description {\n    padding-top: 8px;\n    text-transform: uppercase;\n    font-size: 16px; }\n  .dm-base-avatar--huge .dm-base-avatar__image {\n    border-radius: 12px;\n    width: 120px;\n    height: 120px; }\n  .dm-base-avatar--huge .dm-base-avatar__description {\n    padding-top: 9px;\n    text-transform: uppercase;\n    font-size: 18px; }\n  .dm-base-avatar--bordered .dm-base-avatar__image {\n    border: 1px solid #ffffff; }\n  .dm-base-avatar--circular .dm-base-avatar__image {\n    border-radius: 100%; }\n  .dm-base-avatar--clickable .dm-base-avatar__image {\n    cursor: pointer; }\n    .dm-base-avatar--clickable .dm-base-avatar__image:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-avatar--complementaries > .dm-base-avatar__image {\n    position: relative; }\n    .dm-base-avatar--complementaries > .dm-base-avatar__image .dm-base-avatar__complementaries {\n      position: absolute;\n      right: 5px;\n      bottom: 5px; }\n\n/*# sourceMappingURL=BaseAvatar.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseAvatar.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseAvatar = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    __vue_create_injector__$2,
    undefined
  )

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
var script$3 = {
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return ["black", "blue", "green", "orange", "purple", "red", "turquoise", "white"].indexOf(x) !== -1;
      }
    },
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    // --> EVENT LISTENERS <--
    onClick: function onClick(id, event) {
      if (this.clickable) {
        this.$emit("click", id, event);
      }
    },
    onKeypress: function onKeypress(event) {
      if (event.which === 32) {
        event.target.click();
      }
    }
  }
};

/* script */
            const __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    {
      class: [
        "dm-base-badge",
        "dm-base-badge--" + _vm.color,
        "dm-base-badge--" + _vm.size,
        {
          "dm-base-badge--clickable": _vm.clickable
        }
      ],
      attrs: { id: _vm.id, tabindex: _vm.clickable ? "0" : null },
      on: {
        click: function($event) {
          _vm.onClick(_vm.id, $event);
        },
        keypress: function($event) {
          $event.preventDefault();
          return _vm.onKeypress($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-1177533d_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-badge {\n  display: inline-block;\n  outline: 0;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 100px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none;\n}\n.dm-base-badge--black {\n    border-color: #323e4f;\n}\n.dm-base-badge--black:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #323e4f;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--blue {\n    border-color: #0194ef;\n}\n.dm-base-badge--blue:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--green {\n    border-color: #1bb934;\n}\n.dm-base-badge--green:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--orange {\n    border-color: #ffb610;\n}\n.dm-base-badge--orange:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffb610;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--purple {\n    border-color: #ab7ef6;\n}\n.dm-base-badge--purple:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ab7ef6;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--red {\n    border-color: #e1112c;\n}\n.dm-base-badge--red:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--turquoise {\n    border-color: #26c2c9;\n}\n.dm-base-badge--turquoise:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #26c2c9;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--white {\n    border-color: #ffffff;\n}\n.dm-base-badge--white:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffffff;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-badge--mini {\n    padding: 0 10px;\n    font-size: 12px;\n    line-height: 20px;\n}\n.dm-base-badge--small {\n    padding: 0 11px;\n    font-size: 13px;\n    line-height: 22px;\n}\n.dm-base-badge--default {\n    padding: 0 12px;\n    font-size: 14px;\n    line-height: 24px;\n}\n.dm-base-badge--medium {\n    padding: 0 13px;\n    font-size: 15px;\n    line-height: 26px;\n}\n.dm-base-badge--large {\n    padding: 0 14px;\n    font-size: 16px;\n    line-height: 28px;\n}\n.dm-base-badge--clickable {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=BaseBadge.vue.map */", map: {"version":3,"sources":["BaseBadge.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseBadge.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC6FhF;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;EACA,eAAA;EACA,0BAAA;EACA,sFACA;EACA,kBAAA;CAgCA;AA3BA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AANA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AANA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AANA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AANA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AANA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AANA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AANA;IACA,sBAAA;CAMA;AAPA;MAIA,iDAAA;MACA,sCAAA;CACA;AASA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAJA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAKA;IACA,gBAAA;CACA;;AD5DA,yCAAyC","file":"BaseBadge.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-badge {\n  display: inline-block;\n  outline: 0;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 100px;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none; }\n  .dm-base-badge--black {\n    border-color: #323e4f; }\n    .dm-base-badge--black:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #323e4f;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--blue {\n    border-color: #0194ef; }\n    .dm-base-badge--blue:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--green {\n    border-color: #1bb934; }\n    .dm-base-badge--green:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--orange {\n    border-color: #ffb610; }\n    .dm-base-badge--orange:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffb610;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--purple {\n    border-color: #ab7ef6; }\n    .dm-base-badge--purple:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ab7ef6;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--red {\n    border-color: #e1112c; }\n    .dm-base-badge--red:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--turquoise {\n    border-color: #26c2c9; }\n    .dm-base-badge--turquoise:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #26c2c9;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--white {\n    border-color: #ffffff; }\n    .dm-base-badge--white:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffffff;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-badge--mini {\n    padding: 0 10px;\n    font-size: 12px;\n    line-height: 20px; }\n  .dm-base-badge--small {\n    padding: 0 11px;\n    font-size: 13px;\n    line-height: 22px; }\n  .dm-base-badge--default {\n    padding: 0 12px;\n    font-size: 14px;\n    line-height: 24px; }\n  .dm-base-badge--medium {\n    padding: 0 13px;\n    font-size: 15px;\n    line-height: 26px; }\n  .dm-base-badge--large {\n    padding: 0 14px;\n    font-size: 16px;\n    line-height: 28px; }\n  .dm-base-badge--clickable {\n    cursor: pointer; }\n\n/*# sourceMappingURL=BaseBadge.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseBadge.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$3() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseBadge = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    __vue_create_injector__$3,
    undefined
  )

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
var script$4 = {
  props: {
    color: {
      type: String,
      default: "white",
      validator: function validator(x) {
        return ["black", "blue", "green", "orange", "red", "white"].indexOf(x) !== -1;
      }
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    // --> EVENT LISTENERS <--
    onClick: function onClick(event) {
      this.$emit("click", event);
    }
  }
};

/* script */
            const __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-base-spinner",
        "dm-base-spinner--" + _vm.color,
        "dm-base-spinner--" + _vm.size
      ],
      on: { click: _vm.onClick }
    },
    [
      _c("div", {
        staticClass: "dm-base-spinner__wave dm-base-spinner__wave--first"
      }),
      _c("div", {
        staticClass: "dm-base-spinner__wave dm-base-spinner__wave--second"
      })
    ]
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-606b547e_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-spinner {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}\n.dm-base-spinner .dm-base-spinner__wave {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    opacity: 0.6;\n    animation: bounce 2s infinite ease-in-out;\n}\n.dm-base-spinner .dm-base-spinner__wave--second {\n      animation-delay: -1s;\n}\n.dm-base-spinner--black .dm-base-spinner__wave {\n    background-color: #323e4f;\n}\n.dm-base-spinner--blue .dm-base-spinner__wave {\n    background-color: #0194ef;\n}\n.dm-base-spinner--green .dm-base-spinner__wave {\n    background-color: #1bb934;\n}\n.dm-base-spinner--red .dm-base-spinner__wave {\n    background-color: #e1112c;\n}\n.dm-base-spinner--orange .dm-base-spinner__wave {\n    background-color: #ffb610;\n}\n.dm-base-spinner--white .dm-base-spinner__wave {\n    background-color: #ffffff;\n}\n.dm-base-spinner--mini {\n    width: 16px;\n    height: 16px;\n}\n.dm-base-spinner--small {\n    width: 26px;\n    height: 26px;\n}\n.dm-base-spinner--default {\n    width: 36px;\n    height: 36px;\n}\n.dm-base-spinner--medium {\n    width: 46px;\n    height: 46px;\n}\n.dm-base-spinner--large {\n    width: 56px;\n    height: 56px;\n}\n@keyframes bounce {\n0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n\n/*# sourceMappingURL=BaseSpinner.vue.map */", map: {"version":3,"sources":["BaseSpinner.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseSpinner.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACgEhF;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;CAqCA;AAzCA;IAOA,mBAAA;IACA,OAAA;IACA,QAAA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,aAAA;IACA,0CAAA;CAKA;AAnBA;MAiBA,qBAAA;CACA;AAMA;IAEA,0BAAA;CACA;AAHA;IAEA,0BAAA;CACA;AAHA;IAEA,0BAAA;CACA;AAHA;IAEA,0BAAA;CACA;AAHA;IAEA,0BAAA;CACA;AAHA;IAEA,0BAAA;CACA;AASA;IACA,YAAA;IACA,aAAA;CACA;AAHA;IACA,YAAA;IACA,aAAA;CACA;AAHA;IACA,YAAA;IACA,aAAA;CACA;AAHA;IACA,YAAA;IACA,aAAA;CACA;AAHA;IACA,YAAA;IACA,aAAA;CACA;AAMA;AACA;;IAEA,4BAAA;IACA,oBAAA;CAAA;AAEA;IACA,4BAAA;IACA,oBAAA;CAAA;CAAA;;AD/DA,2CAA2C","file":"BaseSpinner.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-spinner {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 40px; }\n  .dm-base-spinner .dm-base-spinner__wave {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    opacity: 0.6;\n    animation: bounce 2s infinite ease-in-out; }\n    .dm-base-spinner .dm-base-spinner__wave--second {\n      animation-delay: -1s; }\n  .dm-base-spinner--black .dm-base-spinner__wave {\n    background-color: #323e4f; }\n  .dm-base-spinner--blue .dm-base-spinner__wave {\n    background-color: #0194ef; }\n  .dm-base-spinner--green .dm-base-spinner__wave {\n    background-color: #1bb934; }\n  .dm-base-spinner--red .dm-base-spinner__wave {\n    background-color: #e1112c; }\n  .dm-base-spinner--orange .dm-base-spinner__wave {\n    background-color: #ffb610; }\n  .dm-base-spinner--white .dm-base-spinner__wave {\n    background-color: #ffffff; }\n  .dm-base-spinner--mini {\n    width: 16px;\n    height: 16px; }\n  .dm-base-spinner--small {\n    width: 26px;\n    height: 26px; }\n  .dm-base-spinner--default {\n    width: 36px;\n    height: 36px; }\n  .dm-base-spinner--medium {\n    width: 46px;\n    height: 46px; }\n  .dm-base-spinner--large {\n    width: 56px;\n    height: 56px; }\n\n@keyframes bounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n/*# sourceMappingURL=BaseSpinner.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseSpinner.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$4() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseSpinner = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    __vue_create_injector__$4,
    undefined
  )

//
var script$5 = {
  components: {
    BaseIcon: BaseIcon,
    BaseSpinner: BaseSpinner
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
        return ["black", "blue", "green", "orange", "red", "white"].indexOf(x) !== -1;
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
    leftIconColor: {
      type: String,
      default: null
    },
    list: {
      type: Array,
      default: null,
      validator: function validator(x) {
        return x.length > 0;
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    rightIcon: {
      type: String,
      default: null
    },
    rightIconColor: {
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
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
  data: function data() {
    return {
      // --> STATE <--
      listOpened: false
    };
  },
  computed: {
    computedIconSize: function computedIconSize() {
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
    },
    computedRightIcon: function computedRightIcon() {
      if (this.list && !this.circular) {
        return this.listOpened ? "arrow_drop_up" : "arrow_drop_down";
      }

      return this.rightIcon;
    },
    computedSpinnerColor: function computedSpinnerColor() {
      return this.color === "white" ? "black" : "white";
    }
  },
  methods: {
    // --> EVENT LISTENERS <--
    onClick: function onClick(event) {
      if (this.list) {
        this.listOpened = !this.listOpened;
      }

      this.$emit("click", this.id, event);
    },
    onDoubleClick: function onDoubleClick(event) {
      this.$emit("dblclick", this.id, event);
    },
    onItemClick: function onItemClick(itemId, event) {
      this.$emit("itemclick", this.id, itemId, event);
    },
    onMouseDown: function onMouseDown(event) {
      this.$emit("mousedown", this.id, event);
    },
    onMouseEnter: function onMouseEnter(event) {
      this.$emit("mouseenter", this.id, event);
    },
    onMouseLeave: function onMouseLeave(event) {
      this.$emit("mouseleave", this.id, event);
    },
    onMouseMove: function onMouseMove(event) {
      this.$emit("mousemove", this.id, event);
    },
    onMouseOut: function onMouseOut(event) {
      this.$emit("mouseout", this.id, event);
    },
    onMouseOver: function onMouseOver(event) {
      this.$emit("mouseover", this.id, event);
    },
    onMouseUp: function onMouseUp(event) {
      this.$emit("mouseup", this.id, event);
    }
  }
};

/* script */
            const __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
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
          "dm-base-button--circular": _vm.circular || _vm.loading,
          "dm-base-button--disabled": _vm.disabled || _vm.loading,
          "dm-base-button--full-width": _vm.fullWidth,
          "dm-base-button--loading": _vm.loading,
          "dm-base-button--reverse": _vm.reverse,
          "dm-base-button--rounded": _vm.rounded
        }
      ],
      attrs: {
        disabled: _vm.disabled || _vm.loading,
        id: _vm.id,
        type: _vm.type
      },
      on: {
        click: _vm.onClick,
        dblclick: _vm.onDoubleClick,
        mousedown: _vm.onMouseDown,
        mouseenter: _vm.onMouseEnter,
        mouseleave: _vm.onMouseLeave,
        mousemove: _vm.onMouseMove,
        mouseout: _vm.onMouseOut,
        mouseover: _vm.onMouseOver,
        mouseup: _vm.onMouseUp
      }
    },
    [
      _c(
        "span",
        { staticClass: "dm-base-button__inner" },
        [
          _vm.leftIcon && !_vm.loading
            ? _c("base-icon", {
                staticClass: "dm-base-button__left-icon",
                attrs: {
                  color: _vm.leftIconColor,
                  name: _vm.leftIcon,
                  size: _vm.computedIconSize
                }
              })
            : _vm._e(),
          _vm.$slots.default &&
          _vm.$slots.default[0].text.trim() &&
          !_vm.circular &&
          !_vm.loading
            ? _c(
                "span",
                { staticClass: "dm-base-button__label" },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm.computedRightIcon && !_vm.loading
            ? _c("base-icon", {
                staticClass: "dm-base-button__right-icon",
                attrs: {
                  color: _vm.rightIconColor,
                  name: _vm.computedRightIcon,
                  size: _vm.computedIconSize
                }
              })
            : _vm._e(),
          _vm.loading
            ? _c("base-spinner", {
                attrs: { color: _vm.computedSpinnerColor, size: "mini" }
              })
            : _vm._e()
        ],
        1
      ),
      _vm.list && _vm.listOpened && !_vm.loading
        ? _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "animated fadeIn",
                "leave-active-class": "animated fadeOut"
              }
            },
            [
              _c(
                "div",
                { staticClass: "dm-base-button__list" },
                _vm._l(_vm.list, function(item) {
                  return _c(
                    "span",
                    {
                      key: item.id,
                      staticClass: "dm-base-button__item",
                      on: {
                        click: function($event) {
                          _vm.onItemClick(item.id, $event);
                        }
                      }
                    },
                    [_vm._v(_vm._s(item.label))]
                  )
                })
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-e3a240b0_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-button {\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-position: center;\n  color: #ffffff;\n  font-weight: 500;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 250ms ease-in-out;\n  user-select: none;\n  cursor: pointer;\n}\n.dm-base-button .dm-base-button__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.dm-base-button .dm-base-button__list {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    z-index: 100;\n    display: block;\n    padding-top: 10px;\n    min-width: 100%;\n    transform: translate(-50%, 100%);\n}\n.dm-base-button .dm-base-button__list .dm-base-button__item {\n      display: block;\n      padding: 10px 14px;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      border-top: none;\n      background: #ffffff;\n      color: #323e4f;\n      white-space: nowrap;\n      transition: all 250ms ease-in-out;\n}\n.dm-base-button .dm-base-button__list .dm-base-button__item:first-of-type {\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n}\n.dm-base-button .dm-base-button__list .dm-base-button__item:last-of-type {\n        border-bottom-right-radius: 4px;\n        border-bottom-left-radius: 4px;\n}\n.dm-base-button .dm-base-button__list .dm-base-button__item:hover {\n        background-color: #f2f2f2;\n}\n.dm-base-button--black:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #46576e;\n}\n.dm-base-button--black:not(.dm-base-button--reverse) {\n    background: #323e4f radial-gradient(circle, transparent 1%, #323e4f 1%) center/15000%;\n    border: 1px solid #323e4f;\n    background: #232d3d radial-gradient(circle, transparent 1%, #232d3d 1%) center/15000%;\n}\n.dm-base-button--black:not(.dm-base-button--reverse):hover {\n      background-color: #323e4f;\n}\n.dm-base-button--black:not(.dm-base-button--reverse):active {\n      background-color: #323e4f;\n}\n.dm-base-button--blue:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #25abfe;\n}\n.dm-base-button--blue:not(.dm-base-button--reverse) {\n    background: #0194ef radial-gradient(circle, transparent 1%, #0194ef 1%) center/15000%;\n}\n.dm-base-button--blue:not(.dm-base-button--reverse):hover {\n      background-color: #25abfe;\n}\n.dm-base-button--blue:not(.dm-base-button--reverse):active {\n      background-color: #3eb5fe;\n}\n.dm-base-button--green:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #27e045;\n}\n.dm-base-button--green:not(.dm-base-button--reverse) {\n    background: #1bb934 radial-gradient(circle, transparent 1%, #1bb934 1%) center/15000%;\n}\n.dm-base-button--green:not(.dm-base-button--reverse):hover {\n      background-color: #1ecf3a;\n}\n.dm-base-button--green:not(.dm-base-button--reverse):active {\n      background-color: #1ecf3a;\n}\n.dm-base-button--red:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #f0354d;\n}\n.dm-base-button--red:not(.dm-base-button--reverse) {\n    background: #e1112c radial-gradient(circle, transparent 1%, #e1112c 1%) center/15000%;\n}\n.dm-base-button--red:not(.dm-base-button--reverse):hover {\n      background-color: #f0354d;\n}\n.dm-base-button--red:not(.dm-base-button--reverse):active {\n      background-color: #f24d62;\n}\n.dm-base-button--orange:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc643;\n}\n.dm-base-button--orange:not(.dm-base-button--reverse) {\n    background: #ffb610 radial-gradient(circle, transparent 1%, #ffb610 1%) center/15000%;\n}\n.dm-base-button--orange:not(.dm-base-button--reverse):hover {\n      background-color: #ffc643;\n}\n.dm-base-button--orange:not(.dm-base-button--reverse):active {\n      background-color: #ffcd5d;\n}\n.dm-base-button--white:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px white;\n}\n.dm-base-button--white:not(.dm-base-button--reverse) {\n    background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%) center/15000%;\n    color: #323e4f;\n}\n.dm-base-button--white:not(.dm-base-button--reverse):hover {\n      background-color: #e6e6e6;\n}\n.dm-base-button--white:not(.dm-base-button--reverse):active {\n      background-color: #d9d9d9;\n}\n.dm-base-button--mini {\n    padding: 10px 12px;\n    border-radius: 4px;\n    font-size: 12px;\n    line-height: 12px;\n}\n.dm-base-button--mini .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 3px;\n}\n.dm-base-button--mini .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 3px;\n}\n.dm-base-button--mini .dm-base-button__list {\n      border-radius: 4px;\n}\n.dm-base-button--small {\n    padding: 12px 14px;\n    border-radius: 5px;\n    font-size: 13px;\n    line-height: 14px;\n}\n.dm-base-button--small .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 4px;\n}\n.dm-base-button--small .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 4px;\n}\n.dm-base-button--small .dm-base-button__list {\n      border-radius: 5px;\n}\n.dm-base-button--default {\n    padding: 14px 16px;\n    border-radius: 6px;\n    font-size: 14px;\n    line-height: 16px;\n}\n.dm-base-button--default .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 5px;\n}\n.dm-base-button--default .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 5px;\n}\n.dm-base-button--default .dm-base-button__list {\n      border-radius: 6px;\n}\n.dm-base-button--medium {\n    padding: 16px 18px;\n    border-radius: 7px;\n    font-size: 15px;\n    line-height: 18px;\n}\n.dm-base-button--medium .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 6px;\n}\n.dm-base-button--medium .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 6px;\n}\n.dm-base-button--medium .dm-base-button__list {\n      border-radius: 7px;\n}\n.dm-base-button--large {\n    padding: 18px 20px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 20px;\n}\n.dm-base-button--large .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 7px;\n}\n.dm-base-button--large .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 7px;\n}\n.dm-base-button--large .dm-base-button__list {\n      border-radius: 8px;\n}\n.dm-base-button--capitalize {\n    text-transform: capitalize;\n}\n.dm-base-button--circular {\n    border-radius: 100%;\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 0;\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 0;\n}\n.dm-base-button--circular.dm-base-button--mini {\n      padding: 8px;\n}\n.dm-base-button--circular.dm-base-button--small {\n      padding: 9px;\n}\n.dm-base-button--circular.dm-base-button--default {\n      padding: 10px;\n}\n.dm-base-button--circular.dm-base-button--medium {\n      padding: 11px;\n}\n.dm-base-button--circular.dm-base-button--large {\n      padding: 12px;\n}\n.dm-base-button--disabled {\n    opacity: 0.7;\n    cursor: not-allowed;\n}\n.dm-base-button--disabled .dm-base-button__inner {\n      pointer-events: none;\n}\n.dm-base-button--full-width {\n    width: 100%;\n}\n.dm-base-button--loading {\n    opacity: 1;\n    cursor: wait;\n}\n.dm-base-button--reverse {\n    background-color: transparent;\n    color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--black {\n      border-color: #323e4f;\n}\n.dm-base-button--reverse.dm-base-button--black:hover {\n        border-color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--black:active {\n        color: #323e4f;\n}\n.dm-base-button--reverse.dm-base-button--blue {\n      border-color: #0194ef;\n}\n.dm-base-button--reverse.dm-base-button--blue:hover {\n        border-color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--blue:active {\n        color: #0194ef;\n}\n.dm-base-button--reverse.dm-base-button--green {\n      border-color: #1bb934;\n}\n.dm-base-button--reverse.dm-base-button--green:hover {\n        border-color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--green:active {\n        color: #1bb934;\n}\n.dm-base-button--reverse.dm-base-button--red {\n      border-color: #e1112c;\n}\n.dm-base-button--reverse.dm-base-button--red:hover {\n        border-color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--red:active {\n        color: #e1112c;\n}\n.dm-base-button--reverse.dm-base-button--orange {\n      border-color: #ffb610;\n}\n.dm-base-button--reverse.dm-base-button--orange:hover {\n        border-color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--orange:active {\n        color: #ffb610;\n}\n.dm-base-button--reverse.dm-base-button--white {\n      border-color: #ffffff;\n}\n.dm-base-button--reverse.dm-base-button--white:hover {\n        border-color: #0194ef;\n}\n.dm-base-button--reverse.dm-base-button--white:active {\n        color: #323e4f;\n}\n.dm-base-button--reverse:hover {\n      transform: initial;\n}\n.dm-base-button--reverse:active {\n      background: #ffffff;\n      transform: initial;\n}\n.dm-base-button--rounded {\n    border-radius: 60px;\n    color: #ffffff;\n}\n.dm-base-button:active {\n    background-size: 100%;\n    transition: background 0s;\n}\n.fadeIn {\n  animation-name: fadeIn;\n  animation-duration: 200ms;\n  animation-fill-mode: both;\n}\n.fadeOut {\n  animation-name: fadeOut;\n  animation-duration: 200ms;\n  animation-fill-mode: both;\n}\n@keyframes fadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n\n/*# sourceMappingURL=BaseButton.vue.map */", map: {"version":3,"sources":["BaseButton.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseButton.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4QhF;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,qCAAA;EACA,4BAAA;EACA,eAAA;EACA,iBAAA;EACA,sFACA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;CA4NA;AAxOA;IAeA,cAAA;IACA,oBAAA;IACA,wBAAA;CACA;AAlBA;IAqBA,mBAAA;IACA,UAAA;IACA,UAAA;IACA,aAAA;IACA,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iCAAA;CA2BA;AAvDA;MA+BA,eAAA;MACA,mBAAA;MACA,qCAAA;MACA,iBAAA;MACA,oBAAA;MACA,eAAA;MACA,oBAAA;MACA,kCAAA;CAgBA;AAtDA;QAyCA,yCAAA;QACA,4BAAA;QACA,6BAAA;CACA;AA5CA;QA+CA,gCAAA;QACA,+BAAA;CACA;AAjDA;QAoDA,0BAAA;CACA;AAOA;IAEA,iDACA;CACA;AAJA;IAQA,sFAMA;IAGA,0BAAA;IACA,sFAEA;CA4BA;AAhDA;MA2BA,0BAAA;CAQA;AAnCA;MAuCA,0BAAA;CAQA;AA/CA;IAEA,iDACA;CACA;AAJA;IAQA,sFAMA;CAkCA;AAhDA;MAiCA,0BAAA;CAEA;AAnCA;MA6CA,0BAAA;CAEA;AA/CA;IAEA,iDACA;CACA;AAJA;IAQA,sFAMA;CAkCA;AAhDA;MA+BA,0BAAA;CAIA;AAnCA;MA2CA,0BAAA;CAIA;AA/CA;IAEA,iDACA;CACA;AAJA;IAQA,sFAMA;CAkCA;AAhDA;MAiCA,0BAAA;CAEA;AAnCA;MA6CA,0BAAA;CAEA;AA/CA;IAEA,iDACA;CACA;AAJA;IAQA,sFAMA;CAkCA;AAhDA;MAiCA,0BAAA;CAEA;AAnCA;MA6CA,0BAAA;CAEA;AA/CA;IAEA,+CACA;CACA;AAJA;IAQA,sFAMA;IAQA,eAAA;CA0BA;AAhDA;MA6BA,0BAAA;CAMA;AAnCA;MAyCA,0BAAA;CAMA;AAUA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAeA;AAnBA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;MAiBA,mBAAA;CACA;AAlBA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAeA;AAnBA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;MAiBA,mBAAA;CACA;AAlBA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAeA;AAnBA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;MAiBA,mBAAA;CACA;AAlBA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAeA;AAnBA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;MAiBA,mBAAA;CACA;AAlBA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;IACA,kBAAA;CAeA;AAnBA;MAQA,kBAAA;CACA;AATA;MAYA,iBAAA;CACA;AAbA;MAiBA,mBAAA;CACA;AAMA;IACA,2BAAA;CACA;AAEA;IACA,oBAAA;CAmBA;AApBA;MAKA,gBAAA;CACA;AANA;MASA,eAAA;CACA;AAVA;MAiBA,aAAA;CACA;AAlBA;MAiBA,aAAA;CACA;AAlBA;MAiBA,cAAA;CACA;AAlBA;MAiBA,cAAA;CACA;AAlBA;MAiBA,cAAA;CACA;AAIA;IACA,aAAA;IACA,oBAAA;CAKA;AAPA;MAKA,qBAAA;CACA;AAGA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,aAAA;CACA;AAEA;IACA,8BAAA;IACA,eAAA;CAgCA;AAlCA;MAMA,sBAAA;CAiBA;AAvBA;QAYA,sBAAA;CAEA;AAdA;QAoBA,eAAA;CAEA;AAtBA;MAMA,sBAAA;CAiBA;AAvBA;QAYA,sBAAA;CAEA;AAdA;QAoBA,eAAA;CAEA;AAtBA;MAMA,sBAAA;CAiBA;AAvBA;QAYA,sBAAA;CAEA;AAdA;QAoBA,eAAA;CAEA;AAtBA;MAMA,sBAAA;CAiBA;AAvBA;QAYA,sBAAA;CAEA;AAdA;QAoBA,eAAA;CAEA;AAtBA;MAMA,sBAAA;CAiBA;AAvBA;QAYA,sBAAA;CAEA;AAdA;QAoBA,eAAA;CAEA;AAtBA;MAMA,sBAAA;CAiBA;AAvBA;QAUA,sBAAA;CAIA;AAdA;QAkBA,eAAA;CAIA;AAtBA;MA2BA,mBAAA;CACA;AA5BA;MA+BA,oBAAA;MACA,mBAAA;CACA;AAGA;IACA,oBAAA;IACA,eAAA;CACA;AAhOA;IAqOA,sBAAA;IACA,0BAAA;CACA;AAKA;EACA,uBAAA;EACA,0BAAA;EACA,0BAAA;CACA;AAEA;EACA,wBAAA;EACA,0BAAA;EACA,0BAAA;CACA;AAEA;AACA;IACA,WAAA;CAAA;AAGA;IACA,WAAA;CAAA;CAAA;AAIA;AACA;IACA,WAAA;CAAA;AAGA;IACA,WAAA;CAAA;CAAA;;ADzRA,0CAA0C","file":"BaseButton.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-button {\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-position: center;\n  color: #ffffff;\n  font-weight: 500;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 250ms ease-in-out;\n  user-select: none;\n  cursor: pointer; }\n  .dm-base-button .dm-base-button__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .dm-base-button .dm-base-button__list {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    z-index: 100;\n    display: block;\n    padding-top: 10px;\n    min-width: 100%;\n    transform: translate(-50%, 100%); }\n    .dm-base-button .dm-base-button__list .dm-base-button__item {\n      display: block;\n      padding: 10px 14px;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      border-top: none;\n      background: #ffffff;\n      color: #323e4f;\n      white-space: nowrap;\n      transition: all 250ms ease-in-out; }\n      .dm-base-button .dm-base-button__list .dm-base-button__item:first-of-type {\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px; }\n      .dm-base-button .dm-base-button__list .dm-base-button__item:last-of-type {\n        border-bottom-right-radius: 4px;\n        border-bottom-left-radius: 4px; }\n      .dm-base-button .dm-base-button__list .dm-base-button__item:hover {\n        background-color: #f2f2f2; }\n  .dm-base-button--black:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #46576e; }\n  .dm-base-button--black:not(.dm-base-button--reverse) {\n    background: #323e4f radial-gradient(circle, transparent 1%, #323e4f 1%) center/15000%;\n    border: 1px solid #323e4f;\n    background: #232d3d radial-gradient(circle, transparent 1%, #232d3d 1%) center/15000%; }\n    .dm-base-button--black:not(.dm-base-button--reverse):hover {\n      background-color: #323e4f; }\n    .dm-base-button--black:not(.dm-base-button--reverse):active {\n      background-color: #323e4f; }\n  .dm-base-button--blue:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #25abfe; }\n  .dm-base-button--blue:not(.dm-base-button--reverse) {\n    background: #0194ef radial-gradient(circle, transparent 1%, #0194ef 1%) center/15000%; }\n    .dm-base-button--blue:not(.dm-base-button--reverse):hover {\n      background-color: #25abfe; }\n    .dm-base-button--blue:not(.dm-base-button--reverse):active {\n      background-color: #3eb5fe; }\n  .dm-base-button--green:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #27e045; }\n  .dm-base-button--green:not(.dm-base-button--reverse) {\n    background: #1bb934 radial-gradient(circle, transparent 1%, #1bb934 1%) center/15000%; }\n    .dm-base-button--green:not(.dm-base-button--reverse):hover {\n      background-color: #1ecf3a; }\n    .dm-base-button--green:not(.dm-base-button--reverse):active {\n      background-color: #1ecf3a; }\n  .dm-base-button--red:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #f0354d; }\n  .dm-base-button--red:not(.dm-base-button--reverse) {\n    background: #e1112c radial-gradient(circle, transparent 1%, #e1112c 1%) center/15000%; }\n    .dm-base-button--red:not(.dm-base-button--reverse):hover {\n      background-color: #f0354d; }\n    .dm-base-button--red:not(.dm-base-button--reverse):active {\n      background-color: #f24d62; }\n  .dm-base-button--orange:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc643; }\n  .dm-base-button--orange:not(.dm-base-button--reverse) {\n    background: #ffb610 radial-gradient(circle, transparent 1%, #ffb610 1%) center/15000%; }\n    .dm-base-button--orange:not(.dm-base-button--reverse):hover {\n      background-color: #ffc643; }\n    .dm-base-button--orange:not(.dm-base-button--reverse):active {\n      background-color: #ffcd5d; }\n  .dm-base-button--white:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px white; }\n  .dm-base-button--white:not(.dm-base-button--reverse) {\n    background: #ffffff radial-gradient(circle, transparent 1%, #ffffff 1%) center/15000%;\n    color: #323e4f; }\n    .dm-base-button--white:not(.dm-base-button--reverse):hover {\n      background-color: #e6e6e6; }\n    .dm-base-button--white:not(.dm-base-button--reverse):active {\n      background-color: #d9d9d9; }\n  .dm-base-button--mini {\n    padding: 10px 12px;\n    border-radius: 4px;\n    font-size: 12px;\n    line-height: 12px; }\n    .dm-base-button--mini .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 3px; }\n    .dm-base-button--mini .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 3px; }\n    .dm-base-button--mini .dm-base-button__list {\n      border-radius: 4px; }\n  .dm-base-button--small {\n    padding: 12px 14px;\n    border-radius: 5px;\n    font-size: 13px;\n    line-height: 14px; }\n    .dm-base-button--small .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 4px; }\n    .dm-base-button--small .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 4px; }\n    .dm-base-button--small .dm-base-button__list {\n      border-radius: 5px; }\n  .dm-base-button--default {\n    padding: 14px 16px;\n    border-radius: 6px;\n    font-size: 14px;\n    line-height: 16px; }\n    .dm-base-button--default .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 5px; }\n    .dm-base-button--default .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 5px; }\n    .dm-base-button--default .dm-base-button__list {\n      border-radius: 6px; }\n  .dm-base-button--medium {\n    padding: 16px 18px;\n    border-radius: 7px;\n    font-size: 15px;\n    line-height: 18px; }\n    .dm-base-button--medium .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 6px; }\n    .dm-base-button--medium .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 6px; }\n    .dm-base-button--medium .dm-base-button__list {\n      border-radius: 7px; }\n  .dm-base-button--large {\n    padding: 18px 20px;\n    border-radius: 8px;\n    font-size: 16px;\n    line-height: 20px; }\n    .dm-base-button--large .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 7px; }\n    .dm-base-button--large .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 7px; }\n    .dm-base-button--large .dm-base-button__list {\n      border-radius: 8px; }\n  .dm-base-button--capitalize {\n    text-transform: capitalize; }\n  .dm-base-button--circular {\n    border-radius: 100%; }\n    .dm-base-button--circular .dm-base-button__inner .dm-base-button__left-icon {\n      margin-right: 0; }\n    .dm-base-button--circular .dm-base-button__inner .dm-base-button__right-icon {\n      margin-left: 0; }\n    .dm-base-button--circular.dm-base-button--mini {\n      padding: 8px; }\n    .dm-base-button--circular.dm-base-button--small {\n      padding: 9px; }\n    .dm-base-button--circular.dm-base-button--default {\n      padding: 10px; }\n    .dm-base-button--circular.dm-base-button--medium {\n      padding: 11px; }\n    .dm-base-button--circular.dm-base-button--large {\n      padding: 12px; }\n  .dm-base-button--disabled {\n    opacity: 0.7;\n    cursor: not-allowed; }\n    .dm-base-button--disabled .dm-base-button__inner {\n      pointer-events: none; }\n  .dm-base-button--full-width {\n    width: 100%; }\n  .dm-base-button--loading {\n    opacity: 1;\n    cursor: wait; }\n  .dm-base-button--reverse {\n    background-color: transparent;\n    color: #ffffff; }\n    .dm-base-button--reverse.dm-base-button--black {\n      border-color: #323e4f; }\n      .dm-base-button--reverse.dm-base-button--black:hover {\n        border-color: #ffffff; }\n      .dm-base-button--reverse.dm-base-button--black:active {\n        color: #323e4f; }\n    .dm-base-button--reverse.dm-base-button--blue {\n      border-color: #0194ef; }\n      .dm-base-button--reverse.dm-base-button--blue:hover {\n        border-color: #ffffff; }\n      .dm-base-button--reverse.dm-base-button--blue:active {\n        color: #0194ef; }\n    .dm-base-button--reverse.dm-base-button--green {\n      border-color: #1bb934; }\n      .dm-base-button--reverse.dm-base-button--green:hover {\n        border-color: #ffffff; }\n      .dm-base-button--reverse.dm-base-button--green:active {\n        color: #1bb934; }\n    .dm-base-button--reverse.dm-base-button--red {\n      border-color: #e1112c; }\n      .dm-base-button--reverse.dm-base-button--red:hover {\n        border-color: #ffffff; }\n      .dm-base-button--reverse.dm-base-button--red:active {\n        color: #e1112c; }\n    .dm-base-button--reverse.dm-base-button--orange {\n      border-color: #ffb610; }\n      .dm-base-button--reverse.dm-base-button--orange:hover {\n        border-color: #ffffff; }\n      .dm-base-button--reverse.dm-base-button--orange:active {\n        color: #ffb610; }\n    .dm-base-button--reverse.dm-base-button--white {\n      border-color: #ffffff; }\n      .dm-base-button--reverse.dm-base-button--white:hover {\n        border-color: #0194ef; }\n      .dm-base-button--reverse.dm-base-button--white:active {\n        color: #323e4f; }\n    .dm-base-button--reverse:hover {\n      transform: initial; }\n    .dm-base-button--reverse:active {\n      background: #ffffff;\n      transform: initial; }\n  .dm-base-button--rounded {\n    border-radius: 60px;\n    color: #ffffff; }\n  .dm-base-button:active {\n    background-size: 100%;\n    transition: background 0s; }\n\n.fadeIn {\n  animation-name: fadeIn;\n  animation-duration: 200ms;\n  animation-fill-mode: both; }\n\n.fadeOut {\n  animation-name: fadeOut;\n  animation-duration: 200ms;\n  animation-fill-mode: both; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/*# sourceMappingURL=BaseButton.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseButton.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$5() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseButton = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    __vue_create_injector__$5,
    undefined
  )

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
      default: "black",
      validator: function validator(x) {
        return ["black", "blue", "green", "orange", "purple", "red", "turquoise", "white"].indexOf(x) !== -1;
      }
    },
    size: {
      type: String,
      default: "large",
      validator: function validator(x) {
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  }
};

/* script */
            const __vue_script__$6 = script$6;
            
/* template */
var __vue_render__$6 = function() {
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
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-0ae61d82_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-divider {\n  display: block;\n  border: 0;\n  border-top-style: solid;\n}\n.dm-base-divider--black {\n    border-top-color: #323e4f;\n}\n.dm-base-divider--blue {\n    border-top-color: #0194ef;\n}\n.dm-base-divider--green {\n    border-top-color: #1bb934;\n}\n.dm-base-divider--orange {\n    border-top-color: #ffb610;\n}\n.dm-base-divider--purple {\n    border-top-color: #ab7ef6;\n}\n.dm-base-divider--red {\n    border-top-color: #e1112c;\n}\n.dm-base-divider--turquoise {\n    border-top-color: #26c2c9;\n}\n.dm-base-divider--white {\n    border-top-color: #ffffff;\n}\n.dm-base-divider--small {\n    margin: 15px auto;\n    max-width: 60px;\n    height: 4px;\n    border-top-width: 4px;\n}\n.dm-base-divider--large {\n    margin: 30px auto;\n    width: 100%;\n    height: 1px;\n    border-top-width: 1px;\n}\n\n/*# sourceMappingURL=BaseDivider.vue.map */", map: {"version":3,"sources":["BaseDivider.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseDivider.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC2DhF;EACA,eAAA;EACA,UAAA;EACA,wBAAA;CAyBA;AApBA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAFA;IACA,0BAAA;CACA;AAKA;IACA,kBAAA;IACA,gBAAA;IACA,YAAA;IACA,sBAAA;CACA;AAEA;IACA,kBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;CACA;;ADtDA,2CAA2C","file":"BaseDivider.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-divider {\n  display: block;\n  border: 0;\n  border-top-style: solid; }\n  .dm-base-divider--black {\n    border-top-color: #323e4f; }\n  .dm-base-divider--blue {\n    border-top-color: #0194ef; }\n  .dm-base-divider--green {\n    border-top-color: #1bb934; }\n  .dm-base-divider--orange {\n    border-top-color: #ffb610; }\n  .dm-base-divider--purple {\n    border-top-color: #ab7ef6; }\n  .dm-base-divider--red {\n    border-top-color: #e1112c; }\n  .dm-base-divider--turquoise {\n    border-top-color: #26c2c9; }\n  .dm-base-divider--white {\n    border-top-color: #ffffff; }\n  .dm-base-divider--small {\n    margin: 15px auto;\n    max-width: 60px;\n    height: 4px;\n    border-top-width: 4px; }\n  .dm-base-divider--large {\n    margin: 30px auto;\n    width: 100%;\n    height: 1px;\n    border-top-width: 1px; }\n\n/*# sourceMappingURL=BaseDivider.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* component normalizer */
  function __vue_normalize__$6(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseDivider.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$6() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseDivider = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    __vue_create_injector__$6,
    undefined
  )

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
  props: {
    color: {
      type: String,
      default: null,
      validator: function validator(x) {
        return ["grey", "white", "white2"].indexOf(x) !== -1;
      }
    },
    tag: {
      type: String,
      required: true,
      validator: function validator(x) {
        return ["h1", "h2", "h3", "p", "small"].indexOf(x) !== -1;
      }
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    weight: {
      type: String,
      default: null,
      validator: function validator(x) {
        return ["thin", "light", "regular", "medium", "bold", "extrabold", "black"].indexOf(x) !== -1;
      }
    }
  },
  computed: {
    computedColor: function computedColor() {
      // Directly return prop when defined
      if (this.color) return this.color;

      switch (this.tag) {
        case "h2":
          return "white2";

        case "h3":
          return "grey";

        default:
          return "white";
      }
    },
    computedWeight: function computedWeight() {
      // Directly return prop when defined
      if (this.weight) return this.weight;

      switch (this.tag) {
        case "h1":
          return "bold";

        case "h2":
          return "medium";

        default:
          return "regular";
      }
    }
  }
};

/* script */
            const __vue_script__$7 = script$7;
            
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-base-heading",
        "dm-base-heading--" + _vm.computedColor,
        "dm-base-heading--" + _vm.computedWeight,
        "dm-base-heading--" + _vm.tag,
        {
          "dm-base-heading--uppercase": _vm.uppercase
        }
      ]
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = function (inject) {
    if (!inject) return
    inject("data-v-76724589_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-heading {\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-base-heading--grey {\n    color: #a9c7df;\n}\n.dm-base-heading--white {\n    color: #ffffff;\n}\n.dm-base-heading--white2 {\n    color: #fafbfc;\n}\n.dm-base-heading--h1 {\n    font-size: 26px;\n    line-height: 36px;\n}\n.dm-base-heading--h2 {\n    font-size: 24px;\n    line-height: 34px;\n}\n.dm-base-heading--h3 {\n    font-size: 22px;\n    line-height: 32px;\n}\n.dm-base-heading--p {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 28px;\n}\n.dm-base-heading--small {\n    margin-bottom: 20px;\n    font-size: 14px;\n    line-height: 24px;\n}\n.dm-base-heading--thin {\n    font-weight: 100;\n}\n.dm-base-heading--light {\n    font-weight: 300;\n}\n.dm-base-heading--regular {\n    font-weight: 400;\n}\n.dm-base-heading--medium {\n    font-weight: 500;\n}\n.dm-base-heading--bold {\n    font-weight: 700;\n}\n.dm-base-heading--extrabold {\n    font-weight: 800;\n}\n.dm-base-heading--black {\n    font-weight: 900;\n}\n.dm-base-heading--uppercase {\n    text-transform: uppercase;\n}\n\n/*# sourceMappingURL=BaseHeading.vue.map */", map: {"version":3,"sources":["BaseHeading.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseHeading.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACsGhF;EACA,sFACA;CAgFA;AA5EA;IACA,eAAA;CACA;AAEA;IACA,eAAA;CACA;AAEA;IACA,eAAA;CACA;AAIA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,oBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,oBAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAIA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAIA;IACA,0BAAA;CACA;;AD5IA,2CAA2C","file":"BaseHeading.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-heading {\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-base-heading--grey {\n    color: #a9c7df; }\n  .dm-base-heading--white {\n    color: #ffffff; }\n  .dm-base-heading--white2 {\n    color: #fafbfc; }\n  .dm-base-heading--h1 {\n    font-size: 26px;\n    line-height: 36px; }\n  .dm-base-heading--h2 {\n    font-size: 24px;\n    line-height: 34px; }\n  .dm-base-heading--h3 {\n    font-size: 22px;\n    line-height: 32px; }\n  .dm-base-heading--p {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 28px; }\n  .dm-base-heading--small {\n    margin-bottom: 20px;\n    font-size: 14px;\n    line-height: 24px; }\n  .dm-base-heading--thin {\n    font-weight: 100; }\n  .dm-base-heading--light {\n    font-weight: 300; }\n  .dm-base-heading--regular {\n    font-weight: 400; }\n  .dm-base-heading--medium {\n    font-weight: 500; }\n  .dm-base-heading--bold {\n    font-weight: 700; }\n  .dm-base-heading--extrabold {\n    font-weight: 800; }\n  .dm-base-heading--black {\n    font-weight: 900; }\n  .dm-base-heading--uppercase {\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=BaseHeading.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* component normalizer */
  function __vue_normalize__$7(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseHeading.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$7() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$7.styles || (__vue_create_injector__$7.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseHeading = __vue_normalize__$7(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    __vue_create_injector__$7,
    undefined
  )

//
var script$8 = {
  components: {
    BaseHeading: BaseHeading,
    BaseIcon: BaseIcon
  },
  props: {
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return ["black", "blue", "green", "orange", "red", "white"].indexOf(x) !== -1;
      }
    },
    icon: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: "white"
    },
    iconSize: {
      type: String,
      default: "22px"
    },
    number: {
      type: Number,
      default: null
    }
  }
};

/* script */
            const __vue_script__$8 = script$8;
            
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ["dm-base-list-item", "dm-base-list-item--" + _vm.color]
    },
    [
      _c(
        "span",
        { staticClass: "dm-base-list-item__circle" },
        [
          _vm.icon
            ? _c("base-icon", {
                staticClass: "dm-base-list-item__icon",
                attrs: {
                  color: _vm.iconColor,
                  name: _vm.icon,
                  size: _vm.iconSize
                }
              })
            : _vm._e(),
          _vm.number
            ? _c("span", { staticClass: "dm-base-list-item__number" }, [
                _vm._v(_vm._s(_vm.number))
              ])
            : _vm._e()
        ],
        1
      ),
      _vm.$slots.default && _vm.$slots.default[0].text.trim()
        ? _c(
            "base-heading",
            { staticClass: "dm-base-list-item__content", attrs: { tag: "p" } },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = function (inject) {
    if (!inject) return
    inject("data-v-04242449_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-list-item {\n  display: flex;\n  align-items: center;\n}\n.dm-base-list-item .dm-base-list-item__circle {\n    display: flex;\n    align-items: center;\n    flex: 0 0 auto;\n    justify-content: center;\n    box-sizing: border-box;\n    margin-right: 20px;\n    width: 40px;\n    height: 40px;\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 100%;\n    box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n    font-size: 16px;\n    user-select: none;\n}\n.dm-base-list-item .dm-base-list-item__circle .dm-base-list-item__number {\n      font-weight: 800;\n}\n.dm-base-list-item .dm-base-list-item__content {\n    flex: 1;\n    margin-bottom: 0;\n    text-align: left;\n}\n.dm-base-list-item--black .dm-base-list-item__circle {\n    border-color: #323e4f;\n}\n.dm-base-list-item--blue .dm-base-list-item__circle {\n    border-color: #0194ef;\n}\n.dm-base-list-item--green .dm-base-list-item__circle {\n    border-color: #1bb934;\n}\n.dm-base-list-item--red .dm-base-list-item__circle {\n    border-color: #e1112c;\n}\n.dm-base-list-item--orange .dm-base-list-item__circle {\n    border-color: #ffb610;\n}\n.dm-base-list-item--white .dm-base-list-item__circle {\n    border-color: #ffffff;\n}\n\n/*# sourceMappingURL=BaseListItem.vue.map */", map: {"version":3,"sources":["BaseListItem.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseListItem.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACqFhF;EACA,cAAA;EACA,oBAAA;CAsCA;AAxCA;IAKA,cAAA;IACA,oBAAA;IACA,eAAA;IACA,wBAAA;IACA,uBAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,kBAAA;IACA,oBAAA;IACA,oBAAA;IACA,8CAAA;IACA,gBAAA;IACA,kBAAA;CAKA;AAvBA;MAqBA,iBAAA;CACA;AAtBA;IA0BA,QAAA;IACA,iBAAA;IACA,iBAAA;CACA;AAKA;IAEA,sBAAA;CACA;AAHA;IAEA,sBAAA;CACA;AAHA;IAEA,sBAAA;CACA;AAHA;IAEA,sBAAA;CACA;AAHA;IAEA,sBAAA;CACA;AAHA;IAEA,sBAAA;CACA;;ADpFA,4CAA4C","file":"BaseListItem.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-list-item {\n  display: flex;\n  align-items: center; }\n  .dm-base-list-item .dm-base-list-item__circle {\n    display: flex;\n    align-items: center;\n    flex: 0 0 auto;\n    justify-content: center;\n    box-sizing: border-box;\n    margin-right: 20px;\n    width: 40px;\n    height: 40px;\n    border-width: 3px;\n    border-style: solid;\n    border-radius: 100%;\n    box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n    font-size: 16px;\n    user-select: none; }\n    .dm-base-list-item .dm-base-list-item__circle .dm-base-list-item__number {\n      font-weight: 800; }\n  .dm-base-list-item .dm-base-list-item__content {\n    flex: 1;\n    margin-bottom: 0;\n    text-align: left; }\n  .dm-base-list-item--black .dm-base-list-item__circle {\n    border-color: #323e4f; }\n  .dm-base-list-item--blue .dm-base-list-item__circle {\n    border-color: #0194ef; }\n  .dm-base-list-item--green .dm-base-list-item__circle {\n    border-color: #1bb934; }\n  .dm-base-list-item--red .dm-base-list-item__circle {\n    border-color: #e1112c; }\n  .dm-base-list-item--orange .dm-base-list-item__circle {\n    border-color: #ffb610; }\n  .dm-base-list-item--white .dm-base-list-item__circle {\n    border-color: #ffffff; }\n\n/*# sourceMappingURL=BaseListItem.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* component normalizer */
  function __vue_normalize__$8(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseListItem.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$8() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$8.styles || (__vue_create_injector__$8.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseListItem = __vue_normalize__$8(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    __vue_create_injector__$8,
    undefined
  )

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
//
//
//
//
//
//
//
var script$9 = {
  props: {
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return ["black", "blue", "green", "orange", "purple", "red", "turquoise", "white"].indexOf(x) !== -1;
      }
    },
    details: {
      type: String,
      default: null
    },
    detailsHover: {
      type: String,
      default: null
    },
    title: {
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
            const __vue_script__$9 = script$9;
            
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "dm-base-progress-bar",
        "dm-base-progress-bar--" + _vm.color,
        {
          "dm-base-progress-bar--with-details-hover": _vm.detailsHover
        }
      ]
    },
    [
      _vm.title || _vm.details
        ? _c("span", { staticClass: "dm-base-progress-bar__content" }, [
            _vm.title
              ? _c("span", { staticClass: "dm-base-progress-bar__title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm._e(),
            _vm.details
              ? _c("span", { staticClass: "dm-base-progress-bar__details" }, [
                  _vm._v(_vm._s(_vm.details))
                ])
              : _vm._e(),
            _vm.detailsHover
              ? _c(
                  "span",
                  { staticClass: "dm-base-progress-bar__details-hover" },
                  [_vm._v(_vm._s(_vm.detailsHover))]
                )
              : _vm._e()
          ])
        : _vm._e(),
      _c("div", { staticClass: "dm-base-progress-bar__bar" }, [
        _c("div", {
          staticClass: "dm-base-progress-bar__progress",
          style: {
            width: _vm.progress + "%"
          }
        })
      ])
    ]
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = function (inject) {
    if (!inject) return
    inject("data-v-0691f030_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-progress-bar {\n  text-align: left;\n  font-size: 14px;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none;\n}\n.dm-base-progress-bar .dm-base-progress-bar__content {\n    display: flex;\n    margin-bottom: 10px;\n    color: #ffffff;\n}\n.dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__title,\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details,\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n      flex: 1;\n      line-height: 22px;\n}\n.dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__title {\n      text-transform: uppercase;\n      font-weight: bold;\n}\n.dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details,\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n      text-align: right;\n}\n.dm-base-progress-bar .dm-base-progress-bar__bar {\n    overflow: hidden;\n    height: 6px;\n    border-radius: 10px;\n}\n.dm-base-progress-bar .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n      width: 0;\n      height: 100%;\n      border-radius: 10px;\n      transition: width 0.5s ease-in-out;\n      animation: fillUp 0.5s ease-in-out 0s 1;\n}\n.dm-base-progress-bar--black .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #323e4f;\n}\n.dm-base-progress-bar--blue .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #0194ef;\n}\n.dm-base-progress-bar--green .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #1bb934;\n}\n.dm-base-progress-bar--orange .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #ffb610;\n}\n.dm-base-progress-bar--purple .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #ab7ef6;\n}\n.dm-base-progress-bar--red .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #e1112c;\n}\n.dm-base-progress-bar--turquoise .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #26c2c9;\n}\n.dm-base-progress-bar--white .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #ffffff;\n}\n.dm-base-progress-bar--with-details-hover .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n    display: none;\n}\n.dm-base-progress-bar--with-details-hover:hover .dm-base-progress-bar__content .dm-base-progress-bar__details {\n    display: none;\n}\n.dm-base-progress-bar--with-details-hover:hover .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n    display: block;\n}\n@keyframes fillUp {\n0% {\n    transform: translateX(-100%);\n}\n100% {\n    transform: translateX(0);\n}\n}\n\n/*# sourceMappingURL=BaseProgressBar.vue.map */", map: {"version":3,"sources":["BaseProgressBar.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseProgressBar.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACgGhF;EACA,iBAAA;EACA,gBAAA;EACA,sFACA;EACA,kBAAA;CAwEA;AA7EA;IAQA,cAAA;IACA,oBAAA;IACA,eAAA;CAkBA;AA5BA;;;MAeA,QAAA;MACA,kBAAA;CACA;AAjBA;MAoBA,0BAAA;MACA,kBAAA;CACA;AAtBA;;MA0BA,kBAAA;CACA;AA3BA;IA+BA,iBAAA;IACA,YAAA;IACA,oBAAA;CASA;AA1CA;MAoCA,SAAA;MACA,aAAA;MACA,oBAAA;MACA,mCAAA;MACA,wCAAA;CACA;AAMA;IAGA,0BAAA;CACA;AAJA;IAGA,0BAAA;CACA;AAJA;IAGA,0BAAA;CACA;AAJA;IAGA,0BAAA;CACA;AAJA;IAGA,0BAAA;CACA;AAJA;IAGA,0BAAA;CACA;AAJA;IAGA,0BAAA;CACA;AAJA;IAGA,0BAAA;CACA;AAOA;IAGA,cAAA;CACA;AAJA;IAUA,cAAA;CACA;AAXA;IAcA,eAAA;CACA;AAMA;AACA;IACA,6BAAA;CAAA;AAGA;IACA,yBAAA;CAAA;CAAA;;ADzHA,+CAA+C","file":"BaseProgressBar.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-progress-bar {\n  text-align: left;\n  font-size: 14px;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none; }\n  .dm-base-progress-bar .dm-base-progress-bar__content {\n    display: flex;\n    margin-bottom: 10px;\n    color: #ffffff; }\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__title,\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details,\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n      flex: 1;\n      line-height: 22px; }\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__title {\n      text-transform: uppercase;\n      font-weight: bold; }\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details,\n    .dm-base-progress-bar .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n      text-align: right; }\n  .dm-base-progress-bar .dm-base-progress-bar__bar {\n    overflow: hidden;\n    height: 6px;\n    border-radius: 10px; }\n    .dm-base-progress-bar .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n      width: 0;\n      height: 100%;\n      border-radius: 10px;\n      transition: width 0.5s ease-in-out;\n      animation: fillUp 0.5s ease-in-out 0s 1; }\n  .dm-base-progress-bar--black .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #323e4f; }\n  .dm-base-progress-bar--blue .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #0194ef; }\n  .dm-base-progress-bar--green .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #1bb934; }\n  .dm-base-progress-bar--orange .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #ffb610; }\n  .dm-base-progress-bar--purple .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #ab7ef6; }\n  .dm-base-progress-bar--red .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #e1112c; }\n  .dm-base-progress-bar--turquoise .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #26c2c9; }\n  .dm-base-progress-bar--white .dm-base-progress-bar__bar .dm-base-progress-bar__progress {\n    background-color: #ffffff; }\n  .dm-base-progress-bar--with-details-hover .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n    display: none; }\n  .dm-base-progress-bar--with-details-hover:hover .dm-base-progress-bar__content .dm-base-progress-bar__details {\n    display: none; }\n  .dm-base-progress-bar--with-details-hover:hover .dm-base-progress-bar__content .dm-base-progress-bar__details-hover {\n    display: block; }\n\n@keyframes fillUp {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0); } }\n\n/*# sourceMappingURL=BaseProgressBar.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* component normalizer */
  function __vue_normalize__$9(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseProgressBar.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$9() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$9.styles || (__vue_create_injector__$9.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseProgressBar = __vue_normalize__$9(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    __vue_create_injector__$9,
    undefined
  )

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
var script$10 = {
  props: {
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
        return ["small", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    // --> EVENT LISTENERS <--
    onClick: function onClick(event) {
      this.$emit("click", this.network, event);
    }
  }
};

/* script */
            const __vue_script__$10 = script$10;
            
/* template */
var __vue_render__$10 = function() {
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
        _vm.size === "large"
          ? _c(
              "span",
              { staticClass: "dm-base-social-login__label" },
              [_vm._t("default")],
              2
            )
          : _vm._e()
      ])
    ]
  )
};
var __vue_staticRenderFns__$10 = [];
__vue_render__$10._withStripped = true;

  /* style */
  const __vue_inject_styles__$10 = function (inject) {
    if (!inject) return
    inject("data-v-a0940732_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-social-login {\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  background-position: center;\n  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);\n  color: #ffffff;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 250ms ease-in-out;\n  user-select: none;\n  cursor: pointer;\n}\n.dm-base-social-login .dm-base-social-login__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__icon {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      background-repeat: no-repeat;\n}\n.dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__label {\n      margin-left: 8px;\n      font-weight: 500;\n      font-size: 15px;\n      line-height: 20px;\n}\n.dm-base-social-login--facebook {\n    background: #3b5998 radial-gradient(circle, transparent 1%, #3b5998 1%) center/15000%;\n}\n.dm-base-social-login--facebook:hover {\n      background-color: #4c70ba;\n}\n.dm-base-social-login--facebook:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #4c70ba;\n}\n.dm-base-social-login--facebook:active {\n      background-color: #4c70ba;\n}\n.dm-base-social-login--facebook .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5mYWNlYm9vazwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXZWJzaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRGFyay1Nb2RlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQxLjAwMDAwMCwgLTMwMDkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJDb250ZW50LVs0MHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NS4wMDAwMDAsIDYwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbC1Db25uZWN0cy1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTUuMDAwMDAwLCAyODM2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDb250ZW50LVsyMHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJGYWNlYm9vay1bMjBoLW1dIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjEuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4Ljg5NjE5MSwwIEwxLjEwMzgwOSwwIEMwLjQ5NDEyODc1NSwwIDAsMC40OTQxMjY5MDQgMCwxLjEwMzgwNDg3IEwwLDE4Ljg5NjEyMDIgQzAsMTkuNTA1NzIzMiAwLjQ5NDEyODc1NSwyMCAxLjEwMzgwOSwyMCBMMTAuNjgyNjY4LDIwIEwxMC42ODI2NjgsMTIuMjU0OTMxNyBMOC4wNzYyNDAwMSwxMi4yNTQ5MzE3IEw4LjA3NjI0MDAxLDkuMjM2NTE2MjMgTDEwLjY4MjY2OCw5LjIzNjUxNjIzIEwxMC42ODI2NjgsNy4wMTA1NDcyMiBDMTAuNjgyNjY4LDQuNDI3MzU5MDcgMTIuMjYwMzczLDMuMDIwNzM4NDkgMTQuNTY0ODA4NSwzLjAyMDczODQ5IEMxNS42Njg2OTI0LDMuMDIwNzM4NDkgMTYuNjE3MzgzNywzLjEwMjg2ODE3IDE2Ljg5MzgyMywzLjEzOTU4NjczIEwxNi44OTM4MjMsNS44MzkyMjUxNiBMMTUuMjk1NTg1NSw1LjgzOTk3NDUyIEMxNC4wNDIzNTM5LDUuODM5OTc0NTIgMTMuNzk5NjM1OCw2LjQzNTQ4OTYxIDEzLjc5OTYzNTgsNy4zMDkzOTEzMyBMMTMuNzk5NjM1OCw5LjIzNjUxNjIzIEwxNi43ODg2MTI3LDkuMjM2NTE2MjMgTDE2LjM5OTQ2OTUsMTIuMjU0OTMxNyBMMTMuNzk5NjM1OCwxMi4yNTQ5MzE3IEwxMy43OTk2MzU4LDIwIEwxOC44OTYxOTEsMjAgQzE5LjUwNTc5NjMsMjAgMjAsMTkuNTA1NzIzMiAyMCwxOC44OTYxMjAyIEwyMCwxLjEwMzgwNDg3IEMyMCwwLjQ5NDEyNjkwNCAxOS41MDU3OTYzLDAgMTguODk2MTkxLDAiIGlkPSJmYWNlYm9vayI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);\n}\n.dm-base-social-login--google {\n    background: #db4437 radial-gradient(circle, transparent 1%, #db4437 1%) center/15000%;\n}\n.dm-base-social-login--google:hover {\n      background-color: #e36c62;\n}\n.dm-base-social-login--google:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e36c62;\n}\n.dm-base-social-login--google:active {\n      background-color: #e36c62;\n}\n.dm-base-social-login--google .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5nb29nbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iV2Vic2l0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRhcmstTW9kZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1MC4wMDAwMDAsIC0zMTg5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwtQ29ubmVjdHMtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU1LjAwMDAwMCwgMjgzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bMjB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR29vZ2xlLVsyMGgtbV0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxODAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGFyZ2UtW2MtbV0iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYWJlbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS44MjE1MzY2LDguMDAzODY0OTkgTDEwLjIxMTI5ODMsOC4wMDM4NjQ5OSBDMTAuMjExMjk4Myw5LjAwMzMwMjM3IDEwLjIxMTI5ODMsMTEuMDAyMTc3MSAxMC4yMDUxNzE5LDEyLjAwMTYxNDUgTDE1Ljc3NDA0NTcsMTIuMDAxNjE0NSBDMTUuNTYwNjQzNiwxMy4wMDEwNTE5IDE0LjgwNDAzNjUsMTQuNDAwMjY0MyAxMy43MzQ5ODQzLDE1LjEwNDg2NzYgQzEzLjczMzk2MzIsMTUuMTAzODY4MiAxMy43MzI5NDIxLDE1LjExMDg2NDIgMTMuNzMwOSwxNS4xMDk4NjQ4IEMxMi4zMDk1ODEzLDE2LjA0ODMzNjUgMTAuNDMzODg5OSwxNi4yNjEyMTY3IDkuMDQxMTYwOTMsMTUuOTgxMzc0MiBDNi44NTgxMjk3NSwxNS41NDc2MTg0IDUuMTMwNDkyMzYsMTMuOTY0NTA5NiA0LjQyOTAyMjU3LDExLjk1MzY0MTUgQzQuNDMzMTA2ODIsMTEuOTUwNjQzMiA0LjQzNjE3LDExLjkyMjY1OSA0LjQzOTIzMzE5LDExLjkyMDY2MDEgQzQuMDAwMTc2NCwxMC42NzMzNjIyIDQuMDAwMTc2NCw5LjAwMzMwMjM3IDQuNDM5MjMzMTksOC4wMDM4NjQ5OSBMNC40MzgyMTIxMyw4LjAwMzg2NDk5IEM1LjAwMzg4MDY0LDYuMTY2ODk5MDggNi43ODM1OTIyMSw0LjQ5MDg0MjU4IDguOTY5Njg2NTcsNC4wMzIxMDA4MiBDMTAuNzI3OTU1OCwzLjY1OTMxMDY4IDEyLjcxMTg3OTksNC4wNjMwODMzOCAxNC4xNzA5Nzc5LDUuNDI4MzE0ODUgQzE0LjM2NDk3OTcsNS4yMzg0MjE3NCAxNi44NTYzNzE3LDIuODA1NzkxMTUgMTcuMDQzMjI2MSwyLjYwNzkwMjU1IEMxMi4wNTg0LC0xLjkwNjU1NjEyIDQuMDc2NzU2MDgsLTAuMzE4NDUwMTE2IDEuMDkwMTQ4ODgsNS41MTEyNjgxNSBMMS4wODkxMjc4Miw1LjUxMTI2ODE1IEMxLjA4OTEyNzgyLDUuNTExMjY4MTUgMS4wOTAxNDg4OCw1LjUxMTI2ODE1IDEuMDg0MDIyNTEsNS41MjIyNjE5NiBMMS4wODQwMjI1MSw1LjUyMjI2MTk2IEMtMC4zOTM0NTQ2MjcsOC4zODU2NTAwNyAtMC4zMzIxOTA4ODksMTEuNzU5NzUwNyAxLjA5NDIzMzEzLDE0LjQ4NjIxNTkgQzEuMDkwMTQ4ODgsMTQuNDg5MjE0MiAxLjA4NzA4NTY5LDE0LjQ5MTIxMzEgMS4wODQwMjI1MSwxNC40OTQyMTE0IEMyLjM3NjY4NzM2LDE3LjAwMjc5OTIgNC43MjkyMTQ4OCwxOC45MjY3MTYyIDcuNTYzNjgzOCwxOS42NTkzMDM4IEMxMC41NzQ3OTY1LDIwLjQ0ODg1OTMgMTQuNDA2ODQzMywxOS45MDkxNjMxIDE2Ljk3Mzc5MzksMTcuNTg3NDcwMSBDMTYuOTc0ODE0OSwxNy41ODg0Njk1IDE2Ljk3NTgzNiwxNy41ODk0Njg5IDE2Ljk3Njg1NywxNy41OTA0Njg0IEMxOS4xNTE3MTk3LDE1LjYzMTU3MTEgMjAuNTA1NjQ4MywxMi4yOTQ0NDk3IDE5LjgyMTUzNjYsOC4wMDM4NjQ5OSIgaWQ9Imdvb2dsZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);\n}\n.dm-base-social-login--messenger {\n    background: #0084ff radial-gradient(circle, transparent 1%, #0084ff 1%) center/15000%;\n}\n.dm-base-social-login--messenger:hover {\n      background-color: #339dff;\n}\n.dm-base-social-login--messenger:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #339dff;\n}\n.dm-base-social-login--messenger:active {\n      background-color: #339dff;\n}\n.dm-base-social-login--messenger .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5tZXNzZW5nZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iV2Vic2l0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRhcmstTW9kZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyNi4wMDAwMDAsIC0zMDY5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwtQ29ubmVjdHMtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU1LjAwMDAwMCwgMjgzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bMjB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTWVzc2VuZ2VyLVsyMGgtbV0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDYuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjk1NzQxNDQsMTIuNDEzIEw4LjM1NTUyMzk0LDkuNzUzIEwzLjM0MzgzNTc2LDEyLjQ4IEw4LjgzODI5NjU3LDYuNzQzIEwxMS40NDAxODcsOS40MDMgTDE2LjQ1MTg3NTIsNi42NzYgTDEwLjk1NzQxNDQsMTIuNDEzIFogTTkuODk3MzQ3MjksMCBDNC4zNDA4ODgzLDAgMCw0LjE0NCAwLDkuMjU3IEMwLDEyLjE2NSAwLjg1MjcyODkzNiwxNC43NiAzLjkwMTgxOTI5LDE2LjQ1NyBMMy45MDE4MTkyOSwyMCBMNy4xNzE0NjA1MSwxOC4xMjYgQzguMDg3MjAzOTgsMTguMzc4IDguOTc1NTA1NjQsMTguNTEzIDkuOTc5NjcyNzMsMTguNTEzIEMxNS41MzYxMzE3LDE4LjUxMyAyMCwxNC4zNjkgMjAsOS4yNTcgQzIwLDQuMTQ0IDE1LjQ1NDgyMjYsMCA5Ljg5NzM0NzI5LDAgTDkuODk3MzQ3MjksMCBaIiBpZD0ibWVzc2VuZ2VyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);\n}\n.dm-base-social-login--twitter {\n    background: #1da1f2 radial-gradient(circle, transparent 1%, #1da1f2 1%) center/15000%;\n}\n.dm-base-social-login--twitter:hover {\n      background-color: #4db5f5;\n}\n.dm-base-social-login--twitter:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #4db5f5;\n}\n.dm-base-social-login--twitter:active {\n      background-color: #4db5f5;\n}\n.dm-base-social-login--twitter .dm-base-social-login__inner .dm-base-social-login__icon {\n      height: 16px;\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT50d2l0dGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IldlYnNpdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEYXJrLU1vZGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTAuMDAwMDAwLCAtMzEzMS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IkNvbnRlbnQtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1LjAwMDAwMCwgNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iU29jaWFsLUNvbm5lY3RzLVs0MHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1NS4wMDAwMDAsIDI4MzYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNvbnRlbnQtWzIwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlR3aXR0ZXItWzIwaC1tXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzAuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuMjksMTggQzEzLjgzNywxOCAxNy45NjUsMTEuODQzNjUzMSAxNy45NjUsNi41MDU0NjEzNiBDMTcuOTY1LDYuMzMwMjEyNzIgMTcuOTY1LDYuMTU1OTQ4NjIgMTcuOTUzLDUuOTgyNjY5MDYgQzE4Ljc1Niw1LjQxMTYzNDE3IDE5LjQ0OSw0LjcwMjc2MzI2IDIwLDMuODkxNDk5ODkgQzE5LjI1Miw0LjIxODM2ODE0IDE4LjQ1Nyw0LjQzMjk5ODUgMTcuNjQ0LDQuNTI3NTE0NjIgQzE4LjUsNC4wMjI0NDQxIDE5LjE0MSwzLjIyODkwMjUgMTkuNDQ4LDIuMjkyNjAyMTggQzE4LjY0MiwyLjc2MzIxMzcgMTcuNzYxLDMuMDk1MDA0NjcgMTYuODQyLDMuMjczMjA2OTQgQzE1LjI4OCwxLjY0Njc0MjAyIDEyLjY4OSwxLjU2Nzk3ODU5IDExLjAzNiwzLjA5Nzk1ODI5IEM5Ljk3MSw0LjA4NDQ3MDMxIDkuNTE4LDUuNTU1Mzc3NDMgOS44NDksNi45NTgzNTExIEM2LjU1LDYuNzk0OTE2OTggMy40NzYsNS4yNjA5OTkxIDEuMzkyLDIuNzM3NjE1NTggQzAuMzAzLDQuNTgzNjMzNTcgMC44Niw2Ljk0NDU2NzUgMi42NjMsOC4xMjk5NTcxOCBDMi4wMSw4LjExMTI1MDg3IDEuMzcxLDcuOTM3OTcxMzEgMC44LDcuNjI0ODg2NjYgTDAuOCw3LjY3NjA4Mjg5IEMwLjgwMSw5LjU5ODg5NTIzIDIuMTc4LDExLjI1NDg5NjQgNC4wOTIsMTEuNjM1OTE0NSBDMy40ODgsMTEuNzk4MzY0MSAyLjg1NCwxMS44MjE5OTMxIDIuMjQsMTEuNzA0ODMyNSBDMi43NzcsMTMuMzUwOTg4MyA0LjMxOCwxNC40NzgyOSA2LjA3MywxNC41MTA3Nzk5IEM0LjYyLDE1LjYzNTEyNzkgMi44MjUsMTYuMjQ1NTQ0NSAwLjk3NywxNi4yNDM1NzU0IEMwLjY1MSwxNi4yNDI1OTA5IDAuMzI1LDE2LjIyMzg4NDYgMCwxNi4xODU0ODc0IEMxLjg3NywxNy4zNzA4NzcxIDQuMDYsMTggNi4yOSwxNy45OTcwNDY0IiBpZD0idHdpdHRlciI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);\n}\n.dm-base-social-login--small {\n    padding: 10px 10px;\n}\n.dm-base-social-login--large {\n    padding: 10px 30px;\n}\n.dm-base-social-login--full-width {\n    width: 100%;\n}\n.dm-base-social-login:active {\n    background-size: 100%;\n    transition: background 0s;\n}\n\n/*# sourceMappingURL=BaseSocialLogin.vue.map */", map: {"version":3,"sources":["BaseSocialLogin.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseSocialLogin.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACyEhF;EACA,sBAAA;EACA,WAAA;EACA,qCAAA;EACA,mBAAA;EACA,4BAAA;EACA,sDAAA;EACA,eAAA;EACA,sFACA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;CAsFA;AAlGA;IAeA,cAAA;IACA,oBAAA;IACA,wBAAA;CAeA;AAhCA;MAoBA,sBAAA;MACA,YAAA;MACA,aAAA;MACA,6BAAA;CACA;AAxBA;MA2BA,iBAAA;MACA,iBAAA;MACA,gBAAA;MACA,kBAAA;CACA;AAMA;IACA,sFAMA;CA6BA;AApCA;MAUA,0BAAA;CACA;AAXA;MAcA,iDACA;CACA;AAhBA;MAmBA,0BAAA;CACA;AApBA;MAyBA,8lFAAA;CASA;AAlCA;IACA,sFAMA;CA6BA;AApCA;MAUA,0BAAA;CACA;AAXA;MAcA,iDACA;CACA;AAhBA;MAmBA,0BAAA;CACA;AApBA;MA2BA,k9GAAA;CAOA;AAlCA;IACA,sFAMA;CA6BA;AApCA;MAUA,0BAAA;CACA;AAXA;MAcA,iDACA;CACA;AAhBA;MAmBA,0BAAA;CACA;AApBA;MA6BA,0vEAAA;CAKA;AAlCA;IACA,sFAMA;CA6BA;AApCA;MAUA,0BAAA;CACA;AAXA;MAcA,iDACA;CACA;AAhBA;MAmBA,0BAAA;CACA;AApBA;MA+BA,aAAA;MACA,k4FAAA;CAEA;AAUA;IACA,mBAAA;CACA;AAFA;IACA,mBAAA;CACA;AAKA;IACA,YAAA;CACA;AA1FA;IA+FA,sBAAA;IACA,0BAAA;CACA;;AD5FA,+CAA+C","file":"BaseSocialLogin.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-social-login {\n  display: inline-block;\n  outline: 0;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  background-position: center;\n  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);\n  color: #ffffff;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 250ms ease-in-out;\n  user-select: none;\n  cursor: pointer; }\n  .dm-base-social-login .dm-base-social-login__inner {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__icon {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      background-repeat: no-repeat; }\n    .dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__label {\n      margin-left: 8px;\n      font-weight: 500;\n      font-size: 15px;\n      line-height: 20px; }\n  .dm-base-social-login--facebook {\n    background: #3b5998 radial-gradient(circle, transparent 1%, #3b5998 1%) center/15000%; }\n    .dm-base-social-login--facebook:hover {\n      background-color: #4c70ba; }\n    .dm-base-social-login--facebook:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #4c70ba; }\n    .dm-base-social-login--facebook:active {\n      background-color: #4c70ba; }\n    .dm-base-social-login--facebook .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5mYWNlYm9vazwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXZWJzaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRGFyay1Nb2RlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQxLjAwMDAwMCwgLTMwMDkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJDb250ZW50LVs0MHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NS4wMDAwMDAsIDYwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbC1Db25uZWN0cy1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTUuMDAwMDAwLCAyODM2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDb250ZW50LVsyMHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJGYWNlYm9vay1bMjBoLW1dIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjEuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4Ljg5NjE5MSwwIEwxLjEwMzgwOSwwIEMwLjQ5NDEyODc1NSwwIDAsMC40OTQxMjY5MDQgMCwxLjEwMzgwNDg3IEwwLDE4Ljg5NjEyMDIgQzAsMTkuNTA1NzIzMiAwLjQ5NDEyODc1NSwyMCAxLjEwMzgwOSwyMCBMMTAuNjgyNjY4LDIwIEwxMC42ODI2NjgsMTIuMjU0OTMxNyBMOC4wNzYyNDAwMSwxMi4yNTQ5MzE3IEw4LjA3NjI0MDAxLDkuMjM2NTE2MjMgTDEwLjY4MjY2OCw5LjIzNjUxNjIzIEwxMC42ODI2NjgsNy4wMTA1NDcyMiBDMTAuNjgyNjY4LDQuNDI3MzU5MDcgMTIuMjYwMzczLDMuMDIwNzM4NDkgMTQuNTY0ODA4NSwzLjAyMDczODQ5IEMxNS42Njg2OTI0LDMuMDIwNzM4NDkgMTYuNjE3MzgzNywzLjEwMjg2ODE3IDE2Ljg5MzgyMywzLjEzOTU4NjczIEwxNi44OTM4MjMsNS44MzkyMjUxNiBMMTUuMjk1NTg1NSw1LjgzOTk3NDUyIEMxNC4wNDIzNTM5LDUuODM5OTc0NTIgMTMuNzk5NjM1OCw2LjQzNTQ4OTYxIDEzLjc5OTYzNTgsNy4zMDkzOTEzMyBMMTMuNzk5NjM1OCw5LjIzNjUxNjIzIEwxNi43ODg2MTI3LDkuMjM2NTE2MjMgTDE2LjM5OTQ2OTUsMTIuMjU0OTMxNyBMMTMuNzk5NjM1OCwxMi4yNTQ5MzE3IEwxMy43OTk2MzU4LDIwIEwxOC44OTYxOTEsMjAgQzE5LjUwNTc5NjMsMjAgMjAsMTkuNTA1NzIzMiAyMCwxOC44OTYxMjAyIEwyMCwxLjEwMzgwNDg3IEMyMCwwLjQ5NDEyNjkwNCAxOS41MDU3OTYzLDAgMTguODk2MTkxLDAiIGlkPSJmYWNlYm9vayI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+); }\n  .dm-base-social-login--google {\n    background: #db4437 radial-gradient(circle, transparent 1%, #db4437 1%) center/15000%; }\n    .dm-base-social-login--google:hover {\n      background-color: #e36c62; }\n    .dm-base-social-login--google:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e36c62; }\n    .dm-base-social-login--google:active {\n      background-color: #e36c62; }\n    .dm-base-social-login--google .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5nb29nbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iV2Vic2l0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRhcmstTW9kZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1MC4wMDAwMDAsIC0zMTg5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwtQ29ubmVjdHMtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU1LjAwMDAwMCwgMjgzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bMjB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR29vZ2xlLVsyMGgtbV0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxODAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGFyZ2UtW2MtbV0iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYWJlbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS44MjE1MzY2LDguMDAzODY0OTkgTDEwLjIxMTI5ODMsOC4wMDM4NjQ5OSBDMTAuMjExMjk4Myw5LjAwMzMwMjM3IDEwLjIxMTI5ODMsMTEuMDAyMTc3MSAxMC4yMDUxNzE5LDEyLjAwMTYxNDUgTDE1Ljc3NDA0NTcsMTIuMDAxNjE0NSBDMTUuNTYwNjQzNiwxMy4wMDEwNTE5IDE0LjgwNDAzNjUsMTQuNDAwMjY0MyAxMy43MzQ5ODQzLDE1LjEwNDg2NzYgQzEzLjczMzk2MzIsMTUuMTAzODY4MiAxMy43MzI5NDIxLDE1LjExMDg2NDIgMTMuNzMwOSwxNS4xMDk4NjQ4IEMxMi4zMDk1ODEzLDE2LjA0ODMzNjUgMTAuNDMzODg5OSwxNi4yNjEyMTY3IDkuMDQxMTYwOTMsMTUuOTgxMzc0MiBDNi44NTgxMjk3NSwxNS41NDc2MTg0IDUuMTMwNDkyMzYsMTMuOTY0NTA5NiA0LjQyOTAyMjU3LDExLjk1MzY0MTUgQzQuNDMzMTA2ODIsMTEuOTUwNjQzMiA0LjQzNjE3LDExLjkyMjY1OSA0LjQzOTIzMzE5LDExLjkyMDY2MDEgQzQuMDAwMTc2NCwxMC42NzMzNjIyIDQuMDAwMTc2NCw5LjAwMzMwMjM3IDQuNDM5MjMzMTksOC4wMDM4NjQ5OSBMNC40MzgyMTIxMyw4LjAwMzg2NDk5IEM1LjAwMzg4MDY0LDYuMTY2ODk5MDggNi43ODM1OTIyMSw0LjQ5MDg0MjU4IDguOTY5Njg2NTcsNC4wMzIxMDA4MiBDMTAuNzI3OTU1OCwzLjY1OTMxMDY4IDEyLjcxMTg3OTksNC4wNjMwODMzOCAxNC4xNzA5Nzc5LDUuNDI4MzE0ODUgQzE0LjM2NDk3OTcsNS4yMzg0MjE3NCAxNi44NTYzNzE3LDIuODA1NzkxMTUgMTcuMDQzMjI2MSwyLjYwNzkwMjU1IEMxMi4wNTg0LC0xLjkwNjU1NjEyIDQuMDc2NzU2MDgsLTAuMzE4NDUwMTE2IDEuMDkwMTQ4ODgsNS41MTEyNjgxNSBMMS4wODkxMjc4Miw1LjUxMTI2ODE1IEMxLjA4OTEyNzgyLDUuNTExMjY4MTUgMS4wOTAxNDg4OCw1LjUxMTI2ODE1IDEuMDg0MDIyNTEsNS41MjIyNjE5NiBMMS4wODQwMjI1MSw1LjUyMjI2MTk2IEMtMC4zOTM0NTQ2MjcsOC4zODU2NTAwNyAtMC4zMzIxOTA4ODksMTEuNzU5NzUwNyAxLjA5NDIzMzEzLDE0LjQ4NjIxNTkgQzEuMDkwMTQ4ODgsMTQuNDg5MjE0MiAxLjA4NzA4NTY5LDE0LjQ5MTIxMzEgMS4wODQwMjI1MSwxNC40OTQyMTE0IEMyLjM3NjY4NzM2LDE3LjAwMjc5OTIgNC43MjkyMTQ4OCwxOC45MjY3MTYyIDcuNTYzNjgzOCwxOS42NTkzMDM4IEMxMC41NzQ3OTY1LDIwLjQ0ODg1OTMgMTQuNDA2ODQzMywxOS45MDkxNjMxIDE2Ljk3Mzc5MzksMTcuNTg3NDcwMSBDMTYuOTc0ODE0OSwxNy41ODg0Njk1IDE2Ljk3NTgzNiwxNy41ODk0Njg5IDE2Ljk3Njg1NywxNy41OTA0Njg0IEMxOS4xNTE3MTk3LDE1LjYzMTU3MTEgMjAuNTA1NjQ4MywxMi4yOTQ0NDk3IDE5LjgyMTUzNjYsOC4wMDM4NjQ5OSIgaWQ9Imdvb2dsZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+); }\n  .dm-base-social-login--messenger {\n    background: #0084ff radial-gradient(circle, transparent 1%, #0084ff 1%) center/15000%; }\n    .dm-base-social-login--messenger:hover {\n      background-color: #339dff; }\n    .dm-base-social-login--messenger:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #339dff; }\n    .dm-base-social-login--messenger:active {\n      background-color: #339dff; }\n    .dm-base-social-login--messenger .dm-base-social-login__inner .dm-base-social-login__icon {\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5tZXNzZW5nZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iV2Vic2l0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRhcmstTW9kZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyNi4wMDAwMDAsIC0zMDY5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwtQ29ubmVjdHMtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU1LjAwMDAwMCwgMjgzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bMjB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTWVzc2VuZ2VyLVsyMGgtbV0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDYuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjk1NzQxNDQsMTIuNDEzIEw4LjM1NTUyMzk0LDkuNzUzIEwzLjM0MzgzNTc2LDEyLjQ4IEw4LjgzODI5NjU3LDYuNzQzIEwxMS40NDAxODcsOS40MDMgTDE2LjQ1MTg3NTIsNi42NzYgTDEwLjk1NzQxNDQsMTIuNDEzIFogTTkuODk3MzQ3MjksMCBDNC4zNDA4ODgzLDAgMCw0LjE0NCAwLDkuMjU3IEMwLDEyLjE2NSAwLjg1MjcyODkzNiwxNC43NiAzLjkwMTgxOTI5LDE2LjQ1NyBMMy45MDE4MTkyOSwyMCBMNy4xNzE0NjA1MSwxOC4xMjYgQzguMDg3MjAzOTgsMTguMzc4IDguOTc1NTA1NjQsMTguNTEzIDkuOTc5NjcyNzMsMTguNTEzIEMxNS41MzYxMzE3LDE4LjUxMyAyMCwxNC4zNjkgMjAsOS4yNTcgQzIwLDQuMTQ0IDE1LjQ1NDgyMjYsMCA5Ljg5NzM0NzI5LDAgTDkuODk3MzQ3MjksMCBaIiBpZD0ibWVzc2VuZ2VyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=); }\n  .dm-base-social-login--twitter {\n    background: #1da1f2 radial-gradient(circle, transparent 1%, #1da1f2 1%) center/15000%; }\n    .dm-base-social-login--twitter:hover {\n      background-color: #4db5f5; }\n    .dm-base-social-login--twitter:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #4db5f5; }\n    .dm-base-social-login--twitter:active {\n      background-color: #4db5f5; }\n    .dm-base-social-login--twitter .dm-base-social-login__inner .dm-base-social-login__icon {\n      height: 16px;\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT50d2l0dGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IldlYnNpdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEYXJrLU1vZGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTAuMDAwMDAwLCAtMzEzMS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IkNvbnRlbnQtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1LjAwMDAwMCwgNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iU29jaWFsLUNvbm5lY3RzLVs0MHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1NS4wMDAwMDAsIDI4MzYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNvbnRlbnQtWzIwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlR3aXR0ZXItWzIwaC1tXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzAuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuMjksMTggQzEzLjgzNywxOCAxNy45NjUsMTEuODQzNjUzMSAxNy45NjUsNi41MDU0NjEzNiBDMTcuOTY1LDYuMzMwMjEyNzIgMTcuOTY1LDYuMTU1OTQ4NjIgMTcuOTUzLDUuOTgyNjY5MDYgQzE4Ljc1Niw1LjQxMTYzNDE3IDE5LjQ0OSw0LjcwMjc2MzI2IDIwLDMuODkxNDk5ODkgQzE5LjI1Miw0LjIxODM2ODE0IDE4LjQ1Nyw0LjQzMjk5ODUgMTcuNjQ0LDQuNTI3NTE0NjIgQzE4LjUsNC4wMjI0NDQxIDE5LjE0MSwzLjIyODkwMjUgMTkuNDQ4LDIuMjkyNjAyMTggQzE4LjY0MiwyLjc2MzIxMzcgMTcuNzYxLDMuMDk1MDA0NjcgMTYuODQyLDMuMjczMjA2OTQgQzE1LjI4OCwxLjY0Njc0MjAyIDEyLjY4OSwxLjU2Nzk3ODU5IDExLjAzNiwzLjA5Nzk1ODI5IEM5Ljk3MSw0LjA4NDQ3MDMxIDkuNTE4LDUuNTU1Mzc3NDMgOS44NDksNi45NTgzNTExIEM2LjU1LDYuNzk0OTE2OTggMy40NzYsNS4yNjA5OTkxIDEuMzkyLDIuNzM3NjE1NTggQzAuMzAzLDQuNTgzNjMzNTcgMC44Niw2Ljk0NDU2NzUgMi42NjMsOC4xMjk5NTcxOCBDMi4wMSw4LjExMTI1MDg3IDEuMzcxLDcuOTM3OTcxMzEgMC44LDcuNjI0ODg2NjYgTDAuOCw3LjY3NjA4Mjg5IEMwLjgwMSw5LjU5ODg5NTIzIDIuMTc4LDExLjI1NDg5NjQgNC4wOTIsMTEuNjM1OTE0NSBDMy40ODgsMTEuNzk4MzY0MSAyLjg1NCwxMS44MjE5OTMxIDIuMjQsMTEuNzA0ODMyNSBDMi43NzcsMTMuMzUwOTg4MyA0LjMxOCwxNC40NzgyOSA2LjA3MywxNC41MTA3Nzk5IEM0LjYyLDE1LjYzNTEyNzkgMi44MjUsMTYuMjQ1NTQ0NSAwLjk3NywxNi4yNDM1NzU0IEMwLjY1MSwxNi4yNDI1OTA5IDAuMzI1LDE2LjIyMzg4NDYgMCwxNi4xODU0ODc0IEMxLjg3NywxNy4zNzA4NzcxIDQuMDYsMTggNi4yOSwxNy45OTcwNDY0IiBpZD0idHdpdHRlciI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==); }\n  .dm-base-social-login--small {\n    padding: 10px 10px; }\n  .dm-base-social-login--large {\n    padding: 10px 30px; }\n  .dm-base-social-login--full-width {\n    width: 100%; }\n  .dm-base-social-login:active {\n    background-size: 100%;\n    transition: background 0s; }\n\n/*# sourceMappingURL=BaseSocialLogin.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$10 = undefined;
  /* module identifier */
  const __vue_module_identifier__$10 = undefined;
  /* functional template */
  const __vue_is_functional_template__$10 = false;
  /* component normalizer */
  function __vue_normalize__$10(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseSocialLogin.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$10() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$10.styles || (__vue_create_injector__$10.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseSocialLogin = __vue_normalize__$10(
    { render: __vue_render__$10, staticRenderFns: __vue_staticRenderFns__$10 },
    __vue_inject_styles__$10,
    __vue_script__$10,
    __vue_scope_id__$10,
    __vue_is_functional_template__$10,
    __vue_module_identifier__$10,
    __vue_create_injector__$10,
    undefined
  )

//
var script$11 = {
  components: {
    BaseIcon: BaseIcon
  },
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "blue",
      validator: function validator(x) {
        return ["black", "blue", "green", "orange", "red", "white"].includes(x);
      }
    }
  },
  methods: {
    // --> EVENT LISTENERS <--
    onClose: function onClose(event) {
      this.$emit("close", event);
    },
    onTabKeypress: function onTabKeypress(id, event) {
      event.preventDefault();

      if (event.which === 32) {
        event.target.click();
      }
    }
  }
};

/* script */
            const __vue_script__$11 = script$11;
            
/* template */
var __vue_render__$11 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ["dm-base-toast", "dm-base-toast--" + _vm.color]
    },
    [
      _vm.$slots.default && _vm.$slots.default[0].text.trim()
        ? _c(
            "span",
            { staticClass: "dm-base-toast__slot" },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
      _vm.closable
        ? _c("base-icon", {
            staticClass: "dm-base-toast__icon",
            attrs: {
              clickable: true,
              name: "close",
              size: "20px",
              tabindex: "0"
            },
            on: { click: _vm.onClose, keypress: _vm.onTabKeypress }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$11 = [];
__vue_render__$11._withStripped = true;

  /* style */
  const __vue_inject_styles__$11 = function (inject) {
    if (!inject) return
    inject("data-v-72ecb0f8_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-toast {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  width: 200px;\n  border-radius: 3px;\n  color: #ffffff;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 200ms ease-in-out;\n}\n.dm-base-toast .dm-base-toast__icon {\n    flex: 0 0 auto;\n    margin-left: 20px;\n    outline: 0;\n    border-radius: 100%;\n    transition: all 200ms ease-in-out;\n}\n.dm-base-toast .dm-base-toast__icon:focus {\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-base-toast .dm-base-toast__slot {\n    flex: 1;\n    font-size: 16px;\n    line-height: 22px;\n}\n.dm-base-toast--black {\n    background-color: #323e4f;\n}\n.dm-base-toast--black .dm-base-toast__icon:hover {\n      color: #e1112c !important;\n}\n.dm-base-toast--black .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #323e4f, 0 0 0 3px crimson;\n      color: #e1112c !important;\n}\n.dm-base-toast--blue {\n    background-color: #0194ef;\n}\n.dm-base-toast--blue .dm-base-toast__icon:hover {\n      color: #e1112c !important;\n}\n.dm-base-toast--blue .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #0194ef, 0 0 0 3px crimson;\n      color: #e1112c !important;\n}\n.dm-base-toast--green {\n    background-color: #1bb934;\n}\n.dm-base-toast--green .dm-base-toast__icon:hover {\n      color: #e1112c !important;\n}\n.dm-base-toast--green .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #1bb934, 0 0 0 3px crimson;\n      color: #e1112c !important;\n}\n.dm-base-toast--red {\n    background-color: #e1112c;\n}\n.dm-base-toast--red .dm-base-toast__icon:hover {\n      color: #323e4f !important;\n}\n.dm-base-toast--red .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #e1112c, 0 0 0 3px #323e4f;\n      color: #323e4f !important;\n}\n.dm-base-toast--orange {\n    background-color: #ffb610;\n}\n.dm-base-toast--orange .dm-base-toast__icon:hover {\n      color: #e1112c !important;\n}\n.dm-base-toast--orange .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #ffb610, 0 0 0 3px crimson;\n      color: #e1112c !important;\n}\n.dm-base-toast--white {\n    background-color: #ffffff;\n    color: #323e4f;\n}\n.dm-base-toast--white .dm-base-toast__icon:hover {\n      color: #e1112c !important;\n}\n.dm-base-toast--white .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px crimson;\n      color: #e1112c !important;\n}\n\n/*# sourceMappingURL=BaseToast.vue.map */", map: {"version":3,"sources":["BaseToast.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseToast.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACkFhF;EACA,cAAA;EACA,oBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,sFACA;EACA,kCAAA;CAuDA;AAjEA;IAaA,eAAA;IACA,kBAAA;IACA,WAAA;IACA,oBAAA;IACA,kCAAA;CAKA;AAtBA;MAoBA,sCAAA;CACA;AArBA;IAyBA,QAAA;IACA,gBAAA;IACA,kBAAA;CACA;AAKA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;CA6BA;AA9BA;MAUA,0BAAA;CACA;AAXA;MAcA,iDACA;MACA,0BAAA;CACA;AAjBA;IACA,0BAAA;CA6BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;AA3BA;IACA,0BAAA;IAGA,eAAA;CA0BA;AA9BA;MAoBA,0BAAA;CACA;AArBA;MAwBA,iDACA;MACA,0BAAA;CACA;;AD3EA,yCAAyC","file":"BaseToast.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-base-toast {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  width: 200px;\n  border-radius: 3px;\n  color: #ffffff;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  transition: all 200ms ease-in-out; }\n  .dm-base-toast .dm-base-toast__icon {\n    flex: 0 0 auto;\n    margin-left: 20px;\n    outline: 0;\n    border-radius: 100%;\n    transition: all 200ms ease-in-out; }\n    .dm-base-toast .dm-base-toast__icon:focus {\n      transition: box-shadow ease-in-out 0s; }\n  .dm-base-toast .dm-base-toast__slot {\n    flex: 1;\n    font-size: 16px;\n    line-height: 22px; }\n  .dm-base-toast--black {\n    background-color: #323e4f; }\n    .dm-base-toast--black .dm-base-toast__icon:hover {\n      color: #e1112c !important; }\n    .dm-base-toast--black .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #323e4f, 0 0 0 3px crimson;\n      color: #e1112c !important; }\n  .dm-base-toast--blue {\n    background-color: #0194ef; }\n    .dm-base-toast--blue .dm-base-toast__icon:hover {\n      color: #e1112c !important; }\n    .dm-base-toast--blue .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #0194ef, 0 0 0 3px crimson;\n      color: #e1112c !important; }\n  .dm-base-toast--green {\n    background-color: #1bb934; }\n    .dm-base-toast--green .dm-base-toast__icon:hover {\n      color: #e1112c !important; }\n    .dm-base-toast--green .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #1bb934, 0 0 0 3px crimson;\n      color: #e1112c !important; }\n  .dm-base-toast--red {\n    background-color: #e1112c; }\n    .dm-base-toast--red .dm-base-toast__icon:hover {\n      color: #323e4f !important; }\n    .dm-base-toast--red .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #e1112c, 0 0 0 3px #323e4f;\n      color: #323e4f !important; }\n  .dm-base-toast--orange {\n    background-color: #ffb610; }\n    .dm-base-toast--orange .dm-base-toast__icon:hover {\n      color: #e1112c !important; }\n    .dm-base-toast--orange .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #ffb610, 0 0 0 3px crimson;\n      color: #e1112c !important; }\n  .dm-base-toast--white {\n    background-color: #ffffff;\n    color: #323e4f; }\n    .dm-base-toast--white .dm-base-toast__icon:hover {\n      color: #e1112c !important; }\n    .dm-base-toast--white .dm-base-toast__icon:focus {\n      box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px crimson;\n      color: #e1112c !important; }\n\n/*# sourceMappingURL=BaseToast.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$11 = undefined;
  /* module identifier */
  const __vue_module_identifier__$11 = undefined;
  /* functional template */
  const __vue_is_functional_template__$11 = false;
  /* component normalizer */
  function __vue_normalize__$11(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/base/BaseToast.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$11() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$11.styles || (__vue_create_injector__$11.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var BaseToast = __vue_normalize__$11(
    { render: __vue_render__$11, staticRenderFns: __vue_staticRenderFns__$11 },
    __vue_inject_styles__$11,
    __vue_script__$11,
    __vue_scope_id__$11,
    __vue_is_functional_template__$11,
    __vue_module_identifier__$11,
    __vue_create_injector__$11,
    undefined
  )

/**************************************************************************
 * EXPORTS
 ***************************************************************************/
// Generate unique numbers
// However, note that such values are not genuine GUIDs.
// https://stackoverflow.com/a/105074/1649372
var generateUUID = function generateUUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
};

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
var script$12 = {
  props: {
    description: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
      }
    }
  }
};

/* script */
            const __vue_script__$12 = script$12;
            
/* template */
var __vue_render__$12 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", {
    class: ["dm-field-description", "dm-field-description--" + _vm.size],
    domProps: { innerHTML: _vm._s(_vm.description) }
  })
};
var __vue_staticRenderFns__$12 = [];
__vue_render__$12._withStripped = true;

  /* style */
  const __vue_inject_styles__$12 = function (inject) {
    if (!inject) return
    inject("data-v-88da5a60_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-description {\n  margin: 10px 0 0;\n  color: #8eacc5;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-description--mini {\n    font-size: 12px;\n    line-height: 16px;\n}\n.dm-field-description--small {\n    font-size: 13px;\n    line-height: 18px;\n}\n.dm-field-description--default {\n    font-size: 14px;\n    line-height: 20px;\n}\n.dm-field-description--medium {\n    font-size: 15px;\n    line-height: 22px;\n}\n.dm-field-description--large {\n    font-size: 16px;\n    line-height: 24px;\n}\n\n/*# sourceMappingURL=FieldDescription.vue.map */", map: {"version":3,"sources":["FieldDescription.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldDescription.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC+ChF;EACA,iBAAA;EACA,eAAA;EACA,sFACA;CAUA;AALA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;;ADtCA,gDAAgD","file":"FieldDescription.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-description {\n  margin: 10px 0 0;\n  color: #8eacc5;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-description--mini {\n    font-size: 12px;\n    line-height: 16px; }\n  .dm-field-description--small {\n    font-size: 13px;\n    line-height: 18px; }\n  .dm-field-description--default {\n    font-size: 14px;\n    line-height: 20px; }\n  .dm-field-description--medium {\n    font-size: 15px;\n    line-height: 22px; }\n  .dm-field-description--large {\n    font-size: 16px;\n    line-height: 24px; }\n\n/*# sourceMappingURL=FieldDescription.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$12 = undefined;
  /* module identifier */
  const __vue_module_identifier__$12 = undefined;
  /* functional template */
  const __vue_is_functional_template__$12 = false;
  /* component normalizer */
  function __vue_normalize__$12(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldDescription.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$12() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$12.styles || (__vue_create_injector__$12.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldDescription = __vue_normalize__$12(
    { render: __vue_render__$12, staticRenderFns: __vue_staticRenderFns__$12 },
    __vue_inject_styles__$12,
    __vue_script__$12,
    __vue_scope_id__$12,
    __vue_is_functional_template__$12,
    __vue_module_identifier__$12,
    __vue_create_injector__$12,
    undefined
  )

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
var script$13 = {
  props: {
    forField: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
      }
    },
    uppercase: {
      type: Boolean,
      default: true
    }
  }
};

/* script */
            const __vue_script__$13 = script$13;
            
/* template */
var __vue_render__$13 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    {
      class: [
        "dm-field-label",
        "dm-field-label--" + _vm.size,
        {
          "dm-field-label--for-field": _vm.forField,
          "dm-field-label--uppercase": _vm.uppercase
        }
      ],
      attrs: { for: _vm.forField }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$13 = [];
__vue_render__$13._withStripped = true;

  /* style */
  const __vue_inject_styles__$13 = function (inject) {
    if (!inject) return
    inject("data-v-33ad3d16_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-label {\n  display: block;\n  margin-bottom: 10px;\n  color: #a9c7df;\n  font-weight: 500;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none;\n}\n.dm-field-label--mini {\n    font-size: 12px;\n    line-height: 14px;\n}\n.dm-field-label--small {\n    font-size: 13px;\n    line-height: 16px;\n}\n.dm-field-label--default {\n    font-size: 14px;\n    line-height: 18px;\n}\n.dm-field-label--medium {\n    font-size: 15px;\n    line-height: 20px;\n}\n.dm-field-label--large {\n    font-size: 16px;\n    line-height: 22px;\n}\n.dm-field-label--for-field {\n    cursor: pointer;\n}\n.dm-field-label--uppercase {\n    text-transform: uppercase;\n}\n\n/*# sourceMappingURL=FieldLabel.vue.map */", map: {"version":3,"sources":["FieldLabel.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldLabel.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC4DhF;EACA,eAAA;EACA,oBAAA;EACA,eAAA;EACA,iBAAA;EACA,sFACA;EACA,kBAAA;CAsBA;AAfA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;AAHA;IACA,gBAAA;IACA,kBAAA;CACA;AAKA;IACA,gBAAA;CACA;AAEA;IACA,0BAAA;CACA;;AD5DA,0CAA0C","file":"FieldLabel.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-label {\n  display: block;\n  margin-bottom: 10px;\n  color: #a9c7df;\n  font-weight: 500;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  user-select: none; }\n  .dm-field-label--mini {\n    font-size: 12px;\n    line-height: 14px; }\n  .dm-field-label--small {\n    font-size: 13px;\n    line-height: 16px; }\n  .dm-field-label--default {\n    font-size: 14px;\n    line-height: 18px; }\n  .dm-field-label--medium {\n    font-size: 15px;\n    line-height: 20px; }\n  .dm-field-label--large {\n    font-size: 16px;\n    line-height: 22px; }\n  .dm-field-label--for-field {\n    cursor: pointer; }\n  .dm-field-label--uppercase {\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=FieldLabel.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$13 = undefined;
  /* module identifier */
  const __vue_module_identifier__$13 = undefined;
  /* functional template */
  const __vue_is_functional_template__$13 = false;
  /* component normalizer */
  function __vue_normalize__$13(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldLabel.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$13() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$13.styles || (__vue_create_injector__$13.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldLabel = __vue_normalize__$13(
    { render: __vue_render__$13, staticRenderFns: __vue_staticRenderFns__$13 },
    __vue_inject_styles__$13,
    __vue_script__$13,
    __vue_scope_id__$13,
    __vue_is_functional_template__$13,
    __vue_module_identifier__$13,
    __vue_create_injector__$13,
    undefined
  )

//
var script$14 = {
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
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
      this.$emit("change", event.target.checked, this.name, event);
    }
  }
};

/* script */
            const __vue_script__$14 = script$14;
            
/* template */
var __vue_render__$14 = function() {
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
var __vue_staticRenderFns__$14 = [];
__vue_render__$14._withStripped = true;

  /* style */
  const __vue_inject_styles__$14 = function (inject) {
    if (!inject) return
    inject("data-v-1d0280c6_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-checkbox {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-checkbox .dm-field-checkbox__container {\n    display: flex;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: 0;\n      border: none;\n      border-radius: 2px;\n      transition: all ease-in-out 200ms;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before, .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 200ms;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a9c7df;\n        border-radius: 3px;\n        background-color: #ffffff;\n        content: \"\";\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        border: 2px solid #ffffff;\n        border-top: 0;\n        border-left: 0;\n        transform: rotate(45deg);\n        content: \"\";\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:hover:after {\n        border-color: #323e4f;\n        border-right-width: 2px;\n        border-bottom-width: 2px;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:checked:after {\n        border-color: #ffffff;\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400;\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 12px;\n    height: 12px;\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 1px;\n      left: 4px;\n      width: 4px;\n      height: 8px;\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 12px;\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 14px;\n    height: 14px;\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 5px;\n      width: 4px;\n      height: 8px;\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 14px;\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 16px;\n    height: 16px;\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 6px;\n      width: 5px;\n      height: 10px;\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 16px;\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 18px;\n    height: 18px;\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 7px;\n      width: 5px;\n      height: 10px;\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 18px;\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 20px;\n    height: 20px;\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 8px;\n      width: 6px;\n      height: 12px;\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 20px;\n}\n.dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #e1112c;\n}\n.dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #e1112c;\n    background: #e1112c;\n}\n.dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #0194ef;\n}\n.dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #0194ef;\n    background: #0194ef;\n}\n.dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #1bb934;\n}\n.dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934;\n}\n.dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #ffc02a;\n}\n.dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #ffc02a;\n    background: #ffc02a;\n}\n.dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-checkbox--disabled {\n    opacity: 0.7;\n}\n.dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__field,\n    .dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__label {\n      cursor: not-allowed;\n}\n.dm-field-checkbox--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldCheckbox.vue.map */", map: {"version":3,"sources":["FieldCheckbox.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldCheckbox.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC8IhF;EACA,sBAAA;EACA,iBAAA;EACA,sFACA;CA+JA;AAnKA;IAOA,cAAA;CA6DA;AApEA;MAUA,mBAAA;MACA,kBAAA;MACA,iBAAA;MACA,WAAA;MACA,aAAA;MACA,mBAAA;MACA,kCAAA;MACA,yBAAA;MACA,gBAAA;CA0CA;AA5DA;QAsBA,mBAAA;QACA,sBAAA;QACA,uBAAA;QACA,kCAAA;CACA;AA1BA;QA6BA,OAAA;QACA,QAAA;QACA,YAAA;QACA,aAAA;QACA,0BAAA;QACA,mBAAA;QACA,0BAAA;QACA,YAAA;CACA;AArCA;QAwCA,0BAAA;QACA,cAAA;QACA,eAAA;QACA,yBAAA;QACA,YAAA;CACA;AA7CA;QAiDA,sBAAA;QACA,wBAAA;QACA,yBAAA;CACA;AApDA;QAyDA,sBAAA;CACA;AA1DA;MA+DA,QAAA;MACA,iBAAA;MACA,eAAA;MACA,iBAAA;CACA;AAQA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAQA,SAAA;MACA,UAAA;MACA,WAAA;MACA,YAAA;CAsBA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAaA,SAAA;MACA,UAAA;MACA,WAAA;MACA,YAAA;CAiBA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAkBA,SAAA;MACA,UAAA;MACA,WAAA;MACA,aAAA;CAYA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MAuBA,SAAA;MACA,UAAA;MACA,WAAA;MACA,aAAA;CAOA;AAjCA;IAqCA,kBAAA;CACA;AAtCA;IAGA,YAAA;IACA,aAAA;CA8BA;AAlCA;MA4BA,SAAA;MACA,UAAA;MACA,WAAA;MACA,aAAA;CAEA;AAjCA;IAqCA,kBAAA;CACA;AAQA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AApBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AApBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AApBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AAQA;IACA,aAAA;CAQA;AATA;;MAMA,oBAAA;CACA;AAIA;IACA,YAAA;CACA;;ADtKA,6CAA6C","file":"FieldCheckbox.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-checkbox {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-checkbox .dm-field-checkbox__container {\n    display: flex; }\n    .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: 0;\n      border: none;\n      border-radius: 2px;\n      transition: all ease-in-out 200ms;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before, .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 200ms; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a9c7df;\n        border-radius: 3px;\n        background-color: #ffffff;\n        content: \"\"; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after {\n        border: 2px solid #ffffff;\n        border-top: 0;\n        border-left: 0;\n        transform: rotate(45deg);\n        content: \"\"; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:hover:after {\n        border-color: #323e4f;\n        border-right-width: 2px;\n        border-bottom-width: 2px; }\n      .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:checked:after {\n        border-color: #ffffff; }\n    .dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400; }\n  .dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 12px;\n    height: 12px; }\n    .dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 1px;\n      left: 4px;\n      width: 4px;\n      height: 8px; }\n  .dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 12px; }\n  .dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 14px;\n    height: 14px; }\n    .dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 5px;\n      width: 4px;\n      height: 8px; }\n  .dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 14px; }\n  .dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 16px;\n    height: 16px; }\n    .dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 2px;\n      left: 6px;\n      width: 5px;\n      height: 10px; }\n  .dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 16px; }\n  .dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 18px;\n    height: 18px; }\n    .dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 7px;\n      width: 5px;\n      height: 10px; }\n  .dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 18px; }\n  .dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field {\n    width: 20px;\n    height: 20px; }\n    .dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field:after {\n      top: 3px;\n      left: 8px;\n      width: 6px;\n      height: 12px; }\n  .dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__label {\n    line-height: 20px; }\n  .dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #e1112c; }\n  .dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #e1112c;\n    background: #e1112c; }\n  .dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #0194ef; }\n  .dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #0194ef;\n    background: #0194ef; }\n  .dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #1bb934; }\n  .dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934; }\n  .dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:hover:before {\n    border-color: #ffc02a; }\n  .dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:checked:before {\n    border-color: #ffc02a;\n    background: #ffc02a; }\n  .dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-checkbox--disabled {\n    opacity: 0.7; }\n    .dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__field,\n    .dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__label {\n      cursor: not-allowed; }\n  .dm-field-checkbox--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldCheckbox.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$14 = undefined;
  /* module identifier */
  const __vue_module_identifier__$14 = undefined;
  /* functional template */
  const __vue_is_functional_template__$14 = false;
  /* component normalizer */
  function __vue_normalize__$14(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldCheckbox.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$14() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$14.styles || (__vue_create_injector__$14.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldCheckbox = __vue_normalize__$14(
    { render: __vue_render__$14, staticRenderFns: __vue_staticRenderFns__$14 },
    __vue_inject_styles__$14,
    __vue_script__$14,
    __vue_scope_id__$14,
    __vue_is_functional_template__$14,
    __vue_module_identifier__$14,
    __vue_create_injector__$14,
    undefined
  )

//
var script$15 = {
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
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
      this.$emit("change", this.name, event);
    },
    onLabelKeypress: function onLabelKeypress(event) {
      if (event.which === 32) {
        this.$el.querySelector("input[type='file']").click();
      }
    }
  }
};

/* script */
            const __vue_script__$15 = script$15;
            
/* template */
var __vue_render__$15 = function() {
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
          {
            staticClass: "dm-field-file__upload",
            attrs: { for: _vm.uuid, tabindex: "0" },
            on: {
              keypress: function($event) {
                $event.preventDefault();
                return _vm.onLabelKeypress($event)
              }
            }
          },
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
var __vue_staticRenderFns__$15 = [];
__vue_render__$15._withStripped = true;

  /* style */
  const __vue_inject_styles__$15 = function (inject) {
    if (!inject) return
    inject("data-v-72aa99f4_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-file {\n  display: inline-block;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-file .dm-field-file__container {\n    display: flex;\n    align-items: center;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information {\n      display: flex;\n      flex-direction: column;\n      margin-right: 20px;\n      text-align: left;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__label {\n        margin-bottom: 6px;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__description {\n        color: #8eacc5;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload {\n      position: relative;\n      box-sizing: border-box;\n      outline: 0;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 100%;\n      background-color: rgba(35, 45, 61, 0.9);\n      box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n      transition: all ease-in-out 200ms;\n      cursor: pointer;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload .dm-field-file__icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-top: -1px;\n        transform: translate(-50%, -50%);\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #0194ef;\n}\n.dm-field-file .dm-field-file__container .dm-field-file__field {\n      display: none;\n}\n.dm-field-file--mini .dm-field-file__information .dm-field-file__description {\n    font-size: 10px;\n}\n.dm-field-file--mini .dm-field-file__upload {\n    width: 40px;\n    height: 40px;\n}\n.dm-field-file--mini .dm-field-file__upload .dm-field-file__icon {\n      font-size: 18px !important;\n}\n.dm-field-file--small .dm-field-file__information .dm-field-file__description {\n    font-size: 11px;\n}\n.dm-field-file--small .dm-field-file__upload {\n    width: 45px;\n    height: 45px;\n}\n.dm-field-file--small .dm-field-file__upload .dm-field-file__icon {\n      font-size: 20px !important;\n}\n.dm-field-file--default .dm-field-file__information .dm-field-file__description {\n    font-size: 12px;\n}\n.dm-field-file--default .dm-field-file__upload {\n    width: 50px;\n    height: 50px;\n}\n.dm-field-file--default .dm-field-file__upload .dm-field-file__icon {\n      font-size: 22px !important;\n}\n.dm-field-file--medium .dm-field-file__information .dm-field-file__description {\n    font-size: 13px;\n}\n.dm-field-file--medium .dm-field-file__upload {\n    width: 55px;\n    height: 55px;\n}\n.dm-field-file--medium .dm-field-file__upload .dm-field-file__icon {\n      font-size: 24px !important;\n}\n.dm-field-file--large .dm-field-file__information .dm-field-file__description {\n    font-size: 14px;\n}\n.dm-field-file--large .dm-field-file__upload {\n    width: 60px;\n    height: 60px;\n}\n.dm-field-file--large .dm-field-file__upload .dm-field-file__icon {\n      font-size: 26px !important;\n}\n.dm-field-file--error .dm-field-file__upload {\n    border-color: #e1112c;\n}\n.dm-field-file--error .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-field-file--normal .dm-field-file__upload {\n    border-color: #ffffff;\n}\n.dm-field-file--normal .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-field-file--success .dm-field-file__upload {\n    border-color: #1bb934;\n}\n.dm-field-file--success .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-field-file--warning .dm-field-file__upload {\n    border-color: #ffc02a;\n}\n.dm-field-file--warning .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n      transition: box-shadow ease-in-out 0s;\n}\n.dm-field-file--disabled {\n    opacity: 0.7;\n}\n.dm-field-file--disabled .dm-field-file__container .dm-field-file__upload {\n      cursor: not-allowed;\n}\n.dm-field-file--disabled .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #e1112c;\n}\n.dm-field-file--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldFile.vue.map */", map: {"version":3,"sources":["FieldFile.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldFile.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACsJhF;EACA,sBAAA;EACA,sFACA;CAkHA;AArHA;IAMA,cAAA;IACA,oBAAA;CA6CA;AApDA;MAUA,cAAA;MACA,uBAAA;MACA,mBAAA;MACA,iBAAA;CASA;AAtBA;QAgBA,mBAAA;CACA;AAjBA;QAoBA,eAAA;CACA;AArBA;MAyBA,mBAAA;MACA,uBAAA;MACA,WAAA;MACA,kBAAA;MACA,oBAAA;MACA,oBAAA;MACA,wCAAA;MACA,8CAAA;MACA,kCAAA;MACA,gBAAA;CAaA;AA/CA;QAqCA,mBAAA;QACA,SAAA;QACA,UAAA;QACA,iBAAA;QACA,iCAAA;CACA;AA1CA;QA6CA,sBAAA;CACA;AA9CA;MAkDA,cAAA;CACA;AAQA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAdA;IAGA,gBAAA;CACA;AAJA;IAQA,YAAA;IACA,aAAA;CAMA;AAfA;MAaA,2BAAA;CACA;AAQA;IAGA,sBAAA;CAUA;AAbA;MASA,iDACA;MACA,sCAAA;CACA;AAZA;IAKA,sBAAA;CAQA;AAbA;MASA,iDACA;MACA,sCAAA;CACA;AAZA;IAGA,sBAAA;CAUA;AAbA;MASA,iDACA;MACA,sCAAA;CACA;AAZA;IAGA,sBAAA;CAUA;AAbA;MASA,iDACA;MACA,sCAAA;CACA;AAOA;IACA,aAAA;CAWA;AAZA;MAKA,oBAAA;CAKA;AAVA;QAQA,sBAAA;CACA;AAKA;IACA,YAAA;CACA;;ADrKA,yCAAyC","file":"FieldFile.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-file {\n  display: inline-block;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-file .dm-field-file__container {\n    display: flex;\n    align-items: center; }\n    .dm-field-file .dm-field-file__container .dm-field-file__information {\n      display: flex;\n      flex-direction: column;\n      margin-right: 20px;\n      text-align: left; }\n      .dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__label {\n        margin-bottom: 6px; }\n      .dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__description {\n        color: #8eacc5; }\n    .dm-field-file .dm-field-file__container .dm-field-file__upload {\n      position: relative;\n      box-sizing: border-box;\n      outline: 0;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 100%;\n      background-color: rgba(35, 45, 61, 0.9);\n      box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n      transition: all ease-in-out 200ms;\n      cursor: pointer; }\n      .dm-field-file .dm-field-file__container .dm-field-file__upload .dm-field-file__icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-top: -1px;\n        transform: translate(-50%, -50%); }\n      .dm-field-file .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #0194ef; }\n    .dm-field-file .dm-field-file__container .dm-field-file__field {\n      display: none; }\n  .dm-field-file--mini .dm-field-file__information .dm-field-file__description {\n    font-size: 10px; }\n  .dm-field-file--mini .dm-field-file__upload {\n    width: 40px;\n    height: 40px; }\n    .dm-field-file--mini .dm-field-file__upload .dm-field-file__icon {\n      font-size: 18px !important; }\n  .dm-field-file--small .dm-field-file__information .dm-field-file__description {\n    font-size: 11px; }\n  .dm-field-file--small .dm-field-file__upload {\n    width: 45px;\n    height: 45px; }\n    .dm-field-file--small .dm-field-file__upload .dm-field-file__icon {\n      font-size: 20px !important; }\n  .dm-field-file--default .dm-field-file__information .dm-field-file__description {\n    font-size: 12px; }\n  .dm-field-file--default .dm-field-file__upload {\n    width: 50px;\n    height: 50px; }\n    .dm-field-file--default .dm-field-file__upload .dm-field-file__icon {\n      font-size: 22px !important; }\n  .dm-field-file--medium .dm-field-file__information .dm-field-file__description {\n    font-size: 13px; }\n  .dm-field-file--medium .dm-field-file__upload {\n    width: 55px;\n    height: 55px; }\n    .dm-field-file--medium .dm-field-file__upload .dm-field-file__icon {\n      font-size: 24px !important; }\n  .dm-field-file--large .dm-field-file__information .dm-field-file__description {\n    font-size: 14px; }\n  .dm-field-file--large .dm-field-file__upload {\n    width: 60px;\n    height: 60px; }\n    .dm-field-file--large .dm-field-file__upload .dm-field-file__icon {\n      font-size: 26px !important; }\n  .dm-field-file--error .dm-field-file__upload {\n    border-color: #e1112c; }\n    .dm-field-file--error .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-field-file--normal .dm-field-file__upload {\n    border-color: #ffffff; }\n    .dm-field-file--normal .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-field-file--success .dm-field-file__upload {\n    border-color: #1bb934; }\n    .dm-field-file--success .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-field-file--warning .dm-field-file__upload {\n    border-color: #ffc02a; }\n    .dm-field-file--warning .dm-field-file__upload:focus {\n      box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n      transition: box-shadow ease-in-out 0s; }\n  .dm-field-file--disabled {\n    opacity: 0.7; }\n    .dm-field-file--disabled .dm-field-file__container .dm-field-file__upload {\n      cursor: not-allowed; }\n      .dm-field-file--disabled .dm-field-file__container .dm-field-file__upload:hover {\n        border-color: #e1112c; }\n  .dm-field-file--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldFile.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$15 = undefined;
  /* module identifier */
  const __vue_module_identifier__$15 = undefined;
  /* functional template */
  const __vue_is_functional_template__$15 = false;
  /* component normalizer */
  function __vue_normalize__$15(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldFile.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$15() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$15.styles || (__vue_create_injector__$15.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldFile = __vue_normalize__$15(
    { render: __vue_render__$15, staticRenderFns: __vue_staticRenderFns__$15 },
    __vue_inject_styles__$15,
    __vue_script__$15,
    __vue_scope_id__$15,
    __vue_is_functional_template__$15,
    __vue_module_identifier__$15,
    __vue_create_injector__$15,
    undefined
  )

//
var script$16 = {
  components: {
    BaseIcon: BaseIcon,
    FieldDescription: FieldDescription,
    FieldLabel: FieldLabel
  },
  props: {
    autocomplete: {
      type: Boolean,
      default: false
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
    max: {
      type: Number,
      default: null
    },
    maxlength: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
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
    readOnly: {
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
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
        return ["currency", "email", "date", "datetime-local", "month", "number", "password", "search", "tel", "text", "time", "url", "week"].indexOf(x) !== -1;
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
      currentValue: this.value === undefined || this.value === null ? "" : this.value,
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
    onContainerClick: function onContainerClick(event) {
      this.$el.querySelector("input").focus();
      this.$emit("click", this.getInputValue(), this.name, event);
    },
    onFieldBlur: function onFieldBlur(event) {
      this.focused = false;
      this.$emit("blur", this.getInputValue(), this.name, event);
    },
    onFieldChange: function onFieldChange(event) {
      this.$emit("change", this.getInputValue(), this.name, event);
    },
    onFieldFocus: function onFieldFocus(event) {
      this.focused = true;
      this.$emit("focus", this.getInputValue(), this.name, event);
    },
    onFieldInput: function onFieldInput(event) {
      var value = this.getInputValue();
      this.currentValue = value;
      this.$emit("input", value, this.name, event);
    }
  }
};

/* script */
            const __vue_script__$16 = script$16;
            
/* template */
var __vue_render__$16 = function() {
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
              autocomplete: _vm.autocomplete ? "on" : "false",
              disabled: _vm.disabled,
              id: _vm.uuid,
              max: _vm.max,
              maxlength: _vm.maxlength,
              min: _vm.min,
              name: _vm.name,
              placeholder: _vm.placeholder,
              readonly: _vm.readOnly,
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
var __vue_staticRenderFns__$16 = [];
__vue_render__$16._withStripped = true;

  /* style */
  const __vue_inject_styles__$16 = function (inject) {
    if (!inject) return
    inject("data-v-3fcbb353_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-input {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-input .dm-field-input__container {\n    display: flex;\n    align-items: center;\n    transition: all ease-in-out 200ms;\n}\n.dm-field-input .dm-field-input__container:hover {\n      cursor: text;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon {\n      flex: 0 0 auto;\n      pointer-events: none;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon--left {\n        margin-right: 5px;\n        margin-left: 9px;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon--right {\n        margin-right: 9px;\n        margin-left: 5px;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field {\n      flex: 1;\n      padding: 0 15px;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      color: #ffffff;\n      outline: 0;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field::placeholder {\n        color: #8eacc5;\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field:disabled {\n        cursor: not-allowed;\n}\n.dm-field-input--mini .dm-field-input__container {\n    height: 34px;\n    border-radius: 4px;\n}\n.dm-field-input--mini .dm-field-input__container .dm-field-input__icon {\n      font-size: 16px !important;\n}\n.dm-field-input--mini .dm-field-input__container .dm-field-input__field {\n      font-size: 12px;\n}\n.dm-field-input--small .dm-field-input__container {\n    height: 38px;\n    border-radius: 5px;\n}\n.dm-field-input--small .dm-field-input__container .dm-field-input__icon {\n      font-size: 17px !important;\n}\n.dm-field-input--small .dm-field-input__container .dm-field-input__field {\n      font-size: 13px;\n}\n.dm-field-input--default .dm-field-input__container {\n    height: 42px;\n    border-radius: 6px;\n}\n.dm-field-input--default .dm-field-input__container .dm-field-input__icon {\n      font-size: 18px !important;\n}\n.dm-field-input--default .dm-field-input__container .dm-field-input__field {\n      font-size: 14px;\n}\n.dm-field-input--medium .dm-field-input__container {\n    height: 46px;\n    border-radius: 7px;\n}\n.dm-field-input--medium .dm-field-input__container .dm-field-input__icon {\n      font-size: 19px !important;\n}\n.dm-field-input--medium .dm-field-input__container .dm-field-input__field {\n      font-size: 15px;\n}\n.dm-field-input--large .dm-field-input__container {\n    height: 50px;\n    border-radius: 8px;\n}\n.dm-field-input--large .dm-field-input__container .dm-field-input__icon {\n      font-size: 20px !important;\n}\n.dm-field-input--large .dm-field-input__container .dm-field-input__field {\n      font-size: 16px;\n}\n.dm-field-input--error .dm-field-input__container {\n    border-color: #e1112c;\n    color: #e1112c;\n}\n.dm-field-input--normal .dm-field-input__container {\n    border-color: #323e4f;\n    color: #ffffff;\n}\n.dm-field-input--success .dm-field-input__container {\n    border-color: #1bb934;\n    color: #1bb934;\n}\n.dm-field-input--warning .dm-field-input__container {\n    border-color: #ffc02a;\n    color: #ffc02a;\n}\n.dm-field-input--borders .dm-field-input__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #283243;\n}\n.dm-field-input--disabled {\n    opacity: 0.7;\n}\n.dm-field-input--disabled .dm-field-input__label,\n    .dm-field-input--disabled .dm-field-input__container {\n      cursor: not-allowed;\n}\n.dm-field-input--focused .dm-field-input__container {\n    border-color: #0194ef;\n    color: #0194ef;\n}\n.dm-field-input--full-width {\n    width: 100%;\n}\n.dm-field-input--rounded .dm-field-input__container {\n    border-radius: 40px;\n}\n.dm-field-input--with-icon .dm-field-input__container .dm-field-input__field {\n    padding: 0;\n}\n\n/*# sourceMappingURL=FieldInput.vue.map */", map: {"version":3,"sources":["FieldInput.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldInput.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACsRhF;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,sFACA;CAgIA;AArIA;IAQA,cAAA;IACA,oBAAA;IACA,kCAAA;CAsCA;AAhDA;MAaA,aAAA;CACA;AAdA;MAiBA,eAAA;MACA,qBAAA;CAWA;AA7BA;QAqBA,kBAAA;QACA,iBAAA;CACA;AAvBA;QA0BA,kBAAA;QACA,iBAAA;CACA;AA5BA;MAgCA,QAAA;MACA,gBAAA;MACA,aAAA;MACA,aAAA;MACA,8BAAA;MACA,eAAA;MACA,WAAA;CASA;AA/CA;QAyCA,eAAA;CACA;AA1CA;QA6CA,oBAAA;CACA;AASA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAQA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAMA,sBAAA;IACA,eAAA;CAEA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AAMA;IAEA,uBAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAGA;IACA,aAAA;CAMA;AAPA;;MAKA,oBAAA;CACA;AAGA;IAEA,sBAAA;IACA,eAAA;CACA;AAGA;IACA,YAAA;CACA;AAEA;IAEA,oBAAA;CACA;AAGA;IAGA,WAAA;CACA;;ADnTA,0CAA0C","file":"FieldInput.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-input {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-input .dm-field-input__container {\n    display: flex;\n    align-items: center;\n    transition: all ease-in-out 200ms; }\n    .dm-field-input .dm-field-input__container:hover {\n      cursor: text; }\n    .dm-field-input .dm-field-input__container .dm-field-input__icon {\n      flex: 0 0 auto;\n      pointer-events: none; }\n      .dm-field-input .dm-field-input__container .dm-field-input__icon--left {\n        margin-right: 5px;\n        margin-left: 9px; }\n      .dm-field-input .dm-field-input__container .dm-field-input__icon--right {\n        margin-right: 9px;\n        margin-left: 5px; }\n    .dm-field-input .dm-field-input__container .dm-field-input__field {\n      flex: 1;\n      padding: 0 15px;\n      height: 100%;\n      border: none;\n      background-color: transparent;\n      color: #ffffff;\n      outline: 0; }\n      .dm-field-input .dm-field-input__container .dm-field-input__field::placeholder {\n        color: #8eacc5; }\n      .dm-field-input .dm-field-input__container .dm-field-input__field:disabled {\n        cursor: not-allowed; }\n  .dm-field-input--mini .dm-field-input__container {\n    height: 34px;\n    border-radius: 4px; }\n    .dm-field-input--mini .dm-field-input__container .dm-field-input__icon {\n      font-size: 16px !important; }\n    .dm-field-input--mini .dm-field-input__container .dm-field-input__field {\n      font-size: 12px; }\n  .dm-field-input--small .dm-field-input__container {\n    height: 38px;\n    border-radius: 5px; }\n    .dm-field-input--small .dm-field-input__container .dm-field-input__icon {\n      font-size: 17px !important; }\n    .dm-field-input--small .dm-field-input__container .dm-field-input__field {\n      font-size: 13px; }\n  .dm-field-input--default .dm-field-input__container {\n    height: 42px;\n    border-radius: 6px; }\n    .dm-field-input--default .dm-field-input__container .dm-field-input__icon {\n      font-size: 18px !important; }\n    .dm-field-input--default .dm-field-input__container .dm-field-input__field {\n      font-size: 14px; }\n  .dm-field-input--medium .dm-field-input__container {\n    height: 46px;\n    border-radius: 7px; }\n    .dm-field-input--medium .dm-field-input__container .dm-field-input__icon {\n      font-size: 19px !important; }\n    .dm-field-input--medium .dm-field-input__container .dm-field-input__field {\n      font-size: 15px; }\n  .dm-field-input--large .dm-field-input__container {\n    height: 50px;\n    border-radius: 8px; }\n    .dm-field-input--large .dm-field-input__container .dm-field-input__icon {\n      font-size: 20px !important; }\n    .dm-field-input--large .dm-field-input__container .dm-field-input__field {\n      font-size: 16px; }\n  .dm-field-input--error .dm-field-input__container {\n    border-color: #e1112c;\n    color: #e1112c; }\n  .dm-field-input--normal .dm-field-input__container {\n    border-color: #323e4f;\n    color: #ffffff; }\n  .dm-field-input--success .dm-field-input__container {\n    border-color: #1bb934;\n    color: #1bb934; }\n  .dm-field-input--warning .dm-field-input__container {\n    border-color: #ffc02a;\n    color: #ffc02a; }\n  .dm-field-input--borders .dm-field-input__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #283243; }\n  .dm-field-input--disabled {\n    opacity: 0.7; }\n    .dm-field-input--disabled .dm-field-input__label,\n    .dm-field-input--disabled .dm-field-input__container {\n      cursor: not-allowed; }\n  .dm-field-input--focused .dm-field-input__container {\n    border-color: #0194ef;\n    color: #0194ef; }\n  .dm-field-input--full-width {\n    width: 100%; }\n  .dm-field-input--rounded .dm-field-input__container {\n    border-radius: 40px; }\n  .dm-field-input--with-icon .dm-field-input__container .dm-field-input__field {\n    padding: 0; }\n\n/*# sourceMappingURL=FieldInput.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$16 = undefined;
  /* module identifier */
  const __vue_module_identifier__$16 = undefined;
  /* functional template */
  const __vue_is_functional_template__$16 = false;
  /* component normalizer */
  function __vue_normalize__$16(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldInput.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$16() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$16.styles || (__vue_create_injector__$16.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldInput = __vue_normalize__$16(
    { render: __vue_render__$16, staticRenderFns: __vue_staticRenderFns__$16 },
    __vue_inject_styles__$16,
    __vue_script__$16,
    __vue_scope_id__$16,
    __vue_is_functional_template__$16,
    __vue_module_identifier__$16,
    __vue_create_injector__$16,
    undefined
  )

//
var script$17 = {
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
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
      this.$emit("change", event.target.checked, this.name, event);
    }
  }
};

/* script */
            const __vue_script__$17 = script$17;
            
/* template */
var __vue_render__$17 = function() {
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
var __vue_staticRenderFns__$17 = [];
__vue_render__$17._withStripped = true;

  /* style */
  const __vue_inject_styles__$17 = function (inject) {
    if (!inject) return
    inject("data-v-348ccdc4_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-radio {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-radio .dm-field-radio__container {\n    display: flex;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: 0;\n      border: none;\n      border-radius: 100%;\n      transition: all ease-in-out 200ms;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:before, .dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 200ms;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a9c7df;\n        border-radius: 100%;\n        background-color: #ffffff;\n        content: \"\";\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        background-color: #ffffff;\n        transform: translate(-50%, -50%);\n        content: \"\";\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:hover:after {\n        background-color: #323e4f;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:checked:after {\n        background-color: #ffffff;\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400;\n}\n.dm-field-radio--mini .dm-field-radio__container .dm-field-radio__field {\n    width: 12px;\n    height: 12px;\n}\n.dm-field-radio--mini .dm-field-radio__container .dm-field-radio__label {\n    line-height: 12px;\n}\n.dm-field-radio--small .dm-field-radio__container .dm-field-radio__field {\n    width: 14px;\n    height: 14px;\n}\n.dm-field-radio--small .dm-field-radio__container .dm-field-radio__label {\n    line-height: 14px;\n}\n.dm-field-radio--default .dm-field-radio__container .dm-field-radio__field {\n    width: 16px;\n    height: 16px;\n}\n.dm-field-radio--default .dm-field-radio__container .dm-field-radio__label {\n    line-height: 16px;\n}\n.dm-field-radio--medium .dm-field-radio__container .dm-field-radio__field {\n    width: 18px;\n    height: 18px;\n}\n.dm-field-radio--medium .dm-field-radio__container .dm-field-radio__label {\n    line-height: 18px;\n}\n.dm-field-radio--large .dm-field-radio__container .dm-field-radio__field {\n    width: 20px;\n    height: 20px;\n}\n.dm-field-radio--large .dm-field-radio__container .dm-field-radio__label {\n    line-height: 20px;\n}\n.dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #e1112c;\n}\n.dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #e1112c;\n    background: #e1112c;\n}\n.dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #0194ef;\n}\n.dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #0194ef;\n    background: #0194ef;\n}\n.dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #1bb934;\n}\n.dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934;\n}\n.dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #ffc02a;\n}\n.dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #ffc02a;\n    background: #ffc02a;\n}\n.dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-radio--disabled {\n    opacity: 0.7;\n}\n.dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__field,\n    .dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__label {\n      cursor: not-allowed;\n}\n.dm-field-radio--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldRadio.vue.map */", map: {"version":3,"sources":["FieldRadio.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldRadio.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC8IhF;EACA,sBAAA;EACA,iBAAA;EACA,sFACA;CAmIA;AAvIA;IAOA,cAAA;CA8DA;AArEA;MAUA,mBAAA;MACA,kBAAA;MACA,iBAAA;MACA,WAAA;MACA,aAAA;MACA,oBAAA;MACA,kCAAA;MACA,yBAAA;MACA,gBAAA;CA2CA;AA7DA;QAsBA,mBAAA;QACA,sBAAA;QACA,uBAAA;QACA,kCAAA;CACA;AA1BA;QA6BA,OAAA;QACA,QAAA;QACA,YAAA;QACA,aAAA;QACA,0BAAA;QACA,oBAAA;QACA,0BAAA;QACA,YAAA;CACA;AArCA;QAwCA,SAAA;QACA,UAAA;QACA,WAAA;QACA,YAAA;QACA,oBAAA;QACA,0BAAA;QACA,iCAAA;QACA,YAAA;CACA;AAhDA;QAoDA,0BAAA;CACA;AArDA;QA0DA,0BAAA;CACA;AA3DA;MAgEA,QAAA;MACA,iBAAA;MACA,eAAA;MACA,iBAAA;CACA;AAQA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AATA;IAGA,YAAA;IACA,aAAA;CACA;AALA;IAQA,kBAAA;CACA;AAQA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AApBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AApBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AApBA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,oBAAA;CACA;AAbA;IAiBA,iDACA;IACA,sCAAA;CACA;AAQA;IACA,aAAA;CAQA;AATA;;MAMA,oBAAA;CACA;AAIA;IACA,YAAA;CACA;;ADlKA,0CAA0C","file":"FieldRadio.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-radio {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-radio .dm-field-radio__container {\n    display: flex; }\n    .dm-field-radio .dm-field-radio__container .dm-field-radio__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: 0;\n      border: none;\n      border-radius: 100%;\n      transition: all ease-in-out 200ms;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:before, .dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 200ms; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #a9c7df;\n        border-radius: 100%;\n        background-color: #ffffff;\n        content: \"\"; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:after {\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        background-color: #ffffff;\n        transform: translate(-50%, -50%);\n        content: \"\"; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:hover:after {\n        background-color: #323e4f; }\n      .dm-field-radio .dm-field-radio__container .dm-field-radio__field:checked:after {\n        background-color: #ffffff; }\n    .dm-field-radio .dm-field-radio__container .dm-field-radio__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400; }\n  .dm-field-radio--mini .dm-field-radio__container .dm-field-radio__field {\n    width: 12px;\n    height: 12px; }\n  .dm-field-radio--mini .dm-field-radio__container .dm-field-radio__label {\n    line-height: 12px; }\n  .dm-field-radio--small .dm-field-radio__container .dm-field-radio__field {\n    width: 14px;\n    height: 14px; }\n  .dm-field-radio--small .dm-field-radio__container .dm-field-radio__label {\n    line-height: 14px; }\n  .dm-field-radio--default .dm-field-radio__container .dm-field-radio__field {\n    width: 16px;\n    height: 16px; }\n  .dm-field-radio--default .dm-field-radio__container .dm-field-radio__label {\n    line-height: 16px; }\n  .dm-field-radio--medium .dm-field-radio__container .dm-field-radio__field {\n    width: 18px;\n    height: 18px; }\n  .dm-field-radio--medium .dm-field-radio__container .dm-field-radio__label {\n    line-height: 18px; }\n  .dm-field-radio--large .dm-field-radio__container .dm-field-radio__field {\n    width: 20px;\n    height: 20px; }\n  .dm-field-radio--large .dm-field-radio__container .dm-field-radio__label {\n    line-height: 20px; }\n  .dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #e1112c; }\n  .dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #e1112c;\n    background: #e1112c; }\n  .dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #0194ef; }\n  .dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #0194ef;\n    background: #0194ef; }\n  .dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #1bb934; }\n  .dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #1bb934;\n    background: #1bb934; }\n  .dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:hover:before {\n    border-color: #ffc02a; }\n  .dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:checked:before {\n    border-color: #ffc02a;\n    background: #ffc02a; }\n  .dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-radio--disabled {\n    opacity: 0.7; }\n    .dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__field,\n    .dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__label {\n      cursor: not-allowed; }\n  .dm-field-radio--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldRadio.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$17 = undefined;
  /* module identifier */
  const __vue_module_identifier__$17 = undefined;
  /* functional template */
  const __vue_is_functional_template__$17 = false;
  /* component normalizer */
  function __vue_normalize__$17(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldRadio.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$17() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$17.styles || (__vue_create_injector__$17.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldRadio = __vue_normalize__$17(
    { render: __vue_render__$17, staticRenderFns: __vue_staticRenderFns__$17 },
    __vue_inject_styles__$17,
    __vue_script__$17,
    __vue_scope_id__$17,
    __vue_is_functional_template__$17,
    __vue_module_identifier__$17,
    __vue_create_injector__$17,
    undefined
  )

//
var script$18 = {
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
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
    onFieldBlur: function onFieldBlur(event) {
      this.focused = false;
      this.rightIcon = "arrow_drop_down";
      this.$emit("blur", this.getSelectedValue(), this.name, event);
    },
    onFieldChange: function onFieldChange(event) {
      this.rightIcon = "arrow_drop_down";
      this.$emit("change", this.getSelectedValue(), this.name, event);
    },
    onFieldClick: function onFieldClick(event) {
      this.rightIcon = "arrow_drop_up";
      this.$emit("click", this.getSelectedValue(), this.name, event);
    },
    onFieldFocus: function onFieldFocus(event) {
      this.focused = true;
      this.rightIcon = "arrow_drop_up";
      this.$emit("focus", this.getSelectedValue(), this.name, event);
    }
  }
};

/* script */
            const __vue_script__$18 = script$18;
            
/* template */
var __vue_render__$18 = function() {
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
              return _c(
                "option",
                {
                  staticClass: "dm-field-select__option",
                  domProps: { value: option.value }
                },
                [_vm._v(_vm._s(option.label))]
              )
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
var __vue_staticRenderFns__$18 = [];
__vue_render__$18._withStripped = true;

  /* style */
  const __vue_inject_styles__$18 = function (inject) {
    if (!inject) return
    inject("data-v-76f99ded_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-select {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-select .dm-field-select__container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    transition: all ease-in-out 200ms;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__option {\n      color: #000000;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon {\n      position: absolute;\n      pointer-events: none;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon--left {\n        left: 9px;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon--right {\n        right: 9px;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field {\n      flex: 1;\n      padding: 0 35px 0 15px;\n      height: 100%;\n      outline: 0;\n      border: none;\n      background-color: transparent;\n      background-image: none;\n      box-shadow: none;\n      color: #ffffff;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field:disabled {\n        cursor: not-allowed;\n}\n.dm-field-select--mini .dm-field-select__container {\n    height: 34px;\n    border-radius: 4px;\n}\n.dm-field-select--mini .dm-field-select__container .dm-field-select__icon {\n      font-size: 16px !important;\n}\n.dm-field-select--mini .dm-field-select__container .dm-field-select__field {\n      font-size: 12px;\n}\n.dm-field-select--small .dm-field-select__container {\n    height: 38px;\n    border-radius: 5px;\n}\n.dm-field-select--small .dm-field-select__container .dm-field-select__icon {\n      font-size: 17px !important;\n}\n.dm-field-select--small .dm-field-select__container .dm-field-select__field {\n      font-size: 13px;\n}\n.dm-field-select--default .dm-field-select__container {\n    height: 42px;\n    border-radius: 6px;\n}\n.dm-field-select--default .dm-field-select__container .dm-field-select__icon {\n      font-size: 18px !important;\n}\n.dm-field-select--default .dm-field-select__container .dm-field-select__field {\n      font-size: 14px;\n}\n.dm-field-select--medium .dm-field-select__container {\n    height: 46px;\n    border-radius: 7px;\n}\n.dm-field-select--medium .dm-field-select__container .dm-field-select__icon {\n      font-size: 19px !important;\n}\n.dm-field-select--medium .dm-field-select__container .dm-field-select__field {\n      font-size: 15px;\n}\n.dm-field-select--large .dm-field-select__container {\n    height: 50px;\n    border-radius: 8px;\n}\n.dm-field-select--large .dm-field-select__container .dm-field-select__icon {\n      font-size: 20px !important;\n}\n.dm-field-select--large .dm-field-select__container .dm-field-select__field {\n      font-size: 16px;\n}\n.dm-field-select--error .dm-field-select__container {\n    border-color: #e1112c;\n    color: #e1112c;\n}\n.dm-field-select--normal .dm-field-select__container {\n    border-color: #323e4f;\n    color: #ffffff;\n}\n.dm-field-select--success .dm-field-select__container {\n    border-color: #1bb934;\n    color: #1bb934;\n}\n.dm-field-select--warning .dm-field-select__container {\n    border-color: #ffc02a;\n    color: #ffc02a;\n}\n.dm-field-select--borders .dm-field-select__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #283243;\n}\n.dm-field-select--disabled {\n    opacity: 0.7;\n}\n.dm-field-select--disabled .dm-field-select__label,\n    .dm-field-select--disabled .dm-field-select__container {\n      cursor: not-allowed;\n}\n.dm-field-select--focused .dm-field-select__container {\n    border-color: #0194ef;\n    color: #0194ef;\n}\n.dm-field-select--full-width {\n    width: 100%;\n}\n.dm-field-select--with-left-icon .dm-field-select__container .dm-field-select__field {\n    padding-left: 35px;\n}\n\n/*# sourceMappingURL=FieldSelect.vue.map */", map: {"version":3,"sources":["FieldSelect.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldSelect.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC8MhF;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,sFACA;CA0HA;AA/HA;IAQA,mBAAA;IACA,cAAA;IACA,iBAAA;IACA,oBAAA;IACA,kCAAA;CAoCA;AAhDA;MAeA,eAAA;CACA;AAhBA;MAmBA,mBAAA;MACA,qBAAA;CASA;AA7BA;QAuBA,UAAA;CACA;AAxBA;QA2BA,WAAA;CACA;AA5BA;MAgCA,QAAA;MACA,uBAAA;MACA,aAAA;MACA,WAAA;MACA,aAAA;MACA,8BAAA;MACA,uBAAA;MACA,iBAAA;MACA,eAAA;MACA,yBAAA;MACA,gBAAA;CAKA;AA/CA;QA6CA,oBAAA;CACA;AASA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAZA;IAEA,aAAA;IACA,mBAAA;CAUA;AAbA;MAOA,2BAAA;CACA;AARA;MAWA,gBAAA;CACA;AAQA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAMA,sBAAA;IACA,eAAA;CAEA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AAMA;IAEA,uBAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAGA;IACA,aAAA;CAMA;AAPA;;MAKA,oBAAA;CACA;AAGA;IAEA,sBAAA;IACA,eAAA;CACA;AAGA;IACA,YAAA;CACA;AAEA;IAGA,mBAAA;CACA;;ADrOA,2CAA2C","file":"FieldSelect.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-select {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-select .dm-field-select__container {\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    transition: all ease-in-out 200ms; }\n    .dm-field-select .dm-field-select__container .dm-field-select__option {\n      color: #000000; }\n    .dm-field-select .dm-field-select__container .dm-field-select__icon {\n      position: absolute;\n      pointer-events: none; }\n      .dm-field-select .dm-field-select__container .dm-field-select__icon--left {\n        left: 9px; }\n      .dm-field-select .dm-field-select__container .dm-field-select__icon--right {\n        right: 9px; }\n    .dm-field-select .dm-field-select__container .dm-field-select__field {\n      flex: 1;\n      padding: 0 35px 0 15px;\n      height: 100%;\n      outline: 0;\n      border: none;\n      background-color: transparent;\n      background-image: none;\n      box-shadow: none;\n      color: #ffffff;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-select .dm-field-select__container .dm-field-select__field:disabled {\n        cursor: not-allowed; }\n  .dm-field-select--mini .dm-field-select__container {\n    height: 34px;\n    border-radius: 4px; }\n    .dm-field-select--mini .dm-field-select__container .dm-field-select__icon {\n      font-size: 16px !important; }\n    .dm-field-select--mini .dm-field-select__container .dm-field-select__field {\n      font-size: 12px; }\n  .dm-field-select--small .dm-field-select__container {\n    height: 38px;\n    border-radius: 5px; }\n    .dm-field-select--small .dm-field-select__container .dm-field-select__icon {\n      font-size: 17px !important; }\n    .dm-field-select--small .dm-field-select__container .dm-field-select__field {\n      font-size: 13px; }\n  .dm-field-select--default .dm-field-select__container {\n    height: 42px;\n    border-radius: 6px; }\n    .dm-field-select--default .dm-field-select__container .dm-field-select__icon {\n      font-size: 18px !important; }\n    .dm-field-select--default .dm-field-select__container .dm-field-select__field {\n      font-size: 14px; }\n  .dm-field-select--medium .dm-field-select__container {\n    height: 46px;\n    border-radius: 7px; }\n    .dm-field-select--medium .dm-field-select__container .dm-field-select__icon {\n      font-size: 19px !important; }\n    .dm-field-select--medium .dm-field-select__container .dm-field-select__field {\n      font-size: 15px; }\n  .dm-field-select--large .dm-field-select__container {\n    height: 50px;\n    border-radius: 8px; }\n    .dm-field-select--large .dm-field-select__container .dm-field-select__icon {\n      font-size: 20px !important; }\n    .dm-field-select--large .dm-field-select__container .dm-field-select__field {\n      font-size: 16px; }\n  .dm-field-select--error .dm-field-select__container {\n    border-color: #e1112c;\n    color: #e1112c; }\n  .dm-field-select--normal .dm-field-select__container {\n    border-color: #323e4f;\n    color: #ffffff; }\n  .dm-field-select--success .dm-field-select__container {\n    border-color: #1bb934;\n    color: #1bb934; }\n  .dm-field-select--warning .dm-field-select__container {\n    border-color: #ffc02a;\n    color: #ffc02a; }\n  .dm-field-select--borders .dm-field-select__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #283243; }\n  .dm-field-select--disabled {\n    opacity: 0.7; }\n    .dm-field-select--disabled .dm-field-select__label,\n    .dm-field-select--disabled .dm-field-select__container {\n      cursor: not-allowed; }\n  .dm-field-select--focused .dm-field-select__container {\n    border-color: #0194ef;\n    color: #0194ef; }\n  .dm-field-select--full-width {\n    width: 100%; }\n  .dm-field-select--with-left-icon .dm-field-select__container .dm-field-select__field {\n    padding-left: 35px; }\n\n/*# sourceMappingURL=FieldSelect.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$18 = undefined;
  /* module identifier */
  const __vue_module_identifier__$18 = undefined;
  /* functional template */
  const __vue_is_functional_template__$18 = false;
  /* component normalizer */
  function __vue_normalize__$18(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldSelect.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$18() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$18.styles || (__vue_create_injector__$18.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldSelect = __vue_normalize__$18(
    { render: __vue_render__$18, staticRenderFns: __vue_staticRenderFns__$18 },
    __vue_inject_styles__$18,
    __vue_script__$18,
    __vue_scope_id__$18,
    __vue_is_functional_template__$18,
    __vue_module_identifier__$18,
    __vue_create_injector__$18,
    undefined
  )

//
var script$19 = {
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
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
    var _this = this;

    // Set initial active tabs
    this.tabs.map(function (tab) {
      if (tab.active) {
        _this.activeTabs.push(tab.id);
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
    onTabClick: function onTabClick(tabId, event) {
      // When multiple values are not allowed and tab is not already active
      if (!this.multiple && !this.activeTabs.includes(tabId)) {
        this.activeTabs = [tabId];
        this.$emit("change", tabId, "added", this.activeTabs, this.name, event);
      } // When multiple values are allowed


      if (this.multiple) {
        // Remove the tab when already active
        if (this.activeTabs.includes(tabId)) {
          this.activeTabs.splice(this.activeTabs.indexOf(tabId), 1);
          this.$emit("change", tabId, "removed", this.activeTabs, this.name, event);
        } else {
          // Push the tab when not already active
          this.activeTabs.push(tabId);
          this.$emit("change", tabId, "added", this.activeTabs, this.name, event);
        }
      }

      this.$emit("click", tabId, this.activeTabs, this.name, event);
    },
    onTabKeypress: function onTabKeypress(event) {
      if (event.which === 32) {
        event.target.click();
      }
    }
  }
};

/* script */
            const __vue_script__$19 = script$19;
            
/* template */
var __vue_render__$19 = function() {
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
                  "dm-field-tabs__tab--active-next": _vm.checkActiveBrother(
                    "asc",
                    i + 1
                  ),
                  "dm-field-tabs__tab--active-previous": _vm.checkActiveBrother(
                    "desc",
                    i - 1
                  )
                }
              ],
              attrs: { tabindex: "0" },
              on: {
                click: function($event) {
                  _vm.onTabClick(tab.id, $event);
                },
                keypress: function($event) {
                  $event.preventDefault();
                  return _vm.onTabKeypress($event)
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
var __vue_staticRenderFns__$19 = [];
__vue_render__$19._withStripped = true;

  /* style */
  const __vue_inject_styles__$19 = function (inject) {
    if (!inject) return
    inject("data-v-e097dbe2_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-tabs .dm-field-tabs__container {\n  display: inline-block;\n  box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  cursor: pointer;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab {\n    display: inline-block;\n    outline: 0;\n    border-width: 1px;\n    border-style: solid;\n    border-color: transparent;\n    border-top-color: #323e4f;\n    border-bottom-color: #323e4f;\n    background: #232d3d;\n    color: #8eacc5;\n    transition-timing-function: ease-in-out;\n    transition-duration: 200ms;\n    transition-property: color, background-color;\n    user-select: none;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:first-of-type {\n      border-left-color: #323e4f;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:last-of-type {\n      border-right-color: #323e4f;\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:hover {\n      color: #ffffff;\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab--active {\n      color: #ffffff;\n}\n.dm-field-tabs--mini .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.dm-field-tabs--small .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 7px 14px;\n  font-size: 13px;\n}\n.dm-field-tabs--default .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n.dm-field-tabs--medium .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 9px 18px;\n  font-size: 15px;\n}\n.dm-field-tabs--large .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 10px 20px;\n  font-size: 16px;\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n  transition: box-shadow ease-in-out 0s;\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #e1112c !important;\n  background-color: rgba(225, 17, 44, 0.4);\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(225, 17, 44, 0.25) !important;\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(225, 17, 44, 0.25) !important;\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n  transition: box-shadow ease-in-out 0s;\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #0194ef !important;\n  background-color: rgba(1, 148, 239, 0.4);\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(1, 148, 239, 0.25) !important;\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(1, 148, 239, 0.25) !important;\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n  transition: box-shadow ease-in-out 0s;\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #1bb934 !important;\n  background-color: rgba(27, 185, 52, 0.4);\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(27, 185, 52, 0.25) !important;\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(27, 185, 52, 0.25) !important;\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n  transition: box-shadow ease-in-out 0s;\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #ffc02a !important;\n  background-color: rgba(255, 192, 42, 0.4);\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(255, 192, 42, 0.25) !important;\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(255, 192, 42, 0.25) !important;\n}\n.dm-field-tabs--disabled {\n  opacity: 0.7;\n}\n.dm-field-tabs--disabled .dm-field-tabs__label,\n  .dm-field-tabs--disabled .dm-field-tabs__container {\n    cursor: not-allowed;\n}\n.dm-field-tabs--disabled .dm-field-tabs__label .dm-field-tabs__tab,\n    .dm-field-tabs--disabled .dm-field-tabs__container .dm-field-tabs__tab {\n      pointer-events: none;\n}\n\n/*# sourceMappingURL=FieldTabs.vue.map */", map: {"version":3,"sources":["FieldTabs.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTabs.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC2LhF;EAEA,sBAAA;EACA,8CAAA;EACA,sFACA;EACA,gBAAA;CAqCA;AA3CA;IASA,sBAAA;IACA,WAAA;IACA,kBAAA;IACA,oBAAA;IACA,0BAAA;IACA,0BAAA;IACA,6BAAA;IACA,oBAAA;IACA,eAAA;IACA,wCAAA;IACA,2BAAA;IACA,6CAAA;IACA,kBAAA;CAqBA;AA1CA;MAwBA,2BAAA;MACA,4BAAA;MACA,+BAAA;CACA;AA3BA;MA8BA,4BAAA;MACA,6BAAA;MACA,gCAAA;CACA;AAjCA;MAoCA,eAAA;CACA;AArCA;MAwCA,eAAA;CACA;AASA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,kBAAA;EACA,gBAAA;CACA;AALA;EAGA,mBAAA;EACA,gBAAA;CACA;AAQA;EAIA,mBAAA;EACA,WAAA;EACA,iDACA;EACA,sCAAA;CACA;AATA;EAaA,iCAAA;EACA,yCAAA;CACA;AAfA;EAmBA,sDAGA;CACA;AAvBA;EA2BA,uDAGA;CACA;AA/BA;EAIA,mBAAA;EACA,WAAA;EACA,iDACA;EACA,sCAAA;CACA;AATA;EAaA,iCAAA;EACA,yCAAA;CACA;AAfA;EAmBA,sDAGA;CACA;AAvBA;EA2BA,uDAGA;CACA;AA/BA;EAIA,mBAAA;EACA,WAAA;EACA,iDACA;EACA,sCAAA;CACA;AATA;EAaA,iCAAA;EACA,yCAAA;CACA;AAfA;EAmBA,sDAGA;CACA;AAvBA;EA2BA,uDAGA;CACA;AA/BA;EAIA,mBAAA;EACA,WAAA;EACA,iDACA;EACA,sCAAA;CACA;AATA;EAaA,iCAAA;EACA,0CAAA;CACA;AAfA;EAmBA,uDAGA;CACA;AAvBA;EA2BA,wDAGA;CACA;AAQA;EACA,aAAA;CAUA;AAXA;;IAKA,oBAAA;CAKA;AAVA;;MAQA,qBAAA;CACA;;AD5KA,yCAAyC","file":"FieldTabs.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-tabs .dm-field-tabs__container {\n  display: inline-block;\n  box-shadow: 0 1px 5px 0 rgba(24, 25, 26, 0.6);\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n  cursor: pointer; }\n  .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab {\n    display: inline-block;\n    outline: 0;\n    border-width: 1px;\n    border-style: solid;\n    border-color: transparent;\n    border-top-color: #323e4f;\n    border-bottom-color: #323e4f;\n    background: #232d3d;\n    color: #8eacc5;\n    transition-timing-function: ease-in-out;\n    transition-duration: 200ms;\n    transition-property: color, background-color;\n    user-select: none; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:first-of-type {\n      border-left-color: #323e4f;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:last-of-type {\n      border-right-color: #323e4f;\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:hover {\n      color: #ffffff; }\n    .dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab--active {\n      color: #ffffff; }\n\n.dm-field-tabs--mini .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 6px 12px;\n  font-size: 12px; }\n\n.dm-field-tabs--small .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 7px 14px;\n  font-size: 13px; }\n\n.dm-field-tabs--default .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 8px 16px;\n  font-size: 14px; }\n\n.dm-field-tabs--medium .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 9px 18px;\n  font-size: 15px; }\n\n.dm-field-tabs--large .dm-field-tabs__container .dm-field-tabs__tab {\n  padding: 10px 20px;\n  font-size: 16px; }\n\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n  transition: box-shadow ease-in-out 0s; }\n\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #e1112c !important;\n  background-color: rgba(225, 17, 44, 0.4); }\n\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(225, 17, 44, 0.25) !important; }\n\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(225, 17, 44, 0.25) !important; }\n\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n  transition: box-shadow ease-in-out 0s; }\n\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #0194ef !important;\n  background-color: rgba(1, 148, 239, 0.4); }\n\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(1, 148, 239, 0.25) !important; }\n\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(1, 148, 239, 0.25) !important; }\n\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n  transition: box-shadow ease-in-out 0s; }\n\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #1bb934 !important;\n  background-color: rgba(27, 185, 52, 0.4); }\n\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(27, 185, 52, 0.25) !important; }\n\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(27, 185, 52, 0.25) !important; }\n\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab:focus {\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n  transition: box-shadow ease-in-out 0s; }\n\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active {\n  border-color: #ffc02a !important;\n  background-color: rgba(255, 192, 42, 0.4); }\n\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-previous {\n  border-left-color: rgba(255, 192, 42, 0.25) !important; }\n\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-next {\n  border-right-color: rgba(255, 192, 42, 0.25) !important; }\n\n.dm-field-tabs--disabled {\n  opacity: 0.7; }\n  .dm-field-tabs--disabled .dm-field-tabs__label,\n  .dm-field-tabs--disabled .dm-field-tabs__container {\n    cursor: not-allowed; }\n    .dm-field-tabs--disabled .dm-field-tabs__label .dm-field-tabs__tab,\n    .dm-field-tabs--disabled .dm-field-tabs__container .dm-field-tabs__tab {\n      pointer-events: none; }\n\n/*# sourceMappingURL=FieldTabs.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$19 = undefined;
  /* module identifier */
  const __vue_module_identifier__$19 = undefined;
  /* functional template */
  const __vue_is_functional_template__$19 = false;
  /* component normalizer */
  function __vue_normalize__$19(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTabs.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$19() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$19.styles || (__vue_create_injector__$19.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldTabs = __vue_normalize__$19(
    { render: __vue_render__$19, staticRenderFns: __vue_staticRenderFns__$19 },
    __vue_inject_styles__$19,
    __vue_script__$19,
    __vue_scope_id__$19,
    __vue_is_functional_template__$19,
    __vue_module_identifier__$19,
    __vue_create_injector__$19,
    undefined
  )

//
var script$20 = {
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
    maxlength: {
      type: Number,
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
    readOnly: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator: function validator(x) {
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
    onContainerClick: function onContainerClick(event) {
      this.$el.querySelector("textarea").focus();
      this.$emit("click", this.getTextareaValue(), this.name, event);
    },
    onFieldBlur: function onFieldBlur(event) {
      this.focused = false;
      this.$emit("blur", this.getTextareaValue(), this.name, event);
    },
    onFieldChange: function onFieldChange(event) {
      this.$emit("change", this.getTextareaValue(), this.name, event);
    },
    onFieldFocus: function onFieldFocus(event) {
      this.focused = true;
      this.$emit("focus", this.getTextareaValue(), this.name, event);
    },
    onFieldInput: function onFieldInput(event) {
      this.$emit("input", this.getTextareaValue(), this.name, event);
    }
  }
};

/* script */
            const __vue_script__$20 = script$20;
            
/* template */
var __vue_render__$20 = function() {
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
                maxlength: _vm.maxlength,
                name: _vm.name,
                placeholder: _vm.placeholder,
                readonly: _vm.readOnly,
                rows: _vm.rows
              },
              on: {
                blur: _vm.onFieldBlur,
                change: _vm.onFieldChange,
                focus: _vm.onFieldFocus,
                input: _vm.onFieldInput
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
var __vue_staticRenderFns__$20 = [];
__vue_render__$20._withStripped = true;

  /* style */
  const __vue_inject_styles__$20 = function (inject) {
    if (!inject) return
    inject("data-v-cefeabca_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-textarea {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-textarea .dm-field-textarea__container {\n    position: relative;\n    display: flex;\n    transition: all ease-in-out 200ms;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__icon {\n      position: absolute;\n      right: 7px;\n      bottom: 7px;\n      pointer-events: none;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field {\n      padding: 10px 15px;\n      width: 100%;\n      height: 100%;\n      outline: 0;\n      border: none;\n      background-color: transparent;\n      color: #ffffff;\n      resize: none;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field::placeholder {\n        color: #8eacc5;\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:disabled {\n        cursor: not-allowed;\n}\n.dm-field-textarea--mini .dm-field-textarea__field {\n    min-height: 60px;\n    border-radius: 4px;\n    font-size: 12px;\n}\n.dm-field-textarea--small .dm-field-textarea__field {\n    min-height: 80px;\n    border-radius: 5px;\n    font-size: 13px;\n}\n.dm-field-textarea--default .dm-field-textarea__field {\n    min-height: 100px;\n    border-radius: 6px;\n    font-size: 14px;\n}\n.dm-field-textarea--medium .dm-field-textarea__field {\n    min-height: 120px;\n    border-radius: 7px;\n    font-size: 15px;\n}\n.dm-field-textarea--large .dm-field-textarea__field {\n    min-height: 140px;\n    border-radius: 8px;\n    font-size: 16px;\n}\n.dm-field-textarea--error .dm-field-textarea__container {\n    border-color: #e1112c;\n    color: #e1112c;\n}\n.dm-field-textarea--normal .dm-field-textarea__container {\n    border-color: #323e4f;\n    color: #ffffff;\n}\n.dm-field-textarea--success .dm-field-textarea__container {\n    border-color: #1bb934;\n    color: #1bb934;\n}\n.dm-field-textarea--warning .dm-field-textarea__container {\n    border-color: #ffc02a;\n    color: #ffc02a;\n}\n.dm-field-textarea--disabled {\n    opacity: 0.7;\n}\n.dm-field-textarea--disabled .dm-field-textarea__label,\n    .dm-field-textarea--disabled .dm-field-textarea__container {\n      cursor: not-allowed;\n}\n.dm-field-textarea--borders .dm-field-textarea__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #283243;\n}\n.dm-field-textarea--focused .dm-field-textarea__container {\n    border-color: #0194ef;\n    color: #0194ef;\n}\n.dm-field-textarea--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldTextarea.vue.map */", map: {"version":3,"sources":["FieldTextarea.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTextarea.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;ACyNhF;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,sFACA;CA+FA;AApGA;IAQA,mBAAA;IACA,cAAA;IACA,kCAAA;CA2BA;AArCA;MAaA,mBAAA;MACA,WAAA;MACA,YAAA;MACA,qBAAA;CACA;AAjBA;MAoBA,mBAAA;MACA,YAAA;MACA,aAAA;MACA,WAAA;MACA,aAAA;MACA,8BAAA;MACA,eAAA;MACA,aAAA;CASA;AApCA;QA8BA,eAAA;CACA;AA/BA;QAkCA,oBAAA;CACA;AASA;IAEA,iBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,iBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,kBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,kBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AALA;IAEA,kBAAA;IACA,mBAAA;IACA,gBAAA;CACA;AAOA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAMA,sBAAA;IACA,eAAA;CAEA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AATA;IAGA,sBAAA;IACA,eAAA;CAKA;AAMA;IACA,aAAA;CAMA;AAPA;;MAKA,oBAAA;CACA;AAGA;IAEA,uBAAA;IACA,kBAAA;IACA,oBAAA;IACA,mBAAA;IACA,0BAAA;CACA;AAGA;IAEA,sBAAA;IACA,eAAA;CACA;AAGA;IACA,YAAA;CACA;;AD/OA,6CAA6C","file":"FieldTextarea.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-textarea {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-textarea .dm-field-textarea__container {\n    position: relative;\n    display: flex;\n    transition: all ease-in-out 200ms; }\n    .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__icon {\n      position: absolute;\n      right: 7px;\n      bottom: 7px;\n      pointer-events: none; }\n    .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field {\n      padding: 10px 15px;\n      width: 100%;\n      height: 100%;\n      outline: 0;\n      border: none;\n      background-color: transparent;\n      color: #ffffff;\n      resize: none; }\n      .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field::placeholder {\n        color: #8eacc5; }\n      .dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:disabled {\n        cursor: not-allowed; }\n  .dm-field-textarea--mini .dm-field-textarea__field {\n    min-height: 60px;\n    border-radius: 4px;\n    font-size: 12px; }\n  .dm-field-textarea--small .dm-field-textarea__field {\n    min-height: 80px;\n    border-radius: 5px;\n    font-size: 13px; }\n  .dm-field-textarea--default .dm-field-textarea__field {\n    min-height: 100px;\n    border-radius: 6px;\n    font-size: 14px; }\n  .dm-field-textarea--medium .dm-field-textarea__field {\n    min-height: 120px;\n    border-radius: 7px;\n    font-size: 15px; }\n  .dm-field-textarea--large .dm-field-textarea__field {\n    min-height: 140px;\n    border-radius: 8px;\n    font-size: 16px; }\n  .dm-field-textarea--error .dm-field-textarea__container {\n    border-color: #e1112c;\n    color: #e1112c; }\n  .dm-field-textarea--normal .dm-field-textarea__container {\n    border-color: #323e4f;\n    color: #ffffff; }\n  .dm-field-textarea--success .dm-field-textarea__container {\n    border-color: #1bb934;\n    color: #1bb934; }\n  .dm-field-textarea--warning .dm-field-textarea__container {\n    border-color: #ffc02a;\n    color: #ffc02a; }\n  .dm-field-textarea--disabled {\n    opacity: 0.7; }\n    .dm-field-textarea--disabled .dm-field-textarea__label,\n    .dm-field-textarea--disabled .dm-field-textarea__container {\n      cursor: not-allowed; }\n  .dm-field-textarea--borders .dm-field-textarea__container {\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 6px;\n    background-color: #283243; }\n  .dm-field-textarea--focused .dm-field-textarea__container {\n    border-color: #0194ef;\n    color: #0194ef; }\n  .dm-field-textarea--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldTextarea.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$20 = undefined;
  /* module identifier */
  const __vue_module_identifier__$20 = undefined;
  /* functional template */
  const __vue_is_functional_template__$20 = false;
  /* component normalizer */
  function __vue_normalize__$20(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldTextarea.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$20() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$20.styles || (__vue_create_injector__$20.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldTextarea = __vue_normalize__$20(
    { render: __vue_render__$20, staticRenderFns: __vue_staticRenderFns__$20 },
    __vue_inject_styles__$20,
    __vue_script__$20,
    __vue_scope_id__$20,
    __vue_is_functional_template__$20,
    __vue_module_identifier__$20,
    __vue_create_injector__$20,
    undefined
  )

//
var script$21 = {
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
        return ["mini", "small", "default", "medium", "large"].indexOf(x) !== -1;
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
      this.$emit("change", event.target.checked, this.name, event);
    }
  }
};

/* script */
            const __vue_script__$21 = script$21;
            
/* template */
var __vue_render__$21 = function() {
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
var __vue_staticRenderFns__$21 = [];
__vue_render__$21._withStripped = true;

  /* style */
  const __vue_inject_styles__$21 = function (inject) {
    if (!inject) return
    inject("data-v-23e6c500_0", { source: "/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-toggle {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif;\n}\n.dm-field-toggle .dm-field-toggle__container {\n    display: flex;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: 0;\n      border: none;\n      border-radius: 100px;\n      -webkit-appearance: none;\n      cursor: pointer;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before, .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 300ms;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #323e4f;\n        border-radius: 20px;\n        background-color: rgba(40, 50, 67, 0.4);\n        content: \"\";\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        top: 4px;\n        right: initial;\n        border-radius: 100%;\n        background: #ffffff;\n        transform: translateX(4px);\n        content: \"\";\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n        border-color: #46576e;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:not(:checked) + .dm-field-toggle__label {\n        color: #a9c7df;\n        transition: color 250ms ease-in-out;\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400;\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field {\n    width: 36px;\n    height: 18px;\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 10px;\n      height: 10px;\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(22px);\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 18px;\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field {\n    width: 40px;\n    height: 20px;\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 12px;\n      height: 12px;\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(24px);\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 20px;\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field {\n    width: 44px;\n    height: 22px;\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 14px;\n      height: 14px;\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(26px);\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 22px;\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field {\n    width: 48px;\n    height: 24px;\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 16px;\n      height: 16px;\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(28px);\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 24px;\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field {\n    width: 52px;\n    height: 26px;\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 18px;\n      height: 18px;\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(30px);\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 26px;\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #e1112c;\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #e1112c;\n    background-color: rgba(225, 17, 44, 0.4);\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #f0354d;\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #0194ef;\n    background-color: rgba(1, 148, 239, 0.4);\n}\n.dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #25abfe;\n}\n.dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #1bb934;\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #1bb934;\n    background-color: rgba(27, 185, 52, 0.4);\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #27e045;\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #ffc02a;\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #ffc02a;\n    background-color: rgba(255, 192, 42, 0.4);\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #ffcf5d;\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n    transition: box-shadow ease-in-out 0s;\n}\n.dm-field-toggle--disabled {\n    opacity: 0.7;\n}\n.dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field,\n    .dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__label {\n      cursor: not-allowed;\n}\n.dm-field-toggle--full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=FieldToggle.vue.map */", map: {"version":3,"sources":["FieldToggle.vue","/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldToggle.vue"],"names":[],"mappings":"AAAA;;;gFAGgF;AC8IhF;EACA,sBAAA;EACA,iBAAA;EACA,sFACA;CAoJA;AAxJA;IAOA,cAAA;CA4DA;AAnEA;MAUA,mBAAA;MACA,kBAAA;MACA,iBAAA;MACA,WAAA;MACA,aAAA;MACA,qBAAA;MACA,yBAAA;MACA,gBAAA;CA0CA;AA3DA;QAqBA,mBAAA;QACA,sBAAA;QACA,uBAAA;QACA,kCAAA;CACA;AAzBA;QA4BA,OAAA;QACA,QAAA;QACA,YAAA;QACA,aAAA;QACA,0BAAA;QACA,oBAAA;QACA,wCAAA;QACA,YAAA;CACA;AApCA;QAuCA,SAAA;QACA,eAAA;QACA,oBAAA;QACA,oBAAA;QACA,2BAAA;QACA,YAAA;CACA;AA7CA;QAiDA,sBAAA;CACA;AAlDA;QAuDA,eAAA;QACA,oCAAA;CACA;AAzDA;MA8DA,QAAA;MACA,iBAAA;MACA,eAAA;MACA,iBAAA;CACA;AAQA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAtBA;IAGA,YAAA;IACA,aAAA;CAcA;AAlBA;MAOA,YAAA;MACA,aAAA;CACA;AATA;MAaA,4BAEA;CACA;AAhBA;IAqBA,kBAAA;CACA;AAQA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,yCAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AAnBA;IAuBA,iDACA;IACA,sCAAA;CACA;AA1BA;IAWA,sBAAA;IACA,yCAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AAnBA;IAuBA,iDACA;IACA,sCAAA;CACA;AA1BA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,yCAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AAnBA;IAuBA,iDACA;IACA,sCAAA;CACA;AA1BA;IAKA,sBAAA;CACA;AANA;IAWA,sBAAA;IACA,0CAAA;CACA;AAbA;IAkBA,sBAAA;CACA;AAnBA;IAuBA,iDACA;IACA,sCAAA;CACA;AAQA;IACA,aAAA;CAQA;AATA;;MAMA,oBAAA;CACA;AAIA;IACA,YAAA;CACA;;ADtJA,2CAA2C","file":"FieldToggle.vue","sourcesContent":["/* **************************************************************************\n   SETTINGS > COLORS\n   To get the color name: http://veli.ee/colorpedia/?c=354052\n   ************************************************************************** */\n.dm-field-toggle {\n  display: inline-block;\n  text-align: left;\n  font-family: \"Heebo\", \"Helvetica Neue\", Source Sans Pro, Helvetica, Arial, sans-serif; }\n  .dm-field-toggle .dm-field-toggle__container {\n    display: flex; }\n    .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field {\n      position: relative;\n      margin-right: 8px;\n      margin-bottom: 0;\n      outline: 0;\n      border: none;\n      border-radius: 100px;\n      -webkit-appearance: none;\n      cursor: pointer; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before, .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        position: absolute;\n        display: inline-block;\n        box-sizing: border-box;\n        transition: all ease-in-out 300ms; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #323e4f;\n        border-radius: 20px;\n        background-color: rgba(40, 50, 67, 0.4);\n        content: \"\"; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after {\n        top: 4px;\n        right: initial;\n        border-radius: 100%;\n        background: #ffffff;\n        transform: translateX(4px);\n        content: \"\"; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n        border-color: #46576e; }\n      .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:not(:checked) + .dm-field-toggle__label {\n        color: #a9c7df;\n        transition: color 250ms ease-in-out; }\n    .dm-field-toggle .dm-field-toggle__container .dm-field-toggle__label {\n      flex: 1;\n      margin-bottom: 0;\n      color: #ffffff;\n      font-weight: 400; }\n  .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field {\n    width: 36px;\n    height: 18px; }\n    .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 10px;\n      height: 10px; }\n    .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(22px); }\n  .dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 18px; }\n  .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field {\n    width: 40px;\n    height: 20px; }\n    .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 12px;\n      height: 12px; }\n    .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(24px); }\n  .dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 20px; }\n  .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field {\n    width: 44px;\n    height: 22px; }\n    .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 14px;\n      height: 14px; }\n    .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(26px); }\n  .dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 22px; }\n  .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field {\n    width: 48px;\n    height: 24px; }\n    .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 16px;\n      height: 16px; }\n    .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(28px); }\n  .dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 24px; }\n  .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field {\n    width: 52px;\n    height: 26px; }\n    .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:after {\n      width: 18px;\n      height: 18px; }\n    .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:checked:after {\n      transform: translateX(30px); }\n  .dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__label {\n    line-height: 26px; }\n  .dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #e1112c; }\n  .dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #e1112c;\n    background-color: rgba(225, 17, 44, 0.4); }\n  .dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #f0354d; }\n  .dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #e1112c;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #0194ef;\n    background-color: rgba(1, 148, 239, 0.4); }\n  .dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #25abfe; }\n  .dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #0194ef;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #1bb934; }\n  .dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #1bb934;\n    background-color: rgba(27, 185, 52, 0.4); }\n  .dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #27e045; }\n  .dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #1bb934;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:before {\n    border-color: #ffc02a; }\n  .dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:checked:before {\n    border-color: #ffc02a;\n    background-color: rgba(255, 192, 42, 0.4); }\n  .dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:hover:before {\n    border-color: #ffcf5d; }\n  .dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:focus {\n    box-shadow: 0 0 0 2px #1c2532, 0 0 0 3px #ffc02a;\n    transition: box-shadow ease-in-out 0s; }\n  .dm-field-toggle--disabled {\n    opacity: 0.7; }\n    .dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field,\n    .dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__label {\n      cursor: not-allowed; }\n  .dm-field-toggle--full-width {\n    width: 100%; }\n\n/*# sourceMappingURL=FieldToggle.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$21 = undefined;
  /* module identifier */
  const __vue_module_identifier__$21 = undefined;
  /* functional template */
  const __vue_is_functional_template__$21 = false;
  /* component normalizer */
  function __vue_normalize__$21(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/julien/Documents/GrowthBunker/growthbunker-darkmode/components/darkmode/form/FieldToggle.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$21() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$21.styles || (__vue_create_injector__$21.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
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
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FieldToggle = __vue_normalize__$21(
    { render: __vue_render__$21, staticRenderFns: __vue_staticRenderFns__$21 },
    __vue_inject_styles__$21,
    __vue_script__$21,
    __vue_scope_id__$21,
    __vue_is_functional_template__$21,
    __vue_module_identifier__$21,
    __vue_create_injector__$21,
    undefined
  )

/**************************************************************************
 * IMPORTS
 ***************************************************************************/
/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/
// install function executed by Vue.use()

function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;
  var components = {
    alert: BaseAlert,
    avatar: BaseAvatar,
    badge: BaseBadge,
    button: BaseButton,
    divider: BaseDivider,
    heading: BaseHeading,
    icon: BaseIcon,
    "list-item": BaseListItem,
    "progress-bar": BaseProgressBar,
    "social-login": BaseSocialLogin,
    spinner: BaseSpinner,
    toast: BaseToast,
    checkbox: FieldCheckbox,
    file: FieldFile,
    input: FieldInput,
    radio: FieldRadio,
    select: FieldSelect,
    tabs: FieldTabs,
    textarea: FieldTextarea,
    toggle: FieldToggle
  }; // Declare all components when options is not set or array is empty
  // Or when the user explicitely specify it

  for (var component in components) {
    if (!options || !options.components || options.components.length === 0 || options.components.indexOf(component) !== -1) {
      Vue.component("dm-" + component, components[component]);
    }
  }
} // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found

/* global window global */

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export components

module.exports = plugin;
