import React from 'react';

const comparator = (a, b) => {
  if (a.name.last > b.name.last) {
    return 1;
  }
  if (a.name.last < b.name.last) {
    return -1;
  } else {
    return 0;
  }
};

const UsersList = props => {
  const usersEntries = [...props.users.entries()];

  const layout = usersEntries.map(([letter, users], index) => {
    users.sort(comparator);
    return (
      <div key={index}>
        <h1 key={letter}>{letter}</h1>
        <ul>
          {users.map(user => (
            <li key={user.login.uuid}>
              {user.name.last}, {user.name.first}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return <>{layout}</>;
};

export default UsersList;
