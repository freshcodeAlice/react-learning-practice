import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from '../../contexts';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import cx from 'classnames';

// use Context and implement open-close function

const NavBar = () => {
  const navRef = useRef(null);

  const {
    state: { isMenuOpen },
    openMenu,
    closeMenu,
  } = useContext(AppContext);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!navRef.current.contains(target) && isMenuOpen) {
        console.log('close');
        closeMenu();
      }
    };
    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [isMenuOpen]);

  const classnames = cx(styles.container, {
    [styles.openMenu]: isMenuOpen,
  });

  return (
    <nav className={classnames} ref={navRef}>
      <button onClick={closeMenu}>X</button>
      <ul>
        <li>
          <Link to='/loader'>Loader</Link>
        </li>
        <li>
          <Link to='/clicker'>Clicker</Link>
        </li>
        <li>
          <Link to='/signup'>SignUpPage</Link>
        </li>
        <li>
          <Link to='/chat'>ChatPage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
