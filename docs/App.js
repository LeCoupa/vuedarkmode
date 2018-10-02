import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/normalize.css/normalize.css'

import '../node_modules/hint.css/hint.min.css'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Dark Mode | A Minimalist Dark Design System for Vue.js","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Based components designed for the night people who enjoy dark interfaces as much as we do."},{"name":"application-name","content":"&nbsp;"},{"name":"msapplication-TileColor","content":"#1B2432"},{"name":"msapplication-TileImage","content":"\u002Ffavicons\u002Fmstile-144x144.png"},{"name":"msapplication-square70x70logo","content":"\u002Ffavicons\u002Fmstile-70x70.png"},{"name":"msapplication-square150x150logo","content":"\u002Ffavicons\u002Fmstile-150x150.png"},{"name":"msapplication-wide310x150logo","content":"\u002Ffavicons\u002Fmstile-310x150.png"},{"name":"msapplication-square310x310logo","content":"\u002Ffavicons\u002Fmstile-310x310.png"}],"link":[{"rel":"apple-touch-icon-precomposed","sizes":"57x57","href":"\u002Ffavicons\u002Fapple-touch-icon-57x57.png"},{"rel":"apple-touch-icon-precomposed","sizes":"60x60","href":"\u002Ffavicons\u002Fapple-touch-icon-60x60.png"},{"rel":"apple-touch-icon-precomposed","sizes":"72x72","href":"\u002Ffavicons\u002Fapple-touch-icon-72x72.png"},{"rel":"apple-touch-icon-precomposed","sizes":"76x76","href":"\u002Ffavicons\u002Fapple-touch-icon-76x76.png"},{"rel":"apple-touch-icon-precomposed","sizes":"114x114","href":"\u002Ffavicons\u002Fapple-touch-icon-114x114.png"},{"rel":"apple-touch-icon-precomposed","sizes":"120x120","href":"\u002Ffavicons\u002Fapple-touch-icon-120x120.png"},{"rel":"apple-touch-icon-precomposed","sizes":"144x144","href":"\u002Ffavicons\u002Fapple-touch-icon-144x144.png"},{"rel":"apple-touch-icon-precomposed","sizes":"152x152","href":"\u002Ffavicons\u002Fapple-touch-icon-152x152.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicons\u002Ffavicon-16x16.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicons\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Ffavicons\u002Ffavicon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"128x128","href":"\u002Ffavicons\u002Ffavicon-128x128.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"196x196","href":"\u002Ffavicons\u002Ffavicon-196x196.png"}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

