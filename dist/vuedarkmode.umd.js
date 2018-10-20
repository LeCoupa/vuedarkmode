(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.vuedarkmode = {})));
}(this, (function (exports) { 'use strict';

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
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-base-avatar",
      "dm-base-avatar--" + _vm.size,
      {
        "dm-base-avatar--bordered": _vm.bordered,
        "dm-base-avatar--circular": _vm.circular,
        "dm-base-avatar--complementaries": _vm.complementaries
      }
    ],on:{"click":_vm.onClick}},[_vm._ssrNode("<span class=\"dm-base-avatar__image\""+(_vm._ssrStyle(null,{
        backgroundImage: "url(" + _vm.src + ")",
        cursor: _vm.cursor
      }, null))+">","</span>",[(_vm.complementaries)?_vm._ssrNode("<span class=\"dm-base-avatar__complementaries\">","</span>",_vm._l((_vm.complementaries),function(complementary){return _c('base-avatar',{key:complementary.src,staticClass:"dm-base-avatar__complementary",attrs:{"bordered":true,"circular":false,"src":complementary.src,"size":"mini"}})})):_vm._e()]),_vm._ssrNode(((_vm.description)?("<span class=\"dm-base-avatar__description\">"+_vm._ssrEscape(_vm._s(_vm.description))+"</span>"):"<!---->"))],2)};
  var __vue_staticRenderFns__ = [];

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-6e0ffea3_0", { source: "\n.dm-base-avatar{display:flex;align-items:center;flex-direction:column;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-base-avatar .dm-base-avatar__image{display:inline-block;box-sizing:border-box;background-size:cover;box-shadow:0 1px 5px 0 rgba(23,24,25,.6);user-select:none\n}\n.dm-base-avatar .dm-base-avatar__complementaries{display:flex;justify-content:flex-end\n}\n.dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary{margin-right:4px\n}\n.dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary:last-of-type{margin-right:0\n}\n.dm-base-avatar .dm-base-avatar__complementaries .dm-base-avatar__complementary .dm-base-avatar__image{width:30px;height:30px;border-radius:4px\n}\n.dm-base-avatar--mini .dm-base-avatar__image{border-radius:2px;width:30px;height:30px\n}\n.dm-base-avatar--mini .dm-base-avatar__description{padding-top:4px;text-transform:uppercase;font-size:8px\n}\n.dm-base-avatar--small .dm-base-avatar__image{border-radius:4px;width:40px;height:40px\n}\n.dm-base-avatar--small .dm-base-avatar__description{padding-top:5px;text-transform:uppercase;font-size:10px\n}\n.dm-base-avatar--default .dm-base-avatar__image{border-radius:6px;width:60px;height:60px\n}\n.dm-base-avatar--default .dm-base-avatar__description{padding-top:6px;text-transform:uppercase;font-size:12px\n}\n.dm-base-avatar--medium .dm-base-avatar__image{border-radius:8px;width:80px;height:80px\n}\n.dm-base-avatar--medium .dm-base-avatar__description{padding-top:7px;text-transform:uppercase;font-size:14px\n}\n.dm-base-avatar--large .dm-base-avatar__image{border-radius:10px;width:100px;height:100px\n}\n.dm-base-avatar--large .dm-base-avatar__description{padding-top:8px;text-transform:uppercase;font-size:16px\n}\n.dm-base-avatar--huge .dm-base-avatar__image{border-radius:12px;width:120px;height:120px\n}\n.dm-base-avatar--huge .dm-base-avatar__description{padding-top:9px;text-transform:uppercase;font-size:18px\n}\n.dm-base-avatar--bordered .dm-base-avatar__image{border:1px solid #fff\n}\n.dm-base-avatar--circular .dm-base-avatar__image{border-radius:100%\n}\n.dm-base-avatar--complementaries>.dm-base-avatar__image{position:relative\n}\n.dm-base-avatar--complementaries>.dm-base-avatar__image .dm-base-avatar__complementaries{position:absolute;right:5px;bottom:5px\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = "data-v-6e0ffea3";
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
      component.__file = "BaseAvatar.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseAvatar = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      __vue_create_injector_ssr__
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
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:[
      "dm-base-badge",
      "dm-base-badge--" + _vm.color,
      "dm-base-badge--" + _vm.size
    ]},[_vm._t("default")],2)};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    var __vue_inject_styles__$1 = function (inject) {
      if (!inject) { return }
      inject("data-v-4543e4bd_0", { source: "\n.dm-base-badge{display:inline-block;border-width:1px;border-style:solid;border-radius:100px;color:#fff;text-transform:uppercase;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif;user-select:none\n}\n.dm-base-badge--black{border-color:#313d4f\n}\n.dm-base-badge--blue{border-color:#0093ee\n}\n.dm-base-badge--green{border-color:#1bb934\n}\n.dm-base-badge--orange{border-color:#faca00\n}\n.dm-base-badge--purple{border-color:#ab7df6\n}\n.dm-base-badge--red{border-color:#e0102b\n}\n.dm-base-badge--turquoise{border-color:#26c1c9\n}\n.dm-base-badge--white{border-color:#fff\n}\n.dm-base-badge--mini{padding:0 10px;font-size:12px;line-height:20px\n}\n.dm-base-badge--small{padding:0 11px;font-size:13px;line-height:22px\n}\n.dm-base-badge--default{padding:0 12px;font-size:14px;line-height:24px\n}\n.dm-base-badge--medium{padding:0 13px;font-size:15px;line-height:26px\n}\n.dm-base-badge--large{padding:0 14px;font-size:16px;line-height:28px\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = "data-v-4543e4bd";
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
      component.__file = "BaseBadge.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$1(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseBadge = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      __vue_create_injector_ssr__$1
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

  var script$2 = {
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
              var __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"dm-base-icon",style:({
      color: _vm.color,
      cursor: _vm.cursor,
      fontSize: _vm.size
    }),attrs:{"aria-hidden":"true"},on:{"click":_vm.onClick}},[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.name)))])};
  var __vue_staticRenderFns__$2 = [];

    /* style */
    var __vue_inject_styles__$2 = function (inject) {
      if (!inject) { return }
      inject("data-v-257baf78_0", { source: "\n.dm-base-icon{display:inline-block;color:inherit;text-transform:none;text-rendering:optimizeLegibility;white-space:nowrap;word-wrap:normal;letter-spacing:normal;font-weight:400;font-style:normal;font-family:\"Material Icons\";font-feature-settings:\"liga\";line-height:1;direction:ltr;user-select:none;-webkit-font-smoothing:antialiased\n}\n@font-face{font-weight:400;font-style:normal;font-family:\"Material Icons\";src:url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format(\"woff2\")\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$2 = undefined;
    /* module identifier */
    var __vue_module_identifier__$2 = "data-v-257baf78";
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
      component.__file = "BaseIcon.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$2(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseIcon = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      __vue_create_injector_ssr__$2
    );

  //

  var script$3 = {
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
              var __vue_script__$3 = script$3;
              
  /* template */
  var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:[
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
    ],attrs:{"disabled":_vm.disabled,"id":_vm.id,"type":_vm.type},on:{"blur":_vm.onBlur,"click":_vm.onClick,"focus":_vm.onFocus}},[_vm._ssrNode("<span class=\"dm-base-button__inner\">","</span>",[(_vm.leftIcon)?_c('base-icon',{staticClass:"dm-base-button__left-icon",attrs:{"name":_vm.leftIcon,"size":_vm.iconSize}}):_vm._e(),(_vm.$slots.default && _vm.$slots.default[0].text.trim())?_vm._ssrNode("<span class=\"dm-base-button__label\">","</span>",[_vm._t("default")],2):_vm._e(),(_vm.rightIcon)?_c('base-icon',{staticClass:"dm-base-button__right-icon",attrs:{"name":_vm.rightIcon,"size":_vm.iconSize}}):_vm._e()],1)])};
  var __vue_staticRenderFns__$3 = [];

    /* style */
    var __vue_inject_styles__$3 = function (inject) {
      if (!inject) { return }
      inject("data-v-6627ae6a_0", { source: "\n.dm-base-button{display:inline-block;outline:0;border:1px solid rgba(0,0,0,.1);background-color:transparent;color:#fff;font-weight:500;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif;transition:all ease-in-out .2s;user-select:none;cursor:pointer\n}\n.dm-base-button:hover{transform:scale(1.02)\n}\n.dm-base-button:active{transform:scale(.98)\n}\n.dm-base-button .dm-base-button__inner{display:flex;align-items:center;justify-content:center\n}\n.dm-base-button--black{border:1px solid #313d4f;background-color:#222c3c\n}\n.dm-base-button--blue{background-image:linear-gradient(0deg,#0093ee 0,#2da1f8 100%)\n}\n.dm-base-button--green{background-image:linear-gradient(0deg,#1bb934 0,#4ece3d 100%)\n}\n.dm-base-button--orange{background-image:linear-gradient(0deg,#faca00 0,#ffc82e 100%)\n}\n.dm-base-button--red{background-image:linear-gradient(0deg,#e0102b 0,#e44023 100%)\n}\n.dm-base-button--white{background-image:linear-gradient(0deg,#fafbfc 0,#fff 100%);color:#313d4f\n}\n.dm-base-button--mini{padding:10px 12px;border-radius:4px;font-size:12px;line-height:12px\n}\n.dm-base-button--mini .dm-base-button__inner .dm-base-button__left-icon{margin-right:3px\n}\n.dm-base-button--mini .dm-base-button__inner .dm-base-button__right-icon{margin-left:3px\n}\n.dm-base-button--small{padding:12px 14px;border-radius:5px;font-size:13px;line-height:14px\n}\n.dm-base-button--small .dm-base-button__inner .dm-base-button__left-icon{margin-right:4px\n}\n.dm-base-button--small .dm-base-button__inner .dm-base-button__right-icon{margin-left:4px\n}\n.dm-base-button--default{padding:14px 16px;border-radius:6px;font-size:14px;line-height:16px\n}\n.dm-base-button--default .dm-base-button__inner .dm-base-button__left-icon{margin-right:5px\n}\n.dm-base-button--default .dm-base-button__inner .dm-base-button__right-icon{margin-left:5px\n}\n.dm-base-button--medium{padding:16px 18px;border-radius:7px;font-size:15px;line-height:18px\n}\n.dm-base-button--medium .dm-base-button__inner .dm-base-button__left-icon{margin-right:6px\n}\n.dm-base-button--medium .dm-base-button__inner .dm-base-button__right-icon{margin-left:6px\n}\n.dm-base-button--large{padding:18px 20px;border-radius:8px;font-size:16px;line-height:20px\n}\n.dm-base-button--large .dm-base-button__inner .dm-base-button__left-icon{margin-right:7px\n}\n.dm-base-button--large .dm-base-button__inner .dm-base-button__right-icon{margin-left:7px\n}\n.dm-base-button--capitalize{text-transform:capitalize\n}\n.dm-base-button--circular{border-radius:100%\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__label{display:none\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__left-icon{margin-right:0\n}\n.dm-base-button--circular .dm-base-button__inner .dm-base-button__right-icon{margin-left:0\n}\n.dm-base-button--circular.dm-base-button--mini{padding:8px\n}\n.dm-base-button--circular.dm-base-button--small{padding:9px\n}\n.dm-base-button--circular.dm-base-button--default{padding:10px\n}\n.dm-base-button--circular.dm-base-button--medium{padding:11px\n}\n.dm-base-button--circular.dm-base-button--large{padding:12px\n}\n.dm-base-button--disabled{opacity:.7;cursor:not-allowed\n}\n.dm-base-button--disabled .dm-base-button__inner{pointer-events:none\n}\n.dm-base-button--full-width{width:100%\n}\n.dm-base-button--reverse{background:0 0;color:#fff\n}\n.dm-base-button--reverse.dm-base-button--black{border-color:#313d4f\n}\n.dm-base-button--reverse.dm-base-button--black:active{color:#313d4f\n}\n.dm-base-button--reverse.dm-base-button--blue{border-color:#0093ee\n}\n.dm-base-button--reverse.dm-base-button--blue:active{color:#0093ee\n}\n.dm-base-button--reverse.dm-base-button--green{border-color:#1bb934\n}\n.dm-base-button--reverse.dm-base-button--green:active{color:#1bb934\n}\n.dm-base-button--reverse.dm-base-button--red{border-color:#e0102b\n}\n.dm-base-button--reverse.dm-base-button--red:active{color:#e0102b\n}\n.dm-base-button--reverse.dm-base-button--orange{border-color:#faca00\n}\n.dm-base-button--reverse.dm-base-button--orange:active{color:#faca00\n}\n.dm-base-button--reverse.dm-base-button--white{border-color:#fff\n}\n.dm-base-button--reverse.dm-base-button--white:active{color:#fff\n}\n.dm-base-button--reverse:hover{border-color:#fff;transform:initial\n}\n.dm-base-button--reverse:active{background:#fff;transform:initial\n}\n.dm-base-button--rounded{border-radius:60px;color:#fff\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$3 = undefined;
    /* module identifier */
    var __vue_module_identifier__$3 = "data-v-6627ae6a";
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
      component.__file = "BaseButton.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$3(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseButton = __vue_normalize__$3(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      __vue_create_injector_ssr__$3
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

  var script$4 = {
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
              var __vue_script__$4 = script$4;
              
  /* template */
  var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('hr',{class:[
      "dm-base-divider",
      "dm-base-divider--" + _vm.size,
      "dm-base-divider--" + _vm.color
    ]},[])};
  var __vue_staticRenderFns__$4 = [];

    /* style */
    var __vue_inject_styles__$4 = function (inject) {
      if (!inject) { return }
      inject("data-v-2d2c79ef_0", { source: "\n.dm-base-divider{display:block;border:0;border-top-style:solid\n}\n.dm-base-divider--black{border-top-color:#313d4f\n}\n.dm-base-divider--blue{border-top-color:#0093ee\n}\n.dm-base-divider--green{border-top-color:#1bb934\n}\n.dm-base-divider--orange{border-top-color:#faca00\n}\n.dm-base-divider--purple{border-top-color:#ab7df6\n}\n.dm-base-divider--red{border-top-color:#e0102b\n}\n.dm-base-divider--turquoise{border-top-color:#26c1c9\n}\n.dm-base-divider--white{border-top-color:#fff\n}\n.dm-base-divider--small{margin:15px auto;max-width:60px;height:4px;border-top-width:4px\n}\n.dm-base-divider--large{margin:50px auto;max-width:800px;height:1px;border-top-width:1px\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$4 = undefined;
    /* module identifier */
    var __vue_module_identifier__$4 = "data-v-2d2c79ef";
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
      component.__file = "BaseDivider.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$4(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseDivider = __vue_normalize__$4(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      __vue_create_injector_ssr__$4
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

  var script$5 = {
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
              var __vue_script__$5 = script$5;
              
  /* template */
  var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-base-heading",
      "dm-base-heading--" + _vm.computedColor,
      "dm-base-heading--" + _vm.computedFontWeight,
      "dm-base-heading--" + _vm.type
    ]},[_vm._t("default")],2)};
  var __vue_staticRenderFns__$5 = [];

    /* style */
    var __vue_inject_styles__$5 = function (inject) {
      if (!inject) { return }
      inject("data-v-689bf672_0", { source: "\n.dm-base-heading{font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-base-heading--grey{color:#a8c6df\n}\n.dm-base-heading--white{color:#fff\n}\n.dm-base-heading--white2{color:#fafbfc\n}\n.dm-base-heading--thin{font-weight:100\n}\n.dm-base-heading--light{font-weight:300\n}\n.dm-base-heading--regular{font-weight:400\n}\n.dm-base-heading--medium{font-weight:500\n}\n.dm-base-heading--bold{font-weight:700\n}\n.dm-base-heading--extrabold{font-weight:800\n}\n.dm-base-heading--black{font-weight:900\n}\n.dm-base-heading--h1{margin-bottom:6px;font-size:26px;line-height:32px\n}\n.dm-base-heading--h2{margin-bottom:6px;font-size:22px;line-height:28px\n}\n.dm-base-heading--h3{margin-bottom:6px;font-size:18px;line-height:24px\n}\n.dm-base-heading--p{margin-bottom:20px;font-size:16px;line-height:24px\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$5 = undefined;
    /* module identifier */
    var __vue_module_identifier__$5 = "data-v-689bf672";
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
      component.__file = "BaseHeading.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$5(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseHeading = __vue_normalize__$5(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      __vue_create_injector_ssr__$5
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
  var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-base-loader",
      "dm-base-loader--" + _vm.color
    ]},[_vm._ssrNode(((_vm.labelMain || _vm.labelSecondary)?("<span class=\"dm-base-loader__content\">"+((_vm.labelMain)?("<span class=\"dm-base-loader__label-main\">"+_vm._ssrEscape(_vm._s(_vm.labelMain))+"</span>"):"<!---->")+((_vm.labelSecondary)?("<span class=\"dm-base-loader__label-secondary\">"+_vm._ssrEscape(_vm._s(_vm.labelSecondary))+"</span>"):"<!---->")+"</span>"):"<!---->")+"<div class=\"dm-base-loader__bar\"></div><div class=\"dm-base-loader__progress\""+(_vm._ssrStyle(null,{
        width: _vm.progress + "%"
      }, null))+"></div>")])};
  var __vue_staticRenderFns__$6 = [];

    /* style */
    var __vue_inject_styles__$6 = function (inject) {
      if (!inject) { return }
      inject("data-v-24d6dad5_0", { source: "\n.dm-base-loader{text-align:left;font-size:14px;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif;user-select:none\n}\n.dm-base-loader .dm-base-loader__content{display:flex;margin-bottom:10px\n}\n.dm-base-loader .dm-base-loader__content .dm-base-loader__label-main,.dm-base-loader .dm-base-loader__content .dm-base-loader__label-secondary{flex:1\n}\n.dm-base-loader .dm-base-loader__content .dm-base-loader__label-main{text-transform:uppercase;font-weight:700\n}\n.dm-base-loader .dm-base-loader__content .dm-base-loader__label-secondary{text-align:right\n}\n.dm-base-loader .dm-base-loader__bar,.dm-base-loader .dm-base-loader__progress{height:6px;border-radius:10px\n}\n.dm-base-loader .dm-base-loader__bar{margin-bottom:-5px;opacity:.2\n}\n.dm-base-loader--black .dm-base-loader__bar,.dm-base-loader--black .dm-base-loader__progress{background-color:#313d4f\n}\n.dm-base-loader--blue .dm-base-loader__bar,.dm-base-loader--blue .dm-base-loader__progress{background-color:#0093ee\n}\n.dm-base-loader--green .dm-base-loader__bar,.dm-base-loader--green .dm-base-loader__progress{background-color:#1bb934\n}\n.dm-base-loader--orange .dm-base-loader__bar,.dm-base-loader--orange .dm-base-loader__progress{background-color:#faca00\n}\n.dm-base-loader--purple .dm-base-loader__bar,.dm-base-loader--purple .dm-base-loader__progress{background-color:#ab7df6\n}\n.dm-base-loader--red .dm-base-loader__bar,.dm-base-loader--red .dm-base-loader__progress{background-color:#e0102b\n}\n.dm-base-loader--turquoise .dm-base-loader__bar,.dm-base-loader--turquoise .dm-base-loader__progress{background-color:#26c1c9\n}\n.dm-base-loader--white .dm-base-loader__bar,.dm-base-loader--white .dm-base-loader__progress{background-color:#fff\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$6 = undefined;
    /* module identifier */
    var __vue_module_identifier__$6 = "data-v-24d6dad5";
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
      component.__file = "BaseLoader.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$6(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseLoader = __vue_normalize__$6(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      undefined,
      __vue_create_injector_ssr__$6
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
  var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:[
      "dm-base-social-login",
      "dm-base-social-login--" + _vm.network,
      "dm-base-social-login--" + _vm.size,
      {
        "dm-base-social-login--full-width": _vm.fullWidth
      }
    ],on:{"click":_vm.onClick}},[_vm._ssrNode("<span class=\"dm-base-social-login__inner\"><span class=\"dm-base-social-login__icon\"></span>"+((['small', 'large'].includes(_vm.size))?("<span class=\"dm-base-social-login__label\"><span class=\"dm-base-social-login__action\">"+_vm._ssrEscape(_vm._s(_vm.computedAction))+"</span>"+((['large'].includes(_vm.size))?("<span class=\"dm-base-social-login__network\">"+_vm._ssrEscape(" with "+_vm._s(_vm._f("capitalize")(_vm.network)))+"</span>"):"<!---->")+"</span>"):"<!---->")+"</span>")])};
  var __vue_staticRenderFns__$7 = [];

    /* style */
    var __vue_inject_styles__$7 = function (inject) {
      if (!inject) { return }
      inject("data-v-5128e374_0", { source: "\n.dm-base-social-login{display:inline-block;outline:0;border:1px solid rgba(0,0,0,.05);border-radius:4px;box-shadow:inset -1px 1px 0 0 rgba(255,255,255,0);color:#fff;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif;transition:all ease-in-out .2s;user-select:none;cursor:pointer\n}\n.dm-base-social-login:hover{transform:scale(1.02)\n}\n.dm-base-social-login:active{transform:scale(.98)\n}\n.dm-base-social-login .dm-base-social-login__inner{display:flex;align-items:center;justify-content:center\n}\n.dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__icon{display:inline-block;width:20px;height:20px\n}\n.dm-base-social-login .dm-base-social-login__inner .dm-base-social-login__label{margin-left:8px;font-weight:500;font-size:15px;line-height:20px\n}\n.dm-base-social-login--facebook{background:#3b5998\n}\n.dm-base-social-login--facebook .dm-base-social-login__inner .dm-base-social-login__icon{background-image:url(/images/components/darkmode/base/BaseSocialLogin/facebook.svg)\n}\n.dm-base-social-login--google{background:#db4437\n}\n.dm-base-social-login--google .dm-base-social-login__inner .dm-base-social-login__icon{background-image:url(/images/components/darkmode/base/BaseSocialLogin/google.svg)\n}\n.dm-base-social-login--messenger{background:#0084ff\n}\n.dm-base-social-login--messenger .dm-base-social-login__inner .dm-base-social-login__icon{background-image:url(/images/components/darkmode/base/BaseSocialLogin/messenger.svg)\n}\n.dm-base-social-login--twitter{background:#1da1f2\n}\n.dm-base-social-login--twitter .dm-base-social-login__inner .dm-base-social-login__icon{background-image:url(/images/components/darkmode/base/BaseSocialLogin/twitter.svg);height:16px\n}\n.dm-base-social-login--mini{padding:10px 10px\n}\n.dm-base-social-login--small{padding:10px 30px\n}\n.dm-base-social-login--large{padding:10px 50px\n}\n.dm-base-social-login--full-width{width:100%\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$7 = undefined;
    /* module identifier */
    var __vue_module_identifier__$7 = "data-v-5128e374";
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
      component.__file = "BaseSocialLogin.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$7(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var BaseSocialLogin = __vue_normalize__$7(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      undefined,
      __vue_create_injector_ssr__$7
    );

  /**************************************************************************
   * EXPORTS
   ***************************************************************************/

  // Generate unique numbers
  // However, note that such values are not genuine GUIDs.
  // https://stackoverflow.com/a/105074/1649372
  var generateUUID = function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
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

  var script$8 = {
    props: {
      description: {
        type: String,
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
      }
    }
  };

  /* script */
              var __vue_script__$8 = script$8;
              
  /* template */
  var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{class:[
      "dm-field-description",
      "dm-field-description--" + _vm.size
    ],domProps:{"innerHTML":_vm._s(_vm.description)}},[])};
  var __vue_staticRenderFns__$8 = [];

    /* style */
    var __vue_inject_styles__$8 = function (inject) {
      if (!inject) { return }
      inject("data-v-27c4c9b4_0", { source: "\n.dm-field-description{margin:10px 0 0;color:#8dabc4;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-description--mini{font-size:12px;line-height:14px\n}\n.dm-field-description--small{font-size:13px;line-height:16px\n}\n.dm-field-description--default{font-size:14px;line-height:18px\n}\n.dm-field-description--medium{font-size:15px;line-height:20px\n}\n.dm-field-description--large{font-size:16px;line-height:22px\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$8 = undefined;
    /* module identifier */
    var __vue_module_identifier__$8 = "data-v-27c4c9b4";
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
      component.__file = "FieldDescription.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$8(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldDescription = __vue_normalize__$8(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      undefined,
      __vue_create_injector_ssr__$8
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

  var script$9 = {
    props: {
      forField: {
        type: String,
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
      uppercase: {
        type: Boolean,
        default: true
      }
    }
  };

  /* script */
              var __vue_script__$9 = script$9;
              
  /* template */
  var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:[
      "dm-field-label",
      "dm-field-label--" + _vm.size,
      {
        "dm-field-label--for-field": _vm.forField,
        "dm-field-label--uppercase": _vm.uppercase
      }
    ],attrs:{"for":_vm.forField}},[_vm._t("default")],2)};
  var __vue_staticRenderFns__$9 = [];

    /* style */
    var __vue_inject_styles__$9 = function (inject) {
      if (!inject) { return }
      inject("data-v-c054bb4a_0", { source: "\n.dm-field-label{display:block;margin-bottom:10px;color:#a8c6df;font-weight:500;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif;user-select:none\n}\n.dm-field-label--mini{font-size:12px;line-height:14px\n}\n.dm-field-label--small{font-size:13px;line-height:16px\n}\n.dm-field-label--default{font-size:14px;line-height:18px\n}\n.dm-field-label--medium{font-size:15px;line-height:20px\n}\n.dm-field-label--large{font-size:16px;line-height:22px\n}\n.dm-field-label--for-field{cursor:pointer\n}\n.dm-field-label--uppercase{text-transform:uppercase\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$9 = undefined;
    /* module identifier */
    var __vue_module_identifier__$9 = "data-v-c054bb4a";
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
      component.__file = "FieldLabel.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$9(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldLabel = __vue_normalize__$9(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      undefined,
      __vue_create_injector_ssr__$9
    );

  //

  var script$a = {
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
              var __vue_script__$a = script$a;
              
  /* template */
  var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-field-checkbox",
      "dm-field-checkbox--" + _vm.size,
      "dm-field-checkbox--" + _vm.status,
      {
        "dm-field-checkbox--disabled": _vm.disabled,
        "dm-field-checkbox--full-width": _vm.fullWidth
      }
    ]},[_vm._ssrNode("<div class=\"dm-field-checkbox__container\">","</div>",[_vm._ssrNode("<input"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("id",_vm.uuid))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("required",_vm.required))+" type=\"checkbox\""+(_vm._ssrAttr("checked",_vm.checked))+" class=\"dm-field-checkbox__field\">"),(_vm.label)?_c('field-label',{staticClass:"dm-field-checkbox__label",attrs:{"forField":_vm.uuid,"size":_vm.size,"uppercase":false}},[_vm._v(_vm._s(_vm.label))]):_vm._e()],2),(_vm.description)?_c('field-description',{attrs:{"description":_vm.description,"size":_vm.size}}):_vm._e()],1)};
  var __vue_staticRenderFns__$a = [];

    /* style */
    var __vue_inject_styles__$a = function (inject) {
      if (!inject) { return }
      inject("data-v-fbea825a_0", { source: "\n.dm-field-checkbox{display:inline-block;text-align:left;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-checkbox .dm-field-checkbox__container{display:flex\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field{position:relative;margin-right:8px;margin-bottom:0;outline:0;border:none;-webkit-appearance:none;cursor:pointer\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after,.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before{position:absolute;display:inline-block;box-sizing:border-box;transition:all ease-in-out .2s\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:before{top:0;left:0;width:100%;height:100%;border:1px solid #a8c6df;border-radius:3px;background-color:#fff;content:\"\"\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:after{border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg);content:\"\"\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:hover:after{border-color:#313d4f;border-right-width:2px;border-bottom-width:2px\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__field:checked:after{border-color:#fff\n}\n.dm-field-checkbox .dm-field-checkbox__container .dm-field-checkbox__label{flex:1;margin-bottom:0;color:#fff;font-weight:400\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field{width:12px;height:12px\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__field:after{top:1px;left:4px;width:4px;height:8px\n}\n.dm-field-checkbox--mini .dm-field-checkbox__container .dm-field-checkbox__label{line-height:12px\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field{width:14px;height:14px\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__field:after{top:2px;left:5px;width:4px;height:8px\n}\n.dm-field-checkbox--small .dm-field-checkbox__container .dm-field-checkbox__label{line-height:14px\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field{width:16px;height:16px\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__field:after{top:2px;left:6px;width:5px;height:10px\n}\n.dm-field-checkbox--default .dm-field-checkbox__container .dm-field-checkbox__label{line-height:16px\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field{width:18px;height:18px\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__field:after{top:3px;left:7px;width:5px;height:10px\n}\n.dm-field-checkbox--medium .dm-field-checkbox__container .dm-field-checkbox__label{line-height:18px\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field{width:20px;height:20px\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__field:after{top:3px;left:8px;width:6px;height:12px\n}\n.dm-field-checkbox--large .dm-field-checkbox__container .dm-field-checkbox__label{line-height:20px\n}\n.dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:hover:before{border-color:#e0102b\n}\n.dm-field-checkbox--error .dm-field-checkbox__container .dm-field-checkbox__field:checked:before{border-color:#e0102b;background:#e0102b\n}\n.dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:hover:before{border-color:#0093ee\n}\n.dm-field-checkbox--normal .dm-field-checkbox__container .dm-field-checkbox__field:checked:before{border-color:#0093ee;background:#0093ee\n}\n.dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:hover:before{border-color:#1bb934\n}\n.dm-field-checkbox--success .dm-field-checkbox__container .dm-field-checkbox__field:checked:before{border-color:#1bb934;background:#1bb934\n}\n.dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:hover:before{border-color:#faca00\n}\n.dm-field-checkbox--warning .dm-field-checkbox__container .dm-field-checkbox__field:checked:before{border-color:#faca00;background:#faca00\n}\n.dm-field-checkbox--disabled{opacity:.7\n}\n.dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__field,.dm-field-checkbox--disabled .dm-field-checkbox__container .dm-field-checkbox__label{cursor:not-allowed\n}\n.dm-field-checkbox--full-width{width:100%\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$a = undefined;
    /* module identifier */
    var __vue_module_identifier__$a = "data-v-fbea825a";
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
      component.__file = "FieldCheckbox.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$a(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldCheckbox = __vue_normalize__$a(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      undefined,
      __vue_create_injector_ssr__$a
    );

  //

  var script$b = {
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
              var __vue_script__$b = script$b;
              
  /* template */
  var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-field-file",
      "dm-field-file--" + _vm.size,
      "dm-field-file--" + _vm.status,
      {
        "dm-field-file--disabled": _vm.disabled,
        "dm-field-file--full-width": _vm.fullWidth
      }
    ]},[_vm._ssrNode("<div class=\"dm-field-file__container\">","</div>",[(_vm.label)?_vm._ssrNode("<div class=\"dm-field-file__information\">","</div>",[_c('field-label',{staticClass:"dm-field-file__label",attrs:{"size":_vm.size}},[_vm._v(_vm._s(_vm.label))]),_vm._ssrNode(((_vm.description)?("<span class=\"dm-field-file__description\">"+_vm._ssrEscape(_vm._s(_vm.description))+"</span>"):"<!---->"))],2):_vm._e(),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.uuid))+" class=\"dm-field-file__upload\">","</label>",[_c('base-icon',{staticClass:"dm-field-file__icon",attrs:{"name":"cloud_upload"}})],1),_vm._ssrNode("<input"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("id",_vm.uuid))+(_vm._ssrAttr("multiple",_vm.multiple))+(_vm._ssrAttr("name",_vm.name))+" type=\"file\" class=\"dm-field-file__field\">")],2)])};
  var __vue_staticRenderFns__$b = [];

    /* style */
    var __vue_inject_styles__$b = function (inject) {
      if (!inject) { return }
      inject("data-v-1f837242_0", { source: "\n.dm-field-file{display:inline-block;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-file .dm-field-file__container{display:flex;align-items:center\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information{display:flex;flex-direction:column;margin-right:20px;text-align:left\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__label{margin-bottom:6px\n}\n.dm-field-file .dm-field-file__container .dm-field-file__information .dm-field-file__description{color:#8dabc4\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload{position:relative;box-sizing:border-box;border-width:2px;border-style:solid;border-radius:100%;background-color:rgba(34,44,60,.9);box-shadow:0 1px 5px 0 rgba(23,24,25,.6);transition:all ease-in-out .2s;cursor:pointer\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload .dm-field-file__icon{position:absolute;top:50%;left:50%;margin-top:-1px;transform:translate(-50%,-50%)\n}\n.dm-field-file .dm-field-file__container .dm-field-file__upload:hover{border-color:#0093ee\n}\n.dm-field-file .dm-field-file__container .dm-field-file__field{display:none;width:100%;height:100%\n}\n.dm-field-file--mini .dm-field-file__information .dm-field-file__description{font-size:10px\n}\n.dm-field-file--mini .dm-field-file__upload{width:40px;height:40px\n}\n.dm-field-file--mini .dm-field-file__upload .dm-field-file__icon{font-size:18px!important\n}\n.dm-field-file--small .dm-field-file__information .dm-field-file__description{font-size:11px\n}\n.dm-field-file--small .dm-field-file__upload{width:45px;height:45px\n}\n.dm-field-file--small .dm-field-file__upload .dm-field-file__icon{font-size:20px!important\n}\n.dm-field-file--default .dm-field-file__information .dm-field-file__description{font-size:12px\n}\n.dm-field-file--default .dm-field-file__upload{width:50px;height:50px\n}\n.dm-field-file--default .dm-field-file__upload .dm-field-file__icon{font-size:22px!important\n}\n.dm-field-file--medium .dm-field-file__information .dm-field-file__description{font-size:13px\n}\n.dm-field-file--medium .dm-field-file__upload{width:55px;height:55px\n}\n.dm-field-file--medium .dm-field-file__upload .dm-field-file__icon{font-size:24px!important\n}\n.dm-field-file--large .dm-field-file__information .dm-field-file__description{font-size:14px\n}\n.dm-field-file--large .dm-field-file__upload{width:60px;height:60px\n}\n.dm-field-file--large .dm-field-file__upload .dm-field-file__icon{font-size:26px!important\n}\n.dm-field-file--error .dm-field-file__upload{border-color:#e0102b\n}\n.dm-field-file--normal .dm-field-file__upload{border-color:#fff\n}\n.dm-field-file--success .dm-field-file__upload{border-color:#1bb934\n}\n.dm-field-file--warning .dm-field-file__upload{border-color:#faca00\n}\n.dm-field-file--disabled{opacity:.7\n}\n.dm-field-file--disabled .dm-field-file__container .dm-field-file__upload{cursor:not-allowed\n}\n.dm-field-file--disabled .dm-field-file__container .dm-field-file__upload:hover{border-color:#e0102b\n}\n.dm-field-file--full-width{width:100%\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$b = undefined;
    /* module identifier */
    var __vue_module_identifier__$b = "data-v-1f837242";
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
      component.__file = "FieldFile.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$b(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldFile = __vue_normalize__$b(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      undefined,
      __vue_create_injector_ssr__$b
    );

  //

  var script$c = {
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
              var __vue_script__$c = script$c;
              
  /* template */
  var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
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
    ]},[(_vm.label)?_c('field-label',{staticClass:"dm-field-input__label",attrs:{"forField":_vm.uuid,"size":_vm.size}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._ssrNode("<div class=\"dm-field-input__container\">","</div>",[(_vm.leftIcon)?_c('base-icon',{staticClass:"dm-field-input__icon dm-field-input__icon--left",attrs:{"name":_vm.leftIcon}}):_vm._e(),_vm._ssrNode("<input"+(_vm._ssrAttr("autocomplete",_vm.autocomplete))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("id",_vm.uuid))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("value",_vm.currentValue))+" class=\"dm-field-input__field\">"),(_vm.computedRightIcon)?_c('base-icon',{staticClass:"dm-field-input__icon dm-field-input__icon--right",attrs:{"name":_vm.computedRightIcon}}):_vm._e()],2),(_vm.description)?_c('field-description',{attrs:{"description":_vm.description,"size":_vm.size}}):_vm._e()],1)};
  var __vue_staticRenderFns__$c = [];

    /* style */
    var __vue_inject_styles__$c = function (inject) {
      if (!inject) { return }
      inject("data-v-beae7f66_0", { source: "\n.dm-field-input{display:flex;flex-direction:column;text-align:left;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-input .dm-field-input__container{display:flex;align-items:center;transition:all ease-in-out .2s\n}\n.dm-field-input .dm-field-input__container:hover{cursor:text\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon{flex:0 0 auto\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon--left{margin-right:5px;margin-left:9px\n}\n.dm-field-input .dm-field-input__container .dm-field-input__icon--right{margin-right:9px;margin-left:5px\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field{flex:1;padding:0 15px;height:100%;border:none;background-color:transparent;color:#fff\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field::placeholder{color:#8dabc4\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field:disabled{cursor:not-allowed\n}\n.dm-field-input .dm-field-input__container .dm-field-input__field:focus{outline:0\n}\n.dm-field-input--mini .dm-field-input__container{height:34px;border-radius:4px\n}\n.dm-field-input--mini .dm-field-input__container .dm-field-input__icon{font-size:16px!important\n}\n.dm-field-input--mini .dm-field-input__container .dm-field-input__field{font-size:12px\n}\n.dm-field-input--small .dm-field-input__container{height:38px;border-radius:5px\n}\n.dm-field-input--small .dm-field-input__container .dm-field-input__icon{font-size:17px!important\n}\n.dm-field-input--small .dm-field-input__container .dm-field-input__field{font-size:13px\n}\n.dm-field-input--default .dm-field-input__container{height:42px;border-radius:6px\n}\n.dm-field-input--default .dm-field-input__container .dm-field-input__icon{font-size:18px!important\n}\n.dm-field-input--default .dm-field-input__container .dm-field-input__field{font-size:14px\n}\n.dm-field-input--medium .dm-field-input__container{height:46px;border-radius:7px\n}\n.dm-field-input--medium .dm-field-input__container .dm-field-input__icon{font-size:19px!important\n}\n.dm-field-input--medium .dm-field-input__container .dm-field-input__field{font-size:15px\n}\n.dm-field-input--large .dm-field-input__container{height:50px;border-radius:8px\n}\n.dm-field-input--large .dm-field-input__container .dm-field-input__icon{font-size:20px!important\n}\n.dm-field-input--large .dm-field-input__container .dm-field-input__field{font-size:16px\n}\n.dm-field-input--error .dm-field-input__container{border-color:#e0102b;color:#e0102b\n}\n.dm-field-input--normal .dm-field-input__container{border-color:#313d4f;color:#fff\n}\n.dm-field-input--success .dm-field-input__container{border-color:#1bb934;color:#1bb934\n}\n.dm-field-input--warning .dm-field-input__container{border-color:#faca00;color:#faca00\n}\n.dm-field-input--borders .dm-field-input__container{box-sizing:border-box;border-width:1px;border-style:solid;border-radius:6px;background-color:#273142\n}\n.dm-field-input--disabled{opacity:.7\n}\n.dm-field-input--disabled .dm-field-input__container,.dm-field-input--disabled .dm-field-input__label{cursor:not-allowed\n}\n.dm-field-input--focused .dm-field-input__container{border-color:#0093ee;color:#0093ee\n}\n.dm-field-input--full-width{width:100%\n}\n.dm-field-input--rounded .dm-field-input__container{border-radius:40px\n}\n.dm-field-input--with-icon .dm-field-input__container .dm-field-input__field{padding:0\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$c = undefined;
    /* module identifier */
    var __vue_module_identifier__$c = "data-v-beae7f66";
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
      component.__file = "FieldInput.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$c(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldInput = __vue_normalize__$c(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      undefined,
      __vue_create_injector_ssr__$c
    );

  //

  var script$d = {
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
              var __vue_script__$d = script$d;
              
  /* template */
  var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-field-radio",
      "dm-field-radio--" + _vm.size,
      "dm-field-radio--" + _vm.status,
      {
        "dm-field-radio--disabled": _vm.disabled,
        "dm-field-radio--full-width": _vm.fullWidth
      }
    ]},[_vm._ssrNode("<div class=\"dm-field-radio__container\">","</div>",[_vm._ssrNode("<input"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("id",_vm.uuid))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("required",_vm.required))+" type=\"radio\""+(_vm._ssrAttr("checked",_vm.checked))+" class=\"dm-field-radio__field\">"),(_vm.label)?_c('field-label',{staticClass:"dm-field-radio__label",attrs:{"forField":_vm.uuid,"size":_vm.size,"uppercase":false}},[_vm._v(_vm._s(_vm.label))]):_vm._e()],2),(_vm.description)?_c('field-description',{attrs:{"description":_vm.description,"size":_vm.size}}):_vm._e()],1)};
  var __vue_staticRenderFns__$d = [];

    /* style */
    var __vue_inject_styles__$d = function (inject) {
      if (!inject) { return }
      inject("data-v-7f6dce12_0", { source: "\n.dm-field-radio{display:inline-block;text-align:left;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-radio .dm-field-radio__container{display:flex\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field{position:relative;margin-right:8px;margin-bottom:0;outline:0;border:none;-webkit-appearance:none;cursor:pointer\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:after,.dm-field-radio .dm-field-radio__container .dm-field-radio__field:before{position:absolute;display:inline-block;box-sizing:border-box;transition:all ease-in-out .2s\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:before{top:0;left:0;width:100%;height:100%;border:1px solid #a8c6df;border-radius:100%;background-color:#fff;content:\"\"\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:after{top:50%;left:50%;width:6px;height:6px;border-radius:100%;background-color:#fff;transform:translate(-50%,-50%);content:\"\"\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:hover:after{background-color:#313d4f\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__field:checked:after{background-color:#fff\n}\n.dm-field-radio .dm-field-radio__container .dm-field-radio__label{flex:1;margin-bottom:0;color:#fff;font-weight:400\n}\n.dm-field-radio--mini .dm-field-radio__container .dm-field-radio__field{width:12px;height:12px\n}\n.dm-field-radio--mini .dm-field-radio__container .dm-field-radio__label{line-height:12px\n}\n.dm-field-radio--small .dm-field-radio__container .dm-field-radio__field{width:14px;height:14px\n}\n.dm-field-radio--small .dm-field-radio__container .dm-field-radio__label{line-height:14px\n}\n.dm-field-radio--default .dm-field-radio__container .dm-field-radio__field{width:16px;height:16px\n}\n.dm-field-radio--default .dm-field-radio__container .dm-field-radio__label{line-height:16px\n}\n.dm-field-radio--medium .dm-field-radio__container .dm-field-radio__field{width:18px;height:18px\n}\n.dm-field-radio--medium .dm-field-radio__container .dm-field-radio__label{line-height:18px\n}\n.dm-field-radio--large .dm-field-radio__container .dm-field-radio__field{width:20px;height:20px\n}\n.dm-field-radio--large .dm-field-radio__container .dm-field-radio__label{line-height:20px\n}\n.dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:hover:before{border-color:#e0102b\n}\n.dm-field-radio--error .dm-field-radio__container .dm-field-radio__field:checked:before{border-color:#e0102b;background:#e0102b\n}\n.dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:hover:before{border-color:#0093ee\n}\n.dm-field-radio--normal .dm-field-radio__container .dm-field-radio__field:checked:before{border-color:#0093ee;background:#0093ee\n}\n.dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:hover:before{border-color:#1bb934\n}\n.dm-field-radio--success .dm-field-radio__container .dm-field-radio__field:checked:before{border-color:#1bb934;background:#1bb934\n}\n.dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:hover:before{border-color:#faca00\n}\n.dm-field-radio--warning .dm-field-radio__container .dm-field-radio__field:checked:before{border-color:#faca00;background:#faca00\n}\n.dm-field-radio--disabled{opacity:.7\n}\n.dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__field,.dm-field-radio--disabled .dm-field-radio__container .dm-field-radio__label{cursor:not-allowed\n}\n.dm-field-radio--full-width{width:100%\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$d = undefined;
    /* module identifier */
    var __vue_module_identifier__$d = "data-v-7f6dce12";
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
      component.__file = "FieldRadio.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$d(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldRadio = __vue_normalize__$d(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      undefined,
      __vue_create_injector_ssr__$d
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
              var __vue_script__$e = script$e;
              
  /* template */
  var __vue_render__$e = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
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
    ]},[(_vm.label)?_c('field-label',{staticClass:"dm-field-select__label",attrs:{"forField":_vm.uuid,"size":_vm.size}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._ssrNode("<div class=\"dm-field-select__container\">","</div>",[(_vm.computedLeftIcon)?_c('base-icon',{staticClass:"dm-field-select__icon dm-field-select__icon--left",attrs:{"name":_vm.computedLeftIcon}}):_vm._e(),_vm._ssrNode("<select"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("id",_vm.uuid))+(_vm._ssrAttr("name",_vm.name))+" class=\"dm-field-select__field\">"+(_vm._ssrList((_vm.options),function(option){return ("<option"+(_vm._ssrAttr("value",option.value))+">"+_vm._ssrEscape(_vm._s(option.label))+"</option>")}))+"</select>"),_c('base-icon',{staticClass:"dm-field-select__icon dm-field-select__icon--right",attrs:{"name":_vm.rightIcon}})],2),(_vm.description)?_c('field-description',{attrs:{"description":_vm.description,"size":_vm.size}}):_vm._e()],1)};
  var __vue_staticRenderFns__$e = [];

    /* style */
    var __vue_inject_styles__$e = function (inject) {
      if (!inject) { return }
      inject("data-v-33b46c75_0", { source: "\n.dm-field-select{display:flex;flex-direction:column;text-align:left;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-select .dm-field-select__container{position:relative;display:flex;overflow:hidden;align-items:center;transition:all ease-in-out .2s\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon{position:absolute\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon--left{left:9px\n}\n.dm-field-select .dm-field-select__container .dm-field-select__icon--right{right:9px\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field{flex:1;padding:0 35px 0 15px;height:100%;border:none;background-color:transparent;background-image:none;box-shadow:none;color:#fff;-webkit-appearance:none;cursor:pointer\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field:disabled{cursor:not-allowed\n}\n.dm-field-select .dm-field-select__container .dm-field-select__field:focus{outline:0\n}\n.dm-field-select--mini .dm-field-select__container{height:34px;border-radius:4px\n}\n.dm-field-select--mini .dm-field-select__container .dm-field-select__icon{font-size:16px!important\n}\n.dm-field-select--mini .dm-field-select__container .dm-field-select__field{font-size:12px\n}\n.dm-field-select--small .dm-field-select__container{height:38px;border-radius:5px\n}\n.dm-field-select--small .dm-field-select__container .dm-field-select__icon{font-size:17px!important\n}\n.dm-field-select--small .dm-field-select__container .dm-field-select__field{font-size:13px\n}\n.dm-field-select--default .dm-field-select__container{height:42px;border-radius:6px\n}\n.dm-field-select--default .dm-field-select__container .dm-field-select__icon{font-size:18px!important\n}\n.dm-field-select--default .dm-field-select__container .dm-field-select__field{font-size:14px\n}\n.dm-field-select--medium .dm-field-select__container{height:46px;border-radius:7px\n}\n.dm-field-select--medium .dm-field-select__container .dm-field-select__icon{font-size:19px!important\n}\n.dm-field-select--medium .dm-field-select__container .dm-field-select__field{font-size:15px\n}\n.dm-field-select--large .dm-field-select__container{height:50px;border-radius:8px\n}\n.dm-field-select--large .dm-field-select__container .dm-field-select__icon{font-size:20px!important\n}\n.dm-field-select--large .dm-field-select__container .dm-field-select__field{font-size:16px\n}\n.dm-field-select--error .dm-field-select__container{border-color:#e0102b;color:#e0102b\n}\n.dm-field-select--normal .dm-field-select__container{border-color:#313d4f;color:#fff\n}\n.dm-field-select--success .dm-field-select__container{border-color:#1bb934;color:#1bb934\n}\n.dm-field-select--warning .dm-field-select__container{border-color:#faca00;color:#faca00\n}\n.dm-field-select--borders .dm-field-select__container{box-sizing:border-box;border-width:1px;border-style:solid;border-radius:6px;background-color:#273142\n}\n.dm-field-select--disabled{opacity:.7\n}\n.dm-field-select--disabled .dm-field-select__container,.dm-field-select--disabled .dm-field-select__label{cursor:not-allowed\n}\n.dm-field-select--focused .dm-field-select__container{border-color:#0093ee;color:#0093ee\n}\n.dm-field-select--full-width{width:100%\n}\n.dm-field-select--with-left-icon .dm-field-select__container .dm-field-select__field{padding-left:35px\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$e = undefined;
    /* module identifier */
    var __vue_module_identifier__$e = "data-v-33b46c75";
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
      component.__file = "FieldSelect.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$e(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldSelect = __vue_normalize__$e(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      undefined,
      __vue_create_injector_ssr__$e
    );

  //

  var script$f = {
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
              var __vue_script__$f = script$f;
              
  /* template */
  var __vue_render__$f = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-field-tabs",
      "dm-field-tabs--" + _vm.size,
      "dm-field-tabs--" + _vm.status,
      {
        "dm-field-tabs--disabled": _vm.disabled,
        "dm-field-tabs--multiple": _vm.multiple
      }
    ]},[(_vm.label)?_c('field-label',{staticClass:"dm-field-tabs__label",attrs:{"size":_vm.size}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._ssrNode("<div class=\"dm-field-tabs__container\">"+(_vm._ssrList((_vm.tabs),function(tab,i){return ("<span"+(_vm._ssrClass(null,[
          "dm-field-tabs__tab",
          {
            "dm-field-tabs__tab--active": _vm.activeTabs.includes(tab.id),
            "dm-field-tabs__tab--active-previous": _vm.checkActiveBrother("desc", i-1),
            "dm-field-tabs__tab--active-next": _vm.checkActiveBrother("asc", i+1)
          }
        ]))+">"+_vm._ssrEscape(_vm._s(tab.name))+"</span>")}))+"</div>"),(_vm.description)?_c('field-description',{attrs:{"description":_vm.description,"size":_vm.size}}):_vm._e()],2)};
  var __vue_staticRenderFns__$f = [];

    /* style */
    var __vue_inject_styles__$f = function (inject) {
      if (!inject) { return }
      inject("data-v-e8968d6e_0", { source: "\n.dm-field-tabs .dm-field-tabs__container{display:inline-block;box-shadow:0 1px 5px 0 rgba(23,24,25,.6);font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif;cursor:pointer\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab{display:inline-block;border-width:1px;border-style:solid;border-color:transparent;border-top-color:#313d4f;border-bottom-color:#313d4f;background:#222c3c;color:#8dabc4;transition:all ease-in-out .25s;user-select:none\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:first-of-type{border-left-color:#313d4f;border-top-left-radius:4px;border-bottom-left-radius:4px\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:last-of-type{border-right-color:#313d4f;border-top-right-radius:4px;border-bottom-right-radius:4px\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab:hover{color:#fff\n}\n.dm-field-tabs .dm-field-tabs__container .dm-field-tabs__tab--active{color:#fff\n}\n.dm-field-tabs--mini .dm-field-tabs__container .dm-field-tabs__tab{padding:6px 12px;font-size:12px\n}\n.dm-field-tabs--small .dm-field-tabs__container .dm-field-tabs__tab{padding:7px 14px;font-size:13px\n}\n.dm-field-tabs--default .dm-field-tabs__container .dm-field-tabs__tab{padding:8px 16px;font-size:14px\n}\n.dm-field-tabs--medium .dm-field-tabs__container .dm-field-tabs__tab{padding:9px 18px;font-size:15px\n}\n.dm-field-tabs--large .dm-field-tabs__container .dm-field-tabs__tab{padding:10px 20px;font-size:16px\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active{border-color:#e0102b!important;background-color:rgba(224,16,43,.4)\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-previous{border-left-color:rgba(224,16,43,.25)!important\n}\n.dm-field-tabs--error .dm-field-tabs__container .dm-field-tabs__tab--active-next{border-right-color:rgba(224,16,43,.25)!important\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active{border-color:#0093ee!important;background-color:rgba(0,147,238,.4)\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-previous{border-left-color:rgba(0,147,238,.25)!important\n}\n.dm-field-tabs--normal .dm-field-tabs__container .dm-field-tabs__tab--active-next{border-right-color:rgba(0,147,238,.25)!important\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active{border-color:#1bb934!important;background-color:rgba(27,185,52,.4)\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-previous{border-left-color:rgba(27,185,52,.25)!important\n}\n.dm-field-tabs--success .dm-field-tabs__container .dm-field-tabs__tab--active-next{border-right-color:rgba(27,185,52,.25)!important\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active{border-color:#faca00!important;background-color:rgba(250,202,0,.4)\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-previous{border-left-color:rgba(250,202,0,.25)!important\n}\n.dm-field-tabs--warning .dm-field-tabs__container .dm-field-tabs__tab--active-next{border-right-color:rgba(250,202,0,.25)!important\n}\n.dm-field-tabs--disabled{opacity:.7\n}\n.dm-field-tabs--disabled .dm-field-tabs__container,.dm-field-tabs--disabled .dm-field-tabs__label{cursor:not-allowed\n}\n.dm-field-tabs--disabled .dm-field-tabs__container .dm-field-tabs__tab,.dm-field-tabs--disabled .dm-field-tabs__label .dm-field-tabs__tab{pointer-events:none\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$f = undefined;
    /* module identifier */
    var __vue_module_identifier__$f = "data-v-e8968d6e";
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
      component.__file = "FieldTabs.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$f(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldTabs = __vue_normalize__$f(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      undefined,
      __vue_create_injector_ssr__$f
    );

  //

  var script$g = {
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
              var __vue_script__$g = script$g;
              
  /* template */
  var __vue_render__$g = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-field-textarea",
      "dm-field-textarea--" + _vm.size,
      "dm-field-textarea--" + _vm.status,
      {
        "dm-field-textarea--borders": _vm.borders,
        "dm-field-textarea--disabled": _vm.disabled,
        "dm-field-textarea--focused": _vm.focused,
        "dm-field-textarea--full-width": _vm.fullWidth
      }
    ]},[(_vm.label)?_c('field-label',{staticClass:"dm-field-textarea__label",attrs:{"forField":_vm.uuid,"size":_vm.size}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._ssrNode("<div class=\"dm-field-textarea__container\">","</div>",[_vm._ssrNode("<textarea"+(_vm._ssrAttr("cols",_vm.cols))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("id",_vm.uuid))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("rows",_vm.rows))+" class=\"dm-field-textarea__field\">"+_vm._ssrEscape(_vm._s(_vm.value))+"</textarea>"),(_vm.statusIcon)?_c('base-icon',{staticClass:"dm-field-textarea__icon",attrs:{"name":_vm.statusIcon}}):_vm._e()],2),(_vm.description)?_c('field-description',{attrs:{"description":_vm.description,"size":_vm.size}}):_vm._e()],1)};
  var __vue_staticRenderFns__$g = [];

    /* style */
    var __vue_inject_styles__$g = function (inject) {
      if (!inject) { return }
      inject("data-v-6cd5235a_0", { source: "\n.dm-field-textarea{display:flex;flex-direction:column;text-align:left;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-textarea .dm-field-textarea__container{position:relative;display:flex;transition:all ease-in-out .2s\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__icon{position:absolute;right:7px;bottom:7px\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field{padding:10px 15px;width:100%;height:100%;border:none;background-color:transparent;color:#fff;resize:none\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field::placeholder{color:#8dabc4\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:disabled{cursor:not-allowed\n}\n.dm-field-textarea .dm-field-textarea__container .dm-field-textarea__field:focus{outline:0\n}\n.dm-field-textarea--mini .dm-field-textarea__field{min-height:60px;border-radius:4px;font-size:12px\n}\n.dm-field-textarea--small .dm-field-textarea__field{min-height:80px;border-radius:5px;font-size:13px\n}\n.dm-field-textarea--default .dm-field-textarea__field{min-height:100px;border-radius:6px;font-size:14px\n}\n.dm-field-textarea--medium .dm-field-textarea__field{min-height:120px;border-radius:7px;font-size:15px\n}\n.dm-field-textarea--large .dm-field-textarea__field{min-height:140px;border-radius:8px;font-size:16px\n}\n.dm-field-textarea--error .dm-field-textarea__container{border-color:#e0102b;color:#e0102b\n}\n.dm-field-textarea--normal .dm-field-textarea__container{border-color:#313d4f;color:#fff\n}\n.dm-field-textarea--success .dm-field-textarea__container{border-color:#1bb934;color:#1bb934\n}\n.dm-field-textarea--warning .dm-field-textarea__container{border-color:#faca00;color:#faca00\n}\n.dm-field-textarea--disabled{opacity:.7\n}\n.dm-field-textarea--disabled .dm-field-textarea__container,.dm-field-textarea--disabled .dm-field-textarea__label{cursor:not-allowed\n}\n.dm-field-textarea--borders .dm-field-textarea__container{box-sizing:border-box;border-width:1px;border-style:solid;border-radius:6px;background-color:#273142\n}\n.dm-field-textarea--focused .dm-field-textarea__container{border-color:#0093ee;color:#0093ee\n}\n.dm-field-textarea--full-width{width:100%\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$g = undefined;
    /* module identifier */
    var __vue_module_identifier__$g = "data-v-6cd5235a";
    /* functional template */
    var __vue_is_functional_template__$g = false;
    /* component normalizer */
    function __vue_normalize__$g(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "FieldTextarea.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$g(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldTextarea = __vue_normalize__$g(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$g,
      __vue_script__$g,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      undefined,
      __vue_create_injector_ssr__$g
    );

  //

  var script$h = {
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
              var __vue_script__$h = script$h;
              
  /* template */
  var __vue_render__$h = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
      "dm-field-toggle",
      "dm-field-toggle--" + _vm.size,
      "dm-field-toggle--" + _vm.status,
      {
        "dm-field-toggle--disabled": _vm.disabled,
        "dm-field-toggle--full-width": _vm.fullWidth
      }
    ]},[_vm._ssrNode("<div class=\"dm-field-toggle__container\">","</div>",[_vm._ssrNode("<input"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("id",_vm.uuid))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("required",_vm.required))+" type=\"checkbox\""+(_vm._ssrAttr("checked",_vm.checked))+" class=\"dm-field-toggle__field\">"),(_vm.label)?_c('field-label',{staticClass:"dm-field-toggle__label",attrs:{"forField":_vm.uuid,"size":_vm.size,"uppercase":false}},[_vm._v(_vm._s(_vm.label))]):_vm._e()],2),(_vm.description)?_c('field-description',{attrs:{"description":_vm.description,"size":_vm.size}}):_vm._e()],1)};
  var __vue_staticRenderFns__$h = [];

    /* style */
    var __vue_inject_styles__$h = function (inject) {
      if (!inject) { return }
      inject("data-v-48295cf3_0", { source: "\n.dm-field-toggle{display:inline-block;text-align:left;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif\n}\n.dm-field-toggle .dm-field-toggle__container{display:flex\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field{position:relative;margin-right:8px;margin-bottom:0;outline:0;border:none;-webkit-appearance:none;cursor:pointer\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after,.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before{position:absolute;display:inline-block;box-sizing:border-box;transition:all ease-in-out .3s\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:before{top:0;left:0;width:100%;height:100%;border:1px solid #313d4f;border-radius:20px;background-color:rgba(39,49,66,.4);content:\"\"\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:after{top:4px;right:initial;border-radius:100%;background:#fff;transform:translateX(4px);content:\"\"\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__field:hover:before{border-color:#45556e\n}\n.dm-field-toggle .dm-field-toggle__container .dm-field-toggle__label{flex:1;margin-bottom:0;color:#fff;font-weight:400\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field{width:36px;height:18px\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:after{width:10px;height:10px\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__field:checked:after{transform:translateX(22px)\n}\n.dm-field-toggle--mini .dm-field-toggle__container .dm-field-toggle__label{line-height:18px\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field{width:40px;height:20px\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:after{width:12px;height:12px\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__field:checked:after{transform:translateX(24px)\n}\n.dm-field-toggle--small .dm-field-toggle__container .dm-field-toggle__label{line-height:20px\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field{width:44px;height:22px\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:after{width:14px;height:14px\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__field:checked:after{transform:translateX(26px)\n}\n.dm-field-toggle--default .dm-field-toggle__container .dm-field-toggle__label{line-height:22px\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field{width:48px;height:24px\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:after{width:16px;height:16px\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__field:checked:after{transform:translateX(28px)\n}\n.dm-field-toggle--medium .dm-field-toggle__container .dm-field-toggle__label{line-height:24px\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field{width:52px;height:26px\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:after{width:18px;height:18px\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__field:checked:after{transform:translateX(30px)\n}\n.dm-field-toggle--large .dm-field-toggle__container .dm-field-toggle__label{line-height:26px\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:before{border-color:#e0102b\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:checked:before{border-color:#e0102b;background-color:rgba(224,16,43,.4)\n}\n.dm-field-toggle--error .dm-field-toggle__container .dm-field-toggle__field:hover:before{border-color:#f0334b\n}\n.dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:checked:before{border-color:#0093ee;background-color:rgba(0,147,238,.4)\n}\n.dm-field-toggle--normal .dm-field-toggle__container .dm-field-toggle__field:hover:before{border-color:#22abff\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:before{border-color:#1bb934\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:checked:before{border-color:#1bb934;background-color:rgba(27,185,52,.4)\n}\n.dm-field-toggle--success .dm-field-toggle__container .dm-field-toggle__field:hover:before{border-color:#27e045\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:before{border-color:#faca00\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:checked:before{border-color:#faca00;background-color:rgba(250,202,0,.4)\n}\n.dm-field-toggle--warning .dm-field-toggle__container .dm-field-toggle__field:hover:before{border-color:#ffd72e\n}\n.dm-field-toggle--disabled{opacity:.7\n}\n.dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field,.dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__label{cursor:not-allowed\n}\n.dm-field-toggle--disabled .dm-field-toggle__container .dm-field-toggle__field:hover:before{border-color:#f0334b\n}\n.dm-field-toggle--full-width{width:100%\n}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$h = undefined;
    /* module identifier */
    var __vue_module_identifier__$h = "data-v-48295cf3";
    /* functional template */
    var __vue_is_functional_template__$h = false;
    /* component normalizer */
    function __vue_normalize__$h(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "FieldToggle.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        {
          // In SSR.
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
              style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          component._ssrRegister = hook;
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
    
    /* style inject SSR */
    function __vue_create_injector_ssr__$h(context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (!context) { return function () {} }

      if (!context.hasOwnProperty('styles')) {
        Object.defineProperty(context, 'styles', {
          enumerable: true,
          get: function () { return context._styles; }
        });
        context._renderStyles = renderStyles;
      }

      function renderStyles(styles) {
        var css = '';
        for (var {ids, media, parts} of styles) {
          css +=
            '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
            + parts.join('\n') +
            '</style>';
        }

        return css
      }

      return function addStyle(id, css) {
        var group = css.media || 'default';
        var style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

        if (!style.ids.includes(id)) {
          style.media = css.media;
          style.ids.push(id);
          var code = css.source;
          style.parts.push(code);
        }
      }
    }

    
    var FieldToggle = __vue_normalize__$h(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$h,
      __vue_script__$h,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      undefined,
      __vue_create_injector_ssr__$h
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

    Vue.component("dm-avatar", BaseAvatar);
    Vue.component("dm-badge", BaseBadge);
    Vue.component("dm-button", BaseButton);
    Vue.component("dm-divider", BaseDivider);
    Vue.component("dm-heading", BaseHeading);
    Vue.component("dm-icon", BaseIcon);
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

  exports.default = plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
