import React, { memo } from "react";
import { Commit } from "../commit-list/commit-list";
import { arraysAreEqual } from "../../common/utils";

const areEqual = (prevProps, nextProps) => {
  // console.log({
  //   userDataPrevious: prevProps.userData.details,
  //   userDataNew: nextProps.userData.details,
  // });

  // console.log({
  //   repoDetailsPrevious: prevProps.repoDetails.details,
  //   repoDetailsNew: nextProps.repoDetails.details,
  // });

  console.log(
    "arraysAreEqual(prevProps.userData.details, nextProps.userData.details)",
    arraysAreEqual(prevProps.userData.details, nextProps.userData.details)
  );

  console.log(
    "arraysAreEqual(prevProps.repoDetails.details, nextProps.repoDetails.details)",
    arraysAreEqual(prevProps.repoDetails.details, nextProps.repoDetails.details)
  );

  if (
    0
    // arraysAreEqual(prevProps.userData.details, nextProps.userData.details)
    //  ||    arraysAreEqual(prevProps.repoDetails.details, nextProps.repoDetails.details)
  ) {
    // don't render if Props.userData.details are equal
    return true;
  } else {
    return false;
  }
};

export const Repo = memo(
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
                <Commit repoHtmlUrl={repoHtmlUrl} {...props} />
              </li>
            ) : null
        )}
    </ul>
  ),
  areEqual
);
