import { Action } from "../actions";
import httpClient from "@macrop/http";
import { ActionType } from "../actions/types";
import { put } from "redux-saga/effects";

export function* filterUsers(action: Action) {
  try {
    const response = yield httpClient.get(`api/users/search`, {
      ...action.payload
    });
    if (response) {
      yield put({
        type: ActionType.SET_FILTER_USERS_RESULT,
        payload: response
      });
    }
  } catch (e) {
    console.log(e);
  }
}
