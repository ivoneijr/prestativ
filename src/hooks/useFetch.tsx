'use client';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get<T>(url)
      .then((response: AxiosResponse<T>) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
