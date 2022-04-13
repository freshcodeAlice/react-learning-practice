import './App.css';
import React from 'react';

const List = (props) => {
  const {children} = props;
  return (
    <article>
      <ul title="test">
        {children}
      </ul>
    </article>
  )
}

function App(props) {

  const number = [1, 2, 3, 4, 5, 6];
  const renderElement = () => {
    return number.map((currentNumber, index) => {
      const liJSX = <li key={currentNumber}>{currentNumber}</li>;
      return liJSX;
    })
  }

  return (
   <List>
     {renderElement()}
   </List>
      );
}

export default App;
