const TailwindExtractor = content => {
  return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
};

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./dist/**/*.html'],
  whitelistPatterns: [/^js-/],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['css', 'html', 'vue'],
    },
  ],
  //defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-hexrgba'),
    require('postcss-custom-properties'),
    require('postcss-color-function'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [
        require('cssnano')({
          preset: 'default',
        })
      ]
      : []
  ],
}