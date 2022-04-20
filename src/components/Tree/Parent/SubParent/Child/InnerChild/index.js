import React from 'react';
import { UserContext } from '../../../../../../contexts';

const InnerChild = props => {
  return (
    <UserContext.Consumer>
      {contextValue => {
        const { firstName, lastName } = contextValue;
        return (
          <div style={{ border: '3px solid black', padding: '25px' }}>
            <p> InnerChild </p>
            {firstName} {lastName}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default InnerChild;
