import { FETCH_REPOS, FETCH_USER_DATA } from "./constant";

export function fetchUsers() {
  return { type: FETCH_REPOS };
}

export function fetchUserDetails(login) {
  return { type: FETCH_USER_DATA, payload: login };
}
