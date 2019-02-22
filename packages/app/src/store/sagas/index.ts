import { ActionType } from "../actions";
import { takeEvery } from "redux-saga/effects";
import { login, me, register } from "./session-saga";
import { createProject, getProjects, addUsersOnProject } from "./project-saga";
import { getCalendar, createTask, createEvent } from "./calendar-saga";
import { filterUsers } from "./users-saga";

export function* rootSaga() {
  yield takeEvery(ActionType.LOGIN, login);
  yield takeEvery(ActionType.ME, me);
  yield takeEvery(ActionType.REGISTER, register);
  yield takeEvery(ActionType.CREATE_PROJECT, createProject);
  yield takeEvery(ActionType.GET_CALENDAR, getCalendar);
  yield takeEvery(ActionType.GET_PROJECTS_FOR_USER, getProjects);
  yield takeEvery(ActionType.FILTER_USERS_RESULT, filterUsers);
  yield takeEvery(ActionType.ADD_USERS_ON_PROJECT, addUsersOnProject);
  yield takeEvery(ActionType.CREATE_TASK, createTask);
  yield takeEvery(ActionType.CREATE_EVENT, createEvent);
}
