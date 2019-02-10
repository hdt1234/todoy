import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

const {app} = window.require('electron').remote;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
