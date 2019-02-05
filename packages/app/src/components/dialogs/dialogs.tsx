import React from "react";
import { connect } from "react-redux";
import CreateProjectDialog from "./create-project-dialog/create-project-dialog";
import AddPeopleOnProjectDialog from "./add-people-on-project-dialog/add-people-on-project-dialog";
import AddNewEventDialog from "./add-new-event-dialog/add-new-event-dialog";
import moment from "moment";

interface DialogProps {
  openCreateProject?: boolean;
  openAddPeopleOnProject?: boolean;
  openAddNewEvent?: boolean;
  activeProject?: number;
  calendarDate?: moment.Moment;
}

const Dialogs = (props: DialogProps) => {
  console.log(props);
  return (
    <div>
      <CreateProjectDialog open={props.openCreateProject} />
      <AddPeopleOnProjectDialog
        activeProject={props.activeProject}
        open={props.openAddPeopleOnProject}
      />
      <AddNewEventDialog
        activeProject={props.activeProject}
        open={props.openAddNewEvent}
        date={props.calendarDate}
      />
    </div>
  );
};

export default connect((state: any) => {
  return {
    openCreateProject: state.dialogsReducer.openCreateProject,
    openAddPeopleOnProject: state.dialogsReducer.openAddPeopleOnProject,
    openAddNewEvent: state.dialogsReducer.openAddNewEvent,

    activeProject: state.dialogsReducer.activeProject,
    calendarDate: state.dialogsReducer.calendarDate
  };
})(Dialogs);
