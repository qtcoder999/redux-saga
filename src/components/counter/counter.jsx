import React from "react";
import { INCREMENT, DECREMENT } from "../../containers/counter/constants";

export default function Counter({ counter, dispatch, ...props }) {
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </>
  );
}
