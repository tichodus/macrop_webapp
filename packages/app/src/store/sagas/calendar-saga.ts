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
      `api/calendar/user/${me.id}/project/${action.payload.projectId}`,
      {
        month: action.payload.date
      }
    );

    if (response) {
      yield put({ type: ActionType.SET_CALENDAR, payload: response });
      router.navigate("projects");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* createTask(action: Action) {
  try {
    const me: User = yield JSON.parse(localStorage.getItem("me") || "");

    const response = yield httpClient.post(
      `api/project/${action.payload.projectId}/user/${me.id}/task`,
      {
        name: action.payload.name,
        start_date: action.payload.start_date,
        end_date: action.payload.end_date
      }
    );

    if (response) {
      yield put({ type: ActionType.CLOSE_ADD_NEW_EVENT });
      router.navigate("projects");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* createEvent(action: Action) {
  try {
    const me: User = yield JSON.parse(localStorage.getItem("me") || "");

    const response = yield httpClient.post(`api/user/${me.id}/event`, {
      name: action.payload.name,
      description: action.payload.description,
      start_time: action.payload.start_time,
      end_time: action.payload.end_time,
      type: action.payload.type
    });

    if (response) {
      yield put({ type: ActionType.CLOSE_ADD_NEW_EVENT });
      router.navigate("projects");
    }
  } catch (e) {
    console.log(e);
  }
}
