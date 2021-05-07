import React from 'react';
import { Button } from '@material-ui/core/';

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello React from Docker Node.js</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Button variant="contained" color="primary">
        test
      </Button>
    </header>
  </div>
);

export default App;
