import React, { Component } from 'react';
import UserCard from './UserCard';
import UserList from './UserList';
import { getUsers } from '../../api';
import styles from '../Loader.module.css';

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
    const { page, filterInput } = this.state;
    if (prevState.page !== page) {
      this.load();
    }
  }

  render () {
    const { isFetching, isError, users } = this.state;

    return (
      <div>
        {isError && <div>Some ERROR happening</div>}
        {isFetching && <div className={styles.loader}>Loading...</div>}
        <UserList users={users} prev={this.prev} next={this.next} />
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
