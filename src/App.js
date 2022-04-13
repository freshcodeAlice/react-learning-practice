import './App.css';
import React from 'react';
import ImageWrapper from './components/ImageWrapper';


function App(props) {
  return (
    <ImageWrapper
      width="300px"
      className="new-class"
      height="150px"
      title="UkrPost Mark"
      tabIndex="1"
      onClick={()=>{alert('Click!')}}
      >
      <img 
      width="100%"
      alt='Where we go?'
      src="https://www.volynpost.com/img/modules/news/5/e7/78709318b05b9c2fb9660ea269922e75/rss-photo.jpg" 
      />
    </ImageWrapper>
      );
}

export default App;
