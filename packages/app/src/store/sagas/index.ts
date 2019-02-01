import { ActionType } from "../actions";
import { takeEvery } from "redux-saga/effects";
import { login, me, register } from "./session-saga";
import { createProject } from "./project-saga";
import { getCalendar } from "./calendar-saga";

export function* rootSaga() {
  yield takeEvery(ActionType.LOGIN, login);
  yield takeEvery(ActionType.ME, me);
  yield takeEvery(ActionType.REGISTER, register);
  yield takeEvery(ActionType.CREATE_PROJECT, createProject);
  yield takeEvery(ActionType.GET_CALENDAR, getCalendar);
}
