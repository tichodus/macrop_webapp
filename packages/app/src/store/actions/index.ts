import ActionType from "./types";

export interface Action {
  type: ActionType;
  payload?: any;
}

export default ActionType;
