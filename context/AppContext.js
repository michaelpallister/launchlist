import React, { useContext, useEffect, useState } from 'react';

export const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        const results = await response.json();

        if (sort === 'desc') {
          setData(results.reverse());
        } else {
          setData(results);
        }
        setError(null);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [sort]);

  const handleSort = value => setSort(value);

  const value = { data, error, sort, handleSort };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
