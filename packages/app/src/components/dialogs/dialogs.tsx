import React from "react";
import { connect } from "react-redux";
import CreateProjectDialog from "./create-project-dialog/create-project-dialog";

interface DialogProps {
  openCreateProject?: boolean;
}

const Dialogs = (props: DialogProps) => {
  return (
    <div>
      <CreateProjectDialog open={props.openCreateProject} />
    </div>
  );
};

export default connect((state: any) => {
  return {
    openCreateProject: state.dialogsReducer.openCreateProject
  };
})(Dialogs);
