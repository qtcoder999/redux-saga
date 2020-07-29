import React, { memo } from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/git-repo/action";
import { Repo } from "../repo-list/repos";
import Loader from "react-loader-spinner";

function areEqual(prevProps, nextProps) {
  return (JSON.stringify(prevProps) === JSON.stringify(nextProps))
}

export const Users = memo(connect(
  mapPropsToState,
  actions
)(
  (({ users, fetchUserDetails, isLoading }) => (
    isLoading ?
      <Loader
        type="TailSpin"
        color="#333"
        height={30}
        width={30}
      /> :
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

function mapPropsToState({ repos: { users, isLoading } }) {
  return { users, isLoading };
}

Users.displayName = "Users";
