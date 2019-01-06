import React, { useEffect } from "react";
import { Dispatchable } from "../../index.d";
import Action from "../../store/actions/types";
import { connect } from "react-redux";

let Dashboard = (props: Dispatchable) => {
  useEffect(() => {
    props.dispatch({ type: Action.ME });
  });

  return <div>Dashboard</div>;
};

export default connect()(Dashboard);
