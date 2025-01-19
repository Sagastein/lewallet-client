import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useFetch = (url: string) => {
  const { data, error, isLoading, mutate } = useSWR(url, fetcher, {
    revalidateOnFocus: true,
    revalidateIfStale: true,
    revalidateOnReconnect: true,
    refreshInterval: 3000,
  });

  return { data, error, isLoading, mutate };
};

export default useFetch;
