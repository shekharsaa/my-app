import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Education/>
        <Skill/> 
        <Experience/>
      </div>
    );
  }
}

export default App;
