const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const stylelint = require("stylelint");
const reporter = require("postcss-reporter");

module.exports = function(minify = true) {
  const processors = [
    stylelint({
      config: require("stylelint-config-recommended"),
      rules: {
        "font-family-no-missing-generic-family-keyword": null,
        "no-descending-specificity": null,
        "no-duplicate-selectors": null,
        "no-empty-source": null
      }
    }),
    postcssImport,
    autoprefixer,
    reporter({
      clearAllMessages: true
    })
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
