import React, { memo } from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/git-repo/action";
import { Repo } from "../repo-list/repos";

export const Users = connect(
  mapPropsToState,
  actions
)(
  memo(({ users, fetchUserDetails, ...props }) => (
    <ul className="check-list">
      {users &&
        users.map(({ login, node_id }) => {
          return (
            <li
              key={node_id}
              onClick={(e) => {
                e.stopPropagation();
                fetchUserDetails(login);
              }}
            >
              {login}
              <Repo login={login} />
            </li>
          );
        })}
    </ul>
  ))
);

function mapPropsToState({ repos: { users } }) {
  return { users };
}

Users.displayName = "Users";
