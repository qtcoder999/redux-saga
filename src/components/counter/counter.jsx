import React from "react";
import { INCREMENT, DECREMENT } from "../../containers/counter/constants";

export default function Counter({ counter, ...props }) {
  console.log("counter", props);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        {/* <button onClick={dispatch({ type: INCREMENT })}>Increment</button>
        <button onClick={dispatch({ type: DECREMENT })}>Decrement</button> */}
      </div>
    </div>
  );
}
