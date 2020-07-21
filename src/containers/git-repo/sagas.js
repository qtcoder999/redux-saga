import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_REPOS,
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_SUCCESS,
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
} from "./constant";
import axios from "axios";

//worker saga

export function* getUsers() {
  try {
    const { data } = yield call(() =>
      axios.get("https://api.github.com/users")
    );
    yield put({ type: FETCH_REPOS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_REPOS_FAILURE, payload: error });
  }
}

//watcher saga

export function* gitUserWatcherSaga() {
  yield takeLatest(FETCH_REPOS, getUsers);
}

export function* getUserData(action) {
  try {
    const { data } = yield call(({payload}) => axios.get(`https://api.github.com/users/${payload}/repos`), action);
    
    yield put({ type: FETCH_USER_DATA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_USER_DATA_FAILURE, payload: error });
  }
}

export function* fetchUserDetails() {
  yield takeLatest(FETCH_USER_DATA, getUserData);
}
