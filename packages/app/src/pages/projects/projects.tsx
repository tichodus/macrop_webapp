import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Calendar } from "@macrop/calendar";
import { Day } from "@macrop/calendar/src/models/day";
import { Dispatchable } from "../../index.d";
import { ActionType } from "../../store/actions";

interface ProjectsProps extends Dispatchable {
  calendar: Day[];
}

let Projects = (props: ProjectsProps) => {
  const { calendar, dispatch } = props;

  useEffect(() => {
    dispatch({
      type: ActionType.GET_CALENDAR,
      payload: new Date().toDateString()
    });
  });

  return <Calendar calendar={calendar} />;
};

export default connect((state: any) => {
  return {
    calendar: state.calendarReducer.calendar
  };
})(Projects);
