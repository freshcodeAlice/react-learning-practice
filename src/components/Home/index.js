import React, { useState } from 'react';
import Tracker from '../Tracker';

const Home = () => {
  const [isVisible, setVisibility] = useState(true);

  const handler = () => {
    setVisibility(!isVisible);
  };

  return (
    <div>
      <button onClick={handler}>Change visibility</button>
      {isVisible && <Tracker />}
    </div>
  );
};

export default Home;
