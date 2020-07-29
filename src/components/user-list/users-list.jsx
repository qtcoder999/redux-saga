import React, { memo } from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/git-repo/action";
import { Repo } from "../repo-list/repos";

function areEqual(prevProps, nextProps) {
  return (JSON.stringify(prevProps) === JSON.stringify(nextProps))
}

export const Users = memo(connect(
  mapPropsToState,
  actions
)(
  (({ users, fetchUserDetails }) => (
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
  )
  ), areEqual))

function mapPropsToState({ repos: { users } }) {
  return { users };
}

Users.displayName = "Users";
