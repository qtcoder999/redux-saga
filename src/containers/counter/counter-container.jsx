import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "../../components/counter/counter";
import { useAPI } from "../../common/customHooks";
import { useEffect } from "react";

function CounterContainer(props) {
  const { data: users, error, isFetching } = useAPI(
    "http://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      {/* <Counter {...props} /> */}
      <div> isfetching:{isFetching.toString()}</div>
      {isFetching ? (
        <div>...Loading</div>
      ) : (
        users && users.map(({ id, name }) => <li key={id}>{name}</li>)
      )}
    </>
  );
}

const mapStateToProps = ({ count: { counter } }) => {
  return { counter };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
