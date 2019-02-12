"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option("componentName", {
      description: "Component name",
      type: String
    });
    this.option("path", { description: "create path", type: String });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the magnificent ${chalk.red(
          "generator-logsign"
        )} generator!`
      )
    );

    // const prompts = [
    //   {
    //     type: "input",
    //     name: "path",
    //     message: "Component path?"
    //   },
    //   {
    //     type: "input",
    //     name: "componentName",
    //     message: "Component name?"
    //   }
    // ];
    //
    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const compName = capitalizeFirstLetter(this.options.componentName);

    const vars = {
      componentName: compName
    };

    this.fs.copyTpl(
      this.templatePath("index.ejs"),
      this.destinationPath(`${this.options.path}/${compName}/index.ts`),
      vars
    );
    this.fs.copyTpl(
      this.templatePath("Component.ejs"),
      this.destinationPath(`${this.options.path}/${compName}/${compName}.tsx`),
      vars
    );
    this.fs.copyTpl(
      this.templatePath("interactor.ejs"),
      this.destinationPath(
        `${this.options.path}/${compName}/${compName}Interactor.ts`
      ),
      vars
    );
    this.fs.copyTpl(
      this.templatePath("stateless.test.ejs"),
      this.destinationPath(
        `${this.options.path}/${compName}/${compName}.test.tsx`
      ),
      vars
    );
  }

  install() {}
};
