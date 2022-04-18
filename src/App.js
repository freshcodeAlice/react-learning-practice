import './App.css';
import React from 'react';

function App (props) {
  return (
    <>
      <p>
        <button
          onClick={() => {
            window.close();
          }}
        >
          Close
        </button>
        <button
          onClick={() => {
            window.open('https://google.com');
          }}
        >
          Open
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            window.location.assign(
              'https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BA%D0%B8'
            );
          }}
        >
          Assign
        </button>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
        <button
          onClick={() => {
            window.location.replace('https://google.com');
          }}
        >
          Replace
        </button>
      </p>
    </>
  );
}

export default App;
