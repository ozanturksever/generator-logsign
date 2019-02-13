/* platform=web */
import React from "react";
import { describe, it } from "@bigtest/mocha";
import { expect } from "chai";
import Xxx from "./Xxx";
import XxxInteractor from "./XxxInteractor";
import { setupTestComponent } from "logsign-base-app";

describe("Xxx", () => {
  const interactor = setupTestComponent(XxxInteractor, () => <Xxx />, {});
  it("is exists", () => {
    expect(interactor.isExists).to.be.equal(true);
  });
});
