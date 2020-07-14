import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./action";

function GitRepoContainer({
  fetchUsers,
  users,
  fetchUserDetails,
  isLoading: isUsersLoading,
  isError: isUsersError,
  userData: { isLoading: isDetailLoading, isError: isDetailError, details },
  ...props
}) {
  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(details);
  return (
    <div>
      <ul>
        {users &&
          users.map(({ login, id }) => {
            return (
              <li
                key={id}
                onClick={() => {
                  fetchUserDetails(login);
                }}
              >
                {login}
                <ul>
                  {details &&
                    details.map(
                      ({
                        id: repoid,
                        name: repoName,
                        html_url,
                        owner: { login: ownerLogin },
                      }) =>
                        ownerLogin === login ? (
                          <li key={repoid}>
                            <a target="_blank" href={html_url}>
                              {repoName}
                            </a>
                          </li>
                        ) : null
                    )}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default connect(
  ({ repos }) => ({ ...repos }),
  actions
)(GitRepoContainer);
