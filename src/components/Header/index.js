import React, { Component } from 'react';
import { UserContext, ThemeContext } from '../../contexts';
import style from './Header.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import Switch from '@mui/material/Switch';
const { THEMES } = CONSTANTS;

class Header extends Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          const classNames = cx(style.container, {
            [style.ligthTheme]: theme === THEMES.LIGHT,
            [style.darkTheme]: theme === THEMES.DARK,
          });
          return (
            <UserContext.Consumer>
              {([user, userLogOut]) => {
                const nextTheme =
                  theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
                return (
                  <div className={classNames}>
                    <Switch
                      checked={theme === THEMES.DARK}
                      onChange={() => {
                        setTheme(nextTheme);
                      }}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <img
                      src={user.imageSrc}
                      style={{ width: '50px', borderRadius: '50%' }}
                    />
                    {user.firstName}
                    <button onClick={userLogOut}>LogOut</button>
                  </div>
                );
              }}
            </UserContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
