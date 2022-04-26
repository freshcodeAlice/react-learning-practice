import './App.css';
import React, { useState } from 'react';
import { ThemeContext } from './contexts';
import Home from './components/Home';
import Tree from './components/Tree';
import CONSTANTS from './constants';

const { THEMES } = CONSTANTS;

const App = () => {
  const [theme, setTheme] = useState(THEMES.DARK);
  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Tree />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
