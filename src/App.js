import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My First React App
        </p>
        <a
          className="App-link"
          href="https://github.com/chrisobo98"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Github
        </a>
      </header>
    </div>
  );
}

export default App;
