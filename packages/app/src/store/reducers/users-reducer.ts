import { Action } from "../actions";
import { ActionType } from "../actions/types";

export const usersReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_USERS_RESULT:
      return { ...state, filterUsersResult: action.payload };
    default:
      return { ...state };
  }
};
