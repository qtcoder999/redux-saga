import { combineReducers } from "redux";
import { countReducer } from "../containers/counter/reducers";

export const rootReducer = combineReducers({

    count: countReducer

})