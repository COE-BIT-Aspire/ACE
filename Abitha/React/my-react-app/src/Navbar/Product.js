import React, { Component } from 'react'
import axios from 'axios'

export default class Product extends Component {
  constructor(props){
    super(props)

    this.state={
      product:[]
    }
  }
  getAllProduct(){
    axios.get("http://localhost:3000/product")
    .then((response)=> { void
    this.setState({
      product:response.data
    })
  }).catch((error)=>{
      console.log("Unable to fetch the data");
    })
  }
  render() {
    const products=this.state.product.map
    ((products)=>{
      return(<tr>
        <td>{products.id}</td>
        <td>{products.title}</td>
        <td>{products.price}</td>
      </tr>)
    })
    return (
      <div>
        <h2>Products</h2>
        <table>
          <thead>
            <td>Product ID</td>
            <td>Product Name</td>
            <td>Product Price</td>
          </thead>
          <tbody>
            {products}
          </tbody>
        </table>
        <button onClick={()=>this.getAllProduct()}>View Products</button>
      </div>
    )
  }
}



