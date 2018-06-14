import React, { Component } from 'react'
import Items from './components/Items'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>List of Available Items</h1>
        <Items />
      </div>
    )
  }
}

export default App
