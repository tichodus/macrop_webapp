import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./App";
import * as serviceWorker from "./serviceWorker";
import { router } from "./router";
import { RouterProvider, Route } from "react-router5";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";

const App = styled(Application)`
  overflow: hidden;
`;

router.start(() =>
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <Route>{({ route }) => <App route={route} />}</Route>
      </RouterProvider>
    </Provider>,
    document.getElementById("root")
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
