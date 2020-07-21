import {
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS,
  FETCH_REPOS_FAILURE,
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
  FETCH_REPO_DETAILS,
  FETCH_REPO_DETAILS_SUCCESS,
  FETCH_REPO_DETAILS_FAILURE,
} from "./constant";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
  userData: {
    isLoading: false,
    isError: false,
    details: [],
  },
  repoDetails: {
    isLoading: false,
    isError: false,
    details: [],
  },
};

export function repoReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case FETCH_REPOS:
      return { ...state, isLoading: true };
    case FETCH_REPOS_SUCCESS:
      return { ...state, users: payload, isLoading: false };
    case FETCH_REPOS_FAILURE:
      return { ...state, isLoading: false, isError: payload };

    case FETCH_USER_DATA:
      return { ...state, userData: { ...state.userData, isLoading: true } };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: {
          ...state.userData,
          details: [...payload],
          isLoading: false,
        },
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        userData: { ...state.userData, isError: true, isLoading: false },
      };

    case FETCH_REPO_DETAILS:
      return {
        ...state,
        repoDetails: { ...state.repoDetails, isLoading: true },
      };
    case FETCH_REPO_DETAILS_SUCCESS:
      return {
        ...state,
        repoDetails: {
          ...state.repoDetails,
          details: [...payload],
          isLoading: false,
        },
      };
    case FETCH_REPO_DETAILS_FAILURE:
      return {
        ...state,
        repoDetails: { ...state.repoDetails, isError: true, isLoading: false },
      };

    default:
      return state;
  }
}
