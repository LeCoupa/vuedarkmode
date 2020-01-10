<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.growthbunker.dev/vuedarkmode" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/growthbunker/vuedarkmode/master/src/images/vuedarkmode.jpg">
  </a>
</p>

[![npm](https://img.shields.io/npm/v/@growthbunker/vuedarkmode.svg)](https://www.npmjs.com/package/@growthbunker/vuedarkmode)
[![npm](https://img.shields.io/npm/dm/@growthbunker/vuedarkmode.svg)](https://npm-stat.com/charts.html?package=@growthbunker/vuedarkmode)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/growthbunker/vuedarkmode.svg)](http://isitmaintained.com/project/growthbunker/vuedarkmode "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/growthbunker/vuedarkmode.svg)](http://isitmaintained.com/project/growthbunker/vuedarkmode "Percentage of issues still open")
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/growthbunker/vuedarkmode/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ae3d4112-1c84-4868-b4eb-271c3136ede6/deploy-status)](https://app.netlify.com/sites/growthbunker/deploys)

## Documentation

You can browse the documentation for Vue Dark Mode [on the website](https://www.growthbunker.dev/vuedarkmode).

## Installation

```
npm install @growthbunker/vuedarkmode

# Or if you prefer using yarn
yarn add @growthbunker/vuedarkmode
```

### Vue.js

In your `main.js` file:

```js
import Vue from "vue"
import VueDarkMode from "@growthbunker/vuedarkmode"

Vue.use(VueDarkMode)
```

### Nuxt.js

Create a new plugin in `plugins/vuedarkmode.js`:

```js
import Vue from "vue"
import VueDarkMode from "@growthbunker/vuedarkmode"

Vue.use(VueDarkMode)
```

Add this new plugin to `nuxt.config.js`.

```js
module.exports = {
  // ...
  plugins: [{ src: "@/plugins/vuedarkmode.js" }];
}
```

### CDN

Get the latest version from [jsdelivr](https://www.jsdelivr.com/), and import the JavaScript file in your page.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuedarkmode@latest/dist/vuedarkmode.min.js"></script>
```

We recommend our users to lock Vue Dark Mode's version when using CDN. Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous because major versions usually come with breaking changes. Only do this if you really know what you are doing. [Please refer to jsdelivr.com](https://www.jsdelivr.com/features) for more information.

## Available Components

We are releasing new components on a monthly basis. [Subscribe to our newsletter](http://eepurl.com/dLlKBM) to stay in touch with coming releases.

### Base Components

- **BaseAlert**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseAlert) | [source code](/src/components/base/BaseAlert.vue).

- **BaseAvatar**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseAvatar) | [source code](/src/components/base/BaseAvatar.vue).

- **BaseBadge**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseBadge) | [source code](/src/components/base/BaseBadge.vue).

- **BaseButton**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseButton) | [source code](/src/components/base/BaseButton.vue).

- **BaseDivider**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseDivider) | [source code](/src/components/base/BaseDivider.vue).

- **BaseHeading**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseHeading) | [source code](/src/components/base/BaseHeading.vue).

- **BaseIcon**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseIcon) | [source code](/src/components/base/BaseIcon.vue).

* **BaseProgressBar**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseProgressBar) | [source code](/src/components/base/BaseProgressBar.vue).

* **BaseSpinner**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseSpinner) | [source code](/src/components/base/BaseSpinner.vue).

* **BaseToast**: [documentation](https://www.growthbunker.dev/vuedarkmode/#baseToast) | [source code](/src/components/base/BaseToast.vue).

### Field Components

- **FieldCheckbox**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldCheckbox) | [source code](/src/components/fields/FieldCheckbox.vue).

- **FieldImageUploader**: [documentation](https://www.growthbunker.dev/vuedarkmode/#FieldImageUploader) | [source code](/src/components/fields/FieldImageUploader.vue).

- **FieldInput**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldInput) | [source code](/src/components/fields/FieldInput.vue).

- **FieldInputNumber**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldInputNumber) | [source code](/src/components/fields/FieldInputNumber.vue).

- **FieldRadio**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldRadio) | [source code](/src/components/fields/FieldRadio.vue).

- **FieldSelect**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldSelect) | [source code](/src/components/fields/FieldSelect.vue).

- **FieldTabs**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldTabs) | [source code](/src/components/fields/FieldTabs.vue).

- **FieldTextarea**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldTextarea) | [source code](/src/components/fields/FieldTextarea.vue).

- **FieldToggle**: [documentation](https://www.growthbunker.dev/vuedarkmode/#fieldToggle) | [source code](/src/components/fields/FieldToggle.vue).

## Contributing

You are more than welcome to contribute to Vue Dark Mode. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

The documentation is available in the `docs` folder. The Vue Dark Mode components are available in the `lib` folder.

## License

Vue Dark Mode is [MIT licensed](LICENSE).

## Cross-Browsing

Vue Dark Mode is using [BrowserStack](https://www.browserstack.com/) to make sure our components render properly on modern browsers.

<img alt="BrowserStack Logo" width="200px" src="https://raw.githubusercontent.com/growthbunker/vuedarkmode/master/src/images/browserstack.png">
