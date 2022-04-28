import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from './contexts';
import Home from './components/Home';
import Tree from './components/Tree';
import CONSTANTS from './constants';
import Loader from './components/Loader';
import Clicker from './components/Clicker';
import SignUpPage from './components/SignUp';
import ChatPage from './pages/ChatPage';

const { THEMES } = CONSTANTS;

const App = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
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
          <Route path='/' element={<Home />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/clicker' element={<Clicker />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/chat' element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
