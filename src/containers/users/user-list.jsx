import React from "react";
import { useAPI } from "../../common/customHooks";
import Loader from 'react-loader-spinner'

function UserList(props) {
  const { data: users, error, isFetching } = useAPI(
    "https://jsonblob.com/api/2f1dbf1f-ce9c-11ea-a271-17303e3934cd"
  );

  function renderList(users) {
    return <ul>{users && users.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>;
  }

  function renderError() {
    return <>Network Error</>;
  }
  const showData = () => {
    if (!error) {
      if (isFetching) {
        return <Loader
          type="TailSpin"
          color="#333"
          height={30}
          width={30}
        />;
      } else {
        return renderList(users);
      }
    } else {
      return renderError();
    }
  };

  return <>{showData()}</>;
}

export default UserList;
