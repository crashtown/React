import React, { Component } from 'react';
import Profile from './Profile.js'
import './App.css';

class App extends Component {
    state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    picUrl: '',
    loading: false
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div>
          <p>
            <img src="https://static1.squarespace.com/static/563bb893e4b0982e7bb3bcd3/t/5890edf1b8a79b243d8d65a8/1499886763763/winner+wiener?format=300w" alt="loading" />
          </p>
          <p>
          <strong>LOADING.....</strong>
          </p>
        </div>
      )
    } else {
    return (
      <div className="App">
      <Profile {...this.state} />
      <button onClick={this.fetchAPI.bind(this)}>Next Person</button>
      </div>
    )};
  }
  
  componentDidMount() {
    this.fetchAPI()
  }

  fetchAPI() {
     this.setState({loading : true})
     const url = `https://randomuser.me/api`
     fetch(url).then(
       response => response.json()
    ).then ((result) => {
      const profile = result.results[0]
        this.setState({
          firstName: profile.name.first,
          lastName: profile.name.last,
          email: profile.email,
          phoneNumber: profile.phone,
          picUrl: profile.picture.large,
          loading : false
        })
    })
  }
}


export default App;
