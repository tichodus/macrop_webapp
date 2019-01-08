import { Action } from "../actions";
import ActionType from "../actions/types";

export const progressBarReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.START_PROGRESS_BAR:
      return { ...state, progress: true };
    case ActionType.STOP_PROGRESS_BAR:
      return { ...state, progress: false };
    default:
      return  {...state};
  }
};
