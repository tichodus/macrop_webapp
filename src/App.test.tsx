import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route } from "react-router5";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Route>{({ route }) => <App route={route} />}</Route>, div);
  ReactDOM.unmountComponentAtNode(div);
});
