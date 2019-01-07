import React, { useEffect } from "react";
import { Dispatchable } from "../../index.d";
import Action from "../../store/actions/types";
import { connect } from "react-redux";

let Dashboard = (props: Dispatchable) => {
  const me = JSON.parse(localStorage.getItem("me") || "");
  return <div>{me.first_name}</div>;
};

export default connect()(Dashboard);
