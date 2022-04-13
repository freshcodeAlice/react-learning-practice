import './App.css';
import React from 'react';
import ToDoList from './components/ToDoList';

const Panel = (props) => {
  return (
    <div className='container' style={{display: 'flex'}}>
      <section className='left-section'>
        {props.left}
      </section>
      <section className='right-section'>
        {props.right}
      </section>
      {props.children}
    </div>
  );
}

function App(props) {
  return (
   <Panel left={<p>Left Component</p>} right={<p>Right Component</p>}>
    
    </Panel>
      );
}

export default App;
