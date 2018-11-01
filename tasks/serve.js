const logger = require("fancy-log");
const chalk = require("chalk");

const http = require("http");
const ecstatic = require("ecstatic");

module.exports = function(done) {
  http
    .createServer(ecstatic({ root: this.config.buildDir }))
    .listen(this.config.port, () => {
      logger(
        chalk.green("⇒ Server started at http://localhost:" + this.config.port)
      );
      done();
    });
};
