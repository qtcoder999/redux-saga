import React from "react";
import { CommitList } from "../commit-list/commit-list";

export const Repos = ({
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
              <CommitList repoHtmlUrl={repoHtmlUrl} {...props} />
            </li>
          ) : null
      )}
  </ul>
);
