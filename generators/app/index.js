"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the rad ${chalk.red("generator-testtest")} generator!`)
    );
  }

  writing() {}

  install() {}
};
