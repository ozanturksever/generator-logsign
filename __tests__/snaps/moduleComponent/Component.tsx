import * as React from "react";
import { ComponentFactory, link } from "logsign-base-app";
// todo create Xxx module
import { Xxx } from "src/moduleNames";

const XxxConnected = link({}, () => {
  return <div>content</div>;
});

export default ComponentFactory(XxxConnected, {
  moduleName: Xxx,
  signals: {}
});
