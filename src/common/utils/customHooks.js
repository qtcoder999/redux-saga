import { useState, useEffect } from "react";
import axios from "axios";

import * as Components from "./componentImports";

export const useAPI = (endpoint) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getApiData = async () => {
      setIsFetching(true);
      await axios
        .get(endpoint)
        .then(({ data }) => {
          setData(data);
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
  }, []);
}