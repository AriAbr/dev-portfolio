import React from 'react';
import logo from './logo.svg';
import headshot from './logo.svg';
import './css/App.css';
import './css/header.css';

function App() {
  return (
    <div className="App">
      <div className="main-header">
        <img src="/headshot.jpg" alt="headshot" id="headshot" />
        <div id="main-header-message">
          <div id="main-header-welcome">
            Hi, I'm Ari Abramowitz.
          </div>
          <div id="main-header-developer">
            I'm a fullstack web developer.
          </div>
          <div id="main-header-please-scroll">
            Scroll down to see my projects, resume, and contact info.
          </div>
        </div>
      </div>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
