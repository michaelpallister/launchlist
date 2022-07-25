import React, { useContext, useEffect, useState } from 'react';

export const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState('asc');
  const [year, setLaunchYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(year);
      try {
        const response = await fetch(
          `https://api.spacexdata.com/v3/launches${
            year ? `?launch_year=${year}` : ''
          }`,
        );
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
  }, [sort, year]);

  const value = { data, error, sort, setSort, setLaunchYear };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
