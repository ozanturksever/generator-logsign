"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const fs = require("fs");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const testTable = [
  {generator:"statelessComponent", componentName:"xxx"},
  {generator:"connectedComponent", componentName:"xxx"}
];
describe("generator-logsign", () => {
  testTable.forEach(subject => {
    const subjectName = subject.generator;
    const componentName = subject.componentName;
    const capitilizedComponentName = capitalizeFirstLetter(componentName);
    describe(`subjectName componentName: ${componentName}`, () => {
      const snapDir = `${__dirname}/snaps/${subjectName}`;
      let dir;
      beforeEach(async () => {
        dir = await helpers
          .run(path.join(__dirname, `../generators/${subjectName}`))
          .inTmpDir()
          .withOptions({ componentName: componentName, path: "src" });
      });
      it("should have index.js", () => {
        assert.fileContent(
          `${dir}/src/${capitilizedComponentName}/index.js`,
          fs.readFileSync(`${snapDir}/index.js`).toString()
        );
      });
      it("should have interactor", () => {
        assert.fileContent(
          `${dir}/src/${capitilizedComponentName}/${capitilizedComponentName}Interactor.js`,
          fs.readFileSync(`${snapDir}/interactor.js`).toString()
        );
      });
      it("should have component", () => {
        assert.fileContent(
          `${dir}/src/${capitilizedComponentName}/${capitilizedComponentName}.js`,
          fs.readFileSync(`${snapDir}/Component.js`).toString()
        );
      });
      it("should have component test", () => {
        assert.file(`${dir}/src/${capitilizedComponentName}/${capitilizedComponentName}.test.js`);
      });
    });
  });
});
