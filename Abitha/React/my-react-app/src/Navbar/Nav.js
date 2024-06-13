import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


export default class Nav extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <div className='navbar'>
        <Link to='home'><li>Home</li></Link>
        <Link to='product'><li>Product</li></Link>
        <Link to='contact'><li>Contact</li></Link>
        </div>
      </div>
    )
  }
}


