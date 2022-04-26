import './App.css';
import React, { useState } from 'react';
import { UserContext } from './contexts';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Snow',
  });
  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Home />
      </UserContext.Provider>
    </div>
  );
};

export default App;
