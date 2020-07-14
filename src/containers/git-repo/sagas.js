import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_REPOS } from "./constant";
import axios from "axios";

//worker saga

export function* getUsers() {
  alert()
  yield call(axios.get("https://api.github.com/users"));
}

//watcher saga

export function* gitUserWatcherSaga() {
  alert()

  yield takeLatest(FETCH_REPOS, getUsers);
}
