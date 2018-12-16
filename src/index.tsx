import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createRouter } from "./router";
import { RouterProvider, Route } from "react-router5";
import { ThemeProvider } from "styled-components";
const router = createRouter();

router.start(() =>
  ReactDOM.render(
    <RouterProvider router={router}>
      <Route>{({ route }) => <App route={route} />}</Route>
    </RouterProvider>,
    document.getElementById("root")
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
