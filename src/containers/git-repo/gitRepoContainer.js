import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./action";
import { Users } from "../../components/user-list/users-list";

function GitRepoContainer({ ...props }) {
  useEffect(() => {
    const { fetchUsers } = props;
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Users />;
}

export default connect(
  ({ repos }) => ({ ...repos }),
  actions
)(GitRepoContainer);
