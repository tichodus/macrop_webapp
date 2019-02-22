import { Action } from "../actions";
import { ActionType } from "../actions/types";

export const calendarReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.SET_CALENDAR:
      return { ...state, calendar: action.payload };
    default:
      return { ...state };
  }
};
