import './App.css';
import React, { Component } from 'react';
import CounterPage from './pages/CounterPage';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App (props) {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts</Link>
        </li>
        <li>
          <Link to='/counter'>Counter</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Home = props => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

const Contacts = () => {
  return <div>Contacts</div>;
};

const PageNotFound = () => {
  return <div>404!!! Page not Found!!!</div>;
};
