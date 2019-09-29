<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.vuedarkmode.com" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/LeCoupa/vuedarkmode/master/docs/static/images/docs/banner.svg?sanitize=true">
  </a>
</p>

[![npm](https://img.shields.io/npm/v/vuedarkmode.svg)](https://www.npmjs.com/package/vuedarkmode)
[![npm](https://img.shields.io/npm/dm/vuedarkmode.svg)](https://npm-stat.com/charts.html?package=vuedarkmode)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/lecoupa/vuedarkmode.svg)](http://isitmaintained.com/project/lecoupa/vuedarkmode "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/lecoupa/vuedarkmode.svg)](http://isitmaintained.com/project/lecoupa/vuedarkmode "Percentage of issues still open")

## Documentation

You can browse the documentation for Vue Dark Mode [on the website](https://www.vuedarkmode.com/).

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

Add this new plugin to `nuxt.config.js`. Don't forget to set ssr to false as Vue Dark Mode only works in the browser for the time being.

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
<script src="https://cdn.jsdelivr.net/npm/vuedarkmode@latest/dist/vuedarkmode.min.js"></script>
```

We recommend our users to lock Vue Dark Mode's version when using CDN. Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous because major versions usually come with breaking changes. Only do this if you really know what you are doing. [Please refer to jsdelivr.com](https://www.jsdelivr.com/features) for more information.

## Available Components

We are releasing new components on a monthly basis. [Subscribe to our newsletter](http://eepurl.com/dLlKBM) to stay in touch with coming releases.

### Base Components

- **BaseAlert**: [documentation](https://www.vuedarkmode.com/#baseAlert) | [source code](/lib/components/base/BaseAlert.vue).

- **BaseAvatar**: [documentation](https://www.vuedarkmode.com/#baseAvatar) | [source code](/lib/components/base/BaseAvatar.vue).

- **BaseBadge**: [documentation](https://www.vuedarkmode.com/#baseBadge) | [source code](/lib/components/base/BaseBadge.vue).

- **BaseButton**: [documentation](https://www.vuedarkmode.com/#baseButton) | [source code](/lib/components/base/BaseButton.vue).

- **BaseDivider**: [documentation](https://www.vuedarkmode.com/#baseDivider) | [source code](/lib/components/base/BaseDivider.vue).

- **BaseHeading**: [documentation](https://www.vuedarkmode.com/#baseHeading) | [source code](/lib/components/base/BaseHeading.vue).

- **BaseIcon**: [documentation](https://www.vuedarkmode.com/#baseIcon) | [source code](/lib/components/base/BaseIcon.vue).

* **BaseProgressBar**: [documentation](https://www.vuedarkmode.com/#baseProgressBar) | [source code](/lib/components/base/BaseProgressBar.vue).

* **BaseSocialButton**: [documentation](https://www.vuedarkmode.com/#baseSocialButton) | [source code](/lib/components/base/BaseSocialButton.vue).

* **BaseSpinner**: [documentation](https://www.vuedarkmode.com/#baseSpinner) | [source code](/lib/components/base/BaseSpinner.vue).

* **BaseToast**: [documentation](https://www.vuedarkmode.com/#baseToast) | [source code](/lib/components/base/BaseToast.vue).

### Form Components

- **FieldCheckbox**: [documentation](https://www.vuedarkmode.com/#fieldCheckbox) | [source code](/lib/components/form/FieldCheckbox.vue).

- **FieldFile**: [documentation](https://www.vuedarkmode.com/#fieldFile) | [source code](/lib/components/form/FieldFile.vue).

- **FieldInput**: [documentation](https://www.vuedarkmode.com/#fieldInput) | [source code](/lib/components/form/FieldInput.vue).

- **FieldRadio**: [documentation](https://www.vuedarkmode.com/#fieldRadio) | [source code](/lib/components/form/FieldRadio.vue).

- **FieldSelect**: [documentation](https://www.vuedarkmode.com/#fieldSelect) | [source code](/lib/components/form/FieldSelect.vue).

- **FieldTabs**: [documentation](https://www.vuedarkmode.com/#fieldTabs) | [source code](/lib/components/form/FieldTabs.vue).

- **FieldTextarea**: [documentation](https://www.vuedarkmode.com/#fieldTextarea) | [source code](/lib/components/form/FieldTextarea.vue).

- **FieldToggle**: [documentation](https://www.vuedarkmode.com/#fieldToggle) | [source code](/lib/components/form/FieldToggle.vue).

## Contributing

You are more than welcome to contribute to Vue Dark Mode. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

The documentation is available in the `docs` folder. The Vue Dark Mode components are available in the `lib` folder.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/1658644?s=460&v=4" width="120px;"/><br /><sub><b>Julien Le Coupanec</b></sub>](https://github.com/LeCoupa)<br /> | [<img src="https://avatars0.githubusercontent.com/u/16168285?s=460&v=4" width="120px;"/><br /><sub><b>Nada Rifki</b></sub>](https://www.nadarifki.com/)<br /> | [<img src="https://avatars3.githubusercontent.com/u/22016005?s=460&v=4" width="120px;"/><br /><sub><b>Igor Guastalla</b></sub>](https://github.com/guastallaigor)<br /> | [<img src="https://avatars1.githubusercontent.com/u/1385263?s=460&v=4" width="120px;"/><br /><sub><b>Yaël Guilloux</b></sub>](https://github.com/Tahul)<br /> |
| :---: | :---: | :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Vue Dark Mode is [MIT licensed](LICENSE).

## Cross-Browsing

Vue Dark Mode is using [BrowserStack](https://www.browserstack.com/) to make sure our components render properly on modern browsers.

<img alt="BrowserStack Logo" width="200px" src="/docs/static/images/docs/browserstack.png">
