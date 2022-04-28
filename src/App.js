import './App.css';
import React, { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext, AppContext } from './contexts';
import { CONSTANTS, ACTIONS } from './constants';
import Loader from './components/Loader';
import Clicker from './components/Clicker';
import SignUpPage from './components/SignUp';
import ChatPage from './pages/ChatPage';
import { reducer } from './reducer';
import NavBar from './components/NavBar';

const { THEMES } = CONSTANTS;

const App = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const [state, dispatch] = useReducer(reducer, {
    isMenuOpen: false,
  });

  const openMenu = () => {
    dispatch({
      type: ACTIONS.MENU_OPEN,
    });
  };

  const closeMenu = () => {
    dispatch({
      type: ACTIONS.MENU_CLOSE,
    });
  };

  return (
    <AppContext.Provider value={{ state, openMenu, closeMenu }}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <BrowserRouter>
          <NavBar />
          <button onClick={openMenu}>Open menu</button>
          <nav>
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
          <Routes>
            <Route path='/loader' element={<Loader />} />
            <Route path='/clicker' element={<Clicker />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/chat' element={<ChatPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
