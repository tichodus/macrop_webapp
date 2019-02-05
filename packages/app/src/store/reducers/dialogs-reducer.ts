import { Action } from "../actions";
import { ActionType } from "../actions/types";

export const dialogsReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.OPEN_CREATE_PROJECT:
      return { ...state, openCreateProject: true };
    case ActionType.CLOSE_CREATE_PROJECT:
      return { ...state, openCreateProject: false };
    case ActionType.OPEN_ADD_PEOPLE_ON_PROJECT:
      return {
        ...state,
        openAddPeopleOnProject: true,
        activeProject: action.payload
      };
    case ActionType.CLOSE_ADD_PEOPLE_ON_PROJECT:
      return { ...state, openAddPeopleOnProject: false, activeProject: null };
    case ActionType.OPEN_ADD_NEW_EVENT:
      return {
        ...state,
        openAddNewEvent: true,
        calendarDate: action.payload.calendarDate,
        activeProject: action.payload.activeProject
      };
    case ActionType.CLOSE_ADD_NEW_EVENT:
      return {
        ...state,
        openAddNewEvent: false,
        calendarDate: null,
        activeProject: null
      };
    default:
      return { ...state };
  }
};
