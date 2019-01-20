import { Action } from "../actions";
import { ActionType } from "../actions/types";

export const dialogsReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.OPEN_CREATE_PROJECT:
      return { ...state, openCreateProject: true };
    case ActionType.CLOSE_CREATE_PROJECT:
      return { ...state, openCreateProject: false };
    default:
      return { ...state };
  }
};
