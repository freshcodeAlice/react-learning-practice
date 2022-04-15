import React from 'react';
import styles from './UserCard.module.css';
import 'animate.css';
import cx from 'classnames';

const UserCard = props => {
  const cn = cx(styles['user-card'], 'animate__animated', 'animate__fadeIn');
  return <li className={cn}>{props.children}</li>;
};

export default UserCard;
