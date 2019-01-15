import React from "react";
import { ComponentFactory } from "logsign-base-app";
import { XxxModule } from "src/moduleNames";
import { XxxConnected } from "../XxxConnected";

export default ComponentFactory(XxxConnected, {
  moduleName: XxxModule,
  signals: {}
});
