import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts';
import StopWatch from '../StopWatch';

const Home = () => {
  const [userValue, setUserValue] = useContext(UserContext);

  return (
    <div>
      <h1>{userValue.name}</h1>;
    </div>
  );
};

export default Home;
