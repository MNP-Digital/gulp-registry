const fs = require("fs");
const path = require("path");
const readdir = require("fs-readdir-recursive");
const mkdirp = require("mkdirp");
const format = require("string-format");
const slash = require("slash");

module.exports = function(o) {
  mkdirp.sync(path.dirname(o.target));
  fs.writeFileSync(o.target, "");

  if (!o.hasOwnProperty("filterFn")) {
    o.filterFn = () => true;
  }

  const ext = path.extname(o.target);
  readdir(o.sourceDir, o.filterFn)
    .filter(file => path.extname(file) === ext)
    .forEach(file => {
      fs.appendFileSync(
        o.target,
        format(
          `${o.format}\n`,
          path.posix.join(
            path.posix.relative(path.dirname(o.target), slash(o.sourceDir)),
            slash(file.replace(ext, ""))
          )
        )
      );
    });

  return;
};
