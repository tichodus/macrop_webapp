import { Action } from "./store/actions";

export type Dispatch = (action: Action) => void;

export interface Dispatchable {
  dispatch: Dispatch;
}

export interface Token {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}
