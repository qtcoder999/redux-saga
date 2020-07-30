import React, { memo } from "react";
import { useAPI } from "../../common/utils/customHooks";

function areEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

function UserList(props) {
  const { data: users, error, isFetching } = useAPI(
    "https://jsonblob.com/api/2f1dbf1f-ce9c-11ea-a271-17303e3934cd"
  );

  function renderList(users) {
    return <ul>{users && users.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>;
  }

  function renderError() {
    return <div>Network Error</div>;
  }
  const showData = () => {
    if (!error) {
      if (isFetching) {
        return <h3 className="loadersmall">{""}</h3>;
      } else {
        return renderList(users);
      }
    } else {
      return renderError();
    }
  };

  return <>{showData()}</>;
}

export default memo(UserList, areEqual);
