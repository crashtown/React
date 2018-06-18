import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './project.js'
import NavBar from './navbar.js'

class App extends Component {
  render() {

    const projectInfo = [{name: "My Awesome Project", text: "This is such an awesome project."},{name: "My Project", text: "This is my project"}, {name: "3 times!", text: "I've done this 3 times."},{name: "This is Bob's story.", text:"Hello Bob"}]
    const projectTitleList = projectInfo.map(function(project){
      return (
        <Project title={project.name} text={project.text}/>
      )
    })

      return (
        
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to my Projects!</h1>
           <NavBar />
           <ul>{ projectTitleList }</ul>
       </div>
       )
}
}

export default App;
