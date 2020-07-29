import React, { memo } from "react";
import { Commit } from "../commit-list/commit-list";
import { connect } from "react-redux";
import * as actions from "../../containers/git-repo/action";
// import { arraysAreEqual } from "../../common/utils";

const areEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
};

export const Repo = connect(
  mapStateToProps,
  actions
)(
  memo(
    ({
      userData: { isLoading: isDetailLoading, isError: isDetailError, details },

      ...props
    }) => (
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
                ownerLogin === props.login ? (
                  <li
                    key={repoIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.fetchRepoDetails(ownerLogin, repoName);
                    }}
                  >
                    {repoName}
                    <Commit repoHtmlUrl={repoHtmlUrl} />
                  </li>
                ) : null
            )}
        </ul>
      )
    , areEqual)
);

function mapStateToProps({ repos: { userData } }) {
  return { userData };
}

Repo.displayName = "Repo";
