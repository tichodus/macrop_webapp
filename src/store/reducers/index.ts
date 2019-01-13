import { combineReducers, Reducer } from "redux";
import { sessionReducer } from "./session-reducer";
import { progressBarReducer } from "./progress-bar-reducer";
import { sidenavReducer } from "./sidenav-reducer";

export const rootReducer: Reducer<any> = combineReducers({
  sessionReducer,
  progressBarReducer,
  sidenavReducer
});
