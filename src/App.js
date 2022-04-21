import './App.css';
import React, { Component } from 'react';
import TreeWithTheme from './components/Tree';
import { UserContext, ThemeContext } from './contexts';
import Header from './components/Header';
import CONSTANTS from './constants';
import SignUpForm from './components/SignUpForm';
const { THEMES } = CONSTANTS;
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
      theme: THEMES.DARK,
    };
  }

  logOut = () => {
    this.setState({
      user: {},
    });
  };

  setTheme = theme => {
    this.setState({ theme });
  };

  render () {
    const { theme, user } = this.state;
    return (
      <>
        <SignUpForm />
        {/* <ThemeContext.Provider value={[theme, this.setTheme]}>
          <UserContext.Provider value={[user, this.logOut]}>
            <Header />
            <TreeWithTheme />
          </UserContext.Provider>
        </ThemeContext.Provider> */}
      </>
    );
  }
}

export default App;
