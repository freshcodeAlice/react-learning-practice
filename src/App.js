import './App.css';
import React, { Component } from 'react';

function App (props) {
  return <WindowSizes />;
}

export default App;

/*
Компонент WindowSizes

<div>
    Current viewport width: {width}px
    Current viewport height: {height}px
</div>

window.innerWidth



window.addEventListener('resize', ()=>{})
*/

class WindowSizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeHadler);
  }

  resizeHadler = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeHadler);
  }

  render () {
    const { width, height } = this.state;
    return (
      <div>
        <p>Current viewport width: {width}px </p>
        <p>Current viewport height: {height}px</p>
      </div>
    );
  }
}
