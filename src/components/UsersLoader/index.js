import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: null,
    };
  }

  componentDidMount () {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data.results,
        });
      })
      .catch(() => {
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
    const { isFetching, isError, users } = this.state;
    if (isFetching) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Some ERROR happening</div>;
    }

    return (
      <div>
        <h1>Users List</h1>
        <ul>{JSON.stringify(users, null, 4)}</ul>
      </div>
    );
  }
}

export default UsersLoader;
