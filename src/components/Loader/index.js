import React, { useState, useEffect } from 'react';
import { useData } from '../../hooks/useData';
import { getUsers } from '../../api';

const Loader = () => {
  const { data: users, isFetching, error } = useData(getUsers);

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div> Some Error happening </div>}
      <ol>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ol>
    </>
  );
};

export default Loader;
