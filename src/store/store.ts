import { createStore } from "redux";
import { rootReducer } from "./reducers";
interface Store {
  projects: [];
}

export const store = createStore(rootReducer, {});
