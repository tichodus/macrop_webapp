import React, { useEffect } from "react";
import { Dispatchable } from "../../index.d";
import Action from "../../store/actions/types";
import { connect } from "react-redux";
import Header from "../../components/header/header";
import Logo from "../../components/logo/logo";

let Dashboard = (props: Dispatchable) => {
  const me = JSON.parse(localStorage.getItem("me") || "");
  return (
    <Header>
    </Header>
  );
};

export default connect()(Dashboard);
