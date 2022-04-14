import React, { Component } from 'react';
import UserCard from './UserCard';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: null,
      page: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  load = () => {
    const { page } = this.state;

    fetch(
      `https://randomuser.me/api/?page=${page}&results=10&seed=JS-DFE2021-1`
    )
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
  };

  prev = () => {
    this.setState(({ page }) => ({ page: page - 1 }));
  };
  next = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  componentDidUpdate (prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.load();
    }
  }

  render () {
    console.log('render');
    const { isFetching, isError, users } = this.state;
    if (isFetching) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Some ERROR happening</div>;
    }

    const userList = users.map(user => (
      <UserCard user={user} key={user.login.uuid} />
    ));

    return (
      <div>
        <h1>Users List</h1>
        <button onClick={this.prev}>Previous page</button>
        <button onClick={this.next}>NextPage</button>
        <ul>{userList}</ul>
      </div>
    );
  }
}

export default UsersLoader;
