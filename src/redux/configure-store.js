import saga from "redux-saga";
import thunk from "redux-thunk";
import { rootSaga } from "./rootSaga";
const { createStore, applyMiddleware } = require("redux");
const { rootReducer } = require("./rootReducer");

const sagaMiddleware = saga();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, thunk)
);

sagaMiddleware.run(rootSaga);
