const fs = require('fs');
const path = require('path');
const Nunjucks = require('nunjucks');
const ErrorOverlayPlugin = require('eleventy-plugin-error-overlay');

const moment = require("moment");
const now = new Date();

module.exports = function(eleventyConfig) {
  const manifestPath = path.resolve(__dirname, 'dist/manifest.json');
  
  // Passthrough copy
  // eleventyConfig.addPassthroughCopy('src/images');
  // eleventyConfig.addPassthroughCopy('src/js');

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader('')
  );
  // eleventyConfig.setDynamicPermalinks(false);
  eleventyConfig.setLibrary('njk', nunjucksEnvironment);

  // Plugins
  // Shows error name, message, and fancy stacktrace
  eleventyConfig.addPlugin(ErrorOverlayPlugin);

  // date filter
  eleventyConfig.addFilter("date", function(date, format) {
    return moment(date).format(format);
  });

  // Sometimes handy for making sure your browser refreshes the CSS
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addWatchTarget("src/js/**/**/*.js")
  eleventyConfig.addWatchTarget("src/css/**/**/*.css")

  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    files: [
      "src/js/**/**/*.js",
      "src/css/**/**/*.css",
    ],
    ghostMode: false,
    port: 3000,
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: "_includes",
      layouts: "_layouts"
    },
    passthroughFileCopy: true
  };
};