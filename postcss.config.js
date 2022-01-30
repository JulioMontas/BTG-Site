const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      browsers: "last 2 versions",
      stage: 3,
      features: {
        "nesting-rules": true
      }
    }),
  ],
})
