import './App.css';
import React, { Component } from 'react';
import Tree from './components/Tree';
import { UserContext } from './contexts';
import Header from './components/Header';

/*

1. Создаем контекст
2. Предоставляем данные (создаем Provider)
3. Получаем данные, подключившись к контексту

*/

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        imageSrc:
          'https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png',
      },
    };
  }

  logOut = () => {
    this.setState({
      user: {},
    });
  };

  render () {
    return (
      <>
        <UserContext.Provider value={[this.state.user, this.logOut]}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
