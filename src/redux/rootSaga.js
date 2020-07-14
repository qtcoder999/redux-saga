import { all } from "redux-saga/effects"
import { fetchRepos } from "../containers/git-repo/sagas"

export default function* rootSaga() {

    yield all([fetchRepos()]);

} 