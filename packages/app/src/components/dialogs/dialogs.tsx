import React from "react";
import { connect } from "react-redux";
import CreateProjectDialog from "./create-project-dialog/create-project-dialog";
import AddPeopleOnProjectDialog from "./add-people-on-project-dialog/add-people-on-project-dialog";

interface DialogProps {
  openCreateProject?: boolean;
  openAddPeopleOnProject?: boolean;
  activeProject?: number;
}

const Dialogs = (props: DialogProps) => {
  return (
    <div>
      <CreateProjectDialog open={props.openCreateProject} />
      <AddPeopleOnProjectDialog
        activeProject={props.activeProject}
        open={props.openAddPeopleOnProject}
      />
    </div>
  );
};

export default connect((state: any) => {
  return {
    openCreateProject: state.dialogsReducer.openCreateProject,
    openAddPeopleOnProject: state.dialogsReducer.openAddPeopleOnProject,
    activeProject: state.dialogsReducer.activeProject
  };
})(Dialogs);
