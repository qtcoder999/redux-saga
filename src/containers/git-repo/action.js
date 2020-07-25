import {
  FETCH_REPOS,
  FETCH_USER_DATA,
  FETCH_REPO_DETAILS_SUCCESS,
  FETCH_REPO_DETAILS_FAILURE,
} from "./constant";
import axios from "axios";

export function fetchUsers() {
  return { type: FETCH_REPOS };
}

export function fetchUserDetails(login) {
  return { type: FETCH_USER_DATA, payload: login };
}

export function fetchRepoDetails(ownerLogin, repoName) {
  return function (dispatch) {
    return (
      axios
        // .get(`https://api.github.com/repos/${ownerLogin}/${repoName}/commits`)
        .get(`https://jsonblob.com/api/9c3b8d9d-ce9c-11ea-a271-dd9248579c31`)
        .then(({ data }) =>
          dispatch({ type: FETCH_REPO_DETAILS_SUCCESS, payload: data })
        )
        .catch((error) =>
          dispatch({ type: FETCH_REPO_DETAILS_FAILURE, payload: error })
        )
    );
  };
}
