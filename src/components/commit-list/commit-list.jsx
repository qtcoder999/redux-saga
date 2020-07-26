import React, { memo } from "react";
import { connect } from "react-redux";
import * as actions from "../../containers/git-repo/action";

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
      <ul>
        {repoDetails &&
          repoDetails.map(
            ({ commit: { message }, html_url: commitHtmlUrl }, index) =>
              commitHtmlUrl.includes(props.repoHtmlUrl) ? (
                <li key={index}>{message}</li>
              ) : null
          )}
      </ul>
    )
  )
);

function mapStateToProps({ repos: { repoDetails } }) {
  return { repoDetails };
}

Commit.displayName = "Commit";
