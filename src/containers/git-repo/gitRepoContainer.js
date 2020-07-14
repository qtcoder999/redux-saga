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
                <ul>
                  {details &&
                    details.map(
                      (
                        {
                          node_id,
                          name: repoName,
                          html_url: repoHtmlUrl,
                          owner: { login: ownerLogin },
                        },
                        repoIndex
                      ) =>
                        ownerLogin === login ? (
                          <li
                            key={repoIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              fetchRepoDetails(ownerLogin, repoName);
                            }}
                          >
                            {repoName}
                            <ul>
                              {repoDetails &&
                                repoDetails.map(
                                  ({ commit: { message }, html_url: commitHtmlUrl }, index) => (
                                    commitHtmlUrl.includes(repoHtmlUrl) ? (
                                      <li key={index}>{message}</li>) : null
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
