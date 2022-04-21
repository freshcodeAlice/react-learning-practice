import React, { Component } from 'react';
import { UserContext, ThemeContext } from '../contexts';

export const withTheme = WrappedComponent => {
  return function (props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => (
          <WrappedComponent theme={theme} setTheme={setTheme} {...props} />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export const withUser = WrappedComponent => {
  return class WrappedComponentWithUser extends React.Component {
    constructor (props) {
      super(props);
    }
    render () {
      return (
        <UserContext.Consumer>
          {([user, userLogOut]) => (
            <WrappedComponent
              user={user}
              userLogOut={userLogOut}
              {...this.props}
            />
          )}
        </UserContext.Consumer>
      );
    }
  };
};
