const fs = require("fs");
const path = require("path");
const readdir = require("fs-readdir-recursive");
const mkdirp = require("mkdirp");
const format = require("string-format");

module.exports = function(o) {
  mkdirp.sync(path.dirname(o.target));
  fs.writeFileSync(o.target, "");
  let ext = path.extname(o.target);

  if (!o.hasOwnProperty("filterFn")) {
    o.filterFn = () => true;
  }

  readdir(o.sourceDir)
    .filter(file => path.extname(file) === ext)
    .filter(o.filterFn)
    .forEach(file => {
      let importPath = path.posix.join(
        path.posix.relative(path.dirname(o.target), o.sourceDir),
        file.replace(ext, "")
      );
      fs.appendFileSync(o.target, format(`${o.format}\n`, importPath));
    });

  return;
};
