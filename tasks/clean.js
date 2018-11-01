const del = require("del");

module.exports = function(done) {
  return del(this.config.buildDir);
};
