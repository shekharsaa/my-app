import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Education/>
      </div>
    );
  }
}

export default App;
