import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
import Counter from "../../components/counter/counter";
import { useAPI } from "../../common/customHooks";

function CounterContainer(props) {
  const { data: users, error, isFetching } = useAPI(
    "http://jsonplaceholder.typicode.com/users"
  );

  function renderList(users) {
    return users && users.map(({ id, name }) => <li key={id}>{name}</li>);
  }

  function renderError() {
    return <>Network Error</>;
  }
  const showData = () => {
    if (!error) {
      if (isFetching) {
        return <>...Loading</>;
      } else {
        return renderList(users);
      }
    } else {
      return renderError();
    }
  };

  return (
    <>
      <Counter {...props} />
      {showData()}
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
