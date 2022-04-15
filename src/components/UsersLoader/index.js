import React, { Component } from 'react';
import UserCard from './UserCard';
import { getUsers } from '../../api';

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

    getUsers({ page })
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

    const userList = users.map(user => (
      <UserCard user={user} key={user.login.uuid} />
    ));

    return (
      <div>
        {isFetching && <div>Loading...</div>}
        {isError && <div>Some ERROR happening</div>}
        <h1>Users List</h1>
        <button onClick={this.prev}>Previous page</button>
        <button onClick={this.next}>NextPage</button>
        <ul>{userList}</ul>
      </div>
    );
  }
}

export default UsersLoader;

/*

Task 1. UserList - компонента, которая 
принимает массив и рендерить UserCard, передавая в них готовую разметку 
(Например:
  <UserCard>
      <img />
      <h3>{user.name} </h3>
      <p>{user.email}</p>
      <p>{your choise} </p>
  </UserCard>
  )
Task 2. UserCard - просто контейнер для карточки юзера
Task 3. Spinner во время Loading

*/
