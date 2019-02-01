import { Action } from "../actions";
import httpClient from "@macrop/http";
import { User } from "../../models/user";
import { router } from "../../router/create-router";
import { ActionType } from "../actions/types";
import { put } from "redux-saga/effects";

export function* getCalendar(action: Action) {
  try {
    const me: User = yield JSON.parse(localStorage.getItem("me") || "");
    const response = yield httpClient.get(
      `api/user/${me.id}/calendar/${action.payload}`
    );
    if (response) {
      yield put({ type: ActionType.SET_CALENDAR, payload: response });
      router.navigate("projects");
    }
  } catch (e) {
    console.log(e);
  }
}
