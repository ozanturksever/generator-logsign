"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const fs = require("fs");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const testTable = [
  { generator: "statelessComponent", componentName: "xxx", test: true },
  { generator: "moduleComponent", componentName: "xxx", test: false },
  { generator: "statefulComponent", componentName: "xxx", test: true }
];
describe("generator-logsign", () => {
  testTable.forEach(subject => {
    const subjectName = subject.generator;
    const componentName = subject.componentName;
    const capitilizedComponentName = capitalizeFirstLetter(componentName);
    describe(`subjectName componentName: ${subjectName}`, () => {
      const snapDir = `${__dirname}/snaps/${subjectName}`;
      let dir;
      beforeEach(async () => {
        dir = await helpers
          .run(path.join(__dirname, `../generators/${subjectName}`))
          .inTmpDir()
          .withOptions({ componentName: componentName, path: "src" });
      });
      it("should have index.ts", () => {
        assert.fileContent(
          `${dir}/src/${capitilizedComponentName}/index.ts`,
          fs.readFileSync(`${snapDir}/index.ts`).toString()
        );
      });
      it("should have component", () => {
        assert.fileContent(
          `${dir}/src/${capitilizedComponentName}/${capitilizedComponentName}.tsx`,
          fs.readFileSync(`${snapDir}/Component.tsx`).toString()
        );
      });
      if (testTable.test) {
        it("should have interactor", () => {
          assert.fileContent(
            `${dir}/src/${capitilizedComponentName}/${capitilizedComponentName}Interactor.ts`,
            fs.readFileSync(`${snapDir}/interactor.ts`).toString()
          );
        });
        it("should have component test", () => {
          assert.file(
            `${dir}/src/${capitilizedComponentName}/${capitilizedComponentName}.test.tsx`
          );
        });
      }
    });
  });
});
