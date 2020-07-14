import { FETCH_USERS_REQUEST, FETCH_USERS_REQUEST_SUCCESS, FETCH_USERS_REQUEST_FAILURE } from "./constants";

const INITIAL_STATE = {
    repos: [],
    isFetching: false,
    isError: false
}

export default function repoReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case FETCH_USERS_REQUEST:
            return { ...state, isFetching: true }

        case FETCH_USERS_REQUEST_SUCCESS:
            return { ...state, repos: [...state.repos, ...payload], isFetching: false }

        case FETCH_USERS_REQUEST_FAILURE:
            return { ...state, isError: true, isFetching: false }
            break;



        default:
            return state;
    }
}