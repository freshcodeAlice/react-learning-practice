import React from 'react';
import { UserContext } from '../../../../../../contexts';

const InnerChild = props => {
  // return (
  //   <UserContext.Consumer>
  //     {contextValue => {
  //       const [user, userLogOut] = contextValue;
  return (
    <div
      style={{
        border: '3px solid black',
        padding: '25px',
        border: '2px solid inherit',
      }}
    >
      <p> InnerChild </p>
      {/* {user.firstName} {user.lastName} */}
    </div>
  );
  //     }}
  //   </UserContext.Consumer>
  // );
};

export default InnerChild;
