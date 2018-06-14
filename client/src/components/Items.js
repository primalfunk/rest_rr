import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Items extends Component {

  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => this.setState({ items: res.data }))
  }

  edit() {
    alert( "The edit buttons aren't working yet." )
  }

  delete() {
    alert( "The delete buttons aren't working yet.")
  }

  render() {
    const { items } = this.state
    return (
      <div className="items">
        {items.map( i =>
          <div key={i.id} className="item">
            <Link to={`/items/${i.id}`}>{i.name} | {i.description} | ${i.price}</Link>
            <button onClick={ this.edit }>Edit</button>
            <button onClick={ this.delete }>Delete</button>
          </div>)}
      </div>
    )
  }
}

export default Items
