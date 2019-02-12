import * as React from "react";
import { ComponentFactory } from "logsign-base-app";
// todo create ProfileFormModule module
import { Xxx } from "src/moduleNames";

const XxxConnected = () => {
  return <div>content</div>;
};

export default ComponentFactory(XxxConnected, {
  moduleName: Xxx,
  signals: {}
});
