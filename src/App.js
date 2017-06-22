import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassList from './views/classlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassList />
      </div>
    );
  }
}

export default App;
