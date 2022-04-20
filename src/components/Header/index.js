import React, { Component } from 'react';
import { UserContext } from '../../contexts';

class Header extends Component {
  render () {
    const [user, userLogOut] = this.context;
    return (
      <div
        style={{
          width: '100%',
          boxSizing: 'border-box',
          border: '2px solid orange',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <img
          src={user.imageSrc}
          style={{ width: '50px', borderRadius: '50%' }}
        />
        {user.firstName}
        <button onClick={userLogOut}>LogOut</button>
      </div>
    );
  }
}

Header.contextType = UserContext;

export default Header;

/*


    <UserContext.Consumer>
        {(user)=>{
            return <div style={{ width: '100%', border: '2px solid orange' }}>
                <img src={user.imageSrc} style={{width: '50px', borderRadius: '50%'}} />
            </div>
        }}
    </UserContext.Consumer>

    */
