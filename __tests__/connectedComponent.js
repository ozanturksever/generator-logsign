"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const fs = require("fs");

describe("generator-logsign:connectedComponent", () => {
  it("test", async () => {
    const snapDir = `${__dirname}/snaps`;
    await helpers
      .run(path.join(__dirname, "../generators/connectedComponent"))
      .inTmpDir()
      .withOptions({ componentName: "component", path: "src" })
      .then(dir => {
        assert.fileContent(
          `${dir}/src/Component/index.js`,
          fs.readFileSync(`${snapDir}/index.js`).toString()
        );
        assert.fileContent(
          `${dir}/src/Component/ComponentInteractor.js`,
          fs.readFileSync(`${snapDir}/interactor.js`).toString()
        );
        assert.file(`${dir}/src/Component/Component.test.js`);
      });
  });
});
