"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const fs = require("fs");

const testTable = ["statelessComponent", "connectedComponent"];
describe("generator-logsign", () => {
  testTable.forEach(subjectName => {
    describe(subjectName, () => {
      const snapDir = `${__dirname}/snaps/${subjectName}`;
      let dir;
      beforeEach(async () => {
        dir = await helpers
          .run(path.join(__dirname, `../generators/${subjectName}`))
          .inTmpDir()
          .withOptions({ componentName: "component", path: "src" });
      });
      it("should have index.js", () => {
        assert.fileContent(
          `${dir}/src/Component/index.js`,
          fs.readFileSync(`${snapDir}/index.js`).toString()
        );
      });
      it("should have interactor", () => {
        assert.fileContent(
          `${dir}/src/Component/ComponentInteractor.js`,
          fs.readFileSync(`${snapDir}/interactor.js`).toString()
        );
      });
      it("should have component", () => {
        assert.fileContent(
          `${dir}/src/Component/Component.js`,
          fs.readFileSync(`${snapDir}/Component.js`).toString()
        );
      });
      it("should have component test", () => {
        assert.file(`${dir}/src/Component/Component.test.js`);
      });
    });
  });
});
