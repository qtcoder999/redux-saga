import React, { useReducer } from "react";
import { connect, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "../../components/counter/counter";
import { countReducer } from "./reducers";
import { INCREMENT, DECREMENT } from "./constants";

function CounterContainer(props) {
  // const [state, dispatch] = useReducer(countReducer, { counter: 0 });
  const dispatch = useDispatch();
  return (
    <>
      {/* <Counter {...props} dispatch={dispatch} {...state} /> */}
      <Counter {...props} dispatch={dispatch} />

    </>
  );
}

const mapStateToProps = ({ count: { counter } }) => {
  return { counter };
};

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

export default connect(mapStateToProps, {})(CounterContainer);
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// export default CounterContainer;
