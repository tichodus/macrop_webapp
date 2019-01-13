import React, { useState } from "react";
import { Route } from "route-node";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import { LinearProgress } from "@material-ui/core";
import Register from "./pages/registration/registration";
import { connect } from "react-redux";
import Header from "./components/header/header";
import Sidenav from "./components/sidenav/sidenav";
import config from "./config";
import { Dispatchable } from "./index.d";
import Projects from "./pages/projects/projects";
import ActionType from "./store/actions";
interface AppProps extends Dispatchable {
  route: Route;
  progress?: boolean;
}

function App(props: AppProps) {
  const routeName = props.route.name;
  const { progress, dispatch } = props;
  return (
    <div>
      {routeName !== "login" && routeName !== "register" && <Header />}
      {routeName !== "login" && routeName !== "register" && (
        <Sidenav list={config.sidenav} />
      )}
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
    case "projects":
      return <Projects />;
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
