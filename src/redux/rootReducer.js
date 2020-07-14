import { combineReducers } from "redux";
import { countReducer } from "../containers/counter/reducers";
import { repoReducer } from "../containers/git-repo/reducer";

export const rootReducer = combineReducers({
  count: countReducer,
  repos: repoReducer,
});
