import React, { useState, useEffect } from 'react';

export function useClicker () {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const clickHandler = () => setCounter(counter => counter + 1);
    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return counter;
}
