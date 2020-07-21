import React from "react";
import { Commit } from "../commit-list/commit-list";

export const Repo = ({
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
                <Commit repoHtmlUrl={repoHtmlUrl} {...props} />
              </li>
            ) : null
        )}
    </ul>
  );
