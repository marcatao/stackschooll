import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: "https://stackschool1.websiteseguro.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const useFetch = <Data = any, Error = any>(url: string) => {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };
};

export { useFetch, api };
