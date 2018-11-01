const util = require("util");
const logger = require("fancy-log");
const chalk = require("chalk");

const DefaultRegistry = require("undertaker-registry");

const tasks = require("require-directory")(module, "./tasks");

function CommonRegistry(opts = {}) {
  DefaultRegistry.call(this);

  this.defaults = {
    port: 9001,
    buildDir: "./dist",
    deploy: {
      destinationPath: "",
      sources: []
    }
  };

  this.config = Object.assign({}, this.defaults, opts);
}

util.inherits(CommonRegistry, DefaultRegistry);

CommonRegistry.prototype.init = function(taker) {
  logger(`Using ${chalk.blue(`T4G Gulp Registry`)}! Available tasks:`);

  for (let t in tasks) {
    logger(chalk.green(`- ${t}`));
    taker.task(t, tasks[t].bind(this));
  }
};

module.exports = CommonRegistry;
