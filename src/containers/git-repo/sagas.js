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
    let url = "";
    if (process.env.NODE_ENV === "production") {
      url = "https://api.github.com/users"
    }
    else {
      url = "https://jsonblob.com/api/64743a51-ce9c-11ea-a271-23e375ad002d";
    }
    const { data } = yield call(() =>
      axios.get(url)
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
    let data = {};
    if (process.env.NODE_ENV === "production") {
      const response = yield call(({ payload }) => axios.get(`https://api.github.com/users/${payload}/repos`), action);
      data = response.data;
    }
    else {
      const response = yield call(
        ({ payload }) =>
          axios.get(
            `https://jsonblob.com/api/81ae874d-ce9c-11ea-a271-e79f32c2ac48`
          ),
        action
      );
      data = response.data;
    }

    yield put({ type: FETCH_USER_DATA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_USER_DATA_FAILURE, payload: error });
  }
}

export function* fetchUserDetails() {
  yield takeLatest(FETCH_USER_DATA, getUserData);
}
