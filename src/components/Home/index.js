import React, { useState } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handler = () => {
    setCounter(counter + step);
  };

  const changeHandler = event => {
    setStep(Number(event.target.value));
  };

  console.log('render');

  return (
    <div>
      <h1>{counter}</h1>
      <input type='number' name='step' value={step} onChange={changeHandler} />
      <button onClick={handler}>Click</button>
    </div>
  );
};

export default Home;
