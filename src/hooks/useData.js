import React, { useState, useEffect } from 'react';

export function useData (getData) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData()
      .then(data => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return {
    data,
    isFetching,
    error,
  };
}
