const path = require("path");
const gulp = require("gulp");
const merge = require("merge-stream");

module.exports = function(done) {
  this.config.deploy.sources.forEach((v, k) => {
    merge().add(
      gulp
        .src(v.source)
        .pipe(
          gulp.dest(
            path.join(this.config.deploy.destinationPath, v.destination)
          )
        )
    );
  });

  done();
};
