import React, { useState } from "react";
import { Route } from "route-node";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import { LinearProgress } from "@material-ui/core";
import Register from "./pages/registration/registration";
import { connect } from "react-redux";

interface AppProps {
  route: Route;
  progress?: boolean;
}

function App(props: AppProps) {
  const routeName = props.route.name;
  const { progress } = props;
  return (
    <div>
      {progress && <LinearProgress />}
      {getPage(routeName)}
    </div>
  );
}

function getPage(routeName: string) {
  switch (routeName) {
    case "login":
      return <Login />;
    case "register":
      return <Register />;
    case "dashboard":
      return <Dashboard />;
    default:
      return <div>Not working</div>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    progress: state.progressBarReducer.progress
  };
};

export default connect(mapStateToProps)(App);
