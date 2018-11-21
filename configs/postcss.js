const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const stylelint = require("stylelint");
const reporter = require("postcss-reporter");

module.exports = function(minify = true) {
  const processors = [
    autoprefixer,
    postcssImport,
    stylelint({
      config: require("stylelint-config-recommended")
    }),
    reporter({ clearAllMessages: true })
  ];

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
