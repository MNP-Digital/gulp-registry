var fs = require("fs");
var http = require("http");
var util = require("util");

var del = require("del");
var logger = require("fancy-log");
var chalk = require("chalk");
var ecstatic = require("ecstatic");
var DefaultRegistry = require("undertaker-registry");

function CommonRegistry(opts) {
  DefaultRegistry.call(this);

  opts = opts || {};

  this.config = {
    port: opts.port || 9001,
    buildDir: opts.buildDir || "./dist"
  };
}

util.inherits(CommonRegistry, DefaultRegistry);

CommonRegistry.prototype.init = function(taker) {
  var port = this.config.port;
  var buildDir = this.config.buildDir;

  taker.task("clean", function(cb) {
    del.bind(null, [buildDir], {
      dot: true
    });
    cb();
  });

  taker.task("serve", function(cb) {
    http.createServer(ecstatic({ root: buildDir })).listen(port, function() {
      logger(chalk.green("⇒ Server started at http://localhost:" + port));
      cb();
    });
  });
};

module.exports = CommonRegistry;
