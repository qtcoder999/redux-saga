import { useState, useEffect } from "react";
import axios from "axios";

export const useAPI = (endpoint) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);
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
  useEffect(() => {
    getApiData();
  }, []);
  return { data, error, isFetching };
};
