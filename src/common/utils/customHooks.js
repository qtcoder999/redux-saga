import { useState, useEffect } from "react";

import * as Components from "./componentImports";

export const useAPI = (endpoint) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getApiData = async () => {
      setIsFetching(true);
      await fetch(endpoint)
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setIsFetching(false));
    };

    getApiData();
  }, [endpoint]);
  return { data, error, isFetching };
};

export const usePreloading = () => {
  useEffect(() => {
    Components.GitRepoPreload.preload();
    Components.CounterContainerPreload.preload();
    Components.UserListPreload.preload();
    Components.VirtualDomTimer.preload();
  }, []);
};
