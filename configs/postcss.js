const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const stylelint = require("stylelint");
const postcssReporter = require("postcss-reporter");

module.exports = function(minify = true, options = {}) {
  const processors = [
    stylelint({
      config: require("stylelint-config-recommended"),
      ...options.stylelint,
      rules: {
        "font-family-no-missing-generic-family-keyword": null,
        "no-descending-specificity": null,
        "no-duplicate-selectors": null,
        "no-empty-source": null,
        ...(options.stylelint && options.stylelint.rules)
      }
    }),
    postcssImport({
      ...options.postcssImport
    }),
    autoprefixer({
      ...options.autoprefixer
    }),
    postcssReporter({
      clearAllMessages: true,
      ...options.reporter
    })
  ];

  if (minify) {
    processors.push(
      cssnano({
        safe: true,
        mergeLonghand: false,
        mergeRules: false,
        zIndex: false,
        ...options.cssnano
      })
    );
  }

  return { processors };
};
