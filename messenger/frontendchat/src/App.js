import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
	<header>  a very powerful chat  </header>
        <Chat />
      </div>
    )
  }
}

export default App
