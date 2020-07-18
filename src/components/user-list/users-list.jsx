import React from "react";
import { Repos } from "../repo-list/repos";

export const Users = ({
  fetchUsers,
  users,
  fetchUserDetails,
  fetchRepoDetails,

  ...props
}) => (
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
            <Repos
              login={login}
              fetchRepoDetails={fetchRepoDetails}
              {...props}
            ></Repos>
          </li>
        );
      })}
  </ul>
);
