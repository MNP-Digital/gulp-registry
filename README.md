# T4G - Gulp Registry

Common Gulp tasks, to be added via the `registry()` method in the Gulp 4 API.

## Usage

```js
// Require your other modules
// ...

var T4GGulpRegistry = require("@technology4growth/gulp-registry");

gulp.registry(new T4GGulpRegistry({
  buildDir: "./dist",
  port: 9001
}));

// `clean` and `serve` tasks are now available to you!

// Define `css`, `images`, and `html` functions
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

## Available tasks

`clean`

Clean the `buildDir`.

`serve`

Start a simple HTTP server and serve the `buildDir` on the specified `port`.