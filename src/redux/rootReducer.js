import { combineReducers } from "redux";
import { countReducer } from "../containers/counter/reducers";
import repoReducer from '../containers/git-repo/reducers'

export const rootReducer = combineReducers({

    count: countReducer,
    repo: repoReducer

})