import React, { useState } from 'react';
import Clicker from '../Clicker';

const Home = () => {
  const [isVisible, setVisibility] = useState(true);

  const handler = () => {
    setVisibility(!isVisible);
  };

  return (
    <div>
      <button onClick={handler}>Change visibility</button>
      {isVisible && <Clicker />}
    </div>
  );
};

export default Home;
