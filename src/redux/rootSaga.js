import { all } from "redux-saga/effects";
import {
  gitUserWatcherSaga,
  fetchUserDetails,
} from "../containers/git-repo/sagas";

export function* rootSaga() {
  yield all([gitUserWatcherSaga(), fetchUserDetails()]);
}
