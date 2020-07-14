import saga from "redux-saga";
import { rootSaga } from "./rootSaga";
const { createStore, applyMiddleware } = require("redux");
const { rootReducer } = require("./rootReducer");

const sagaMiddleware = saga();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
