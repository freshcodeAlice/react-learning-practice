import React, { useReducer, useEffect } from 'react';
import { reducer } from './reducer';

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
    error: null,
  });

  useEffect(() => {
    fetch('./chat.json')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'DATA_LOAD_SUCCESS',
          data,
        })
      )
      .catch(error =>
        dispatch({
          type: 'DATA_LOAD_ERROR',
          error,
        })
      );
  }, []);

  return (
    <div>
      {state.error && <div>Some error </div>}
      <ul>
        {state.messages.map(msg => (
          <li key={msg.id}>{JSON.stringify(msg)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
