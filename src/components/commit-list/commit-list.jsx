import React, { memo } from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/git-repo/action";

function areEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export const Commit = connect(
  mapStateToProps,
  actions
)(
  memo(
    ({
      repoDetails: {
        isLoading: isRepoLoading,
        isError: isRepoError,
        details: repoDetails,
      },
      ...props
    }) => (
        <ul className="no-event">
          {repoDetails &&
            repoDetails.map(
              ({ commit: { message }, html_url: commitHtmlUrl }, index) =>
                commitHtmlUrl.includes(props.repoHtmlUrl) ? (
                  <li key={index}>{message}</li>
                ) : null
            )}
        </ul>
      )
    , areEqual)
);

function mapStateToProps({ repos: { repoDetails } }) {
  return { repoDetails };
}

Commit.displayName = "Commit";
