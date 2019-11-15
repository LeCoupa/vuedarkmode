module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/strongly-recommended"
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/no-async-in-computed-properties": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
