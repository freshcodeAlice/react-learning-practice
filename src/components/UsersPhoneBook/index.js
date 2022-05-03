import React, { useReducer, useEffect } from 'react';
import { getUsers } from '../../api';
import CurrentUserPhone from './CurrentUserPhone';
import styles from './UserPhoneBook.module.css';
import { reducer } from './reducer.js';
import UsersList from './UsersList';

const UsersPhoneBook = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: [],
    currentUser: null,
  });

  useEffect(() => {
    getUsers().then(data => {
      dispatch({
        type: 'USERS_DATA_SUCCESS_LOAD',
        data,
      });
    });
  }, []);

  return (
    <section classnames={styles.container}>
      <div classnames={styles['phone-book']}>
        <UsersList users={state.users} />
      </div>
      <CurrentUserPhone />
    </section>
  );
};

export default UsersPhoneBook;
