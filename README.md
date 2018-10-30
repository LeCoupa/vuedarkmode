<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.vuedarkmode.com" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/LeCoupa/vuedarkmode/master/static/images/docs/banner.svg?sanitize=true">
  </a>
</p>

## Documentation

You can browse the documentation for VueDarkMode [on the website](https://www.vuedarkmode.com/).

## Installation

```
npm install vuedarkmode

# Or if you prefer using yarn
yarn add vuedarkmode
```

### Vue.js

In your `main.js` file:

```js
import Vue from "vue";
import VueDarkMode from "vuedarkmode";

Vue.use(VueDarkMode);
```

### Nuxt.js

Create a new plugin in `plugins/vuedarkmode.js`:

```js
import Vue from "vue";
import VueDarkMode from "vuedarkmode";

Vue.use(VueDarkMode);
```

Add this new plugin to `nuxt.config.js`. Don't forget to set ssr to false as VueDarkMode only works in the browser for the time being.

```js
{
  // ...
  plugins: [{ src: "@/plugins/vuedarkmode.js", ssr: false }];
}
```

### CDN

Get the latest version from [jsdelivr](https://www.jsdelivr.com/), and import the JavaScript file in your page.

```html
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuedarkmode@0.1/dist/vuedarkmode.min.js"></script>
```

We recommend our users to lock VueDarkMode's version when using CDN. Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous because major versions usually come with breaking changes. Only do this if you really know what you are doing. [Please refer to jsdelivr.com](https://www.jsdelivr.com/features) for more information.

## Available Components

We are releasing new components on a monthly basis. [Subscribe to our newsletter](http://eepurl.com/dLlKBM) to stay in touch with coming releases.

### Base Components

- **BaseAvatar**: [source code](/components/darkmode/base/BaseAvatar.vue).

- **BaseBadge**: [source code](/components/darkmode/base/BaseBadge.vue).

- **BaseButton**: [source code](/components/darkmode/base/BaseButton.vue).

- **BaseDivider**: [source code](/components/darkmode/base/BaseDivider.vue).

- **BaseHeading**: [source code](/components/darkmode/base/BaseHeading.vue).

- **BaseIcon**: [source code](/components/darkmode/base/BaseIcon.vue).

- **BaseProgressBar**: [source code](/components/darkmode/base/BaseProgressBar.vue).

- **BaseSocialLogin**: [source code](/components/darkmode/base/BaseSocialLogin.vue).

### Form Components

- **FieldCheckbox**: [source code](/components/darkmode/form/FieldCheckbox.vue).

- **FieldFile**: [source code](/components/darkmode/form/FieldFile.vue).

- **FieldInput**: [source code](/components/darkmode/form/FieldInput.vue).

- **FieldRadio**: [source code](/components/darkmode/form/FieldRadio.vue).

- **FieldSelect**: [source code](/components/darkmode/form/FieldSelect.vue).

- **FieldTabs**: [source code](/components/darkmode/form/FieldTabs.vue).

- **FieldTextarea**: [source code](/components/darkmode/form/FieldTextarea.vue).

- **FieldToggle**: [source code](/components/darkmode/form/FieldToggle.vue).

## Contributing

You are more than welcome to contribute to Vue Dark Mode. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

## License

VueDarkMode is [MIT licensed](LICENSE).
