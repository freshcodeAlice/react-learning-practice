import React from 'react';
import Parent from './Parent';
import { ThemeContext } from '../../contexts';
import style from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

const Tree = props => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => {
        const classNames = cx(style.container, {
          [style.ligthTheme]: theme === THEMES.LIGHT,
          [style.darkTheme]: theme === THEMES.DARK,
        });
        return (
          <div className={classNames}>
            Tree
            <Parent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Tree;
