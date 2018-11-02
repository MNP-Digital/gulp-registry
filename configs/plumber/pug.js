const logger = require("fancy-log");
const chalk = require("chalk");

module.exports = {
  errorHandler(err) {
    let msg = err.message.split("\n");
    logger(chalk.red(msg.shift()));
    logger(chalk.yellow(msg.pop()));
    msg.forEach(m => {
      logger(chalk.blue(m));
    });
    this.emit("end");
  }
};
