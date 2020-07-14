import { call, takeLatest, put } from "redux-saga/effects"
import { FETCH_USERS_REQUEST, FETCH_USERS_REQUEST_SUCCESS, FETCH_USERS_REQUEST_FAILURE } from "./constants"
import axios from "axios"

// worker saga
function* getRepos() {
    try {
        const { data } = yield call(() => axios.get("https://api.github.com/users"));
        yield put({ type: FETCH_USERS_REQUEST_SUCCESS, payload: data })
    }
    catch (error) {
        yield put({ type: FETCH_USERS_REQUEST_FAILURE, payload: error })
    }
}

// watcher saga
export function* fetchRepos() {
    yield takeLatest(FETCH_USERS_REQUEST, getRepos);
}


