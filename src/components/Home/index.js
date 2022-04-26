import React, { useState } from 'react';
import StopWatch from '../StopWatch';

const Home = () => {
  const [isVisible, setVisibility] = useState(true);

  const handler = () => {
    setVisibility(!isVisible);
  };

  return (
    <div>
      <button onClick={handler}>Change visibility</button>
      {isVisible && <StopWatch />}
    </div>
  );
};

export default Home;
