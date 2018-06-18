import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './Song.js'

class App extends Component {
  state = {
    filter: '',
    tempArtist: '',
    tempTitle: '',
    songs: JSON.parse(localStorage.getItem('Songs')) || [{title:'Touch the Sky', artist: 'Kanye West' },
    {title:'Mockingbird', artist: 'Eminem'},
    {title: 'Clayman', artist:  'In Flames'}, 
    {title: 'Save Me', artist: 'In Flames'}]
  }

  addSongTitle = (event) => {
    this.setState({
      tempTitle: event.target.value
    })
  }

  addSongArtist = (event) => {
    this.setState({
      tempArtist: event.target.value
    })
  }

  addSong = (event) => {
    event.preventDefault()
    this.setState({
      songs: [...this.state.songs, {title: this.state.tempTitle, artist: this.state.tempArtist}]
    }, () => {
      localStorage.setItem('Songs', JSON.stringify(this.state.songs));
    } )

  }
  
  filter = (event) => {
    this.setState({
      filter: event.target.value.toLowerCase()
    })
  }

  render() {
    const filterSongs = this.state.songs.filter(song => song.title.toLowerCase().includes(this.state.filter))  
    
    return (
      <div className="App">
        <div id="white-border">
          <h1>Spotify</h1>
          <form>
            <label htmlFor="search"> Song Search: </label>
            <input id="search" onChange={ this.filter } /> 
          </form>
          <br/>
          <form onSubmit={this.addSong}>
            <label htmlFor="title">Add Song: </label>
            <input id="title" onChange={this.addSongTitle}/>
            <label htmlFor="artist"> Artist: </label>
            <input id="artist" onChange={this.addSongArtist}/>
            <input type="submit" />
          </form>

        </div>
        <br/>
        {filterSongs.map( song => <Song artist={song.artist} title={song.title} /> )}
        <footer id="white-border">
          <p>Total Song Count: {filterSongs.length}</p>
        </footer>        
       </div>
    );
  }
}

export default App;
