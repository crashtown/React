import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      seconds: 0,
      user: props.username,
      logonButtonText: 'Log In'
    }
  }
  
  login = () => {
    this.setState({ user: "admin", logonButtonText: 'Log Out' })
  }

  render() {
    return (
      <div className="App">
      <p className="App-intro">
      You have been here for { this.state.seconds } seconds.
      </p>  
      <p>Hello, { this.state.user }!</p>
      <button id="logon" onClick={ this.login }>{ this.state.logonButtonText }</button>      
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
    this.setState({seconds: this.state.seconds + 1 })
    }, 1000)
  }
}

export default App;
