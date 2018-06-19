import React, { Component } from 'react';
import RepoList from './repoList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoList user="nicdevlin" />
      </div>
    );
  }
}

export default App;
