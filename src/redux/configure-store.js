import { createStore, applyMiddleware, compose } from 'redux';
import createMiddlewareSaga from "redux-saga";
import rootSaga from './rootSaga';
const { rootReducer } = require("./rootReducer");

const saga = createMiddlewareSaga();

export const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga)