import { combineReducers, Reducer } from "redux";
import { sessionReducer } from "./session-reducer";
import { progressBarReducer } from "./progress-bar-reducer";
import { sidenavReducer } from "./sidenav-reducer";
import { dialogsReducer } from "./dialogs-reducer";

export const rootReducer: Reducer<any> = combineReducers({
  sessionReducer,
  progressBarReducer,
  sidenavReducer,
  dialogsReducer
});
