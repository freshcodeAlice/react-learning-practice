import React, { useState, useEffect } from 'react';

const Clicker = props => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const clickHandler = () => {
      console.log('clickHandler works!');
      setCounter(prevCounter => prevCounter + step);
    };

    document.addEventListener('click', clickHandler);
    console.log('useEffect навесили');

    return () => {
      console.log('useEffect снялся');
      document.removeEventListener('click', clickHandler);
    };
  }, [step]);

  const changeHandler = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <input type='number' value={step} onChange={changeHandler} />
      <button>Increment</button>
    </div>
  );
};

export default Clicker;
