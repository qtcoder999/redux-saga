import { INCREMENT, DECREMENT } from "./constants";

const INITIAL_STATE = {

    counter: 0

}


export const countReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case INCREMENT: {

            let newState = { ...state }

            newState.counter++;

            return newState

        }

        case DECREMENT: {

            let newState = { ...state }

            newState.counter--;

            return newState

        }

        default: return state;
    }



}