import './App.css';
import React from 'react';
import Container from './components/Grid/Container';
import Row from './components/Grid/Row';
import Column from './components/Grid/Column';


function App(props) {


  return (
  <Container>
    <Row>
      <Column colNum={6}>
        <div>Content1</div>
      </Column>
      <Column colNum={6}>
        <div>Content2</div>
      </Column>
    </Row>
    <Row>
      <Column colNum={6}>
        <div>Content3</div>
      </Column>
      <Column colNum={6}>
        <div>Content4</div>
      </Column>
    </Row>
    </Container>
      );
}

export default App;
