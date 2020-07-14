import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./action";

function GitRepoContainer({ fetchUsers, ...props }) {
  useEffect(() => {
    alert('useeffect');
    fetchUsers();
  }, []);
  // console.log(props);
  return <div>gitRepo</div>;
}

export default connect((state) => state, actions)(GitRepoContainer);
