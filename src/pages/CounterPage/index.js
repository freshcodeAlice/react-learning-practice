import React, { Component } from 'react';
import Counter from '../../components/Counter';

class CounterPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      step: '',
    };
  }

  inputHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: Number(value),
    });
  };

  render () {
    return (
      <>
        <input
          type='range'
          value={this.state.step}
          onChange={this.inputHandler}
          name='step'
          min='1'
          max='50'
        />
        <Counter step={this.state.step} />
      </>
    );
  }
}

export default CounterPage;
