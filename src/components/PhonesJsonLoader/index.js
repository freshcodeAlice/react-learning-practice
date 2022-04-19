import React, { Component } from 'react';

class PhonesJsonLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      phones: [],
      isFetching: true,
      isError: false,
    };
  }

  componentDidMount () {
    fetch('/phones.json')
      .then(res => res.json())
      .then(phones => {
        this.setState({
          phones: phones,
        });
      })
      .catch(error => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({
          isFetching: false,
        });
      });
  }

  render () {
    const { phones, isFetching, isError } = this.state;
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {isError && <div>Error</div>}
        <ul>
          {phones.map(phone => (
            <li key={phone.id}>
              {phone.model} - {phone.price}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default PhonesJsonLoader;
