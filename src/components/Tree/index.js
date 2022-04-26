import React, { useContext } from 'react';
import Parent from './Parent';
import { ThemeContext } from '../../contexts';
import style from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
// import { withTheme } from '../../HOCs';
const { THEMES } = CONSTANTS;

const Tree = props => {
  const [theme, setTheme] = useContext(ThemeContext);

  const nextTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  const classNames = cx(style.container, {
    [style.ligthTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });
  return (
    <div className={classNames}>
      Tree
      <button
        onClick={() => {
          setTheme(nextTheme);
        }}
      >
        Switch
      </button>
      <Parent />
    </div>
  );
};

// const TreeWithTheme = withTheme(Tree);

export default Tree;
