import React, { Component } from 'react';
import { UserContext, ThemeContext } from '../../contexts';
import style from './Header.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import Switch from '@mui/material/Switch';
import { withTheme, withUser } from '../../HOCs';

const { THEMES } = CONSTANTS;

class Header extends Component {
  render () {
    const { theme, setTheme, user, userLogOut } = this.props;
    const classNames = cx(style.container, {
      [style.ligthTheme]: theme === THEMES.LIGHT,
      [style.darkTheme]: theme === THEMES.DARK,
    });
    const nextTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;

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
  }
}

const HeaderWithTheme = withTheme(Header);
const HeaderWithUserWithTheme = withUser(HeaderWithTheme);

export default HeaderWithUserWithTheme;
