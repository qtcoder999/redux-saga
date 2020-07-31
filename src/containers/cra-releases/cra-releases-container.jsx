import React, { memo } from "react";
import { useAPI } from "../../common/utils/customHooks";

function areEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

function CRAReleases(props) {
  const { data, error, isFetching } = useAPI(
    "https://api.github.com/repos/facebook/create-react-app/releases"
  );

  function convertToDateObject(dateString) {
    return new Date(Date.parse(dateString));
  }

  function convertToHumanReadableDate(inputDate) {
    return inputDate.toDateString();
  }

  function checkIfCurrentYear(inputDate) {
    const currentYear = new Date().getFullYear();
    const inputYear = inputDate.getUTCFullYear();
    return currentYear === inputYear;
  }

  function renderList(data) {
    return (
      <ul>
        {data &&
          data.map(({ id, name, html_url, published_at }) => {
            const date = convertToDateObject(published_at);
            return checkIfCurrentYear(date) ? (
              <li key={id}>
                <a target="_blank" rel="noopener noreferrer" href={html_url}>
                  {name}
                </a>{" "}
                <span>{convertToHumanReadableDate(date)}</span>
              </li>
            ) : null;
          })}
      </ul>
    );
  }

  function renderError() {
    return <div>Network Error</div>;
  }
  const showData = () => {
    if (!error) {
      if (isFetching) {
        return <h3 className="loadersmall">{""}</h3>;
      } else {
        return renderList(data);
      }
    } else {
      return renderError();
    }
  };

  return <>{showData()}</>;
}

export default memo(CRAReleases, areEqual);
