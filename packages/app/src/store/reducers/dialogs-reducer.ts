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
    default:
      return { ...state };
  }
};
