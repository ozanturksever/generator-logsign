/* platform=web */
import React from "react";
import { describe, it } from "@bigtest/mocha";
import { expect } from "chai";
import Component from "./Component";
import ComponentInteractor from "./ComponentInteractor";
import { setupTestComponent } from "logsign-base-app";

describe("Component", () => {
  const interactor = setupTestComponent(
    ComponentInteractor,
    () => <Component />,
    {}
);
  it("is exists", () => {});
});
