import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './project.js'
import NavBar from './navbar.js'

class App extends Component {
  render() {
      return (
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to my Projects!</h1>
           <NavBar />
           <Project title="My Awesome Project"/>
           <Project title="My Project"/>
           <Project title="3 times!"/>
           <Project title="Hello Bob!"/>
       </div>
       )
    
}
}

export default App;
