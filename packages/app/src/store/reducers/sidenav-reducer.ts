import { Action } from "../actions";
import { ActionType } from "../actions/types";

export const sidenavReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.OPEN_SIDENAV:
      return { ...state, sidenavOpened: true };
    case ActionType.CLOSE_SIDENAV:
      return { ...state, sidenavOpened: false };
    default:
      return { ...state };
  }
};
