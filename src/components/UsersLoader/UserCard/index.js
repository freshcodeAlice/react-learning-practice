import React from 'react';

const UserCard = props => {
  const { user } = props;
  return <li>{JSON.stringify(user, null, 4)}</li>;
};

export default UserCard;
