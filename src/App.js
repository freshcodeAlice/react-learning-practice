import './App.css';
import React, { useState } from 'react';
import { ThemeContext } from './contexts';
import Home from './components/Home';
import Tree from './components/Tree';
import CONSTANTS from './constants';
import Loader from './components/Loader';

const { THEMES } = CONSTANTS;

const App = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Loader />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
