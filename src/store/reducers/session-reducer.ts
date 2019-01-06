import { Action } from "../actions";
import ActionType from "../actions/types";

export const sessionReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {...state};
    default:
      return  {...state};
  }
};
