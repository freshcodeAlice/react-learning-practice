import './App.css';
import React from 'react';
import FlexContainer from './components/FlexContainer';

function App(props) {

// justify-content
// flex-direction
// align-items
  return (
    <FlexContainer flexDirection='column' justifyContent='center' alignItems='center'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>2</div>
      <div>3</div>
      <div>2</div>
      <div>3</div>
      <div>2</div>
      <div>3</div>
    </FlexContainer>
      );
}

export default App;
