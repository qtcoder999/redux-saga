import React, { useReducer } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "../../components/counter/counter";
import { countReducer } from "./reducers";
import { INCREMENT, DECREMENT } from "./constants";

function CounterContainer(props) {
  const [state, dispatch] = useReducer(countReducer, { counter: 0 });
  console.log("counter state", state);
  return (
    <>
      <Counter {...props} {...state} />
      <button onClick={dispatch && dispatch({ type: INCREMENT })}>
        Increment
      </button>
      <button onClick={dispatch && dispatch({ type: DECREMENT })}>
        Decrement
      </button>
    </>
  );
}

// const mapStateToProps = ({ count: { counter } }) => {
//   return { counter };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increment: () => {
//       dispatch(increment());
//     },
//     decrement: () => {
//       dispatch(decrement());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;
