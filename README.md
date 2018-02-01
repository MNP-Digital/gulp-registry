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

Common Gulp tasks, to be added via the `registry()` method in the Gulp 4 API. ([See the docs](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#gulpregistryregistry))

## Usage

```js
// Require your other modules
// ...

var TaskRegistry = require("@t4gltd/gulp-registry");

// Tell gulp about our registry, pass options (defaults shown below)
gulp.registry(new TaskRegistry({
  buildDir: "./dist",
  port: 9001
}));

// `clean` and `serve` tasks are now available to you!

// e.g. Define `css`, `images`, and `html` functions
// ...

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel(css, images, html),
    "serve"
  )
);
```

## Tasks

`clean`

Clean (empty) the directory defined by the `buildDir` option.

`serve`

Start a static HTTP server and serve the `buildDir` on the specified `port`.

## Options

`buildDir`

The root directory of the generated assets, and the root directory of the static HTTP server. (default: "./dist")

`port`

The port on which to to serve the static HTTP server. (default: 9001)

## License

This project is available under the MIT license. See the LICENSE file for more info.
