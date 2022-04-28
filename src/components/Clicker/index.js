import React, { useState, useEffect } from 'react';
import { useClicker } from '../../hooks/useCliker';

const Clicker = props => {
  const counter = useClicker();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button>Increment</button>
    </div>
  );
};

export default Clicker;
