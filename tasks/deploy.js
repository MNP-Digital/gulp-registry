const path = require("path");
const gulp = require("gulp");
const merge = require("merge-stream");

module.exports = function() {
  let merged = merge();

  this.config.deploy.sources.forEach(v => {
    merged.add(
      gulp
        .src(v.source)
        .pipe(
          gulp.dest(
            path.join(this.config.deploy.destinationPath, v.destination)
          )
        )
    );
  });

  return merged;
};
