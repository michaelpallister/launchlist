import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const results = await response.json();

        setData(results);
        setError(null);
      } catch (err: any) {
        // TODO: fix err type
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
