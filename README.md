# T4G - Gulp Task Registry

<p align="center">
  <a href="https://www.npmjs.com/package/@t4gltd/gulp-registry">
    <img alt="npm version" src="https://img.shields.io/npm/v/@t4gltd/gulp-registry.svg?style=flat-square">
  </a>
  <a href="https://david-dm.org/t4gltd/gulp-registry">
    <img alt="npm version" src="https://img.shields.io/david/dev/t4gltd/gulp-registry.svg?style=flat-square">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://twitter.com/T4G">
    <img alt="Follow+T4G+on+Twitter" src="https://img.shields.io/twitter/follow/t4g.svg?label=follow+T4G&style=flat-square">
  </a>
</p>

We use this custom Gulp registry for some of our front-end development efforts at [T4G].

## What does this do?

From the [official Gulp docs](https://github.com/gulpjs/gulp/blob/master/docs/api/registry.md), a registry "can provide shared tasks or augmented functionality". This means your project's gulpfile can be small; repeated tasks and configurations that are common between projects can be maintained centrally.

You can [read more about Custom Registries](https://github.com/gulpjs/undertaker-registry#custom-registries) in the docs for `undertaker-registry`, the default registry that Gulp 4 uses internally.

[t4g]: https://www.t4g.com

## Example usage

```js
// Require your other modules
// ...

// Some custom configuration
let config = {
  env: process.env.NODE_ENV
};

// Import your registry prototype
const taskReg = require("@t4gltd/gulp-registry");
// Create an instance of your registry
const registry = new taskReg(config);
// Attach your custom registry
gulp.registry(registry);
// The registry will return its own config object.
// You can re-use this augmented config object in other tasks below.
//   config = registry.config;

// You also have access to some utility functions.
//   utils = registry.utils

// You can now refer to the tasks provided by the registry!

// e.g. Define your own tasks, e.g. css, images, html

gulp.task("build", gulp.parallel(css, images, html));

gulp.task("default", gulp.series("clean", "build", "serve"));

gulp.task("deploy", gulp.series("build", "deploy"));
```

## Tasks

`clean`

Clean (empty) the directory defined by the `buildDir` option.

`serve`

Start a static HTTP server and serve the `buildDir` on the specified `port`.

`deploy`

After a build is complete, move certain files (based on provided glob patterns) to another location.

## Options

`buildDir`

The root directory of the generated assets, and the root directory of the static HTTP server. (default: "./dist")

`port`

The port on which to to serve the static HTTP server. (default: 9001)

`deploy`

A configuration option consisting of two properties:

- `destinationPath` - the path to the backend solution relative to your project root
- `sources` - an array of objects, each consisting of a `source` (glob pattern) and `destination` (directory joined onto the end of `destinationPath`)

## Utility functions

Some useful utility functions are availble on the `utils` property of the registry prototype.

`collectImports({ target, sourceDir, format, [filterFn] })`

Recursively search a `sourceDir` directory for files, and write each result as a new line to a `target` file, in the given string `format`. The `{}` in the `format` string will be replaced with the path to each file found in `sourceDir`, relative to `target`. Only files with the same extension as `target` will be included. You can optionally supply a further filtering function with the `filterFn` option.

```js
registry.utils.collectImports({
  target: `./src/css/imports/_components.scss`,
  sourceDir: `./src/components/`,
  format: `@import "{}";`,
  filterFn: file => true
});
```

## Configuration objects

Some recommended configuration is included that doesn't usually change between projects. Each configuration object is stored in its own file and is collected by `require-directory`, returned in the same hierarchy as the directories in `/configs`:

```js
function sass() {
  return gulp.src(`./src/css/main.scss`)
    // Config object exported from /configs/plumber/sass.js
    .pipe($.plumber(registry.config.plumber.sass))
    // Config function exported from /configs/postcss.js
    .pipe($.postcss(registry.config.postcss(minify, {
      autoprefixer: { grid: "no-autoplace" }
    })))
    .pipe(gulp.dest(`./dist/css`))
}
```

### PostCSS configuration

The PostCSS configuration is exported as a function - `registry.config.postcss()` in the example above. It takes a `minify` argument (default: `true`) and an optional `options` argument (to override our opinionated PostCSS plugin defaults), and returns the configuration object.

You can pass an `options` object as the second argument of the `postcss` configuration function in the format below, with property names matching processor names (hyphenated package names converted to pascalCase):

```js
{
  stylelint: {},
  postcssImport: {},
  autoprefixer: {},
  postcssReporter: {},
  cssnano: {}
}
```

In the `sass` gulp task above, we are passing a `{ grid: "no-autoplace" }` options object to the `autoprefixer` processor.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct][cc]. By participating in this project you agree to abide by its terms.

[cc]: https://github.com/T4GLTD/gulp-registry/blob/master/CODE_OF_CONDUCT.md

## License

This project is available under the MIT license. See the [LICENSE] file for more info.

[license]: https://github.com/T4GLTD/gulp-registry/blob/master/LICENSE.md
