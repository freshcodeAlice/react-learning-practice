import React, { useState, useEffect } from 'react';

const Tracker = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = ({ clientX, clientY }) => {
    setCoordinates({
      x: clientX,
      y: clientY,
    });
  };

  useEffect(() => {
    //делаем побочные эффекты
    document.addEventListener('click', handleMouseMove);
    return () => {
      // подчищаем побочные эффекты
      document.removeEventListener('click', handleMouseMove);
    };
  });

  return (
    <div style={{ height: '100vh', border: '5px solid red' }}>
      <h1>Mouse Tracker</h1>
      <h3>x: {coordinates.x} </h3>
      <h3>y: {coordinates.y} </h3>
    </div>
  );
};

export default Tracker;
