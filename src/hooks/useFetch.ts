import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import api from "../services/api";

export const useFetch = (url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<unknown | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const response = async () => {
      await api
        .get(url, options)
        .then((res) => setData(res.data))
        .catch((err) => {
          setError(err);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    response();
  }, []);

  return { data, error, isLoading };
};