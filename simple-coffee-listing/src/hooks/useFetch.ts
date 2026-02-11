import { useEffect, useState } from "react";
import type { Coffee } from "../types";

export function useFetch() {
  const [data, setData] = useState<Coffee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      setIsLoading(true);

      const url = `https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json`;
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error("Error fetching data");
      }

      const json = await resp.json();

      setData(json);
      setIsLoading(false);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
