import { combineReducers, Reducer } from "redux";
import { sessionReducer } from "./session-reducer";
import { progressBarReducer } from "./progress-bar-reducer";
import { sidenavReducer } from "./sidenav-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { calendarReducer } from "./calendar-reducer";
import { projectsReducer } from "./projects-reducer";
import { usersReducer } from "./users-reducer";

export const rootReducer: Reducer<any> = combineReducers({
  sessionReducer,
  progressBarReducer,
  sidenavReducer,
  dialogsReducer,
  calendarReducer,
  projectsReducer,
  usersReducer
});
