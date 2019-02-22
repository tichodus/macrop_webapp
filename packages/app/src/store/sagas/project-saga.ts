import { Action } from "../actions";
import httpClient from "@macrop/http";
import { User } from "../../models/user";
import { router } from "../../router/create-router";
import { ActionType } from "../actions/types";
import { put } from "redux-saga/effects";

export function* createProject(action: Action) {
  try {
    const me: User = yield JSON.parse(localStorage.getItem("me") || "");
    const response = yield httpClient.post(
      `api/user/${me.id}/project`,
      action.payload
    );
    if (response) {
      yield put({ type: ActionType.CLOSE_CREATE_PROJECT });
      router.navigate("projects");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* getProjects(action: Action) {
  try {
    const me: User = yield JSON.parse(localStorage.getItem("me") || "");
    const response = yield httpClient.get(`api/user/${me.id}/project`);
    if (response) {
      yield put({ type: ActionType.SET_PROJECTS, payload: response });
    }
  } catch (e) {
    console.log(e);
  }
}

export function* addUsersOnProject(action: Action) {
  try {
    const response = yield httpClient.post(
      `api/project/${action.payload.projectId}/role`,
      {
        role: "developer",
        user_id: action.payload.userId
      }
    );
    if (response) {
      yield put({ type: ActionType.SET_USERS_ON_PROJECT, payload: response });
    }
  } catch (e) {
    console.log(e);
  }
}
