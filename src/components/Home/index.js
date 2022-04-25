import React, { useState } from 'react';

const Home = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [counter, setCounter] = useState(0);
  // setState в хуках !== this.setState в классах!
  // Для одной сущности - один state

  const handleMouseMove = ({ clientX, clientY }) => {
    setCoordinates({
      x: clientX,
      y: clientY,
    });
  };

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div
      style={{ height: '100vh', border: '5px solid red' }}
      onMouseMove={handleMouseMove}
      onClick={clickHandler}
    >
      <h1>Mouse Tracker</h1>
      <h3>x: {coordinates.x} </h3>
      <h3>y: {coordinates.y} </h3>
      <h3>Conter: {counter} </h3>
    </div>
  );
};

export default Home;
