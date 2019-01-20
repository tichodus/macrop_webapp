import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { mySaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const initState = {};

export const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);
