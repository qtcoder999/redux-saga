import React from "react";

export const Commit = ({
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
  );
