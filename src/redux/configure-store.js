import saga from "redux-saga";
import thunk from "redux-thunk";
import { rootSaga } from "./rootSaga";
const { createStore, applyMiddleware, compose } = require("redux");
const { rootReducer } = require("./rootReducer");

const sagaMiddleware = saga();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? composeEnhancers(applyMiddleware(sagaMiddleware, thunk))
    : applyMiddleware(sagaMiddleware, thunk)
);

sagaMiddleware.run(rootSaga);
