// json-server --watch db.json

import React, { Component } from 'react'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Nav from './Nav'
import HomeMain from './HomeMain'
import Product from './Product'
import Contact from './Contact'

export default class NavRoute extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path='home' element={<HomeMain/>}></Route>
          <Route path='product' element={<Product/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
