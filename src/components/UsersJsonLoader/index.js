import React, { Component } from 'react';

class UsersJsonLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true,
      isError: false,
    };
  }

  componentDidMount () {
    this.load();
  }

  load = () => {
    fetch('/users.json')
      .then(res => res.json())
      .then(users => {
        this.setState({
          data: users,
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
  };

  render () {
    const { data, isFetching, isError } = this.state;
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {isError && <div> Some Error happening </div>}
        <ol>
          {data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default UsersJsonLoader;
