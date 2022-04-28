import React, { useReducer } from 'react';

/* 1. Reducer - чистая функция!
Принимает объект состояния и action (действие). Возвращает новое состояние

*/

const reducer = (state, action) => {
  const { name, value } = action;

  return {
    ...state,
    [name]: value,
  };
};

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthdate: '',
    gender: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    const action = { name, value };
    dispatch(action);
  };

  return (
    <form>
      <input
        type='text'
        name='firstName'
        value={state.fistName}
        onChange={handleChange}
      />
      <input
        type='text'
        name='lastName'
        value={state.lastName}
        onChange={handleChange}
      />
      <input
        type='text'
        name='email'
        value={state.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={state.password}
        onChange={handleChange}
      />
      <input
        type='date'
        name='birthdate'
        value={state.birthdate}
        onChange={handleChange}
      />
      <input
        type='text'
        name='gender'
        value={state.gender}
        onChange={handleChange}
      />

      <input type='submit' />
    </form>
  );
};

export default SignUp;
