<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.vuedarkmode.com" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/LeCoupa/vuedarkmode/master/static/images/docs/banner.svg?sanitize=true">
  </a>
</p>

<h2 align="center">Vue Dark Mode</h2>

<p align="center">A minimalist dark design system for Vue.js 🎨</p>

## Documentation

You can find the VueDarkMode documentation [on the website](https://www.vuedarkmode.com/).

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
  plugins: [
    { src: "@/plugins/vuedarkmode.js", ssr: false }
  ],
}
```

## Available Components

We are releasing new components on monthly basis. [Subscribe to our newsletter](http://eepurl.com/dLlKBM) to stay in touch with coming releases.

### Base Components

- BaseAvatar
- BaseBadge
- BaseButton
- BaseDivider
- BaseHeading
- BaseIcon
- BaseLoader
- BaseSocialLogin

### Form Components

- FieldCheckbox
- FieldFile
- FieldInput
- FieldRadio
- FieldSelect
- FieldTabs
- FieldTextarea
- FieldToggle

## Contributing

You are more than welcome to contribute to Vue Dark Mode. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

## License

VueDarkMode is [MIT licensed](LICENSE).
