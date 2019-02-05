import { Action } from "../actions";
import { ActionType } from "../actions/types";

export const projectsReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PROJECTS:
      return { ...state, projects: action.payload };
    case ActionType.SET_USERS_ON_PROJECT:
      return { ...state, usersOnProject: action.payload };
    default:
      return { ...state };
  }
};
