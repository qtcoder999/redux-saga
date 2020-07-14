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
  fetchRepoDetails,
  repoDetails: {
    isLoading: isRepoLoading,
    isError: isRepoError,
    details: repoDetails,
  },
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
          users.map(({ login, node_id }) => {
            return (
              <li
                key={node_id}
                onClick={(e) => {
                  e.preventDefault();
                  fetchUserDetails(login);
                }}
              >
                {login}
                <ul>
                  {details &&
                    details.map(
                      (
                        {
                          node_id,
                          name: repoName,
                          html_url,
                          owner: { login: ownerLogin },
                        },
                        repoIndex
                      ) =>
                        ownerLogin === login ? (
                          <li
                            key={repoIndex}
                            onClick={(e) => {
                              e.preventDefault();
                              fetchRepoDetails(ownerLogin, repoName);
                            }}
                          >
                            <div>{repoName}</div>
                            <ul>
                              {repoDetails &&
                                repoDetails.map(
                                  ({ commit: { message } }, index) => (
                                    <li key={index}>{message}</li>
                                  )
                                )}
                            </ul>
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
