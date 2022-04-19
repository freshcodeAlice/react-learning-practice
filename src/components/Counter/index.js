import React, { Component } from 'react';

const inlineStyles = {
  border: '2px solid blue',
  maxWidth: '400px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
};

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((state, props) => ({
      count: state.count + props.step,
    }));
  };

  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - props.step,
    }));
  };

  render () {
    const { count } = this.state;

    return (
      <div style={inlineStyles}>
        <h1>Count: {count}</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
