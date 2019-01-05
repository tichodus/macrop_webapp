import React, { useState } from "react";
import { Route } from "route-node";
import { Login } from "./pages/login";


interface AppProps {
  route: Route;
}

export default function App(props: AppProps) {
  const routeName = props.route.name;
  switch (routeName) {
    case "test":
      return <div>Test</div>;
    case "login":
      return <Login />;
    default:
      return <div>Not working</div>;
  }
}
