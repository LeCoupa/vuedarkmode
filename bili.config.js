module.exports = {
  banner: true,
  format: ["cjs", "es", "umd-min"],
  input: ["./lib/*.js"],
  filename: "[name][suffix].js",
  plugins: ["vue"]
};
