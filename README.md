<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.vuedarkmode.com" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/LeCoupa/vuedarkmode/master/static/images/docs/banner.svg?sanitize=true">
  </a>
</p>

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

- **BaseAlert**: [documentation](https://www.vuedarkmode.com/#baseAlert) | [source code](/components/darkmode/base/BaseAlert.vue).

- **BaseAvatar**: [documentation](https://www.vuedarkmode.com/#baseAvatar) | [source code](/components/darkmode/base/BaseAvatar.vue).

- **BaseBadge**: [documentation](https://www.vuedarkmode.com/#baseBadge) | [source code](/components/darkmode/base/BaseBadge.vue).

- **BaseButton**: [documentation](https://www.vuedarkmode.com/#baseButton) | [source code](/components/darkmode/base/BaseButton.vue).

- **BaseDivider**: [documentation](https://www.vuedarkmode.com/#baseDivider) | [source code](/components/darkmode/base/BaseDivider.vue).

- **BaseHeading**: [documentation](https://www.vuedarkmode.com/#baseHeading) | [source code](/components/darkmode/base/BaseHeading.vue).

- **BaseIcon**: [documentation](https://www.vuedarkmode.com/#baseIcon) | [source code](/components/darkmode/base/BaseIcon.vue).

- **BaseListItem**: [documentation](https://www.vuedarkmode.com/#baseListItem) | [source code](/components/darkmode/base/BaseListItem.vue).

- **BaseProgressBar**: [documentation](https://www.vuedarkmode.com/#baseProgressBar) | [source code](/components/darkmode/base/BaseProgressBar.vue).

- **BaseSocialLogin**: [documentation](https://www.vuedarkmode.com/#baseSocialLogin) | [source code](/components/darkmode/base/BaseSocialLogin.vue).

- **BaseSpinner**: [documentation](https://www.vuedarkmode.com/#baseSpinner) | [source code](/components/darkmode/base/BaseSpinner.vue).

- **BaseToast**: [documentation](https://www.vuedarkmode.com/#baseToast) | [source code](/components/darkmode/base/BaseToast.vue).

### Form Components

- **FieldCheckbox**: [documentation](https://www.vuedarkmode.com/#fieldCheckbox) | [source code](/components/darkmode/form/FieldCheckbox.vue).

- **FieldFile**: [documentation](https://www.vuedarkmode.com/#fieldFile) | [source code](/components/darkmode/form/FieldFile.vue).

- **FieldInput**: [documentation](https://www.vuedarkmode.com/#fieldInput) | [source code](/components/darkmode/form/FieldInput.vue).

- **FieldRadio**: [documentation](https://www.vuedarkmode.com/#fieldRadio) | [source code](/components/darkmode/form/FieldRadio.vue).

- **FieldSelect**: [documentation](https://www.vuedarkmode.com/#fieldSelect) | [source code](/components/darkmode/form/FieldSelect.vue).

- **FieldTabs**: [documentation](https://www.vuedarkmode.com/#fieldTabs) | [source code](/components/darkmode/form/FieldTabs.vue).

- **FieldTextarea**: [documentation](https://www.vuedarkmode.com/#fieldTextarea) | [source code](/components/darkmode/form/FieldTextarea.vue).

- **FieldToggle**: [documentation](https://www.vuedarkmode.com/#fieldToggle) | [source code](/components/darkmode/form/FieldToggle.vue).

## Who is using Vue Dark Mode?

Are you using Vue Dark Mode on one of your projects? [Tweet me](https://twitter.com/lecoupa) so we can add your logo here. 👻

## Contributing

You are more than welcome to contribute to Vue Dark Mode. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/1658644?s=460&v=4" width="100px;"/><br /><sub><b>Julien Le Coupanec</b></sub>](https://github.com/LeCoupa)<br />[💬](#question-kentcdodds "Answering Questions") [📖](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds "Documentation") [👀](#review-kentcdodds "Reviewed Pull Requests") [📢](#talk-kentcdodds "Talks") | [<img src="https://avatars0.githubusercontent.com/u/16168285?s=460&v=4" width="100px;"/><br /><sub><b>Nada Rifki</b></sub>](https://github.com/nrifki)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=bogas04 "Documentation") [👀](#review-bogas04 "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/22016005?s=460&v=4" width="100px;"/><br /><sub><b>Igor Guastalla</b></sub>](https://github.com/guastallaigor)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=ben-eb "Documentation") [👀](#review-ben-eb "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/2037007?v=3" width="100px;"/><br /><sub><b>James Monger</b></sub>](https://github.com/Jameskmonger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=Jameskmonger "Documentation") | [<img src="https://avatars.githubusercontent.com/u/3869412?v=3" width="100px;"/><br /><sub><b>Jeroen Engels</b></sub>](https://github.com/jfmengels)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels "Documentation") [👀](#review-jfmengels "Reviewed Pull Requests") [🔧](#tool-jfmengels "Tools") | [<img src="https://avatars.githubusercontent.com/u/4249591?v=3" width="100px;"/><br /><sub><b>Chris Simpkins</b></sub>](https://github.com/chrissimpkins)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=chrissimpkins "Documentation") [👀](#review-chrissimpkins "Reviewed Pull Requests") | [<img src="https://avatars.githubusercontent.com/u/153481?v=3" width="100px;"/><br /><sub><b>F. Hemberger</b></sub>](https://github.com/fhemberger)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=fhemberger "Documentation") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/3982200?v=3" width="100px;"/><br /><sub><b>Daniel Kraft</b></sub>](https://github.com/frigginglorious)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=frigginglorious "Documentation") | [<img src="https://avatars.githubusercontent.com/u/8503331?v=3" width="100px;"/><br /><sub><b>Mayank Badola</b></sub>](https://github.com/mbad0la)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mbad0la "Documentation") [🔧](#tool-mbad0la "Tools") | [<img src="https://avatars.githubusercontent.com/u/5244986?v=3" width="100px;"/><br /><sub><b>Marco Biedermann</b></sub>](https://www.marcobiedermann.com)<br />[🎨](#design-marcobiedermann "Design") | [<img src="https://avatars.githubusercontent.com/u/22768990?v=3" width="100px;"/><br /><sub><b>Itai Steinherz</b></sub>](https://github.com/itaisteinherz)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=itaisteinherz "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/305339?v=3" width="100px;"/><br /><sub><b>Patrick Connolly</b></sub>](http://nodescription.net)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=patcon "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/3028124?v=4" width="100px;"/><br /><sub><b>Nikola Đuza</b></sub>](http://nikolalsvk.github.io/)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=nikolalsvk "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/5346497?v=4" width="100px;"/><br /><sub><b>Demian Dekoninck</b></sub>](https://dem.be)<br />[💻](https://github.com/kentcdodds/all-contributors/commits?author=DemianD "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/23029903?v=4" width="100px;"/><br /><sub><b>Michael Peyper</b></sub>](https://github.com/mpeyper)<br />[📖](https://github.com/kentcdodds/all-contributors/commits?author=mpeyper "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/23284276?v=4" width="100px;"/><br /><sub><b>Matheus Rocha Vieira</b></sub>](http://matheu.srv.br)<br />[🌍](#translation-MatheusRV "Translation") [💻](https://github.com/kentcdodds/all-contributors/commits?author=MatheusRV "Code") [📖](https://github.com/kentcdodds/all-contributors/commits?author=MatheusRV "Documentation") |

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Vue Dark Mode is [MIT licensed](LICENSE).

## Cross-Browsing

Vue Dark Mode is using [BrowserStack](https://www.browserstack.com/) to make sure our components render properly on modern browsers.
<img alt="BrowserStack Logo" width="200px" src="/static/images/docs/browserstack.png">
