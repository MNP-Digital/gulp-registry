const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

module.exports = function(minify = true) {
  const processors = [autoprefixer, postcssImport];

  if (minify) {
    processors.push(
      cssnano({
        safe: true,
        mergeLonghand: false,
        mergeRules: false,
        zIndex: false
      })
    );
  }

  return { processors };
};
