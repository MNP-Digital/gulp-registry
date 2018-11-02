const logger = require("fancy-log");
const chalk = require("chalk");

module.exports = {
  errorHandler(err) {
    if (!err.hasOwnProperty("messageFormatted")) {
      logger(chalk.red(err.message.split("\n").shift()));
      this.emit("end");
      return;
    }
    let msg = err.messageFormatted.split("\n");
    logger(chalk.red(msg.shift()));
    msg.splice(0, 2).forEach(m => {
      logger(chalk.yellow(m));
    });
    msg.forEach(m => {
      logger(chalk.blue(m));
    });
    this.emit("end");
  }
};
