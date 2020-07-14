import { all } from "redux-saga/effects";
import { gitUserWatcherSaga } from "../containers/git-repo/sagas";

export function* rootSaga() {
  yield all([gitUserWatcherSaga]);
}
