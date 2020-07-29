import React from "react";
import { connect, useDispatch } from "react-redux";
import Counter from "../../components/counter/counter";

function CounterContainer(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Counter {...props} dispatch={dispatch} />
    </>
  );
}

const mapStateToProps = ({ count: { counter } }) => {
  return { counter };
};

export default connect(mapStateToProps, {})(CounterContainer);
